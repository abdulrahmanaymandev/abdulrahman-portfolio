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
            A quick look at my background, experience, and what drives me as a
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
                <span className="about_card_val">4.93 / 5.00</span>
                <span className="about_card_meta">GPA</span>
              </article>

              <article className="about_card">
                <span className="about_card_icon">
                  <VscFolderLibrary />
                </span>
                <h5>Experience</h5>
                <span className="about_card_val">Real-World</span>
                <span className="about_card_meta">Projects</span>
              </article>

              <article className="about_card">
                <span className="about_card_icon">
                  <RiGraduationCapLine />
                </span>
                <h5>Focus</h5>
                <span className="about_card_val">Software</span>
                <span className="about_card_meta">Engineering</span>
              </article>
            </div>

            <p className="about_text">
              I'm Abdulrahman Ayman, a Computer Science graduate with a
              4.93/5.00 GPA and hands-on experience building full-stack web
              applications and contributing to real-world software products.
            </p>
            <p className="about_text">
              My experience includes REST APIs, backend development,
              database-driven applications, real-time features, authentication,
              testing, and CI/CD. I've worked with technologies including NestJS,
              Next.js, TypeScript, PostgreSQL, and WebSockets, taking features
              from requirements and development through testing and deployment.
            </p>
            <p className="about_text">
              Alongside my Computer Science studies, I spent several years
              working in the automotive industry across sales, marketing, and
              operations. Balancing professional work with studying and building
              software gave me practical experience in solving real business
              problems and shaped the way I approach software development today.
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
