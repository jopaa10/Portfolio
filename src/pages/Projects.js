import '../styles/pages/_projects.scss';
import { useEffect, useRef, useState } from 'react';
import SectionHeadLine from '../components/common/SectionHeadline';
import SectionWrapper from '../components/common/SectionWrapper';
import ProjectCard from '../components/Projects/ProjectCard';
import { githubProjects } from '../utils/projectsData/GithubProjectsData';
import { watchFontSize } from '../utils/helpers/checkFontSize';

const Projects = () => {
  const projectsRef = useRef();

  const [largeFont, setLargeFont] = useState(false);
  const threshold = 28;

  useEffect(() => {
    const cleanup = watchFontSize(setLargeFont, threshold);

    return cleanup;
  }, [threshold]);

  return (
    <section className="projects" id="projects" ref={projectsRef}>
      <SectionWrapper>
        <SectionHeadLine headline={'Github Projects'} subtext={`Personal projects`} />
        <div className={`projects-grid ${largeFont ? 'projects-grid--single-col' : ''}`}>
          {githubProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
