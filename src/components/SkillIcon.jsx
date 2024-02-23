import React from "react";
import { DiCss3, DiHtml5, DiJavascript1 } from "react-icons/di";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { ImGithub } from "react-icons/im";
import "../styles/SkillIcon.css";

const SkillIcon = ({ skill }) => {
  if (skill === "HTML") {
    return (
      <div className="skill-icon">
        <DiHtml5 />
        <span>HTML</span>
      </div>
    );
  } else if (skill === "CSS") {
    return (
      <div className="skill-icon">
        <DiCss3 />
        <span>CSS</span>
      </div>
    );
  } else if (skill === "Javascript") {
    return (
      <div className="skill-icon">
        <DiJavascript1 />
        <span>Javascript</span>
      </div>
    );
  } else if (skill === "React") {
    return (
      <div className="skill-icon">
        <FaReact />
        <span>React</span>
      </div>
    );
  } else if (skill === "Node.js") {
    return (
      <div className="skill-icon">
        <FaNodeJs />
        <span>Node.js</span>
      </div>
    );
  } else if (skill === "Mongodb") {
    return (
      <div className="skill-icon">
        <SiMongodb />
        <span>Mongodb</span>
      </div>
    );
  } else if (skill === "Netlify") {
    return (
      <div className="skill-icon">
        <BiLogoNetlify />
        <span>Netlify</span>
      </div>
    );
  } else if (skill === "Git") {
    return (
      <div className="skill-icon">
        <FaGitAlt />
        <span>Git</span>
      </div>
    );
  } else if (skill === "GitHub") {
    return (
      <div className="skill-icon">
        <ImGithub />
        <span>GitHub</span>
      </div>
    );
  }
};

export default SkillIcon;
