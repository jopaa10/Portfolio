const AboutMeInfoCard = (props) => {
  const { icon, title, description, background, border, color } = props;

  return (
    <div className="info-section" style={{ backgroundColor: background, borderColor: border }}>
      <div className="info-section__icon-title-container">
        <span>{icon}</span>
        <h3 className="title" style={{ color }}>
          {title}
        </h3>
      </div>
      {description.map((line, index) => (
        <p className="text" key={index}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default AboutMeInfoCard;
