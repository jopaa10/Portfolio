import { useEffect, useRef } from 'react';
import SectionHeadLine from '../components/common/SectionHeadline';
import { useGlobalContext } from '../context/context';
import TimelineContent from '../components/Timeline/TimelineContent';
import EducationData from '../utils/timelineData/EducationData';
import SectionWrapper from '../components/common/SectionWrapper';
import '../styles/pages/_resume-section.scss';

const Resume = () => {
  const resumeRef = useRef();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    const position = resumeRef.current.offsetHeight + resumeRef.current.offsetTop;
    dispatch({ type: 'ADD_RESUME_POSITION', payload: position });
  };

  return (
    <section className="resume" id="resume" ref={resumeRef}>
      <SectionWrapper>
        <SectionHeadLine
          headline={'Education and Experience Journey'}
          subtext={`My professional evolution through cutting-edge companies and transformative projects`}
        />
        <div className="content">
          <div className="timeline-line" />

          {EducationData.map((item) => {
            return <TimelineContent {...item} key={item.id} />;
          })}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Resume;
