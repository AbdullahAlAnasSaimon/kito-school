import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';
import HeroImg from '../../images/hero1.png';

const Hero = () => {
  return (
    <div>
      <div className="hero-details">
        <div className='discount'>
          <span><Link className='discount-title'>50% OFF</Link></span><span> LEARN FROM TODAY</span>
        </div>
        <div className='hero-texts'>
          <h1 className='hero-main-title'>Best Kids Academic Online Learning Platform</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus obcaecati, rem officiis illum dignissimos nihil omnis sequi.</p>
          <div>
            <button>Explore Courses &rarr;</button>
            <button>Watch Demo &#9658;</button>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;