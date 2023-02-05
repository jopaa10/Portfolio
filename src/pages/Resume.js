import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/context';

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
      <p>Resume</p>
    </section>
  );
};

export default Resume;
