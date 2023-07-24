import React from 'react'
import HeroImage from '../assets/reza-delkhosh-iRAOJYtPHZE-unsplash.jpg'

const Hero = () => {
  return (
    <div className="hero">
        <img src={HeroImage} alt="hero" />
          <div className="wrapper">
                <div className='hero-text wrapper mask'>
                    <h1 className='hide'>Wear More Than Just Color</h1>
                    <p className='hide'>Discover what suits your personality, style , skin color , and taste.
                    We deliver the best so that you can boost your confidence and your energy</p>
                    <button className='cta-btn'>Shop Now</button>
                </div>
          </div>
    </div>
  )
}

export default Hero