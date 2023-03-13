import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import SectionHeadLine from '../components/SectionHeadline';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_about-section.scss';
import SectionWrapper from '../components/SectionWrapper';
import cv_download from '../assets/doc/CV-Josipa_Znaor.pdf';
import ProfileImage from '../components/ProfileImage';

const About = () => {
  const aboutRef = useRef();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    const position = aboutRef.current.offsetHeight + aboutRef.current.offsetTop;
    dispatch({ type: 'ADD_ABOUT_POSITION', payload: position });
  };

  return (
    <section className="about" id="about" ref={aboutRef}>
      <SectionWrapper isAbout={true}>
        <div className="image-block">
          <ProfileImage />
        </div>
        <div className="container">
          <SectionHeadLine headline={'about me'} subtext={`I'm Josipa`} />
          <div className="about-me">
            <p>
              {`I am a frontend developer. Now, I work in Svelte and SvelteKit, but a lot of time I
              work as a React JS developer. Also for my master's degree, I made MERN stack
              application for Android Users. In my free time, I take photos, especially I nature and urban cities. I like to play and
               watch football as well as tennis, skiing.`}
            </p>
            <div className="about-me__info">
              <ul>
                <li>
                  <span>Name:</span> Josipa Znaor
                </li>
                <li>
                  <span>Age:</span> 25
                </li>
                <li>
                  <span>Email:</span> josipa.znaor@gmail.com
                </li>
                <li>
                  <span>Address:</span> Franje Tuđmana 28, Hršćevani, 21260, Imotski
                </li>
              </ul>
            </div>
            <div className="about-me__cv">
              <a href={cv_download} download={'CV-Josipa_Znaor'} className="about-me__cv__btn">
                <FontAwesomeIcon icon={faInbox} />
                <p> Download CV </p>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
