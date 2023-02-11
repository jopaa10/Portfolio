import { useCallback, useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context/context';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const homeRef = useRef();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    const position = homeRef.current.offsetHeight + homeRef.current.offsetTop;
    dispatch({ type: 'ADD_HOME_POSITION', payload: position });
  };

  const options = {
    fps_limit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: { enable: true, mode: 'push' },
        onHover: { enable: true, mode: 'repulse' },
        resize: true
      },
      modes: { push: { particles_nb: 4 }, repulse: { distance: 200, duration: 0.4 } }
    },
    particles: {
      color: { value: '#ffffff' },
      links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.4, width: 1 },
      move: {
        bounce: false,
        direction: 'none',
        enable: true,
        outMode: 'out',
        random: false,
        speed: 2,
        straight: false
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
      size: { random: true, value: 5 }
    },
    detectRetina: true
  };

  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <section className="home" id="home" ref={homeRef}>
      <div className="typewriter">
        <p className="intro">Hello</p>
        <p className="name">
          {`I'm`}
          <span> Josipa</span> Znaor
        </p>
        <h1>
          <p>{`I'm`}</p>
          <Typewriter
            loop
            words={['Web Developer', 'Photography lover']}
            cursor
            cursorBlinking={false}
            typeSpeed={40}
            cursorColor={'#cb532e'}
          />
        </h1>
        <div className="social-icons">
          <a href="#">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>

      <Particles init={particlesInit} loaded={particlesLoaded} options={options} />
    </section>
  );
};

export default Home;
