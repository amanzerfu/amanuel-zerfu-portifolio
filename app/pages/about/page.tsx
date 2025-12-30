"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add("fade-in");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      style={{ padding: "6rem 0", textAlign: "center", position: "relative" }}
    >
      <h2 style={{ fontSize: "3rem", color: "#c9a227", marginBottom: "2rem" }}>
        About Me
      </h2>

      <div
        ref={cardRef}
        className="about-card"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "3rem",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          transition: "transform 0.6s ease, opacity 0.6s ease",
          opacity: 0,
        }}
      >
        <p
          style={{
            fontSize: "1.2rem",
            color: "#ccc",
            lineHeight: "1.8",
          }}
        >
          I turn your business ideas into high-quality software. <br />
          You focus on running your company, I handle the tech. <br />
          Together, we build scalable, user-friendly solutions that drive growth. <br />
          Let’s make your vision a reality with clean, efficient code.
        </p>
      </div>
    </section>
  );
}
