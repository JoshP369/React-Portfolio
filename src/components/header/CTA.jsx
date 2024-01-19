import React from "react";
import CV from '../../assets/CV.pdf';

const CTA = () => {
  return <div class="cta">
    <a href={CV} download className='btn' >Download Resume</a>
    <a href="#contact" className='btn btn-primary' >Contact Me</a>
  </div>;
};

export default CTA;
