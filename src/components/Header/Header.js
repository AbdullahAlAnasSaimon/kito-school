import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo-container">
        <img className='logo-img' src="logo2.png" alt="company logo" />
        <h3><span>Kito</span> School</h3>
      </div>
      <div className="menu-container"></div>
      <div className="user-container"></div>
    </div>
  );
};

export default Header;