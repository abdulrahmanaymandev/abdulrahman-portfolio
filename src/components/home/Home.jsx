import React from "react";
import "./home.css";
import ME from "../../assets/Abdulrahman.webp";
import CV from "../../assets/Abdulrahman_Ayman_CV.pdf";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { RiDownloadLine, RiArrowRightLine } from "react-icons/ri";

function Home() {
  return (
    <header id="home">
      <div className="home_container">
        {/* ── LEFT: TEXT ── */}
        <div className="hero_text">
          <div className="hero_status">
            <span className="hero_status_dot" />
            <span className="hero_status_text">Open to opportunities</span>
          </div>

          <p className="hero_greeting">Hi, I'm</p>

          <h1 className="hero_name">
            Abdulrahman <span className="name_accent">Ayman</span>
          </h1>

          <p className="hero_title_line">Full Stack Developer (MERN)</p>

          <p className="hero_description">
            I build <strong>scalable, data-driven</strong> web applications and
            AI-powered systems. CS graduate specializing in React.js, Node.js,
            and integrating AI workflows — turning complex problems into
            clean, elegant interfaces.
          </p>

          <div className="cta">
            <a href="#contact" className="btn btn-primary">
              <RiArrowRightLine /> Let's Talk
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
              <span className="hero_stat_value">7+</span>
              <span className="hero_stat_label">Projects</span>
            </div>
            <div className="hero_stat">
              <span className="hero_stat_value">2026</span>
              <span className="hero_stat_label">Grad Year</span>
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
            <div className="hero_image_frame">
              <img src={ME} alt="Abdulrahman Ayman — Full Stack Developer" />
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
