import '../../styles/components/_timeline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = ({ children, title, icon }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-container__headline">
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default Timeline;
