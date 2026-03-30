import React from "react";
import "./projects.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";

const projectsData = [
  {
    id: 1,
    image: IMG1,
    title: "Cars Admin Dashboard",
    description:
      "Full-featured React dashboard to manage car inventory, sales operations, and business metrics.",
    tags: ["React", "Tailwind", "JavaScript"],
    github:
      "https://github.com/abdulrahmanaymandev/car-showroom-admin-dashboard",
    demo: "https://car-showroom-admin-dashboard.netlify.app/",
    imgStyle: {
      objectFit: "contain",
      padding: "10px",
      backgroundColor: "#0D0B09",
    },
  },
  {
    id: 2,
    image: IMG2,
    title: "Modern Todo List",
    description: "Productivity app with persistent state management.",
    tags: ["React", "Vite", "LocalStorage"],
    github: "https://github.com/abdulrahmanaymandev/react-todo-app",
    demo: "https://abdulrahman-todo.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "PATHLY (AI Learning Platform)",
    description:
      "AI-based personalized learning platform generating career pathways aligned with real-world job market demands.",
    tags: ["React", "OpenAI API", "LangChain"],
    github: "https://github.com/abdulrahmanaymandev",
    demo: "https://github.com/abdulrahmanaymandev",
  },
  {
    id: 4,
    image: IMG4,
    title: "AI Customer Support",
    description:
      "AI-powered customer support system built during training at QT.",
    tags: ["Streamlit", "Python", "LangChain", "OpenAI API"],
    github: "https://github.com/abdulrahmanaymandev",
    demo: "https://github.com/abdulrahmanaymandev",
    imgStyle: {
      objectFit: "contain",
      padding: "10px",
      backgroundColor: "#0D0B09",
    },
  },
  {
    id: 5,
    image: IMG5,
    title: "React Calculator",
    description:
      "A professional, full-featured calculator application built with React, featuring a modern and refined user interface.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/abdulrahmanaymandev/react-calculator",
    demo: "https://abdulrahmandev-calculator.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "AI Academic Tracker",
    description:
      "AI platform with multi-agent architecture that provides daily task notifications, automates attendance, generates reports, and schedules meetings.",
    tags: ["AI Agents", "Python", "Streamlit", "LangChain", "OpenAI API"],
    github: "https://github.com/abdulrahmanaymandev",
    demo: "https://github.com/abdulrahmanaymandev",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">My Recent Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A curated selection of projects that showcase my skills and passion
            for building great products.
          </p>
        </div>

        <div className="projects_grid">
          {projectsData.map(
            ({
              id,
              image,
              title,
              description,
              tags,
              github,
              demo,
              imgStyle,
            }) => (
              <article key={id} className="project_card">
                <div className="project_img_wrap">
                  <img src={image} alt={title} style={imgStyle || {}} />
                  <div className="project_overlay">
                    <div className="project_links">
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="project_link github"
                      >
                        <FaGithub /> Code
                      </a>
                      <a
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project_link demo"
                      >
                        <RiExternalLinkLine /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project_body">
                  <div className="project_tags">
                    {tags.map((tag, i) => (
                      <span key={i} className="project_tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
