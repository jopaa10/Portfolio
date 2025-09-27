import { useEffect, useRef } from 'react';
import SkillsData from '../utils/skillsData/SkillsData';
import SectionHeadLine from '../components/common/SectionHeadline';
import SectionWrapper from '../components/common/SectionWrapper';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_skills-section.scss';
import SkillCard from '../components/Skills/SkillCard';

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
        <SectionHeadLine
          headline={'Skills & Expertise'}
          subtext={`Technologies I work with and my proficiency levels`}
        />
        <div className="skills-box">
          {SkillsData.map((item) => (
            <SkillCard key={item.title} {...item} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;
