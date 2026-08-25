import React from "react";
import "./education.css";
import { RiGraduationCapLine } from "react-icons/ri";

function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation and achievements in Computer Science.
          </p>
        </div>

        <article className="education_card reveal">
          <div className="education_icon" aria-hidden="true">
            <RiGraduationCapLine />
          </div>
          <div className="education_details">
            <h3>Bachelor of Science in Computer Science</h3>
            <p className="education_university">Qassim University</p>
            <div className="education_meta">
              <span>2021 – 2026</span>
              <span>GPA: 4.93 / 5.00</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
