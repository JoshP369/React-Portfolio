import React from 'react'
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";

const Nav = () => {
  return (
    <nav>
      <a href="#"><FaHome /></a>
      <a href="#about"><FaUserAstronaut /></a>
      <a href="#experience"><FaCode /></a>
      <a href="#portfolio"><GiGiftOfKnowledge /></a>
      <a href="#contact"><TiMessages /></a>
    </nav>
  )
}

export default Nav