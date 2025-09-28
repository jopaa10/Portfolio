import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_home-section.scss';
import Character from '../components/Home/Character';
import Hero from '../components/Home/Hero';

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
      <Hero />
      <Character />
    </section>
  );
};

export default Home;
