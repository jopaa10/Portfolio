import { CharacterElements } from '../../utils/homeData/CharacterData';

const Character = () => {
  return (
    <div className="hero-character" aria-hidden="true">
      <div className="character-container" data-aos="zoom-in">
        <div className="character">
          <div className="character__head">
            <div className="character-eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
          </div>
          <div className="character__body">
            <div className="character-arms">
              <div className="arm arm__left"></div>
              <div className="arm arm__right"></div>
            </div>
          </div>
          <div className="character__legs">
            <div className="leg"></div>
            <div className="leg"></div>
          </div>
        </div>
        {CharacterElements.map((el) => (
          <div key={el.id} className={`floating-element element-${el.id}`}>
            <span className="floating-element__icon">{el.icon}</span>
            <span className="floating-element__text">{el.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
