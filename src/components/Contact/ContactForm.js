import { useEffect, useRef, useState } from 'react';
import Button from '../common/Button';
import { Icon } from '../common/Icon';
import ConnectDirectly from './ConnectDirectly';

const ContactForm = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [status, setStatus] = useState({
    message: '',
    type: '',
    icon: '',
    title: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const flipTimeoutRef = useRef(null);

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (flipTimeoutRef.current) {
      clearTimeout(flipTimeoutRef.current);
    }

    if (!isValidEmail(formData.email)) {
      setStatus({
        message: 'Please enter a valid email address.',
        type: 'error',
        icon: '❌',
        title: 'Invalid Email'
      });
      setIsFlipped(true);
      flipTimeoutRef.current = setTimeout(() => setIsFlipped(false), 4000);
      return;
    }

    setStatus({ message: 'Sending your message...', type: 'info', icon: '⏳', title: 'Sending' });
    setIsFlipped(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          message: 'Message sent successfully!',
          type: 'success',
          icon: '✅',
          title: 'Success'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          message: 'Failed to send message. Please try again.',
          type: 'error',
          icon: '❌',
          title: 'Error'
        });
      }
    } catch (error) {
      console.error(error);
      setStatus({
        message: 'An error occured. Please try again later.',
        type: 'error',
        icon: '⚠️',
        title: 'Error'
      });
    }

    flipTimeoutRef.current = setTimeout(() => setIsFlipped(false), 4000);
  };

  const isFormComplete =
    formData.name.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.subject.trim() !== '' &&
    formData.message.trim() !== '';

  useEffect(() => {
    return () => {
      if (flipTimeoutRef.current) {
        clearTimeout(flipTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="contact__form" data-aos="fade-left" aria-labelledby="contact-form-title">
      <div className={`flip-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        <div className="flip-card-front glass-card">
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
                  aria-required="true"
                  required
                />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  required
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
                aria-required="true"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                aria-required="true"
                required
              />
            </div>

            <Button text={'send message'} type="submit" disabled={!isFormComplete} />
          </form>
          <ConnectDirectly />
        </div>
        <div className={`flip-card-back glass-card status-${status.type}`}>
          <div className="info">
            <Icon icon={status.icon} />
            <h3 id="contact-form-title">{status.title}</h3>
            <p>{`Thanks for reaching out — I’ll get back to you as soon as possible.`}</p>
          </div>
          <div className="status-content">
            <h3>{status.message}</h3>
            {status.type === 'loading' && <div className="spinner"></div>}
          </div>
          <Button
            text={'Back to email form'}
            type="button"
            disabled={status.type === 'info'}
            onClick={() => setIsFlipped(false)}
          />
          <ConnectDirectly />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
