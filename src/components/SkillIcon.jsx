import React from "react";
import { DiCss3, DiHtml5, DiJavascript1 } from "react-icons/di";
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
  }
};

export default SkillIcon;
