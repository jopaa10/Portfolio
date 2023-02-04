import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const { state } = useGlobalContext();

  console.log(state, window.scrollY);

  const navMenu = [
    {
      id: 1,
      title: 'home'
    },
    {
      id: 2,
      title: 'about'
    },
    {
      id: 3,
      title: 'resume'
    },
    {
      id: 4,
      title: 'portfolio'
    },
    {
      id: 5,
      title: 'skills'
    }
  ];

  const handleShowNavItems = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleIsActive = (id) => {
    const navId = navMenu.find((item) => item.id === id);

    if (navId.id === id) {
      setActiveItem(navId.title);
    }
  };

  const changeNavColorOnScroll = () => {
    if (state.homePosition >= window.scrollY) {
      setActiveItem('home');
    } else if (state.aboutPosition >= window.scrollY) {
      setActiveItem('about');
    } else if (state.resumePosition >= window.scrollY) {
      setActiveItem('resume');
    } else if (state.portfolioPosition >= window.scrollY) {
      setActiveItem('portfolio');
    } else if (state.skillsPosition >= window.scrollY) {
      setActiveItem('skills');
    }
  };

  useEffect(() => {
    changeNavColorOnScroll();
    window.addEventListener('scroll', changeNavColorOnScroll);
  }, [state]);

  return (
    <header className="navbar">
      <section className="navbar-resp">
        <div className="navbar-logo">
          <p>Josipa</p>
        </div>
        <div className="toggle-menu" onClick={() => handleShowNavItems()}>
          <span className="toggle-menu__icon"></span>
          <span className="toggle-menu__icon"></span>
          <span className="toggle-menu__icon"></span>
        </div>
      </section>

      <nav id="toggle">
        <ul className={!toggleMenu ? 'navbar-items' : 'navbar-items navbar-items--resp'}>
          {navMenu.map((item) => (
            <HashLink
              key={item.id}
              to={`#${item.title}`}
              className={
                activeItem === item.title ? 'navbar-items__link--active' : 'navbar-items__link'
              }
              onClick={() => handleIsActive(item.id)}>
              {item.title}
            </HashLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
