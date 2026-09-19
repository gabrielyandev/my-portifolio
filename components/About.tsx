"use client";

import { Github, Linkedin, MapPin, Target, Database, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={20} color="var(--purple-primary)" />,
      title: "DESENVOLVIMENTO",
      desc: "Full-Stack Web & PWAs"
    },
    {
      icon: <Database size={20} color="var(--purple-primary)" />,
      title: "BANCOS DE DADOS",
      desc: "MySQL, Postgres & Firebird"
    },
    {
      icon: <MapPin size={20} color="var(--purple-primary)" />,
      title: "LOCALIZAÇÃO",
      desc: "Salvador, BA - Brasil"
    },
    {
      icon: <Target size={20} color="var(--purple-primary)" />,
      title: "FOCO TÉCNICO",
      desc: "Engenharia de Software"
    }
  ];

  return (
    <section id="sobre" className="section-py" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>SOBRE MIM & PERFIL</span>
          </div>
          <h2 className="section-title">
            COMPROMISSO COM <span className="text-gradient">EXCELÊNCIA TÉCNICA</span>
          </h2>
          <p className="section-subtitle">
            {personalInfo.bioTitle}
          </p>
        </div>

        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div className="glass-card" style={{ padding: "2.75rem 2.25rem" }}>
            <p
              style={{
                fontSize: "1.08rem",
                lineHeight: "1.85",
                color: "var(--text-secondary)",
                marginBottom: "2.25rem"
              }}
            >
              {personalInfo.bioDescription}
            </p>

            {/* Highlights Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.25rem",
                paddingTop: "2rem",
                borderTop: "1px solid var(--border-color)",
                marginBottom: "2.25rem"
              }}
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    padding: "0.85rem 1rem",
                    borderRadius: "10px",
                    background: "var(--bg-glass)",
                    border: "1px solid var(--border-color)"
                  }}
                >
                  <div
                    style={{
                      padding: "0.55rem",
                      borderRadius: "8px",
                      background: "var(--purple-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                        letterSpacing: "0.06em",
                        fontWeight: 700
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--text-primary)",
                        fontWeight: 700
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Connect Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "1.25rem",
                alignItems: "center"
              }}
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-sm"
              >
                <Linkedin size={16} />
                <span>Perfil Profissional no LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-sm"
              >
                <Github size={16} />
                <span>Repositórios no GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
