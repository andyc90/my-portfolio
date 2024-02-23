// Home.jsx
import React from "react";
import "../styles/About.css";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className=" about-container">
      <div className="about-content">
        <div className="avatar-container">
          <img src="/images/avatar.png" alt="Avatar" className="avatar" />
        </div>
        <div className="about-text-container">
          <p>Hi, I'm Andrew 👋</p>
          <h1>
            Building beautiful, functional, and user-friendly experiences.
          </h1>
        </div>
        <button className="btn-primary">Contact Me</button>
        <Skills />
      </div>
    </div>
  );
};

export default About;
