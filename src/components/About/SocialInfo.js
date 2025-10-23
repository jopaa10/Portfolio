import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialLinks } from '../../utils/aboutData/SocialMediaData';

const SocialInfo = () => {
  return (
    <div data-aos="zoom-in">
      <div className="image-block">👩‍💻</div>
      <div className="social-icons">
        {socialLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noreferrer' : undefined}
            aria-label={item.label}
            download={item.download ? item.download : undefined}
            className={item.download ? 'about-me__cv__btn' : undefined}>
            <FontAwesomeIcon icon={item.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialInfo;
