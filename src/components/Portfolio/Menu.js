import '../../styles/components/_menu-portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Menu = ({ menuItems }) => {
  return (
    <div className="menu-container">
      {menuItems.map((item) => {
        const { img, title, id, category, icon, link, liveSite } = item;
        return (
          <article className="menu-container__item" key={id}>
            <img src={img} alt={title} className="menu-container__item__photo" />
            <div className="menu-container__item__info">
              <span className="glass-icon">
                <FontAwesomeIcon icon={icon} />
              </span>
              <h4>{title}</h4>
              <p>{category}</p>
              {category === 'development' ? (
                <div className="live-site">
                  {liveSite && (
                    <span>
                      <FontAwesomeIcon icon={faWindowMaximize} />
                      <a
                        href={liveSite}
                        target={'_blank'}
                        rel={'noreferrer'}
                        aria-label="live site link">
                        Live site
                      </a>
                    </span>
                  )}
                  <span>
                    <FontAwesomeIcon icon={faGithub} />
                    <a
                      href={link}
                      target={'_blank'}
                      rel={'noreferrer'}
                      aria-label="github site link">
                      Source code
                    </a>
                  </span>
                </div>
              ) : (
                <div className="live-site">
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                    <a
                      href={link}
                      target={'_blank'}
                      rel={'noreferrer'}
                      aria-label="instagram site link">
                      View on Instagram
                    </a>
                  </span>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
