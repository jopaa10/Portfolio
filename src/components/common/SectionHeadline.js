import '../../styles/components/_section-headline.scss';

const SectionHeadLine = ({ headline, subtext }) => {
  return (
    <div className="headline">
      <h2>{headline}</h2>
      <p>{subtext}</p>
    </div>
  );
};

export default SectionHeadLine;
