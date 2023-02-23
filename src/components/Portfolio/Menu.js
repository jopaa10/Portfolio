import '../../styles/components/_menu-portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ menuItems }) => {
  return (
    <div className="menu-container">
      {menuItems.map((item) => {
        const { img, title, id, category, icon } = item;
        return (
          <article className="menu-container__item" key={id}>
            <img src={img} alt={title} className="menu-container__item__photo" />
            <div className="menu-container__item__info">
              <span className="glass-icon">
                <FontAwesomeIcon icon={icon} />
              </span>
              <h4>{title}</h4>
              <p>{category}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
