import { getSkillColor } from '../../utils/skillsData/skillColors';
import { Icon } from '../common/Icon';

const SkillCard = (props) => {
  const { icon, title, description, skills, extra } = props;
  return (
    <div
      className="skill-category"
      aria-labelledby={`skill-title-${title}`}
      data-aos="zoom-in-down">
      <Icon icon={icon} />
      <h3 id={`skill-title-${title}`}>{title}</h3>
      <p>{description}</p>
      <div className="progress">
        {skills.map((skill, index) => (
          <div key={index} className="progress-item">
            <div className="progress__skill">
              <span className="tehnology">{skill.name}</span>
              <span className="percent">{skill.percent}</span>
            </div>
            <div
              className="progress__bar"
              role="progressbar"
              aria-valuenow={parseInt(skill.percent, 10)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${skill.name} proficiency is ${skill.percent}`}>
              <div
                className="progress__bar--fill"
                style={{ width: skill.percent, background: getSkillColor(skill.name) }}></div>
            </div>
          </div>
        ))}

        <div className="skill-list" aria-label="Skills category">
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
