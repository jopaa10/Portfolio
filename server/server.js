const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const contactToOwner = require('./template/contactToOwner');
const contactToUser = require('./template/contactToUser');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Brevo API URL
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  try {
    // Email to portfolio owner
    await axios.post(
      BREVO_API_URL,
      {
        sender: { name, email }, // visitor as sender
        to: [{ email: process.env.EMAIL_USER }],
        subject: `New Portfolio Contact: ${subject}`,
        htmlContent: contactToOwner({ name, email, subject, message }),
        replyTo: { email } // visitor can reply directly
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    // Confirmation email to visitor
    await axios.post(
      BREVO_API_URL,
      {
        sender: { name: 'Portfolio', email: process.env.EMAIL_USER },
        to: [{ email }],
        subject: 'Thanks for reaching out!',
        htmlContent: contactToUser({ name, message })
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Brevo error:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
