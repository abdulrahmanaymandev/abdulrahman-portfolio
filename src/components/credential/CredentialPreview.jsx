import React, { useEffect } from "react";
import { RiCloseLine, RiExternalLinkLine, RiImageLine } from "react-icons/ri";
import "./credentialPreview.css";

export function CredentialThumbnail({
  source,
  thumbnailSource,
  title,
  altText,
  previewLabel = "Preview",
  className = "",
  onPreview,
}) {
  const previewSource = thumbnailSource || source;

  return (
    <button
      type="button"
      className={`certificate_thumbnail ${className}`.trim()}
      onClick={onPreview}
      aria-label={`${previewLabel} ${title}`}
    >
      <img src={previewSource} alt={altText} />
      <span>
        <RiImageLine />
        {previewLabel}
      </span>
    </button>
  );
}

export function CredentialModal({ credential, onClose }) {
  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(credential));

    const handleEscape = (event) => {
      if (event.key === "Escape" && credential) onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [credential, onClose]);

  if (!credential) return null;

  const {
    source,
    type = "image",
    title,
    altText,
    modalLabel = "Credential Preview",
    fullViewLabel = "Open Full PDF",
  } = credential;
  const pdfPreviewUrl = `${source}#page=1&zoom=page-fit&toolbar=0&navpanes=0`;

  return (
    <div
      className="certificate_modal"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} preview`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className={`certificate_modal_panel ${
          type === "pdf" ? "credential_pdf_modal_panel" : ""
        }`.trim()}
      >
        <div className="certificate_modal_header">
          <div>
            <span>{modalLabel}</span>
            <h3>{title}</h3>
          </div>
          <button
            type="button"
            className="certificate_modal_close"
            onClick={onClose}
            aria-label="Close credential preview"
          >
            <RiCloseLine />
          </button>
        </div>

        {type === "pdf" ? (
          <>
            <div className="certificate_modal_document">
              <iframe src={pdfPreviewUrl} title={`${title} PDF preview`} />
            </div>
            <div className="certificate_modal_footer">
              <a
                className="certification_action"
                href={source}
                target="_blank"
                rel="noreferrer"
              >
                {fullViewLabel}
                <RiExternalLinkLine />
              </a>
            </div>
          </>
        ) : (
          <div className="certificate_modal_image">
            <img src={source} alt={altText} />
          </div>
        )}
      </div>
    </div>
  );
}
