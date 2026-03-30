import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

function Homesocials() {
  return (
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
      {/* <a
        href="https://dribbble.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Dribbble"
      >
        <FaDribbble />
      </a> */}
    </div>
  );
}

export default Homesocials;
