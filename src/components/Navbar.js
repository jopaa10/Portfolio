import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useGlobalContext } from '../context/context';
import SectionWrapper from './SectionWrapper';

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
    const navId = navMenu.find((item) => item.id === id);

    if (navMenu.includes(id)) {
      setActiveItem(`${navMenu[id].title}`);
    }
  };

  //   const changeNavColorOnScroll = () => {
  //     if (state.homePosition > window.scrollY && window.scrollY < state.aboutPosition) {
  //       setActiveItem('home');
  //     } else if (state.aboutPosition > window.scrollY && window.scrollY < state.resumePosition) {
  //       setActiveItem('about');
  //     } else if (state.resumePosition > window.scrollY && window.scrollY < state.portfolioPosition) {
  //       setActiveItem('resume');
  //     } else if (state.portfolioPosition > window.scrollY && window.scrollY < state.skillsPosition) {
  //       setActiveItem('portfolio');
  //     } else if (state.skillsPosition > window.scrollY) {
  //       setActiveItem('skills');
  //     }
  //   };

  //   useEffect(() => {
  //     changeNavColorOnScroll();
  //     window.addEventListener('scroll', changeNavColorOnScroll);

  //     return () => {
  //       window.removeEventListener('scroll', changeNavColorOnScroll);
  //     };
  //   }, []);

  return (
    <header className="navbar">
      <SectionWrapper>
        <div className="navbar-section">
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
