"use client";

import JavaIcon from "@mui/icons-material/Coffee";

import AndroidIcon from "@mui/icons-material/Android";
import StorageIcon from "@mui/icons-material/Storage";
import CodeIcon from "@mui/icons-material/Code";
import ApiIcon from "@mui/icons-material/Api";
import SecurityIcon from "@mui/icons-material/Security";

const skills = [
  { name: "Java", icon: <JavaIcon fontSize="large" /> },
    { name: "Go", icon: <JavaIcon fontSize="large" /> },
   { name: "Spring Boot", icon: <ApiIcon fontSize="large" /> },
  { name: "Kotlin", icon: <CodeIcon fontSize="large" /> },
  { name: "Android", icon: <AndroidIcon fontSize="large" /> },
  { name: "PostgreSQL", icon: <StorageIcon fontSize="large" /> },
  { name: "Mysql", icon: <StorageIcon fontSize="large" /> },
  { name: "MongoDB", icon: <StorageIcon fontSize="large" /> },
  { name: "Redis", icon: <StorageIcon fontSize="large" /> },
  { name: "Security", icon: <SecurityIcon fontSize="large" /> },
];

// duplicate for infinite loop
const loop = [...skills, ...skills];

export default function SkillSlider() {
  return (
    <div className="skill-slider-wrapper">
      <p className="skill-label">Core Skills</p>

      <div className="skill-slider">
        <div className="skill-track">
          {loop.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
