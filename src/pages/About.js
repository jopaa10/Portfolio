import { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context/context';

const About = () => {
  const aboutRef = useRef();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    dispatch({ type: 'ADD_ABOUT_POSITION', payload: aboutRef.current.offsetTop });
  };

  return (
    <section className="about" id="about" ref={aboutRef}>
      <p>About</p>
    </section>
  );
};

export default About;
