import React from "react";
import "./experience.css";

const experienceData = [
  {
    id: 1,
    company: "Alkhedrcars Company",
    role: "Sales Consultant → Marketing Specialist → Showroom Manager",
    date: "2021 – 2026",
    details: [
      "Led showroom operations in a high-volume environment, developing strong problem-solving and decision-making skills applicable to software development.",
      "Analyzed customer behavior and needs, strengthening ability to design user-centered digital solutions.",
      "Worked under pressure with targets, improving efficiency and execution speed.",
    ],
  },
  {
    id: 2,
    company: "Qassim Tech (QT)",
    role: "Software Engineering Trainee",
    date: "8 Weeks (Training)",
    details: [
      "Participated in a team-based technical training focused on AI Agents and system workflows.",
      "Contributed to building an AI-powered customer support system using Streamlit.",
      "Worked on a multi-agent academic platform, including scheduling and notification features.",
    ],
  },
];

function Experience() {
  return (
      <section id="experience">
        <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">My Journey</p>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional background and technical training that shaped my
            approach to software development.
          </p>
        </div>

        <div className="experience_grid reveal-stagger">
          {experienceData.map(({ id, company, role, date, details }) => (
            <article key={id} className="experience_card">
              <div className="exp_header">
                <h3>{company}</h3>
                <span className="exp_date">{date}</span>
              </div>
              <h4 className="exp_role">{role}</h4>
              <ul className="exp_details">
                {details.map((detail, idx) => (
                  <li key={idx} className="exp_detail_item">
                    {detail}
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

export default Experience;
