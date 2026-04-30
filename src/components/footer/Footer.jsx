import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import "./footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer_inner">
        <div className="footer_top">
          <div className="footer_brand">
            <a href="#" className="footer_logo">
              abdulrahman<span>.</span>
            </a>
            <p className="footer_tagline">
              Web developer crafting fast, beautiful digital experiences with
              React, Node.js &amp; modern tooling.
            </p>
            <div className="footer_socials">
              <a
                href="https://www.linkedin.com/in/abdulrahman-ayman-51a22235b"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="footer_social_link"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/abdulrahmanaymandev"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="footer_social_link"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div className="footer_nav_col">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>

          <div className="footer_nav_col">
            <h4>Connect</h4>
            <ul>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a
                  href="https://github.com/abdulrahmanaymandev"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdulrahman-ayman-51a22235b"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_bottom">
          <p className="footer_copy">
            &copy; {year} <a href="#">Abdulrahman Ayman</a>. All rights
            reserved.
          </p>
          <p className="footer_made">
            Built with <span>♥</span> using React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
