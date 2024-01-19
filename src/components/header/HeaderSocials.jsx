import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/josh-prestage/" target="_blank">
        <BsLinkedin />
      </a>

      <a href="https://github.com/JoshP369" target="_blank">
        <FaSquareGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
