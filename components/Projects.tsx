"use client";

import { useState } from "react";
import Image from "next/image";
import { Lock, Eye, MessageCircle, Sparkles, CheckCircle } from "lucide-react";
import { projects, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projetos" className="section-py" style={{ position: "relative" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>PROJETOS EM DESTAQUE & CASES</span>
          </div>
          <h2 className="section-title">
            SOLUÇÕES REAIS <span className="text-gradient">DESENVOLVIDAS</span>
          </h2>
          <p className="section-subtitle">
            Aplicações corporativas completas, PWAs empacotados para mobile e landing pages de conversão construídas para resolver dores operacionais e comerciais.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
            gap: "2.5rem"
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              }}
            >
              {/* Image Thumbnail Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "230px",
                  background: "#06040b",
                  overflow: "hidden",
                  cursor: "pointer"
                }}
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "top center",
                    transition: "transform 0.4s ease"
                  }}
                  className="project-img-preview"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 55%, var(--bg-card) 100%)"
                  }}
                />

                {/* Status Badge Over Image */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.3rem 0.75rem",
                    borderRadius: "999px",
                    background: "rgba(9, 7, 20, 0.8)",
                    backdropFilter: "blur(8px)",
                    color: "#ffffff",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    border: "1px solid var(--border-color)"
                  }}
                >
                  <Lock size={12} color="var(--purple-primary)" />
                  <span>{project.statusBadge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.85rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1
                }}
              >
                {/* Category / Subtitle */}
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--purple-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "0.4rem"
                  }}
                >
                  {project.subtitle}
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    marginBottom: "0.75rem",
                    color: "var(--text-primary)"
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "1.25rem",
                    flex: 1
                  }}
                >
                  {project.description}
                </p>

                {/* Differentiators Mini Box */}
                <div
                  style={{
                    padding: "0.85rem 1rem",
                    borderRadius: "8px",
                    background: "var(--purple-subtle)",
                    border: "1px solid var(--border-color)",
                    marginBottom: "1.5rem"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--purple-primary)",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem"
                    }}
                  >
                    <Sparkles size={13} />
                    <span>Destaque & Diferencial</span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.45
                    }}
                  >
                    {project.diferenciais}
                  </div>
                </div>

                {/* Tech Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "1.5rem"
                  }}
                >
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        padding: "0.25rem 0.65rem",
                        borderRadius: "6px",
                        background: "var(--bg-glass)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-color)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginTop: "auto",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--border-color)"
                  }}
                >
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary btn-sm"
                    style={{ flex: 1, cursor: "pointer" }}
                  >
                    <Eye size={16} />
                    <span>Ver Detalhes do Case</span>
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?phone=5571996504413&text=Ola%20Gabriel,%20vi%20o%20case%20do%20${encodeURIComponent(
                      project.title
                    )}%20e%20quero%20um%20orcamento%20para%20minha%20empresa.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm"
                    title="Solicitar projeto semelhante"
                    style={{ padding: "0.55rem 0.85rem" }}
                  >
                    <MessageCircle size={17} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal for Private Projects */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
