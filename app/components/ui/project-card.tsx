"use client";

import { useEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  stack: string;
  impact: string;
  role: string;
  animationDelay?: number;
}

export default function ProjectCard({
  title,
  stack,
  impact,
  role,
  animationDelay = 0,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.style.transition = `transform 0.6s ease ${animationDelay}ms, opacity 0.6s ease ${animationDelay}ms`;
          card.classList.add("fade-in-up");
          observer.unobserve(card);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [animationDelay]);

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{
        minWidth: "400px", // wider card
        maxWidth: "450px",
        padding: "2.5rem",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        cursor: "pointer",
        opacity: 0,
        transform: "translateY(30px)",
        scrollSnapAlign: "center",
        flexShrink: 0,
      }}
    >
      <h3 style={{ fontSize: "1rem", color: "#c9a227", marginBottom: "0.7rem" }}>
        {title}
      </h3>
      <p style={{ fontSize: "1.05rem", fontWeight: "500", marginBottom: "0.5rem", color:"#eee" }}>
        {stack}
      </p>
      <p style={{ fontSize: "0.95rem", color: "#ccc", marginBottom: "0.5rem" }}>
        {impact}
      </p>
      <p style={{ fontSize: "0.85rem", color: "#aaa" }}>{role}</p>
    </div>
  );
}
