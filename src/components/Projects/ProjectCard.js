const ProjectCard = ({ id, icon, title, description, topics, liveSite, link }) => {
  return (
    <div
      className="project-card"
      key={id}
      aria-labelledby={`project-title-${id}`}
      data-aos="zoom-in">
      <div className="project-header">
        <div className="project-icon" aria-hidden="true">
          {icon}
        </div>
        <div className="project-info">
          <h3>{title}</h3>
          <div className="project-lang">TypeScript</div>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <div className="project-topics">
        {topics.map((topic, i) => (
          <span className="topic-tag" key={i}>
            {topic}
          </span>
        ))}
      </div>
      <div className="project-links">
        {liveSite && (
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link link-primary"
            aria-label={`Visit live demo of ${title}`}>
            Live Demo
          </a>
        )}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link link-secondary"
          aria-label={`View source code of ${title} on GitHub`}>
          View Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
