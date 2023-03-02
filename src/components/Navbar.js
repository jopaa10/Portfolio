import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useGlobalContext } from '../context/context';
import Hamburger from './Hamburger';
import SectionWrapper from './SectionWrapper';
import NavbarData from '../utils/navbarData/NavbarData';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const { state } = useGlobalContext();
  const [navbarClass, setNavbarClass] = useState('');
  const [sliding, setSliding] = useState(false);

  const handleShowNavItems = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleIsActive = (id) => {
    setToggleMenu(false);
    if (NavbarData.includes(id)) {
      setActiveItem(`${NavbarData[id].title}`);
    }
  };

  const changeNavbarPadding = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setSliding(true);
        setNavbarClass('navbar navbar__sliding');
      } else {
        setSliding(false);
      }
    });
  };

  useEffect(() => {
    changeNavbarPadding();
  }, []);

  return (
    <header className={!sliding ? 'navbar' : navbarClass}>
      <SectionWrapper>
        <div className="navbar-section">
          <section className="navbar-resp">
            <div className="navbar-logo">
              <p>Josipa</p>
            </div>
            <Hamburger
              handleShowNavItems={handleShowNavItems}
              toggleMenu={toggleMenu}
              setToogleMenu={setToggleMenu}
            />
          </section>

          <nav id="toggle">
            <ul className={!toggleMenu ? 'navbar-items' : 'navbar-items navbar-items--resp'}>
              {NavbarData.map((item) => (
                <li className="navbar-items__link" key={item.id}>
                  <Link
                    onClick={() => handleIsActive(item.id)}
                    activeClass="navbar-items__link--active"
                    to={`${item.title}`}
                    spy>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </SectionWrapper>
    </header>
  );
};

export default Navbar;
