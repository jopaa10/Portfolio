import { useEffect, useRef, useState } from 'react';
import Categories from '../components/Portfolio/Categories';
import SectionHeadLine from '../components/SectionHeadline';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_portfolio-section.scss';
import menu from '../utils/portfolioData/Menu';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const Portfolio = () => {
  const portfolioRef = useRef();
  const { dispatch } = useGlobalContext();
  const [categories, setCategories] = useState(allCategories);

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
      <Categories categories={categories} />
    </section>
  );
};

export default Portfolio;
