import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_home-section.scss';
import Button from '../components/common/Button';
import Character from '../components/Home/Character';

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

  return (
    <section className="home" id="home" ref={homeRef}>
      <div className="hero-section">
        <h1 className="hero-section__title">Creative Developer</h1>
        <p className="hero-section__subtitle">Building the future, one line of code at a time</p>
        <p className="hero-section__description">
          {`I'm Josipa Znaor, a passionate full-stack developer who transforms innovative ideas into
            exceptional digital experiences using cutting-edge technologies and creative
            problem-solving.`}
        </p>
        <div className="hero-section__buttons">
          <Button
            onClick={() => {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}
            text={'View my work'}
          />
          <Button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            text={`Let's collaborate`}
            colorVariant="secondary"
          />
        </div>
      </div>
      <Character />
    </section>
  );
};

export default Home;
