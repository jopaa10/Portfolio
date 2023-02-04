import { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context/context';

const Portfolio = () => {
  const portfolioRef = useRef();
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
    dispatch({ type: 'ADD_PORTFOLIO_POSITION', payload: portfolioRef.current.offsetTop });
  };

  return (
    <section className="portfolio" id="portfolio" ref={portfolioRef}>
      <p>Portfolio</p>
    </section>
  );
};

export default Portfolio;
