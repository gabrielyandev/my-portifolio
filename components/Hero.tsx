"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = personalInfo.typingTexts[textIndex];
    const typingSpeed = isDeleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          // Pause before starting deletion
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        // Deleting
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
        alignItems: "center",
        paddingTop: "6.5rem",
        paddingBottom: "4rem",
        overflow: "hidden"
      }}
    >
      <ParticleBackground />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center"
          }}
          className="hero-grid"
        >
          {/* Left Column - Intro */}
          <div>
            <div className="badge-pill">
              <Sparkles size={14} />
              <span>{personalInfo.badge}</span>
            </div>

            <p
              style={{
                fontSize: "1.2rem",
                color: "var(--text-secondary)",
                marginBottom: "0.5rem",
                fontWeight: 500
              }}
            >
              Olá, eu sou <strong style={{ color: "var(--text-primary)" }}>{personalInfo.name}</strong>. Um ser humano apaixonado
            </p>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                minHeight: "4rem",
                marginBottom: "1.5rem"
              }}
            >
              <span className="text-gradient">{currentText}</span>
              <span className="cursor-blink">|</span>
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                maxWidth: "540px",
                marginBottom: "2rem",
                lineHeight: 1.7
              }}
            >
              Construo experiências digitais envolventes, acessíveis e focadas em desempenho. Da modelagem de dados à interface interativa no front-end.
            </p>

            {/* Action buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                alignItems: "center"
              }}
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href="#projetos"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  marginLeft: "0.5rem",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <span>Ver Projetos</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image Frame */}
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
                width: "min(340px, 85vw)",
                height: "min(340px, 85vw)",
                borderRadius: "2.5rem",
                padding: "8px",
                background: "var(--gradient-main)",
                boxShadow: "0 20px 50px -10px var(--glow-purple)"
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "2.2rem",
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
    </header>
  );
}
