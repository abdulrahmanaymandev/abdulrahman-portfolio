import React from "react";
import "./experience.css";

const experienceData = [
  {
    id: 1,
    company: "Zaiti for Car Services",
    role: "Full Stack Web Developer Intern",
    date: "Jun 2026 – Aug 2026",
    details: [
      "Built a full-stack Support Ticket System from requirements and database design through development, testing, and deployment.",
      "Contributed to Zaiti's customer dashboard by developing and improving features across Invoices, Wallet, Coupons, Rewards, Roulette, and Support Tickets.",
      "Worked on API integration, responsive user experiences, testing, debugging, and resolving issues across different features.",
    ],
  },
  {
    id: 2,
    company: "Qassim Tech (QT)",
    role: "AI Systems & Agents Program",
    date: "Jun 2025 – Aug 2025",
    details: [
      "Participated in a team-based technical program focused on AI agents, multi-agent systems, and automated workflows.",
      "Contributed to an AI-powered customer support system designed to automate and improve customer interactions.",
      "Worked on a multi-agent academic platform with task notifications, attendance tracking, reporting, and meeting scheduling.",
    ],
  },
  {
    id: 3,
    company: "Alkhedr Cars Company",
    role: "Sales Consultant → Marketing Specialist → Showroom Manager",
    date: "May 2021 – May 2026",
    details: [
      "Progressed across sales, marketing, and showroom management roles over five years.",
      "Managed day-to-day showroom operations, customer relationships, and team coordination.",
      "Built practical experience in communication, problem-solving, decision-making, and business operations while pursuing my Computer Science degree.",
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
