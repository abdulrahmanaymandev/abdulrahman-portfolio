import React, { useState, useEffect } from "react";
import "./nav.css";
import { RESUME_PATH } from "../../portfolioConfig";

import {
  RiHome5Line,
  RiUser3Line,
  RiLayoutGridLine,
  RiCodeSSlashLine,
  RiMailSendLine,
  RiDownloadCloud2Line,
  RiBriefcaseLine,
  RiAwardLine,
  RiGraduationCapLine,
} from "react-icons/ri";

const navLinks = [
  { href: "#", icon: <RiHome5Line />, id: "header", label: "Home" },
  { href: "#about", icon: <RiUser3Line />, id: "about", label: "About" },
  {
    href: "#experience",
    icon: <RiBriefcaseLine />,
    id: "experience",
    label: "Experience",
  },
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
    href: "#education",
    icon: <RiGraduationCapLine />,
    id: "education",
    label: "Education",
  },
  {
    href: "#certifications",
    icon: <RiAwardLine />,
    id: "certifications",
    label: "Certifications",
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      "about",
      "experience",
      "projects",
      "skills",
      "education",
      "certifications",
      "contact",
    ];
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

      <a
        className="nav-cta nav-resume"
        href={RESUME_PATH}
        download
        aria-label="Download resume"
      >
        Resume <RiDownloadCloud2Line />
      </a>

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
