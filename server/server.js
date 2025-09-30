const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());

app.use(cors({ origin: '*' })); // allow all origins
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log(req.body);

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      text: `From ${name} (${email})\n\n${message}`
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thanks for reaching out!',
      text: `Hi ${name},\n\nThanks for your message! I’ll get back to you soon.\n\n- Josipa`
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

app.get('/test-email', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Test Email',
      text: 'If you see this, Nodemailer + Gmail is working ✅'
    });
    res.send('Test email sent!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
