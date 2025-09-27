import '../styles/pages/_about-section.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import SectionHeadLine from '../components/common/SectionHeadline';
import { useGlobalContext } from '../context/context';
import AboutMeInfoCard from '../components/About/AboutMeCard';
import { SelfDescription } from '../utils/aboutData/SelfDescriptionData';
import { INFO_DATA } from '../utils/aboutData/InfoData';
import { socialLinks } from '../utils/aboutData/SocialMediaData';

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
          <div>
            <div className="image-block">👩‍💻</div>
            <div className="social-icons">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  aria-label={item.label}
                  download={item.download ? item.download : undefined}
                  className={item.download ? 'about-me__cv__btn' : undefined}>
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>{`Hello, I'm Josipa`}</h3>
            <p style={{ whiteSpace: 'pre-line' }}>{SelfDescription}</p>
          </div>
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
