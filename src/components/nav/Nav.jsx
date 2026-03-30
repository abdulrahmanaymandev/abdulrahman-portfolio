import React, { useState, useEffect } from "react";
import "./nav.css";
import CV from "../../assets/Abdulrahman_Ayman_Web_Developer_CV.pdf";
import {
  RiHome5Line,
  RiUser3Line,
  RiBriefcase4Line,
  RiLayoutGridLine,
  RiCodeSSlashLine,
  RiMailSendLine,
} from "react-icons/ri";

const navLinks = [
  { href: "#", icon: <RiHome5Line />, id: "header", label: "Home" },
  { href: "#about", icon: <RiUser3Line />, id: "about", label: "About" },
  // {
  //   href: "#services",
  //   icon: <RiBriefcase4Line />,
  //   id: "services",
  //   label: "Services",
  // },
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
    href: "#contact",
    icon: <RiMailSendLine />,
    id: "contact",
    label: "Contact",
  },
];

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "contact"];
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
    <nav role="navigation" aria-label="Main navigation">
      <a href="#" className="nav-brand" onClick={() => handleLinkClick("#")}>
        Abdulrahman <span>.</span>
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

      <a href={CV} download className="nav-cta" aria-label="Download CV">
        Download CV
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
