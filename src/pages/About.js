import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';
import SectionHeadLine from '../components/SectionHeadline';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_about-section.scss';
import SectionWrapper from '../components/SectionWrapper';
import cv_download from '../assets/doc/CV-Josipa_Znaor.pdf';

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
      <SectionWrapper>
        <SectionHeadLine headline={'about me'} subtext={`I'm Josipa`} />
        <div className="container">
          <div className="image">
            <p>image will be here</p>
          </div>
          <div className="about-me">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas delectus incidunt omnis
              odit iusto exercitationem magnam cum. Impedit perferendis quibusdam molestias
              exercitationem neque dolore, recusandae magnam ipsam dicta, eaque officiis.
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
