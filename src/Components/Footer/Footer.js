import React from 'react'
import './Footer.css'
import footerLogo from '../../Assets/name-design.svg'
import userLogo from '../../Assets/user_icon.svg'
import githubLogo from '../../Assets/github_icon.svg'
import linkdinLogo from '../../Assets/linkdin_icon.svg'
import facebookLogo from '../../Assets/facebook_icon.svg'
import instagramLogo from '../../Assets/instagram_icon.svg'
import leetcodeIcon from '../../Assets/leetcode.svg.svg'
import geeksforgeeksLogo from '../../Assets/geeksforgeeks.svg'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='footerLogo' src={footerLogo} alt=''/>
                <div className="links">
                <a href="https://github.com/Nagarjuna-hub7102"><img src={githubLogo} alt=''/></a>
                <a href="https://www.linkedin.com/in/nagarjuna-reddy-guttikonda-661b3330b/"><img  src={linkdinLogo} alt=''/></a>
               <a href="https://leetcode.com/u/nagarjunareddy7102/"><img src={leetcodeIcon} alt="" /></a>
               <a href="/"><img src={geeksforgeeksLogo} alt="" /></a>
               <a href="/"><img  src={facebookLogo} alt=''/></a>
               <a href="/"> <img  src={instagramLogo} alt=''/></a>
                </div>
               
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={userLogo} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="submit-button">Submit</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2023  Nagarjuna Reddy. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
