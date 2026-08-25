import React from "react";
import "./skills.css";
import { FiMonitor, FiDatabase, FiCpu, FiTool } from "react-icons/fi";

const skillCategories = [
  {
    title: "Backend Development",
    icon: <FiCpu />,
    description:
      "Building backend systems, REST APIs, authentication, and real-time features.",
    skills: [
      "NestJS",
      "Node.js",
      "Express.js",
      "Laravel",
      "PHP",
      "FastAPI",
      "REST APIs",
      "JWT",
      "WebSockets",
    ],
  },
  {
    title: "Frontend Development",
    icon: <FiMonitor />,
    description:
      "Building responsive and integrated web interfaces for full-stack applications.",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases & DevOps",
    icon: <FiDatabase />,
    description:
      "Working with relational and NoSQL databases, development workflows, and deployment tools.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL",
      "Git / GitHub",
      "Docker",
      "Linux",
      "CI/CD",
      "Swagger/OpenAPI",
      "Postman",
    ],
  },
  {
    title: "AI & Tools",
    icon: <FiTool />,
    description:
      "Building and integrating AI-powered features into software applications.",
    skills: ["OpenAI API", "LangChain", "CrewAI", "Streamlit"],
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
