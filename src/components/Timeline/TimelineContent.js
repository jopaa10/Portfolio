import '../../styles/components/_timeline.scss';

const TimelineContent = ({ headline, id, info, date, category, technologies }) => {
  return (
    <div className="experience-item" key={id} aria-labelledby={`exp-title-${id}`}>
      <div className="timeline-dot" aria-hidden="true"></div>
      <div className="experience-card">
        <div className="experience-header">
          <div className="experience-date" data-aos="fade-right">
            {date}
          </div>
          <div className="experience-title" data-aos="fade-right">
            <h3 id={`exp-title-${id}`}>{headline}</h3>
            <p className="experience-company">{category}</p>
          </div>
        </div>
        <p className="experience-description" data-aos="fade-right">
          {info}
        </p>
        <ul className="experience-technologies" aria-label="Technologies used">
          {technologies.map((technology, i) => (
            <li className="tech-tag" key={i} data-aos="zoom-in">
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineContent;
