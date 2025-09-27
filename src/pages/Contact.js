import '../styles/pages/_contact-section.scss';
import SectionHeadLine from '../components/common/SectionHeadline';
import Button from '../components/common/Button';
import { Icon } from '../components/common/Icon';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionHeadLine
        headline={'Get In Touch'}
        subtext={`Let's collaborate on your next project`}
      />
      <div className="contact__form">
        <div className="glass-card">
          <div className="info">
            {/* <div className="icon">💬</div> */}
            <Icon icon={'💬'} />
            <h3>Ready to Start Something Amazing?</h3>
            <p>{`Whether you have a project in mind, want to discuss collaboration opportunities, or just want to say hello, I'd love to hear from you!`}</p>
          </div>
          <form action="">
            <div className="form-group">
              <div className="form-row">
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="Your name" required />
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="Your email" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject"></label>
              <input type="text" name="subject" id="subject" placeholder="Your subject" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell me about your project or idea..." required />
            </div>

            <Button text={'send message'} />
          </form>
          <div className="connect-directly">
            <p>Or connect with me directly</p>
            <div className="contact-alternatives">
              <a href="mailto:josipa.znaor99@gmail.com" className="contact-link">
                <span>📧</span>
                <span>josipa.znaor99@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/josipa-znaor-105692222/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link">
                <span>🔗</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
