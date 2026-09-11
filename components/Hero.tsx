"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, ArrowDown, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = personalInfo.typingTexts[textIndex];
    const typingSpeed = isDeleting ? 35 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2500);
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
      <ParticleBackground />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column - Tech Introduction */}
          <div>
            {/* FIAP Style Cyber Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "4px",
                background: "rgba(237, 20, 91, 0.12)",
                border: "1px solid rgba(237, 20, 91, 0.35)",
                fontFamily: "monospace",
                fontSize: "0.82rem",
                color: "var(--fiap-magenta)",
                letterSpacing: "0.12em",
                marginBottom: "1.5rem"
              }}
            >
              <Terminal size={14} />
              <span>// FULL-STACK &middot; FRONT-END &middot; BACK-END</span>
            </div>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--text-secondary)",
                marginBottom: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.02em"
              }}
            >
              Gabriel Yan &middot; <span style={{ color: "#fff" }}>Desenvolvedor Full-Stack</span>
            </p>

            {/* Main Headline with Underscores and Typewriter */}
            <div style={{ marginBottom: "1.75rem" }}>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  color: "var(--fiap-magenta)",
                  letterSpacing: "0.3em",
                  marginBottom: "0.5rem"
                }}
              >
                ______________________________
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.2rem, 5.2vw, 3.8rem)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  minHeight: "4.5rem",
                  textTransform: "uppercase"
                }}
              >
                <span className="text-gradient">{currentText}</span>
                <span className="cursor-blink">|</span>
              </h1>

              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  color: "var(--fiap-cyan)",
                  letterSpacing: "0.3em",
                  marginTop: "0.5rem"
                }}
              >
                ______________________________
              </div>
            </div>

            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                maxWidth: "520px",
                marginBottom: "2.5rem",
                lineHeight: 1.75
              }}
            >
              Desenvolvimento de software de alta performance, arquitetura de bancos de dados relacionais e interfaces modernas focadas na experiência do usuário.
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
                <span>Ver GitHub</span>
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
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  fontFamily: "monospace",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginLeft: "0.5rem",
                  transition: "color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fiap-magenta)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <span>// Explorar Projetos</span>
              </a>
            </div>
          </div>

          {/* Right Column - Cyberpunk Profile Frame with Tech Corners */}
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
                width: "min(350px, 85vw)",
                height: "min(350px, 85vw)",
                borderRadius: "16px",
                padding: "3px",
                background: "linear-gradient(135deg, #ed145b 0%, rgba(0, 210, 255, 0.4) 50%, #7928ca 100%)",
                boxShadow: "0 0 40px -5px rgba(237, 20, 91, 0.5)"
              }}
            >
              {/* Corner Tech Decorators */}
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  left: "-8px",
                  color: "var(--fiap-magenta)",
                  fontFamily: "monospace",
                  fontSize: "1.2rem",
                  fontWeight: 900
                }}
              >
                +
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  right: "-8px",
                  color: "var(--fiap-cyan)",
                  fontFamily: "monospace",
                  fontSize: "1.2rem",
                  fontWeight: 900
                }}
              >
                +
              </div>

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "14px",
                  overflow: "hidden",
                  position: "relative",
                  background: "#08080d"
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
          href="#sobre"
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            fontFamily: "monospace",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            transition: "color 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fiap-magenta)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <span>SCROLL DOWN</span>
          <ArrowDown size={16} color="var(--fiap-magenta)" style={{ animation: "float 2s infinite" }} />
        </a>
      </div>
    </header>
  );
}
