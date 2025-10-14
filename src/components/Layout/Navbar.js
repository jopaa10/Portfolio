import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import NavbarData from '../../utils/navbarData/NavbarData';
import '../../styles/common/navbar.scss';
import { watchFontSize } from '../../utils/helpers/checkFontSize';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [forceMobileView, setForceMobileView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const threshold = 28;

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 300); // match your CSS transition
    } else {
      setMenuOpen(true);
    }
  };

  const handleIsActive = (id) => {
    toggleMenu();
  };

  function handleKeyDown(e, id) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleIsActive(id);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileView(width <= 1024); // tablet breakpoint
      if (width > 1024) {
        setMenuOpen(false);
        setClosing(false);
      }
    };

    const cleanup = watchFontSize((isLarge) => setForceMobileView(isLarge), threshold);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showToggle = isMobileView || forceMobileView;

  return (
    <>
      {showToggle && (
        <button
          className={`navbar-toggle ${menuOpen ? 'navbar-toggle--open' : ''} ${
            forceMobileView ? 'force-visible' : ''
          }`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          <p>JZ</p>
        </button>
      )}

      <div
        className={`navbar-overlay ${menuOpen ? 'navbar-overlay--active' : ''} ${
          forceMobileView ? 'force-visible' : ''
        }`}
      />

      <nav
        className={`navbar ${menuOpen ? 'navbar--open' : ''} ${
          forceMobileView ? 'navbar--force-mobile' : ''
        }`}>
        <button
          onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
          className="logo">
          JZ
        </button>

        <ul
          className={`navbar-items ${menuOpen || closing ? 'navbar-items--open' : ''} ${
            forceMobileView ? 'navbar-items--force-mobile' : ''
          }`}>
          {NavbarData.map((item) => (
            <li key={item.id} className="navbar-item">
              <Link
                to={item.title}
                spy
                smooth
                role="link"
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                onClick={() => handleIsActive(item.id)}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
