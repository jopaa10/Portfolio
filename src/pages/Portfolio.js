import { useEffect, useRef } from 'react';
import SectionHeadLine from '../components/SectionHeadline';
import { useGlobalContext } from '../context/context';

const Portfolio = () => {
  const portfolioRef = useRef();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    const position = portfolioRef.current.offsetHeight + portfolioRef.current.offsetTop;
    dispatch({ type: 'ADD_PORTFOLIO_POSITION', payload: position });
  };

  return (
    <section className="portfolio" id="portfolio" ref={portfolioRef}>
      <SectionHeadLine headline={'portfolio'} subtext={`My projects`} />
      <p>portfolio</p>
    </section>
  );
};

export default Portfolio;
