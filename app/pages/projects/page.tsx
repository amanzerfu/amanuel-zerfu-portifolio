"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "../../components/ui/project-card";

const projects = [
  {
    title: "Safaricom Ethiopia Super App(Mobile Money)",
    stack: "Kotlin · Jetpack Compose · MVVM clean code archtecture, Agile",
    impact: "Serves millions of users with high availability and maintanablity.",
    role: "Led Mobile App development and ensured scalable architecture.",
  },
  {
    title: "Safaricom Ethiopia One Platform",
    stack: "Java Springboot 17,21,Event driven and  Microservice archtecture RabbitMQ Redis, Agile",
    impact: "Serves millions of users with high availability.",
    role: "Led Backend development REST apis and ensured scalable architecture.",
  },
  {
    title: "Unicash Enterprise Platform",
    stack: "JEE · wildfly server · MySQL  Monolitic Archtecture",
    impact: "Secure, reliable payment processing across enterprise clients.",
    role: "Developed REST APIs, optimized queues, and L1 support.",
  },
  {
    title: "Desta Deals (Remote) General Booking System ",
    stack: "Spring Boot · ReactJS · PostgreSQL",
    impact: "Multi-tenant platform simplifying bookings for hotel room.",
    role: "Designed backend microservices and integrated front-end booking flow.",
  },
  {
    title: "Emergency Notifier App",
    stack: "Android · Google Maps API · USSD",
    impact: "Provides real-time alerts and assistance for users in emergencies.",
    role: "Built real-time notifications and geolocation features for Android.",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          container.classList.add("fade-in-slide");
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      style={{ padding: "6rem 0", textAlign: "center", overflowX: "hidden" }}
    >
      <h1 style={{ fontSize: "3rem", color: "#c9a227", marginBottom: "3rem" }}>
        Case Studies
      </h1>

      <div
        ref={containerRef}
        className="projects-slider"
        style={{
          display: "flex",
          gap: "2rem",
          overflowX: "auto",
          padding: "1rem",
          scrollSnapType: "x mandatory",
        }}
      >
        {projects.map((p, index) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            stack={p.stack}
            impact={p.impact}
            role={p.role}
            animationDelay={index * 200}
          />
        ))}
      </div>
    </section>
  );
}
