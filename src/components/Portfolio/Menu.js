import '../../styles/components/_menu-portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = ({ menuItems }) => {
  const redirectToProject = (link) => {
    window.open(link);
  };

  return (
    <div className="menu-container">
      {menuItems.map((item) => {
        const { img, title, id, category, icon, link } = item;
        return (
          <article
            className="menu-container__item"
            key={id}
            onClick={() => redirectToProject(link)}>
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
