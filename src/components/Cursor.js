import { useEffect, useState } from 'react';
import '../styles/components/_cursor.scss';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [linkHover, setLinkHover] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', mMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', mMove);
    };

    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };

    const addLinkEvents = () => {
      document.querySelectorAll('a').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });

      document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });

      document.querySelectorAll('img').forEach((el) => {
        el.addEventListener('mouseover', () => setLinkHover(true));
        el.addEventListener('mouseout', () => setLinkHover(false));
      });
    };

    addEventListeners();
    addLinkEvents();

    return () => removeEventListeners();
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: ` ${position.y}px`,
          display: linkHover ? 'none' : 'block'
        }}></div>
      <div
        className={`cursor ${linkHover ? 'cursor--clicked' : ''}`}
        style={{ left: `${position.x}px`, top: ` ${position.y}px` }}
      />
    </>
  );
};

export default Cursor;
