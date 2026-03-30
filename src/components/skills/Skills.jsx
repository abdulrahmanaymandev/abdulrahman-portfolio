import React from "react";
import "./skills.css";
import { FiMonitor, FiDatabase, FiCpu, FiTool } from "react-icons/fi";

const skillCategories = [
  {
    title: "Front-End Development",
    icon: <FiMonitor />,
    description: "Building responsive and interactive user interfaces.",
    skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind"]
  },
  {
    title: "Back-End & Databases",
    icon: <FiDatabase />,
    description: "Developing robust server-side logic and managing data.",
    skills: ["Python", "Django", "SQL", "PostgreSQL"]
  },
  {
    title: "AI Integration & Tools",
    icon: <FiCpu />,
    description: "Implementing intelligent features and AI-driven platforms.",
    skills: ["OpenAI API", "LangChain", "Streamlit", "CrewAI"]
  },
  {
    title: "Developer Tools",
    icon: <FiTool />,
    description: "Ensuring smooth workflows and deploying reliable systems.",
    skills: ["Git / GitHub", "Linux", "Networking Fundamentals"]
  }
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Tech Stack</p>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
             A comprehensive overview of my technical expertise, categorized by domain.
          </p>
        </div>

        <div className="skills_grid">
          {skillCategories.map(({ title, icon, description, skills }, idx) => (
            <div key={idx} className="skill_category_card">
              <div className="skill_category_header">
                <div className="skill_category_icon">{icon}</div>
                <h3>{title}</h3>
              </div>
              <p className="skill_category_desc">{description}</p>
              <div className="skill_tags">
                {skills.map((skill, i) => (
                  <span key={i} className="skill_tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
