import React from "react";
import "./home.css";
import ME from "../../assets/Abdulrahman.webp";
import { RESUME_PATH } from "../../portfolioConfig";
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
          <hr
            style={{
              width: "100%",
              marginTop: "0.5rem",
              marginBottom: "1.5rem",
              borderColor: "var(--accent)",
              opacity: 0.5,
            }}
          />
          <p className="hero_title_line">Software Engineer</p>
          <p className="hero_subtitle_line">Full-Stack Developer</p>

          <p className="hero_description">
            Software Engineer with hands-on experience building full-stack web
            applications, REST APIs, real-time systems, and database-driven
            solutions. Focused on building reliable, scalable software that
            solves real-world problems.
          </p>

          <div className="cta">
            <a href="#contact" className="btn btn-primary">
              <RiArrowRightLine /> Let's Talk
            </a>
            <a href={RESUME_PATH} download className="btn">
              <RiDownloadLine /> Download CV
            </a>
          </div>

          <div className="hero_stats">
            <div className="hero_stat">
              <span className="hero_stat_value">4.93 / 5.00</span>
              <span className="hero_stat_label">GPA</span>
            </div>
            <div className="hero_stat">
              <span className="hero_stat_value">7+</span>
              <span className="hero_stat_label">Featured Projects</span>
            </div>
            <div className="hero_stat">
              <span className="hero_stat_value">2026</span>
              <span className="hero_stat_label">Graduation Year</span>
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
              <img src={ME} alt="Abdulrahman Ayman — Software Engineer" />
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
