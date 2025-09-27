import '../../styles/components/_section-wrapper.scss';

const SectionWrapper = ({ children, isAbout }) => {
  return (
    <div className={`section-wrapper ${isAbout ? 'section-wrapper__about' : ''}`}>{children}</div>
  );
};

export default SectionWrapper;
