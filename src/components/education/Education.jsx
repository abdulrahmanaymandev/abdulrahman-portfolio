import React, { useState } from "react";
import "./education.css";
import degreeImage from "../../assets/Qassim_University_Degree.jpg";
import { RiGraduationCapLine } from "react-icons/ri";
import {
  CredentialModal,
  CredentialThumbnail,
} from "../credential/CredentialPreview";

function Education() {
  const [previewDegree, setPreviewDegree] = useState(false);
  const degreeCredential = {
    source: degreeImage,
    type: "image",
    title: "Qassim University Degree",
    altText: "Qassim University Bachelor of Science in Computer Science degree",
    modalLabel: "Degree Preview",
  };

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
          <div className="education_content">
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
          </div>

          <CredentialThumbnail
            {...degreeCredential}
            previewLabel="Preview Degree"
            className="education_credential_thumbnail"
            onPreview={() => setPreviewDegree(true)}
          />
        </article>
      </div>

      <CredentialModal
        credential={previewDegree ? degreeCredential : null}
        onClose={() => setPreviewDegree(false)}
      />
    </section>
  );
}

export default Education;
