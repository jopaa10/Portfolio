import '../styles/pages/_contact-section.scss';
import SectionHeadLine from '../components/common/SectionHeadline';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <SectionHeadLine
        headline={'Get In Touch'}
        subtext={`Let's collaborate on your next project`}
      />
      <ContactForm />
    </section>
  );
};

export default Contact;
