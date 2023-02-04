import { useCallback, useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context/context';

const Home = () => {
  const homeRef = useRef();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    dispatch({ type: 'ADD_HOME_POSITION', payload: homeRef.current.offsetTop });
  };

  return (
    <section className="home" id="home" ref={homeRef}>
      <p>Home</p>
    </section>
  );
};

export default Home;
