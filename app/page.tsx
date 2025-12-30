"use client";

import { useRouter } from "next/navigation";
import Routes from "./hooks/ui/routes";

export default function Home() {
  const router = useRouter();

  return (
    <main
      id="home"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4rem 2rem",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "800",
          letterSpacing: "1px",
          marginBottom: "1rem",
          lineHeight: "1.2",
        }}
      >
        Amanuel Zerfu
      </h1>

      <p
        style={{
          color: "#c9a227",
          fontSize: "1.75rem",
          fontWeight: "500",
          marginBottom: "2rem",
        }}
      >
        Senior Android & Backend Engineer
      </p>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => router.push(Routes.CONTACT)}
          style={{
            padding: "1rem 2.5rem",
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#fff",
            background: "linear-gradient(90deg, #c9a227, #ffdd55)",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(201, 162, 39, 0.4)",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          Contact Me
        </button>

        <button
          onClick={() => router.push(Routes.PROJECTS)}
          style={{
            padding: "1rem 2.5rem",
            fontSize: "1.2rem",
            fontWeight: "600",
            color: "#c9a227",
            background: "transparent",
            border: "2px solid #c9a227",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#c9a227";
            e.currentTarget.style.color = "#000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#c9a227";
          }}
        >
          View Projects
        </button>
      </div>

      {/* Professional footer-style copyright */}
    </main>
  );
}
