"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, ArrowDown, ArrowRight, MessageCircle, Sparkles, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = personalInfo.typingTexts[textIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % personalInfo.typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <header
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "7.5rem",
        paddingBottom: "5rem",
        overflow: "hidden"
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column - Presentation & Conversion CTA */}
          <div>
            {/* Availability Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.4rem 0.95rem",
                borderRadius: "999px",
                background: "var(--purple-subtle)",
                border: "1px solid var(--border-color)",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "var(--purple-primary)",
                marginBottom: "1.5rem"
              }}
            >
              <div className="pulse-status" />
              <span>{personalInfo.badge}</span>
            </div>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-secondary)",
                marginBottom: "0.6rem",
                fontWeight: 600,
                letterSpacing: "-0.01em"
              }}
            >
              Olá, sou <span style={{ color: "var(--text-primary)" }}>{personalInfo.name}</span> &mdash; Full-Stack Developer
            </p>

            {/* Dynamic Typewriter Headline */}
            <div style={{ marginBottom: "1.5rem" }}>
              <h1
                style={{
                  fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
                  fontWeight: 900,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  minHeight: "4.5rem"
                }}
              >
                Desenvolvo <br />
                <span className="text-gradient">{currentText}</span>
                <span className="cursor-blink">|</span>
              </h1>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                maxWidth: "540px",
                marginBottom: "2.5rem",
                lineHeight: 1.75
              }}
            >
              Engenharia de software aplicada para criar sistemas web completos, dashboards com métricas em tempo real, PWAs multiplataforma e landing pages de alta conversão.
            </p>

            {/* Action Buttons with Direct Conversion */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center"
              }}
            >
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle size={18} />
                <span>Solicitar Orçamento de Projeto</span>
              </a>

              <a
                href="#servicos"
                className="btn-secondary"
              >
                <span>Conhecer Serviços</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Social Proof & Profiles */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-color)"
              }}
            >
              <span
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
              >
                Conecte-se:
              </span>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <Github size={17} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  transition: "color 0.2s"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <Linkedin size={17} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Card in Purple Frame */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              className="floating-element"
              style={{
                position: "relative",
                width: "min(360px, 85vw)",
                height: "min(360px, 85vw)",
                borderRadius: "24px",
                padding: "3px",
                background: "var(--gradient-main)",
                boxShadow: "var(--shadow-glow)"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "21px",
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--bg-secondary)"
                }}
              >
                <Image
                  src={personalInfo.profileImage}
                  alt={`Foto de ${personalInfo.name}`}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top"
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
          position: "relative",
          zIndex: 1
        }}
      >
        <a
          href="#servicos"
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "var(--text-muted)",
            fontSize: "0.76rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            transition: "color 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple-primary)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <span>CONHEÇA AS SOLUÇÕES</span>
          <ArrowDown size={16} color="var(--purple-primary)" style={{ animation: "float 2s infinite" }} />
        </a>
      </div>
    </header>
  );
}
