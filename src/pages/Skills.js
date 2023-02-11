import { useEffect, useRef } from 'react';
import SectionHeadLine from '../components/SectionHeadline';
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
      <SectionHeadLine headline={'skills'} subtext={`my skills`} />
      <p>Skills</p>
    </section>
  );
};

export default Skills;
