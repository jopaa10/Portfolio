import '../styles/pages/_about-section.scss';
import { useEffect, useRef } from 'react';
import SectionHeadLine from '../components/common/SectionHeadline';
import { useGlobalContext } from '../context/context';
import AboutMeInfoCard from '../components/About/AboutMeInfo';
import { SelfDescription } from '../utils/aboutData/SelfDescriptionData';
import { INFO_DATA } from '../utils/aboutData/InfoData';
import SocialInfo from '../components/About/SocialInfo';
import Description from '../components/About/Description';

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
      <SectionHeadLine headline={'about me'} subtext={`The story behind the code`} />
      <div className="glass-card">
        <div className="about__me">
          <SocialInfo />
          <Description />
        </div>
        <div className="info">
          {INFO_DATA.map((infoItem) => (
            <AboutMeInfoCard key={infoItem.title} {...infoItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
