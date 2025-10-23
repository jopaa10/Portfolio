function contactToOwner({ name, email, subject, message }) {
  const formattedMessage = message.replace(/\n/g, '<br/>');

  return `<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color:#2c3e50;">📩 New Contact from Your Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="padding: 10px; background:#f4f6f8; border-radius: 5px;">
        ${formattedMessage}
      </div>
      <hr style="margin:20px 0;"/>
      <p style="font-size:12px; color:#888;">This message was sent from your portfolio contact form.</p>
    </div>
  `;
}

module.exports = contactToOwner;
