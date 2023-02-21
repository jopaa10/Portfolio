import '../../styles/components/_timeline.scss';

const TimelineContent = ({ headline, id, info, date }) => {
  return (
    <div className="timeline-container__resume" key={id}>
      <span className="circle"></span>
      <h4>{headline}</h4>
      <span className="date">{date}</span>
      <p className="info">{info}</p>
    </div>
  );
};

export default TimelineContent;
