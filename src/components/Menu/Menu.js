import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <div className='menu-lists'>
      <Link to='/'>Home</Link>
      <Link to='/courses'>Courses</Link>
      <Link to='/instructor'>Instructor</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};

export default Menu;