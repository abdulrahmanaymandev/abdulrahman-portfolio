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
                <span className="about_card_val">Full Stack & AI</span>
              </article>
            </div>

            <p className="about_text">
              I'm <strong>Abdulrahman Ayman</strong>, a Computer Science
              graduate <strong>GPA 4.93/5.00</strong>
              with a strong foundation in software engineering and hands-on
              experience developing full-stack web applications and AI-powered
              systems. My experience spans modern web technologies including
              <strong> Laravel,</strong> <strong>React.js,</strong>{" "}
              <strong>Node.js,</strong> <strong>REST APIs,</strong> and{" "}
              <strong>database design.</strong> I enjoy building scalable,
              user-centered applications that solve real-world problems while
              maintaining clean architecture and high performance.
            </p>
            <p className="about_text">
              Throughout my projects, I have developed solutions ranging from
              AI-driven learning platforms and content management systems to
              business dashboards and productivity tools. These experiences have
              strengthened my problem-solving abilities, technical adaptability,
              and commitment to continuous learning. I am currently seeking
              opportunities where I can contribute as a Software Engineer while
              continuing to grow, collaborate, and create impactful technology
              solutions.
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
