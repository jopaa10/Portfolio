const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

require('dotenv').config();

const contactToOwner = require('./template/contactToOwner');
const contactToUser = require('./template/contactToUser');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    const msgToOwner = {
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Portfolio Contact: ${subject}`,
      html: contactToOwner({ name, email, subject, message })
    };

    const msgToUser = {
      to: email,
      from: process.env.EMAIL_USER,
      subject: 'Thanks for reaching out!',
      html: contactToUser({ name, message })
    };

    await sgMail.send(msgToOwner);
    await sgMail.send(msgToUser);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('SendGrid error:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
