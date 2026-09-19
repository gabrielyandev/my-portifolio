"use client";

import { ArrowUp, Github, Linkedin, MessageCircle, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        background: "var(--bg-secondary)",
        paddingTop: "4.5rem",
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
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "6px",
                  background: "var(--purple-subtle)",
                  border: "1px solid var(--purple-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--purple-primary)"
                }}
              >
                <Code2 size={14} />
              </div>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "var(--text-primary)"
                }}
              >
                gabrielyan<span style={{ color: "var(--purple-primary)" }}>.dev</span>
              </span>
            </div>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--text-secondary)",
                maxWidth: "480px"
              }}
            >
              Desenvolvimento de Sistemas Web Sob Medida, Dashboards, PWAs e Landing Pages de Alta Conversão.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="GitHub de Gabriel Yan"
              style={{ padding: "0.65rem" }}
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="LinkedIn de Gabriel Yan"
              style={{ padding: "0.65rem" }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="WhatsApp de Gabriel Yan"
              style={{ padding: "0.65rem" }}
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              style={{
                background: "var(--gradient-main)",
                border: "none",
                color: "#ffffff",
                borderRadius: "10px",
                width: "2.75rem",
                height: "2.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: "0 4px 15px var(--purple-glow)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 25px var(--purple-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px var(--purple-glow)";
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
            color: "var(--text-muted)"
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Gabriel Yan &middot; Todos os direitos reservados.
          </div>
          <div style={{ color: "var(--purple-primary)", fontWeight: 600 }}>
            Next.js &middot; TypeScript &middot; React &middot; Purple Theme
          </div>
        </div>
      </div>
    </footer>
  );
}
