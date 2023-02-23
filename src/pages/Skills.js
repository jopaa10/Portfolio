import { useEffect, useRef } from 'react';
import SkillsData from '../utils/skillsData/SkillsData';
import SectionHeadLine from '../components/SectionHeadline';
import SectionWrapper from '../components/SectionWrapper';
import SkillsLoader from '../components/SkillsLoader';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_skills-section.scss';

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
      <SectionWrapper>
        <SectionHeadLine headline={'skills'} subtext={`my skills`} />
        <div className="skills-box">
          {SkillsData.map((item) => (
            <SkillsLoader {...item} key={item.id} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;
