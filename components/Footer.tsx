"use client";

import { ArrowUp, Github, Linkedin, MessageCircle, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-color)",
        background: "var(--bg-primary)",
        paddingTop: "3.5rem",
        paddingBottom: "2.5rem"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2rem"
          }}
        >
          <div>
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: 800,
                letterSpacing: "-0.03em"
              }}
              className="text-gradient"
            >
              {personalInfo.handle}
            </span>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                marginTop: "0.25rem"
              }}
            >
              Desenvolvedor Full-Stack, DBA e entusiasta de interfaces modernas.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="GitHub"
              style={{ padding: "0.6rem" }}
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="LinkedIn"
              style={{ padding: "0.6rem" }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary btn-sm"
              aria-label="WhatsApp"
              style={{ padding: "0.6rem" }}
            >
              <MessageCircle size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              style={{
                background: "var(--gradient-main)",
                border: "none",
                color: "#ffffff",
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                boxShadow: "0 4px 14px rgba(168, 85, 247, 0.4)"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-3px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid var(--border-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            fontSize: "0.85rem",
            color: "var(--text-muted)"
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            Construído com Next.js, React e TypeScript{" "}
            <Heart size={13} color="#ec4899" fill="#ec4899" />
          </div>
        </div>
      </div>
    </footer>
  );
}
