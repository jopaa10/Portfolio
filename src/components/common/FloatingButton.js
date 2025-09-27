import '../../styles/components/_floating-btn.scss';

const FloatingButton = () => {
  return (
    <a
      href="https://portfolio-bg8r-dj16qopbl-jopaa10s-projects.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-btn"
      aria-label="Visit the old portfolio design">
      <span className="floating-btn__icon" role="img" aria-hidden="true">
        👁️
      </span>
      <span className="floating-btn__tooltip" aria-hidden="true">
        Previous look
      </span>
    </a>
  );
};

export default FloatingButton;
