"use client";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "6rem",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "3rem 1.5rem",
        background: "rgba(0,0,0,0.8)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        {/* Name & Role */}
        <div>
          <p style={{ fontWeight: "700", fontSize: "1.2rem", color: "#fff" }}>
            Amanuel Zerfu
          </p>
          <p style={{ fontSize: "0.9rem", color: "#ccc", marginTop: "0.25rem" }}>
            Senior Software Engineer
          </p>
        </div>

        {/* Copyright & Tech */}
        <div style={{ fontSize: "0.85rem", color: "#999", maxWidth: "800px", lineHeight: "1.6" }}>
          <p>
            © {new Date().getFullYear()} Amanuel Zerfu — Building high-performance mobile & backend ecosystems that empower millions of users worldwide.
          </p>
          <p style={{ marginTop: "0.25rem" }}>
            Built with <span style={{ color: "#c9a227", fontWeight: "600" }}>Next.js</span> &{" "}
            <span style={{ color: "#c9a227", fontWeight: "600" }}>TypeScript</span>
          </p>
        </div>

        {/* Optional: Social Links */}
        <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
          <a
            href="https://github.com/amanzerfu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#c9a227", fontWeight: "600", transition: "color 0.3s" }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/amanuel-zerfu"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#c9a227", fontWeight: "600", transition: "color 0.3s" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:acceptedamanuel@gmail.com"
            style={{ color: "#c9a227", fontWeight: "600", transition: "color 0.3s" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
