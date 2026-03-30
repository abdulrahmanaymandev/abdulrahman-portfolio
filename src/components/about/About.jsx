import React from "react";
import "./about.css";
import ME from "../../assets/Abdulrahman.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <div className="divider" />
        </div>

        <div className="about_container">
          <div className="about_image_wrap">
            <div className="about_image_frame">
              <img src={ME} alt="Abdulrahman Ayman" />
            </div>
            <div className="about_image_border" />
          </div>

          <div className="about_content">
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
                  <FiUsers />
                </span>
                <h5>Leadership</h5>
                <span className="about_card_val">5+ Years</span>
              </article>
              <article className="about_card">
                <span className="about_card_icon">
                  <VscFolderLibrary />
                </span>
                <h5>Projects</h5>
                <span className="about_card_val">CS & AI</span>
              </article>
            </div>

            <p className="about_text">
              I'm <strong>Abdulrahman Ayman</strong>, a Computer Science
              graduate (GPA 4.93/5.00) with expertise in building modern,
              responsive web applications using <strong>React.js</strong> and
              integrating AI-powered features. Developed multiple real-world
              projects including dashboards and AI-based platforms. Bringing{" "}
              <strong>5 years of professional experience</strong> in fast-paced
              business environments, with strong problem-solving, communication,
              and user-focused development skills.
            </p>
            <p className="about_text">
              My unique background allows me to build robust, user-friendly
              frontend applications while understanding business objectives.
              Whether I'm building AI-driven platforms or managing operational
              workflows, I bring precision and effective communication.
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
