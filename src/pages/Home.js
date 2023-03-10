import { useCallback, useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context/context';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { Typewriter } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faFacebookF,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import SectionWrapper from '../components/SectionWrapper';
import '../styles/pages/_home-section.scss';

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
      <SectionWrapper>
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
              words={['a Web Developer', 'a Photography lover']}
              cursor
              cursorBlinking={false}
              typeSpeed={40}
              cursorColor={'#cb532e'}
            />
          </h1>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/josipa-znaor-105692222"
              target={'_blank'}
              rel={'noreferrer'}
              aria-label="Social media links">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://www.instagram.com/timeless.treasur3s"
              target={'_blank'}
              rel={'noreferrer'}
              aria-label="Social media links">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://github.com/jopaa10"
              target={'_blank'}
              rel={'noreferrer'}
              aria-label="Social media links">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </SectionWrapper>
      <Particles init={particlesInit} loaded={particlesLoaded} options={options} />
    </section>
  );
};

export default Home;
