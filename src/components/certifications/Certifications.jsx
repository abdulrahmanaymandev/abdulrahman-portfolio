import React, { useEffect, useState } from "react";
import "./certifications.css";
import certificateImage from "../../assets/meta-front-end-certificate.PNG";
import {
  RiAwardLine,
  RiCloseLine,
  RiExternalLinkLine,
  RiImageLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const certificationsData = [
  {
    id: 1,
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    platform: "Coursera",
    date: "Jun 2026",
    focusAreas:
      "Front-End Development, React.js, JavaScript, UI Development",
    description:
      "Completed a professional certificate focused on building responsive, user-focused front-end applications using modern web development practices.",
    skills: ["React.js", "JavaScript", "Front-End", "UI Development"],
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/3SFNFJ7K8UAF",
    image: certificateImage,
    verified: true,
  },
];

function Certifications() {
  const [previewCertificate, setPreviewCertificate] = useState(null);

  useEffect(() => {
    document.body.classList.toggle(
      "modal-open",
      Boolean(previewCertificate),
    );

    const handleEscape = (event) => {
      if (event.key === "Escape") setPreviewCertificate(null);
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [previewCertificate]);

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certificates and learning milestones that support my
            software engineering journey.
          </p>
        </div>

        <div className="certifications_timeline reveal-stagger">
          {certificationsData.map((certificate) => (
            <article key={certificate.id} className="certification_card">
              <div className="certification_marker" aria-hidden="true">
                <RiAwardLine />
              </div>

              <div className="certification_content">
                <div className="certification_topline">
                  <div className="certification_icon">
                    <RiAwardLine />
                  </div>
                  {certificate.verified && (
                    <span className="certification_badge">
                      <RiShieldCheckLine />
                      Verified Credential
                    </span>
                  )}
                </div>

                <div className="certification_main">
                  <div className="certification_copy">
                    <p className="certification_meta">
                      {certificate.issuer} / {certificate.platform} /{" "}
                      {certificate.date}
                    </p>
                    <h3>{certificate.title}</h3>
                    <p className="certification_focus">
                      Focus areas: {certificate.focusAreas}
                    </p>
                    <p className="certification_desc">
                      {certificate.description}
                    </p>

                    <div className="certification_tags">
                      {certificate.skills.map((skill) => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </div>

                  {certificate.image && (
                    <button
                      type="button"
                      className="certificate_thumbnail"
                      onClick={() => setPreviewCertificate(certificate)}
                      aria-label={`Preview ${certificate.title}`}
                    >
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} preview`}
                      />
                      <span>
                        <RiImageLine />
                        Preview
                      </span>
                    </button>
                  )}
                </div>

                <div className="certification_actions">
                  <a
                    className="certification_action primary"
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate
                    <RiExternalLinkLine />
                  </a>
                  {certificate.image && (
                    <button
                      type="button"
                      className="certification_action"
                      onClick={() => setPreviewCertificate(certificate)}
                    >
                      Preview Certificate
                      <RiImageLine />
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {previewCertificate && (
        <div
          className="certificate_modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${previewCertificate.title} certificate preview`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setPreviewCertificate(null);
            }
          }}
        >
          <div className="certificate_modal_panel">
            <div className="certificate_modal_header">
              <div>
                <span>Certificate Preview</span>
                <h3>{previewCertificate.title}</h3>
              </div>
              <button
                type="button"
                className="certificate_modal_close"
                onClick={() => setPreviewCertificate(null)}
                aria-label="Close certificate preview"
              >
                <RiCloseLine />
              </button>
            </div>
            <div className="certificate_modal_image">
              <img
                src={previewCertificate.image}
                alt={`${previewCertificate.title} certificate`}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
