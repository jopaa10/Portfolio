import { useEffect, useState } from 'react';
import '../styles/_skills-loader.scss';

const SkillsLoader = ({ name, value }) => {
  const [progressBarValue, setProgressBarValue] = useState(0);

  useEffect(() => {
    setProgressBarValue(value);
  }, []);

  return (
    <div className="skills">
      <p className="skills__name">{name}</p>
      <div className="skills__loader">
        <span
          data-progression={`${progressBarValue}`}
          className="skills__loader__liquid"
          style={{ width: progressBarValue }}></span>
        <span className="skills__loader__value" style={{ left: progressBarValue }}>
          {value}
        </span>
      </div>
    </div>
  );
};

export default SkillsLoader;
