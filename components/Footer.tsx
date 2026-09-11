"use client";

import { ArrowUp, Github, Linkedin, MessageCircle, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        background: "#030305",
        paddingTop: "4rem",
        paddingBottom: "3rem",
        position: "relative",
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem"
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "4px",
                  background: "rgba(237, 20, 91, 0.15)",
                  border: "1px solid var(--fiap-magenta)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fiap-magenta)"
                }}
              >
                <Terminal size={12} />
              </div>
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#fff"
                }}
              >
                gabrielyan<span style={{ color: "var(--fiap-magenta)" }}>.dev</span>
              </span>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                maxWidth: "450px"
              }}
            >
              Desenvolvimento Full-Stack, Engenharia de Software e Interfaces Modernas.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="GitHub"
              style={{ padding: "0.65rem" }}
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="LinkedIn"
              style={{ padding: "0.65rem" }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="WhatsApp"
              style={{ padding: "0.65rem" }}
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              style={{
                background: "var(--fiap-magenta)",
                border: "none",
                color: "#ffffff",
                borderRadius: "4px",
                width: "2.6rem",
                height: "2.6rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 0 15px rgba(237, 20, 91, 0.4)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 0 25px rgba(237, 20, 91, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 15px rgba(237, 20, 91, 0.4)";
              }}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div
          style={{
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.82rem",
            fontFamily: "monospace",
            color: "var(--text-muted)"
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} GABRIEL YAN &middot; ALL RIGHTS RESERVED
          </div>
          <div style={{ color: "var(--fiap-magenta)" }}>
            [ NEXT.JS 15 // TYPESCRIPT // REACT 19 ]
          </div>
        </div>
      </div>
    </footer>
  );
}
