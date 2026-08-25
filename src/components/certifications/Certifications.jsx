import React, { useState } from "react";
import "./certifications.css";
import certificateImage from "../../assets/meta-front-end-certificate.PNG";
import {
  CredentialModal,
  CredentialThumbnail,
} from "../credential/CredentialPreview";
import {
  RiAwardLine,
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

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-tag">Credentials</p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Professional certifications and continuous learning in software
            development.
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
                    <CredentialThumbnail
                      source={certificate.image}
                      title={certificate.title}
                      altText={`${certificate.title} preview`}
                      className="meta_certificate_thumbnail"
                      onPreview={() => setPreviewCertificate(certificate)}
                    />
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

      <CredentialModal
        credential={
          previewCertificate
            ? {
                source: previewCertificate.image,
                title: previewCertificate.title,
                altText: `${previewCertificate.title} certificate`,
                modalLabel: "Certificate Preview",
              }
            : null
        }
        onClose={() => setPreviewCertificate(null)}
      />
    </section>
  );
}

export default Certifications;
