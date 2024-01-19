import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { useState } from 'react';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={"navIcon"} onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' :""} ><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' :""} ><FaUserAstronaut /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' :""} ><FaCode /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' :""}><GiGiftOfKnowledge /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :""}><TiMessages /></a>
    </nav>
  )
}

export default Nav

