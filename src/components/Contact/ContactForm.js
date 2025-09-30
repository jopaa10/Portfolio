import { useState } from 'react';
import Button from '../common/Button';
import { Icon } from '../common/Icon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(''); // to show success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // clear form
      } else {
        setStatus('Failed to send message. Try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="contact__form" data-aos="fade-left" aria-labelledby="contact-form-title">
      <div className="glass-card">
        <div className="info">
          <Icon icon={'💬'} />
          <h3 id="contact-form-title">Ready to Start Something Amazing?</h3>
          <p>{`Whether you have a project in mind, want to discuss collaboration opportunities, or just want to say hello, I'd love to hear from you!`}</p>
        </div>
        <form action="" onSubmit={handleSubmit} aria-describedby="contact-form-instructions">
          <div className="form-group">
            <div className="form-row">
              <label htmlFor="name"></label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
              <label htmlFor="email"></label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject"></label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Your subject"
              value={formData.subject}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or idea..."
              value={formData.message}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <Button text={'send message'} type="submit" />
          {status && <p className="form-status">{status}</p>}
        </form>
        <div className="connect-directly">
          <p>Or connect with me directly</p>
          <div className="contact-alternatives">
            <a
              href="mailto:josipa.znaor99@gmail.com"
              className="contact-link"
              aria-label="Email Josipa Znaor"
            >
              <span aria-hidden="true">📧</span>
              <span>josipa.znaor99@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/josipa-znaor-105692222/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="contact-link"
            >
              <span>🔗</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
