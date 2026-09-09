"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
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
    <section id="projetos" className="section-py">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Showcase</span>
          <h2 className="section-title">
            <span className="text-gradient">Projetos em Destaque</span>
          </h2>
          <p className="section-subtitle">
            Aplicações reais, interfaces responsivas e utilitários que desenvolvi com foco em usabilidade e performance.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              marginTop: "2rem"
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
                    borderRadius: "9999px",
                    border: isActive ? "1px solid var(--accent-purple)" : "1px solid var(--border-color)",
                    background: isActive ? "var(--gradient-main)" : "var(--bg-card)",
                    color: isActive ? "#ffffff" : "var(--text-secondary)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
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
            gap: "2rem"
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
              {/* Project Image Preview */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "210px",
                  background: "var(--bg-secondary)",
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
              </div>

              {/* Card Content */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1
                }}
              >
                {/* Tags */}
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
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "9999px",
                        background: "rgba(168, 85, 247, 0.12)",
                        color: "var(--accent-purple)"
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem"
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "1.5rem",
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
                    paddingTop: "1rem",
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
                    style={{ padding: "0.5rem 0.75rem" }}
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
