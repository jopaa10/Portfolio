import { useEffect, useRef } from 'react';
import SectionHeadLine from '../components/SectionHeadline';
import { useGlobalContext } from '../context/context';
import Timeline from '../components/Timeline/Timeline';
import TimelineContent from '../components/Timeline/TimelineContent';
import { faGraduationCap, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import EducationData from '../utils/timelineData/EducationData';
import ExperienceData from '../utils/timelineData/ExperienceData';

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
      <SectionHeadLine headline={'resume'} subtext={`Qualifications`} />
      <div className="content">
        <Timeline title={'my experience'} icon={faLaptopCode}>
          {ExperienceData.map((item) => {
            return <TimelineContent {...item} key={item.id} />;
          })}
        </Timeline>
        <Timeline title={'my education'} icon={faGraduationCap}>
          {EducationData.map((item) => {
            return <TimelineContent {...item} key={item.id} />;
          })}
        </Timeline>
      </div>
    </section>
  );
};

export default Resume;
