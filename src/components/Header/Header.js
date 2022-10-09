import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import UserCart from '../UserCart/UserCart';
import './Header.css';


const Header = () => {
  return (
    <div className='header-container'>
      <div className="logo-container">
        <Link to='/home'><img className='logo-img' src="logo2.png" alt="company logo" /></Link>
        <Link to='/home'  className='logo-title'><h3>Kito School</h3></Link>
      </div>
      <div className="menu-container">
        <Menu></Menu>
      </div>
      <div className="user-container">
        <UserCart></UserCart>
      </div>
    </div>
  );
};

export default Header;