import { useState } from 'react';
import '../styles/components/_hamburger.scss';

const Hamburger = ({ handleShowNavItems }) => {
  const [isActive, setIsActive] = useState(false);
  const activeClass = 'hamburger-menu--active';

  const toogleHamMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`hamburger-menu ${isActive ? activeClass : ''}`}
      onClick={() => {
        toogleHamMenu();
        handleShowNavItems();
      }}>
      <div className="ham-bar bar-top"></div>
      <div className="ham-bar bar-mid"></div>
      <div className="ham-bar bar-bottom"></div>
    </div>
  );
};

export default Hamburger;
