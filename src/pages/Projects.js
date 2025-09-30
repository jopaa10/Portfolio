import '../styles/pages/_projects.scss';
import { useRef } from 'react';
import SectionHeadLine from '../components/common/SectionHeadline';
import SectionWrapper from '../components/common/SectionWrapper';
import ProjectCard from '../components/Projects/ProjectCard';
import { githubProjects } from '../utils/projectsData/GithubProjectsData';

const Projects = () => {
  const projectsRef = useRef();

  return (
    <section className="projects" id="projects" ref={projectsRef}>
      <SectionWrapper>
        <SectionHeadLine headline={'Github Projects'} subtext={`Personal projects`} />
        <div className="projects-grid">
          {githubProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
