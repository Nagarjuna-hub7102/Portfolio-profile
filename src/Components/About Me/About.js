import React from 'react'
import './About.css'
import themePattern from '../../Assets/theme_pattern.svg'
import profileImage from '../../Assets/Design uten navn.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={themePattern} alt="" />
        </div>
        <div className="about-sections">
             <div className="about-left">
                <img src={profileImage} alt="" />
             </div>
             <div className="about-right">
                <div className="about-para">
                    <p>I am an engineering student at BESTIU with a passion for web development and a strong foundation in HTML, CSS, JavaScript, React, and Java. I’ve developed projects like a News App, an iNotebook App, and the Amazon Frontend, which have enhanced my skills in creating dynamic user experiences.</p>
                    <p>Additionally, I am actively learning data structures and algorithms to strengthen my problem-solving abilities. This knowledge not only enhances my coding skills but also prepares me for challenges in software development. I am eager to continue expanding my expertise and contributing to innovative tech projects.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML&CSS </p><hr style={{width:'50%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>JavaScript</p> <hr style={{width:'70%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>React </p><hr style={{width:'60%'}}/>
                    </div>
                    <div className="about-skill">
                        <p>Java</p> <hr style={{width:'50%'}}/>
                    </div>

                </div>
             </div>
             
        </div>
        <div className="achivements">
                <div className="achivement">
                    <h1>0+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="achivement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
             </div>
      
    </div>
  )
}

export default About
