import { FC } from "react";
import Pill from "./Pill";
import "./skill.scss";

interface SkillProps {
  title: string;
  skills: string[];
  color: string;
  backgroundColor: string;
}

const Skill: FC<SkillProps> = ({ title, skills, color, backgroundColor }) => {
  return (
    <div className="skill">
      <h4>{title}</h4>
      {skills.map((skill, index) => (
        <Pill key={index} text={skill} color={color} backgroundColor={backgroundColor} />
      ))}
    </div>
  );
};

export default Skill;
