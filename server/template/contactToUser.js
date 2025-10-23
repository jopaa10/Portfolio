function contactToUser({ name, message }) {
  const formattedMessage = message.replace(/\n/g, '<br/>');

  return `<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color:#2c3e50;">Hi ${name},</h2>
      <p>Thank you for contacting me through my portfolio. I’ve received your message and will get back to you as soon as possible.</p>
      <p>Here’s a copy of your message:</p>
      <div style="padding: 10px; background:#f4f6f8; border-radius: 5px;">
        ${formattedMessage}
      </div>
      <p style="margin-top:20px;">Best regards,<br/><strong>Josipa Znaor</strong><br/>Fullstack Developer</p>
      <hr style="margin:20px 0;"/>
      <p style="font-size:12px; color:#888;">Sent from Josipa’s Portfolio Website</p>
    </div>
  `;
}

module.exports = contactToUser;
