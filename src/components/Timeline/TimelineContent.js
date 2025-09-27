import '../../styles/components/_timeline.scss';

const TimelineContent = ({ headline, id, info, date, category, technologies }) => {
  return (
    <div className="experience-item" key={id}>
      <div className="timeline-dot"></div>
      <div className="experience-card">
        <div className="experience-header">
          <div className="experience-date">{date}</div>
          <div className="experience-title">
            <h3>{headline}</h3>
            <p className="experience-company">{category}</p>
          </div>
        </div>
        <p className="experience-description">{info}</p>
        <div className="experience-technologies">
          {technologies.map((technology, i) => (
            <span className="tech-tag" key={i}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineContent;
