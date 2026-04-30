import React, { useState, useEffect } from "react";
import "./nav.css";
import CV1 from "../../assets/Abdulrahman_Ayman_CV.pdf";
import CV2 from "../../assets/Abdulrahman_Ayman_T_CV.pdf";

import {
  RiHome5Line,
  RiUser3Line,
  RiLayoutGridLine,
  RiCodeSSlashLine,
  RiMailSendLine,
  RiFileTextLine,
  RiArrowDropDownLine,
  RiDownloadCloud2Line,
  RiBriefcaseLine,
} from "react-icons/ri";

const navLinks = [
  { href: "#", icon: <RiHome5Line />, id: "header", label: "Home" },
  { href: "#about", icon: <RiUser3Line />, id: "about", label: "About" },
  {
    href: "#projects",
    icon: <RiLayoutGridLine />,
    id: "projects",
    label: "Projects",
  },
  {
    href: "#skills",
    icon: <RiCodeSSlashLine />,
    id: "skills",
    label: "Skills",
  },
  {
    href: "#experience",
    icon: <RiBriefcaseLine />,
    id: "experience",
    label: "Experience",
  },
  {
    href: "#contact",
    icon: <RiMailSendLine />,
    id: "contact",
    label: "Contact",
  },
];

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvMenuOpen, setCvMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            setActiveNav(`#${entry.target.getAttribute("id")}`);
        });
      },
      { threshold: 0.4 },
    );
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveNav("#");
      },
      { threshold: 0.3 },
    );
    const header = document.querySelector("header");
    if (header) headerObserver.observe(header);
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      headerObserver.disconnect();
    };
  }, []);

  const handleLinkClick = (href) => {
    setActiveNav(href);
    setMenuOpen(false);
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={scrolled ? "scrolled" : ""}
    >
      <a href="#" className="nav-brand" onClick={() => handleLinkClick("#")}>
        abdulrahman<span>.</span>
      </a>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map(({ href, icon, id, label }) => (
          <a
            key={id}
            href={href}
            className={`nav-link ${activeNav === href ? "active" : ""}`}
            onClick={() => handleLinkClick(href)}
            aria-label={label}
          >
            {icon}
            {label}
          </a>
        ))}
      </div>

      <div
        className="cv-dropdown"
        onMouseEnter={() => setCvMenuOpen(true)}
        onMouseLeave={() => setCvMenuOpen(false)}
        onClick={() => setCvMenuOpen(!cvMenuOpen)}
      >
        <button className="nav-cta" aria-label="Download CV">
          Resume{" "}
          <RiArrowDropDownLine
            className={`dropdown-icon ${cvMenuOpen ? "open" : ""}`}
          />
        </button>

        <div className={`cv-menu ${cvMenuOpen ? "open" : ""}`}>
          <div className="cv-menu-header">
            <span>Select Resume</span>
          </div>
          <a href={CV1} download onClick={(e) => e.stopPropagation()}>
            <div className="cv-icon-wrapper">
              <RiFileTextLine />
            </div>
            <div className="cv-info">
              <span className="cv-title">Full-Time CV</span>
              <span className="cv-desc">Standard professional resume</span>
            </div>
            <RiDownloadCloud2Line className="download-icon" />
          </a>
          <a href={CV2} download onClick={(e) => e.stopPropagation()}>
            <div className="cv-icon-wrapper">
              <RiFileTextLine />
            </div>
            <div className="cv-info">
              <span className="cv-title">Internship CV</span>
              <span className="cv-desc">Academic & entry-level roles</span>
            </div>
            <RiDownloadCloud2Line className="download-icon" />
          </a>
        </div>
      </div>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Nav;
