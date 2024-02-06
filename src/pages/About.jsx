// Home.jsx
import React from "react";
import "../styles/About.css";
import Avatar from "../assets/images/Avatar.png";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className=" about-container">
      <div className="about-content">
        <div className="avatar-container">
          <img src={Avatar} alt="Avatar" className="avatar" />
        </div>
        <div className="about-text-container">
          <p>Hi, I'm Andrew 👋</p>
          <h1>
            Building beautiful, functional, and user-friendly experiences.
          </h1>
        </div>
        <button className="btn-primary">
          Contact Me <ArrowUpRightIcon className="ArrowUpRightIcon" />
        </button>
        <Skills />
      </div>
    </div>
  );
};

export default About;
