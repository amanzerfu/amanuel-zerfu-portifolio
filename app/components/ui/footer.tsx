"use client";
import CONTACT_OPTION from "@/app/hooks/ui/sociallinks";
import SocialLinks from "./frequenticons";

export default function Footer() {
    return (
        <footer
            style={{
                marginTop: "6rem",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                padding: "3rem 1.5rem",
                background: "rgba(0,0,0,0.8)",
                backdropFilter: "blur(10px)",
            }}>
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
                }}>
                
                <div style={{ fontSize: "0.85rem", color: "#999", maxWidth: "800px", lineHeight: "1.6" }}>
                    <p>
                        © {new Date().getFullYear()} {CONTACT_OPTION.NAME} — Building high-performance mobile & backend ecosystems that empower millions of users worldwide.
                    </p>
                </div>
               <SocialLinks/>
            </div>
        </footer>
    );
}
