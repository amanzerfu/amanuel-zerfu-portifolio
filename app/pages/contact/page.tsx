"use client";

import CONTACT_OPTION from "@/app/hooks/ui/sociallinks";
import { Console } from "node:console";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Animate card on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "6rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "800",
          color: "#c9a227",
          marginBottom: "1rem",
        }}
      >
        Contact
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          color: "#ccc",
          marginBottom: "3rem",
          maxWidth: "800px",
        }}
      >
        Open to senior engineering roles, consulting, and system design leadership. 
        Let’s build scalable mobile and backend systems together!
      </p>

      {/* Contact Card */}
      <div
        ref={cardRef}
        className={`contact-card ${visible ? "fade-in" : ""}`}
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "3rem",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          transition: "transform 0.6s ease, opacity 0.6s ease",
          opacity: 0,
        }}
      >
        <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:acceptedamanuel@gmail.com"
            style={{ color: "#c9a227", textDecoration: "underline" }}
          >
            acceptedamanuel@gmail.com
          </a>
        </p>
        <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
          <strong>Phone:</strong>{" "}
          <a
            href={CONTACT_OPTION.EMAIL}
            style={{ color: "#c9a227", textDecoration: "underline" }}
          >
            {CONTACT_OPTION.PHONE_NUMBER}
          </a>
        </p>

        <p style={{ fontSize: "1.1rem", color: "#ccc", marginBottom: "2rem" }}>
          Addis Ababa, Ethiopia · Remote Friendly
        </p>

        {/* Social Media Links */}
        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          <a
            href={CONTACT_OPTION.GIT_HUB}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#c9a227",
              fontWeight: "600",
              fontSize: "1.2rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd700")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#c9a227")}
          >
            GitHub
          </a>
          <a
            href={CONTACT_OPTION.LINKED_IN}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#c9a227",
              fontWeight: "600",
              fontSize: "1.2rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd700")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#c9a227")}
          >
            LinkedIn
          </a>
          <a
            href={CONTACT_OPTION.EMAIL}
            style={{
              color: "#c9a227",
              fontWeight: "600",
              fontSize: "1.2rem",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffd700")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#c9a227")}
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
