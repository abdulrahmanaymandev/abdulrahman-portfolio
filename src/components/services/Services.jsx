import React from "react";
import "./services.css";

const servicesData = [
  {
    id: 1,
    number: "01",
    title: "Frontend Development",
    description:
      "Building scalable, performant web apps with React and modern JavaScript frameworks.",
    features: ["React / Next.js", "TypeScript", "State Management"],
  },
  {
    id: 2,
    number: "02",
    title: "UI/UX Design",
    description:
      "Designing intuitive, beautiful interfaces grounded in user experience principles.",
    features: ["Figma & Design Systems", "Responsive Design", "Accessibility"],
  },
  {
    id: 3,
    number: "03",
    title: "Performance",
    description:
      "Analyzing and optimizing web vitals, bundle sizes, and render performance.",
    features: ["Core Web Vitals", "Code Splitting", "Lazy Loading"],
  },
  {
    id: 4,
    number: "04",
    title: "Responsive Development",
    description:
      "Pixel-perfect, mobile-first layouts that work flawlessly on every screen.",
    features: ["Mobile-First CSS", "Cross-Browser", "Fluid Layouts"],
  },
  {
    id: 5,
    number: "05",
    title: "Animation & Motion",
    description:
      "Bringing interfaces to life with purposeful micro-animations and transitions.",
    features: ["CSS Animations", "Framer Motion", "SVG Animation"],
  },
  {
    id: 6,
    number: "06",
    title: "Code Quality",
    description:
      "Clean, maintainable code backed by testing and modern engineering practices.",
    features: ["ESLint / Prettier", "Testing", "Git Workflows"],
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">What I Offer</p>
          <h2 className="section-title">Services</h2>
          <div className="divider" />
        </div>

        <div className="services_grid">
          {servicesData.map(({ id, number, title, description, features }) => (
            <article key={id} className="service_card">
              <span className="service_number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <ul className="service_features">
                {features.map((f, i) => (
                  <li key={i} className="service_feature">
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
