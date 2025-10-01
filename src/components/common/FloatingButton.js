import { useState } from 'react';
import '../../styles/common/floating-btn.scss';
import { useEffect } from 'react';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleClick() {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      window.open(
        'https://portfolio-bg8r-dj16qopbl-jopaa10s-projects.vercel.app',
        '_blank',
        'noopener,noreferrer'
      );
    }
  }

  return (
    <button
      className={`floating-btn ${isMobile && isOpen ? 'tooltip-open' : ''}`}
      onClick={handleClick}
      aria-label="Visit the old portfolio design">
      <span className="floating-btn__icon" role="img" aria-hidden="true">
        👁️
      </span>
      {isOpen || isMobile ? (
        <a
          href="https://portfolio-bg8r-dj16qopbl-jopaa10s-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn__tooltip">
          Click for old design
        </a>
      ) : (
        <span className="floating-btn__tooltip" aria-hidden="true">
          Previous design
        </span>
      )}
    </button>
  );
};

export default FloatingButton;
