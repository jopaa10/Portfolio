import { useState } from 'react';
import '../styles/components/_hamburger.scss';

const Hamburger = ({ handleShowNavItems, toggleMenu }) => {
  const activeClass = 'hamburger-menu--active';

  return (
    <div
      className={`hamburger-menu ${toggleMenu ? activeClass : ''}`}
      onClick={() => {
        handleShowNavItems();
      }}>
      <div className="ham-bar bar-top"></div>
      <div className="ham-bar bar-mid"></div>
      <div className="ham-bar bar-bottom"></div>
    </div>
  );
};

export default Hamburger;
