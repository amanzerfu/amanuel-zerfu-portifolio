"use client";

import { useRouter } from "next/navigation";
import AppRoutes from "./hooks/ui/routes";
import CompanySlider from "./components/ui/CompanySlider";
import CONTACT_OPTION from "./hooks/ui/sociallinks";
import SkillSlider from "./components/ui/SkillSlider";

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
        {CONTACT_OPTION.NAME}
      </h1>

      <p
        style={{
          color: "#c9a227",
          fontSize: "1.75rem",
          fontWeight: "500",
          marginBottom: "2rem",
        }}
      >
        {CONTACT_OPTION.TITLE}
      </p>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          onClick={() => router.push(AppRoutes.CONTACT)}
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
          onClick={() => router.push(AppRoutes.PROJECTS)}
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


<div style={{ width: "100%", marginTop: "3rem" }}>
  <SkillSlider />
</div>
    </main>
  );
}
