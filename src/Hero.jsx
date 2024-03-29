import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className="hero-title">
          <h1>Contentfull CMS</h1>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero;
