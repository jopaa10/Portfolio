import { useEffect, useRef, useState } from 'react';
import SkillsData from '../utils/skillsData/SkillsData';
import SectionHeadLine from '../components/common/SectionHeadline';
import SectionWrapper from '../components/common/SectionWrapper';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_skills-section.scss';
import SkillCard from '../components/Skills/SkillCard';
import { watchFontSize } from '../utils/helpers/checkFontSize';

const Skills = () => {
  const skillsRef = useRef();
  const { dispatch } = useGlobalContext();
  const [largeFont, setLargeFont] = useState(false);

  const threshold = 28;

  useEffect(() => {
    getPosition();

    const cleanup = watchFontSize(setLargeFont, threshold);

    return cleanup;
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
        <div className={`skills-box ${largeFont ? 'skills-box--single-col' : ''}`}>
          {SkillsData.map((item) => (
            <SkillCard key={item.title} {...item} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;
