import React from "react";
import "./skills.css";
import { FiMonitor, FiDatabase, FiCpu, FiTool } from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FiMonitor />,
    description: "Building responsive and interactive user interfaces.",
    skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <FiCpu />,
    description: "Developing robust server-side logic and REST APIs.",
    skills: ["Node.js", "Express.js", "REST APIs", "Python", "Django"],
  },
  {
    title: "Databases",
    icon: <FiDatabase />,
    description: "Structuring and managing application data.",
    skills: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    title: "AI & Tools",
    icon: <FiTool />,
    description: "Implementing AI features and utilizing developer tools.",
    skills: ["OpenAI API", "LangChain", "Streamlit", "CrewAI", "Git", "GitHub", "Linux"],
  },
];

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Tech Stack</p>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical toolkit, organized by
            domain.
          </p>
        </div>

        <div className="skills_grid reveal-stagger">
          {skillCategories.map(({ title, icon, description, skills }, idx) => (
            <div key={idx} className="skill_category_card">
              <div className="skill_category_header">
                <div className="skill_category_icon">{icon}</div>
                <h3>{title}</h3>
              </div>
              <p className="skill_category_desc">{description}</p>
              <div className="skill_tags">
                {skills.map((skill, i) => (
                  <span key={i} className="skill_tag">
                    {skill}
                  </span>
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
