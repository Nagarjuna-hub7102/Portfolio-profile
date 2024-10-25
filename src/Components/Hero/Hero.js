import React from 'react'
import './Hero.css'
import img from '../../Assets/Design uten navn.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={img} alt="Hero Profile" />
      <h1><span>I'm Nagarjuna Reddy Guttikonda</span>,Aspiring Sft.Dev</h1>
      <p>Currently pursuing Btech in Bharatiya Engineering Science and Technology Innovation University&&Currently doing java fullstack internship</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
