import React from "react";
import "./about.css";
import me from "../../assets/me2.png";
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="me" className="me2_img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>
            <article className="about_card">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>7+ Completed PRojects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            sequi aut ratione sapiente fugit voluptas sed facere consectetur
            quod aperiam nam qui, eius reprehenderit, tempore aliquid veniam at,
            placeat similique!
          </p>
          <a href="#contact" className="btn btn-primary" >Lets Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;
