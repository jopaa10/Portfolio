const AboutMeInfoCard = ({ icon, title, description, background, border, color }) => {
  return (
    <section
      className="info-section"
      style={{ backgroundColor: background, borderColor: border }}
      aria-labelledby={`${title.replace(/\s+/g, '-').toLowerCase()}-title`}
      data-aos="zoom-in">
      <div className="info-section__icon-title-container">
        <span className="about-icon" role="img" aria-hidden={true}>
          {icon}
        </span>
        <h2
          id={`${title.replace(/\s+/g, '-').toLowerCase()}-title`}
          className="title"
          style={{ color }}>
          {title}
        </h2>
      </div>

      <div className="info-section__content">
        {description.map((line, index) => (
          <p className="text" key={index}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutMeInfoCard;
