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
    image: IMG3,
    title: "PATHLY — AI Learning Platform",
    description:
      "AI-based personalized learning platform generating career pathways aligned with real-world job market demands.",
    tags: ["React", "OpenAI API", "LangChain", "FastAPI"],
    github: "https://github.com/abdulrahmanaymandev",
    demo: "https://github.com/abdulrahmanaymandev",
  },
  {
    id: 2,
    image: IMG2,
    title: "Blog Platform",
    description: "Full-stack blog platform with dynamic UI rendering and structured backend logic following scalable development practices.",
    tags: ["MERN Stack", "MongoDB", "Express", "React"],
    github: "https://github.com/abdulrahmanaymandev",
    demo: "https://github.com/abdulrahmanaymandev",
  },
  {
    id: 3,
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
      backgroundColor: "#0a0a0b",
    },
  },
  {
    id: 4,
    image: IMG4,
    title: "E-Commerce Web Application",
    description:
      "Responsive e-commerce frontend integrated with external APIs, featuring product listing, filtering, and dynamic cart functionality.",
    tags: ["React", "API Integration", "CSS"],
    github: "https://github.com/abdulrahmanaymandev",
    demo: "https://github.com/abdulrahmanaymandev",
    imgStyle: {
      objectFit: "contain",
      padding: "10px",
      backgroundColor: "#0a0a0b",
    },
  },
  {
    id: 5,
    image: IMG5,
    title: "React Calculator",
    description:
      "Professional calculator app with a refined, modern interface and full arithmetic capabilities.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/abdulrahmanaymandev/react-calculator",
    demo: "https://abdulrahmandev-calculator.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Personal Portfolio Website",
    description:
      "Modern personal website to showcase projects and technical skills with high-end editorial aesthetics.",
    tags: ["React", "CSS3", "Responsive"],
    github: "https://github.com/abdulrahmanaymandev/abdulrahman-portfolio",
    demo: "https://abdulrahmanayman.netlify.app",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Recent Work</p>
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-subtitle">
            A curated collection of projects that demonstrate my technical
            skills and passion for building useful products.
          </p>
        </div>

        <div className="projects_grid reveal-stagger">
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
