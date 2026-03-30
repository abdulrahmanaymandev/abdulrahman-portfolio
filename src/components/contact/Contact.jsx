import React, { useRef, useState } from "react";
import "./contact.css";
import { RiMailLine, RiWhatsappLine, RiSendPlaneLine } from "react-icons/ri";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const contactCards = [
  {
    id: 1,
    icon: <RiMailLine />,
    title: "Email",
    value: "abdulrahman.ayman.dev@gmail.com",
    href: "mailto:abdulrahman.ayman.dev@gmail.com",
  },
  {
    id: 2,
    icon: <RiWhatsappLine />,
    title: "WhatsApp",
    value: "0554672215",
    href: "https://api.whatsapp.com/send?phone=966554672215",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    title: "LinkedIn",
    value: "Abdulrahman Ayman",
    href: "https://www.linkedin.com/in/abdulrahman-ayman-51a22235b",
  },
  {
    id: 4,
    icon: <FaGithub />,
    title: "GitHub",
    value: "abdulrahmanaymandev",
    href: "https://github.com/abdulrahmanaymandev",
  },
];

function Contact() {
  const form = useRef();
  const [sendStatus, setSendStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSendStatus("sending");

    const formData = new FormData(form.current);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/abdulrahman.ayman.dev@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        },
      );
      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setSendStatus("success");
        form.current.reset();
        setTimeout(() => setSendStatus(null), 4000);
      } else {
        setSendStatus("error");
        setTimeout(() => setSendStatus(null), 4000);
      }
    } catch {
      setSendStatus("error");
      setTimeout(() => setSendStatus(null), 4000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <p className="section-tag">Get In Touch</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? I'd love to hear from
            you.
          </p>
        </div>

        <div className="contact_wrapper">
          {/* Left Info */}
          <div className="contact_info">
            <p className="contact_intro">
              I'm currently available for freelance projects and full-time
              opportunities. Reach out through any of the channels below.
            </p>

            {contactCards.map(({ id, icon, title, value, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="contact_card"
              >
                <div className="contact_card_icon">{icon}</div>
                <div className="contact_card_body">
                  <h4>{title}</h4>
                  <p>{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Form */}
          <div className="contact_form_wrap">
            <h3 className="contact_form_title">Send a Message</h3>
            <p className="contact_form_sub">
              Fill out the form and I'll get back to you shortly.
            </p>

            <form ref={form} onSubmit={sendEmail} className="contact_form">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="form_row">
                <div className="form_group">
                  <label htmlFor="contact_name">Full Name</label>
                  <input
                    id="contact_name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form_group">
                  <label htmlFor="contact_email">Email Address</label>
                  <input
                    id="contact_email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form_group">
                <label htmlFor="contact_message">Message</label>
                <textarea
                  id="contact_message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              {sendStatus === "success" && (
                <p className="form_status success">
                  ✅ Message sent successfully! I'll be in touch soon.
                </p>
              )}
              {sendStatus === "error" && (
                <p className="form_status error">
                  ❌ Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                className="btn_submit"
                disabled={sendStatus === "sending"}
              >
                <span>
                  <RiSendPlaneLine />
                  {sendStatus === "sending" ? " Sending..." : " Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
