import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/name-design.svg'
import underline from '../../Assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menuOpen from '../../Assets/menu_open.svg'
import menuClose from '../../Assets/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState('home');
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0"
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }
  return (
    <div  className='navbar'>
        <img src={logo} alt="" />
        <img src={menuOpen} alt="" onClick={openMenu} className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-items">
          <img src={menuClose} alt="" onClick ={closeMenu} className="nav-mob-close" />
          <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'?<img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About me</p></AnchorLink>{menu==='about'?<img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'?<img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu('portfolio')}>Portfolio</p></AnchorLink>{menu==='portfolio'?<img src={underline} alt=''/>:<></>}</li>
          <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink></div>

      
    </div>
  )
}

export default Navbar
