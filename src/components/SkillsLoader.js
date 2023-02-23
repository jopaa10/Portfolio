import '../styles/_skills-loader.scss';

const SkillsLoader = ({ name, value }) => {
  return (
    <div className="skills">
      <p className="skills__name">{name}</p>
      <div className="skills__loader">
        <span
          data-progression={`${value}`}
          className="skills__loader__liquid"
          style={{ width: value }}></span>
        <span className="skills__loader__value" style={{ left: value }}>
          {value}
        </span>
      </div>
    </div>
  );
};

export default SkillsLoader;
