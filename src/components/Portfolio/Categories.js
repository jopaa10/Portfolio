import { useState } from 'react';
import '../../styles/components/_categories.scss';

const Categories = ({ categories, filterMenuItems }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            type="button"
            className={`btn-container__filter-btn ${
              activeCategory === category ? 'btn-container__filter-btn--active' : ''
            }`}
            onClick={() => {
              handleActiveCategory(category);
              filterMenuItems(category);
            }}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
