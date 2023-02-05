import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/context';

const Skills = () => {
  const skillsRef = useRef();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    const position = skillsRef.current.offsetHeight + skillsRef.current.offsetTop;
    dispatch({ type: 'ADD_SKILLS_POSITION', payload: position });
  };
  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <p>Skills</p>
    </section>
  );
};

export default Skills;
