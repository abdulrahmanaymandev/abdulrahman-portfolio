import React from "react";
import "./projects.css";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import SUPPORT_TICKET_IMAGE from "../../assets/SupportTicketSystem.png";
import CARS_IMAGE from "../../assets/portfolio111.jpg";
import ACADEMIC_IMAGE from "../../assets/AF.jpg";
import AI_SUPPORT_IMAGE from "../../assets/AI_SUPPORT.png";
import { FaGithub } from "react-icons/fa6";
import { RiExternalLinkLine } from "react-icons/ri";

const projectsData = [
  {
    id: 1,
    image: SUPPORT_TICKET_IMAGE,
    title: "Support Ticket System",
    description:
      "Full-stack support ticket system for guests, users, and admins, featuring authentication, real-time conversations, file attachments, search and filtering, bilingual support, and CI/CD deployment.",
    tags: ["NestJS", "PostgreSQL", "Next.js", "TypeScript", "WebSockets"],
    github:
      "https://github.com/abdulrahmanaymandev/support-ticket-system",
    demo: "https://ticket-system-web-mgu2.onrender.com/",
  },
  {
    id: 2,
    image: IMG3,
    title: "PATHLY — AI Career Guidance Platform",
    description:
      "AI-powered career guidance platform that analyzes user goals and skills to identify skill gaps and generate personalized learning roadmaps based on job market insights.",
    tags: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "OpenAI API",
      "PostgreSQL",
    ],
    github: "https://github.com/abdulrahmanaymandev/PATHLY",
  },
  {
    id: 3,
    image: IMG2,
    title: "Inkline — Full-Stack Blog Platform",
    description:
      "Full-stack MERN blog platform with authentication, email verification, post management, likes and comments, image uploads, category browsing, and an admin dashboard.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Cloudinary"],
    github: "https://github.com/abdulrahmanaymandev/blog-project",
    demo: "https://inkline-project.netlify.app/",
  },
  {
    id: 4,
    image: CARS_IMAGE,
    title: "Cars Showroom Management System",
    description:
      "Full-stack car showroom management system built with React and Laravel for managing vehicle inventory, orders, users, and car specifications, with authentication, search and filtering, order workflows, and Arabic/English support.",
    tags: ["React", "Laravel", "PHP", "MySQL", "REST APIs"],
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
    id: 5,
    image: ACADEMIC_IMAGE,
    title: "AI Academic Tracker",
    description:
      "Multi-agent academic platform designed to automate student workflows, including task notifications, attendance tracking, reports, and meeting scheduling.",
    context: "This project was developed during the Qassim Tech training program.",
    tags: ["Python", "AI Agents", "LangChain", "OpenAI API", "Streamlit"],
  },
  {
    id: 6,
    image: AI_SUPPORT_IMAGE,
    title: "AI Customer Support System",
    description:
      "AI-powered customer support system developed during technical training to explore automated support workflows and AI-assisted customer interactions.",
    context: "This project was developed during the Qassim Tech training program.",
    tags: ["Python", "Streamlit", "LangChain", "OpenAI API"],
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
              context,
            }) => (
              <article key={id} className="project_card">
                <div className="project_img_wrap">
                  <img src={image} alt={title} style={imgStyle || {}} />
                  {(github || demo) && (
                    <div className="project_overlay">
                      <div className="project_links">
                        {github && (
                          <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="project_link github"
                          >
                            <FaGithub /> Code
                          </a>
                        )}
                        {demo && (
                          <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="project_link demo"
                          >
                            <RiExternalLinkLine /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  )}
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
                  {context && <p className="project_context">{context}</p>}
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
