"use client";

import CONTACT_OPTION from "@/app/hooks/ui/sociallinks";
import Phone from "@mui/icons-material/Phone";
import Location from "@mui/icons-material/LocationCity";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import { useEffect, useRef, useState } from "react";
import Telegram from "@mui/icons-material/Telegram";

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "6rem 1.5rem",
        background: "linear-gradient(135deg, #0a0a0a, #1b1b1b)",
        display: "flex",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1100px", width: "100%" }}>
        {/* Header */}
        <header style={{ marginBottom: "4rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "3rem", color: "#c9a227", fontWeight: 800 }}>
            Let’s Build Something Great
          </h1>
          <p
            style={{
              maxWidth: "700px",
              margin: "1.2rem auto 0",
              fontSize: "1.3rem",
              color: "#ccc",
              lineHeight: 1.6,
            }}
          >
            Have an idea, a product, or a complex system to build? <br />
            This is your starting point. Choose how you want to connect.
          </p>
        </header>

        {/* Contact Card */}
        <div
          ref={cardRef}
          className={visible ? "fade-in-up" : ""}
          style={{
            maxWidth: "1900px",
            margin: "0 auto",
            padding: "3rem",
            borderRadius: "24px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(14px)",
            opacity: 0,
            transform: "translateY(30px)",
          }}
        >
          {/* Mission Text */}
          <p
            style={{
              fontSize: "1.15rem",
              color: "#ddd",
              marginBottom: "2.5rem",
              lineHeight: 1.7,
            }}
          >
            <strong>Current mission:</strong> helping Organizations turn
            business logic into scalable, production-ready software.
          </p>

          {/* Contact Actions */}
          <div style={{ display: "grid", gap: "1.5rem" }}>
            <ContactRow
              icon={<Email />}
              label="Start a conversation"
              value="acceptedamanuel@gmail.com"
              href={CONTACT_OPTION.EMAIL}
            />

            <ContactRow
              icon={<Phone />}
              label="Quick call / WhatsApp"
              value={CONTACT_OPTION.PHONE_NUMBER}
              href="#"
            />

            <ContactRow
              icon={<Location />}
              label="Location"
              value="Addis Ababa, Ethiopia · Remote Friendly"
            />

          </div>

          {/* Social Proof */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
            }}
          >
            <SocialIcon href={CONTACT_OPTION.GIT_HUB} icon={<GitHub />} />
            <SocialIcon href={CONTACT_OPTION.LINKED_IN} icon={<LinkedIn />} />
            <SocialIcon href={CONTACT_OPTION.EMAIL} icon={<Email />} />
            <SocialIcon href={CONTACT_OPTION.TELEGRAM} icon={<Telegram />} />
          </div>
        </div>
      </div>
    </section>
  );
}



function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1.2rem 1.5rem",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.04)",
        transition: "transform 0.3s ease, background 0.3s ease",
      }}
      className="contact-row"
    >
      <span style={{ color: "#c9a227" }}>{icon}</span>
      <div style={{ textAlign: "left" }}>
        <div style={{ fontSize: "0.9rem", color: "#aaa" }}>{label}</div>
        <div style={{ fontSize: "1.1rem", color: "#fff" }}>{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} style={{ textDecoration: "none" }}>
      {content}
    </a>
  ) : (
    content
  );
}

function SocialIcon({
  href,
  icon,
}: {
  href: string;
  icon: JSX.Element;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#c9a227",
        fontSize: "1.6rem",
        transition: "transform 0.3s ease, color 0.3s ease",
      }}
      className="social-icon"
    >
      {icon}
    </a>
  );
}
