import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import NavbarData from '../../utils/navbarData/NavbarData';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const handleIsActive = (id) => {
    if (NavbarData.find((item) => item.id === id)) {
      setActiveItem(id);
    }
    toggleMenu();
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 0);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setClosing(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header>
      {/* Mobile/Tablet menu toggle */}
      <button
        className={`navbar-toggle ${menuOpen ? 'navbar-toggle--open' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation">
        <span aria-hidden="true">☰</span>
      </button>

      {/* Background overlay */}
      <div
        className={`navbar-overlay ${menuOpen ? 'navbar-overlay--active' : ''}`}
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className={`navbar ${menuOpen || closing ? 'navbar--open' : ''}`} aria-label="Primary">
        {/* Logo - gives accessible site name */}
        <a href="/" className="logo">
          <span aria-hidden="true">JZ</span>
          <span className="sr-only">Home</span>
        </a>

        <ul
          id="primary-navigation"
          className={`navbar-items ${menuOpen || closing ? 'navbar-items--open' : ''}`}>
          {NavbarData.map((item) => (
            <li key={item.id} className="navbar-item">
              <Link
                to={item.title}
                onClick={() => handleIsActive(item.id)}
                aria-current={activeItem === item.id ? 'page' : undefined}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
