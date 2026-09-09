"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, Terminal } from "lucide-react";
import { projects } from "@/data/portfolioData";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filterOptions = ["Todos", "Landing Page", "React", "JavaScript", "Tools"];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) =>
          p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
        );

  return (
    <section id="projetos" className="section-py" style={{ background: "transparent" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// 04 . PROJETOS EM DESTAQUE</div>
          <h2 className="section-title">
            <span className="text-gradient">SHOWCASE DE APLICAÇÕES</span>
          </h2>
          <p className="section-subtitle">
            Soluções completas com deploy ativo, código versionado e foco em usabilidade.
          </p>

          {/* Filter Pills with Tech styling */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.6rem",
              marginTop: "2.25rem"
            }}
          >
            {filterOptions.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: "0.5rem 1.25rem",
                    borderRadius: "4px",
                    border: isActive ? "1px solid var(--fiap-magenta)" : "1px solid rgba(255, 255, 255, 0.1)",
                    background: isActive ? "var(--fiap-magenta)" : "rgba(255, 255, 255, 0.03)",
                    color: "#ffffff",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    fontFamily: "monospace",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    boxShadow: isActive ? "0 0 15px rgba(237, 20, 91, 0.5)" : "none"
                  }}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "2.25rem"
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden"
              }}
            >
              {/* Image Preview with overlay */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "210px",
                  background: "#08080d",
                  overflow: "hidden"
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.4s ease"
                  }}
                  className="project-img-preview"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 60%, rgba(12, 12, 18, 0.95) 100%)"
                  }}
                />
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1
                }}
              >
                {/* Tech Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    marginBottom: "0.85rem"
                  }}
                >
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "3px",
                        background: "rgba(237, 20, 91, 0.12)",
                        color: "var(--fiap-magenta)",
                        border: "1px solid rgba(237, 20, 91, 0.3)"
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "#ffffff"
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "1.75rem",
                    flex: 1
                  }}
                >
                  {project.description}
                </p>

                {/* Card Action Links */}
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary btn-sm"
                    style={{ flex: 1 }}
                  >
                    <ExternalLink size={15} />
                    <span>Ver Projeto</span>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary btn-sm"
                    aria-label={`Código fonte de ${project.title}`}
                    style={{ padding: "0.55rem 0.85rem" }}
                  >
                    <Github size={17} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
