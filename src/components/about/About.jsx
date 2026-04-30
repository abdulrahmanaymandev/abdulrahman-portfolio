import React from "react";
import "./about.css";
import ME from "../../assets/Abdulrahman.webp";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { RiGraduationCapLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A quick look at my background, academics, and what drives me as a
            developer.
          </p>
        </div>

        <div className="about_container">
          <div className="about_image_wrap reveal">
            <div className="about_image_frame">
              <img src={ME} alt="Abdulrahman Ayman" />
            </div>
            <div className="about_image_border" />
          </div>

          <div className="about_content reveal">
            <div className="about_cards">
              <article className="about_card">
                <span className="about_card_icon">
                  <FaAward />
                </span>
                <h5>Academics</h5>
                <span className="about_card_val">4.93 / 5.0</span>
              </article>

              <article className="about_card">
                <span className="about_card_icon">
                  <VscFolderLibrary />
                </span>
                <h5>Projects</h5>
                <span className="about_card_val">7+</span>
              </article>

              <article className="about_card">
                <span className="about_card_icon">
                  <RiGraduationCapLine />
                </span>
                <h5>Focus</h5>
                <span className="about_card_val">CS & AI</span>
              </article>
            </div>

            <p className="about_text">
              I'm <strong>Abdulrahman Ayman</strong> — a Computer Science
              graduate (GPA 4.93/5.00) with hands-on experience in building scalable
              full-stack web applications and AI-powered systems. I work primarily
              with React.js, Node.js, and REST APIs, and I have a strong focus on
              building data-driven platforms.
            </p>
            <p className="about_text">
              I've developed multiple real-world projects, including an AI-driven
              learning platform (PATHLY) that generates personalized learning
              paths based on job market data, as well as full-stack blog platforms
              and admin dashboards. I bring strong problem-solving and
              communication skills to every team I work with.
            </p>

            <div className="about_cta">
              <a href="#contact" className="btn btn-primary">
                Let's Connect
              </a>
              <a href="#projects" className="btn">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
