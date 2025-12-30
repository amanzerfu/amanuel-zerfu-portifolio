"use client";

import { useTheme } from "@/app/providers/theme-provider";
import Routes from "@/app/hooks/ui/routes";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 4rem",
        background: "rgba(0,0,0,0.7)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        transition: "background 0.3s",
      }}
    >
      {/* Logo / Name */}
      <span
        style={{
          fontWeight: "700",
          fontSize: "1.5rem",
          color: "#c9a227",
          cursor: "pointer",
        }}
      >
        Amanuel Zerfu
      </span>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "center",
          fontWeight: 500,
        }}
      >
        {[
          { name: "Home", path: Routes.HOME },
          { name: "About", path: Routes.ABOUT },
          { name: "Projects", path: Routes.PROJECTS },
          { name: "Contact", path: Routes.CONTACT },
        ].map((link) => (
          <a
            key={link.name}
            href={link.path}
            style={{
              color: "var(--muted)",
              textDecoration: "none",
              position: "relative",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c9a227")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {link.name}
            <span
              style={{
                content: '""',
                position: "absolute",
                left: 0,
                bottom: "-4px",
                height: "2px",
                width: "0%",
                backgroundColor: "#c9a227",
                transition: "width 0.3s",
              }}
            />
          </a>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            padding: "0.4rem 1rem",
            borderRadius: "8px",
            border: "1px solid #c9a227",
            background: "transparent",
            color: "#c9a227",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}
