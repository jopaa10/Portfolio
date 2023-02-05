import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const { state } = useGlobalContext();

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
    //const navId = navMenu.find((item) => item.id === id);

    if (navMenu.includes(id)) {
      setActiveItem(`${navMenu[id].title}`);
    }
  };

  const changeNavColorOnScroll = () => {
    if (state.homePosition > window.scrollY) {
      setActiveItem('home');
    } else if (state.aboutPosition > window.scrollY) {
      setActiveItem('about');
    } else if (state.resumePosition > window.scrollY) {
      setActiveItem('resume');
    } else if (state.portfolioPosition > window.scrollY) {
      setActiveItem('portfolio');
    } else {
      setActiveItem('skills');
    }
  };

  useEffect(() => {
    changeNavColorOnScroll();
    document.addEventListener('scroll', changeNavColorOnScroll);

    return () => {
      document.removeEventListener('scroll', changeNavColorOnScroll);
    };
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
            <li
              key={item.id}
              onClick={() => handleIsActive(item.id)}
              className={`navbar-items__link${activeItem === item.title ? '--active' : ''}`}>
              <a href={`#${item.title}`} data-scroll={`${item.title}`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
