import { useEffect, useRef, useState } from 'react';
import Categories from '../components/Portfolio/Categories';
import Menu from '../components/Portfolio/Menu';
import SectionHeadLine from '../components/SectionHeadline';
import SectionWrapper from '../components/SectionWrapper';
import { useGlobalContext } from '../context/context';
import '../styles/pages/_portfolio-section.scss';
import menu from '../utils/portfolioData/Menu';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const Portfolio = () => {
  const portfolioRef = useRef();
  const { dispatch } = useGlobalContext();
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(menu);

  useEffect(() => {
    getPosition();
  }, []);

  const filterMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }

    const newMenuItems = menu.filter((item) => item.category === category);

    setMenuItems(newMenuItems);
  };

  const getPosition = () => {
    const position = portfolioRef.current.offsetHeight + portfolioRef.current.offsetTop;
    dispatch({ type: 'ADD_PORTFOLIO_POSITION', payload: position });
  };

  return (
    <section className="portfolio" id="portfolio" ref={portfolioRef}>
      <SectionWrapper>
        <SectionHeadLine headline={'portfolio'} subtext={`My projects`} />
        <Categories categories={categories} filterMenuItems={filterMenuItems} />
        <Menu menuItems={menuItems} />
      </SectionWrapper>
    </section>
  );
};

export default Portfolio;
