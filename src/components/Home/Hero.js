import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-section__title" data-aos="zoom-in">
        Creative Developer
      </h1>
      <h2 className="hero-section__subtitle" data-aos="fade-right">
        Building the future, one line of code at a time
      </h2>
      <p className="hero-section__description" data-aos="fade-right">
        {`I'm Josipa Znaor, a passionate full-stack developer who transforms innovative ideas into
            exceptional digital experiences using cutting-edge technologies and creative
            problem-solving.`}
      </p>
      <div className="hero-section__buttons" data-aos="zoom-in">
        <Button
          onClick={() => {
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
          }}
          text={'View my work'}
        />
        <Button
          onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}
          text={`Let's collaborate`}
          colorVariant="secondary"
        />
      </div>
    </div>
  );
};

export default Hero;
