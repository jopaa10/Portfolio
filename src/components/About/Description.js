import { SelfDescription } from '../../utils/aboutData/SelfDescriptionData';

const Description = () => {
  return (
    <div>
      <h3 data-aos="fade-left">{`Hello, I'm Josipa`}</h3>
      <p style={{ whiteSpace: 'pre-line' }} data-aos="fade-left">
        {SelfDescription}
      </p>
    </div>
  );
};

export default Description;
