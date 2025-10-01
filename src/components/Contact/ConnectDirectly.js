const ConnectDirectly = () => {
  return (
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
  );
};

export default ConnectDirectly;
