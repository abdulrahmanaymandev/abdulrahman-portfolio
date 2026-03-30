import React from "react";
import "./home.css";
import ME from "../../assets/Abdulrahman.webp";
import CV from "../../assets/Abdulrahman_Ayman_Web_Developer_CV.pdf";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { RiDownloadLine, RiMailSendLine } from "react-icons/ri";

function Home() {
  return (
    <header id="home">
      <div className="container home_container">
        {/* ── LEFT: TEXT ── */}
        <div className="hero_text">
          <div className="hero_eyebrow">Web Developer</div>

          <h1 className="hero_name">
            Abdulrahman
            <br />
            <em>Ayman</em>
          </h1>

          <div className="hero_role">React · Python · AI</div>

          <p className="hero_description">
            I craft fast, beautiful, and accessible digital experiences.
            Combining technical excellence with professional leadership to build
            robust, modern user interfaces and intelligent web platforms.
          </p>

          <div className="cta">
            <a href="#contact" className="btn btn-primary">
              <RiMailSendLine /> Let's Work Together
            </a>
            <a href={CV} download className="btn">
              <RiDownloadLine /> Download CV
            </a>
          </div>

          <div className="hero_stats">
            <div className="hero_stat">
              <span className="hero_stat_value">4.93</span>
              <span className="hero_stat_label">GPA / 5.00</span>
            </div>
            <div className="hero_stat">
              <span className="hero_stat_value">2026</span>
              <span className="hero_stat_label">Grad Year</span>
            </div>
            <div className="hero_stat">
              <span className="hero_stat_value">5</span>
              <span className="hero_stat_label">Years Exp.</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: IMAGE ── */}
        <div className="hero_visual">
          <div className="home_socials">
            <a
              href="https://www.linkedin.com/in/abdulrahman-ayman-51a22235b"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/abdulrahmanaymandev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          <div className="hero_image_wrap">
            <div className="hero_accent_square" />
            <div className="hero_image_frame">
              <img src={ME} alt="Abdulrahman Ayman — Frontend Developer" />
            </div>
            <div className="hero_badge hero_badge_1">
              <p className="badge_label">Available for work</p>
              <p className="badge_value">Let's build →</p>
            </div>
          </div>

          <a href="#about" className="scroll_down" aria-label="Scroll down">
            Scroll
          </a>
        </div>
      </div>
    </header>
  );
}

export default Home;
