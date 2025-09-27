import { getSkillColor } from '../../utils/skillsData/skillColors';
import { Icon } from '../common/Icon';

const SkillCard = (props) => {
  const { icon, title, description, skills, extra } = props;
  return (
    <div className="skill-category">
      <Icon icon={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="progress">
        {skills.map((skill, index) => (
          <div key={index} className="progress-item">
            <div className="progress__skill">
              <span className="tehnology">{skill.name}</span>
              <span className="percent">{skill.percent}</span>
            </div>
            <div className="progress__bar">
              <div
                className="progress__bar--fill"
                style={{ width: skill.percent, background: getSkillColor(skill.name) }}></div>
            </div>
          </div>
        ))}

        <div className="skill-list">
          {extra.map((item, idx) => (
            <span key={idx} className="skill-list__item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
