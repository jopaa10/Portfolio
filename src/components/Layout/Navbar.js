import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import NavbarData from '../../utils/navbarData/NavbarData';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const handleIsActive = (id) => {
    if (NavbarData.includes(id)) {
      setActiveItem(`${NavbarData[id].title}`);
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
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <button
        className={`navbar-toggle ${menuOpen ? 'navbar-toggle--open' : ''}`}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
        <p>{'JZ'}</p>
      </button>

      <div className={`navbar-overlay ${menuOpen ? 'navbar-overlay--active' : ''}`} />

      <nav className={`navbar ${menuOpen || closing ? 'navbar--open' : ''}`}>
        <span className="logo">JZ</span>
        <ul className={`navbar-items ${menuOpen || closing ? 'navbar-items--open' : ''}`}>
          {NavbarData.map((item) => (
            <li key={item.id} className="navbar-item">
              <Link
                to={item.title}
                spy
                smooth
                offset={-50}
                duration={500}
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
