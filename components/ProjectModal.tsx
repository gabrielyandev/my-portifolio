"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Lock, CheckCircle, Sparkles, MessageCircle, Shield, Layers, Cpu } from "lucide-react";
import { Project, personalInfo } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const images = project.galleryImages && project.galleryImages.length > 0
    ? project.galleryImages
    : [project.image];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        background: "rgba(9, 7, 20, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)"
      }}
      onClick={onClose}
    >
      <div
        className="modal-content glass-card"
        style={{
          width: "100%",
          maxWidth: "850px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--bg-card)",
          borderRadius: "16px",
          border: "1px solid var(--border-hover)",
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.7)",
          padding: 0,
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar with Close Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.25rem 1.75rem",
            borderBottom: "1px solid var(--border-color)",
            background: "var(--bg-glass)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.3rem 0.75rem",
                borderRadius: "999px",
                background: "var(--purple-subtle)",
                color: "var(--purple-primary)",
                border: "1px solid var(--border-color)",
                fontSize: "0.78rem",
                fontWeight: 700
              }}
            >
              <Lock size={12} />
              <span>{project.statusBadge}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Fechar modal"
            style={{
              background: "var(--purple-subtle)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              width: "2.25rem",
              height: "2.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-primary)",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Main Image View */}
        <div style={{ position: "relative", width: "100%", height: "360px", background: "#05040a" }}>
          <Image
            src={images[activeImageIndex]}
            alt={project.title}
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        {/* Gallery Thumbnails if multiple images */}
        {images.length > 1 && (
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              padding: "0.75rem 1.75rem",
              background: "var(--bg-secondary)",
              borderBottom: "1px solid var(--border-color)",
              overflowX: "auto"
            }}
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  position: "relative",
                  width: "90px",
                  height: "55px",
                  borderRadius: "6px",
                  overflow: "hidden",
                  border:
                    activeImageIndex === idx
                      ? "2px solid var(--purple-primary)"
                      : "1px solid var(--border-color)",
                  cursor: "pointer",
                  flexShrink: 0,
                  opacity: activeImageIndex === idx ? 1 : 0.6,
                  transition: "opacity 0.2s"
                }}
              >
                <Image src={img} alt={`Thumbnail ${idx + 1}`} fill style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body Content */}
        <div style={{ padding: "2rem 1.75rem" }}>
          <div
            style={{
              fontSize: "0.85rem",
              fontWeight: 700,
              color: "var(--purple-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "0.35rem"
            }}
          >
            {project.subtitle}
          </div>
          <h2
            style={{
              fontSize: "1.85rem",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "1rem"
            }}
          >
            {project.title}
          </h2>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              marginBottom: "1.75rem"
            }}
          >
            {project.description}
          </p>

          {/* Differentiators Box */}
          <div
            style={{
              padding: "1.25rem 1.5rem",
              borderRadius: "12px",
              background: "var(--purple-subtle)",
              border: "1px solid var(--border-color)",
              marginBottom: "1.75rem"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--purple-primary)",
                textTransform: "uppercase",
                marginBottom: "0.5rem"
              }}
            >
              <Sparkles size={16} />
              <span>Diferenciais de Engenharia & Arquitetura</span>
            </div>
            <p
              style={{
                fontSize: "0.92rem",
                color: "var(--text-primary)",
                lineHeight: 1.6
              }}
            >
              {project.diferenciais}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div style={{ marginBottom: "2rem" }}>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "0.75rem"
              }}
            >
              Tecnologias & Arquitetura Utilizadas
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    padding: "0.35rem 0.85rem",
                    borderRadius: "8px",
                    background: "var(--bg-glass)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-color)"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Privacy & Confidentiality Notice */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.75rem",
              padding: "1rem",
              borderRadius: "10px",
              background: "var(--bg-secondary)",
              border: "1px solid var(--border-color)",
              marginBottom: "2rem",
              fontSize: "0.82rem",
              color: "var(--text-muted)",
              lineHeight: 1.55
            }}
          >
            <Shield size={18} color="var(--purple-primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
            <div>
              <strong style={{ color: "var(--text-secondary)" }}>Acesso e Código Restritos:</strong> Este projeto é uma solução corporativa sob contrato de confidencialidade (NDA). Para demonstração de fluxos internos ou desenvolvimento de solução similar para sua empresa, entre em contato diretamente.
            </div>
          </div>

          {/* Footer CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <button
              onClick={onClose}
              className="btn-secondary btn-sm"
              style={{ cursor: "pointer" }}
            >
              Fechar Visualização
            </button>

            <a
              href={`https://api.whatsapp.com/send?phone=5571996504413&text=Ola%20Gabriel,%20vi%20o%20case%20do%20${encodeURIComponent(
                project.title
              )}%20no%20seu%20portfolio%20e%20gostaria%20de%20um%20orcamento%20para%20uma%20solucao%20semelhante.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm"
            >
              <MessageCircle size={16} />
              <span>Solicitar Solução Similar</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
