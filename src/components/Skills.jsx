import "../styles/Skills.css";
import Marquee from "react-fast-marquee";
import SkillIcon from "./SkillIcon";

const Skills = () => (
  <Marquee
    pauseOnHover="true"
    direction="left"
    gradient={true}
    gradientColor={"#161616"}
    gradientWidth={200}
    className="skills-container"
  >
    <SkillIcon skill="HTML" />
    <SkillIcon skill="CSS" />
    <SkillIcon skill="Javascript" />
    <SkillIcon skill="React" />
    <SkillIcon skill="Node.js" />
    <SkillIcon skill="Mongodb" />
    <SkillIcon skill="Netlify" />
    <SkillIcon skill="Git" />
    <SkillIcon skill="GitHub" />
  </Marquee>
);

export default Skills;
