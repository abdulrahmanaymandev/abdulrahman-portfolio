import React from "react";
import "./skills.css";
import { FiMonitor, FiDatabase, FiCpu, FiTool } from "react-icons/fi";

const skillCategories = [
  {
    title: "Front-End Development",
    icon: <FiMonitor />,
    description: "Building responsive and interactive user interfaces.",
    skills: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Back-End & APIs",
    icon: <FiDatabase />,
    description: "Developing robust server-side logic and managing data.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Python",
      "Django",
      "SQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    title: "AI & Digital Solutions",
    icon: <FiCpu />,
    description: "Implementing intelligent features and AI-driven platforms.",
    skills: ["OpenAI API", "LangChain", "Streamlit", "CrewAI"],
  },
  {
    title: "Tools & Systems",
    icon: <FiTool />,
    description: "Ensuring smooth workflows and deploying reliable systems.",
    skills: ["Git", "GitHub", "Linux", "Networking Fundamentals"],
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
