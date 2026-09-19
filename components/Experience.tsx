"use client";

import { Briefcase, GraduationCap, Download, Calendar, MapPin } from "lucide-react";
import { experiences, educations, personalInfo } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="resumo" className="section-py" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>TRAJETÓRIA TÉCNICA</span>
          </div>
          <h2 className="section-title">
            EXPERIÊNCIA & <span className="text-gradient">FORMAÇÃO</span>
          </h2>
          <p className="section-subtitle">
            Histórico profissional no mercado de tecnologia e base acadêmica sólida em Engenharia de Software.
          </p>

          <div style={{ marginTop: "1.75rem" }}>
            <a
              href={personalInfo.cvPath}
              download="Curriculo_Gabriel_Yan.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Download size={18} />
              <span>Baixar Currículo em PDF</span>
            </a>
          </div>
        </div>

        <div className="experience-grid">
          {/* Column 1: Experiências */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.75rem"
              }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "10px",
                  background: "var(--purple-subtle)",
                  border: "1px solid var(--purple-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--purple-primary)",
                  boxShadow: "0 0 14px var(--purple-glow)"
                }}
              >
                <Briefcase size={20} />
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)" }}>
                EXPERIÊNCIAS PROFISSIONAIS
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "1.85rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.85rem"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.7rem",
                        borderRadius: "6px",
                        background: "var(--purple-subtle)",
                        color: "var(--purple-primary)",
                        border: "1px solid var(--border-color)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem"
                      }}
                    >
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}
                    >
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: "1.18rem",
                      fontWeight: 700,
                      marginBottom: "0.25rem",
                      color: "var(--text-primary)"
                    }}
                  >
                    {exp.role}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--purple-primary)",
                      fontWeight: 600,
                      marginBottom: "0.85rem"
                    }}
                  >
                    @{exp.company}
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Formações */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.75rem"
              }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "10px",
                  background: "var(--purple-subtle)",
                  border: "1px solid var(--purple-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--purple-primary)",
                  boxShadow: "0 0 14px var(--purple-glow)"
                }}
              >
                <GraduationCap size={20} />
              </div>
              <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-primary)" }}>
                FORMAÇÃO ACADÊMICA
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {educations.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "1.85rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.85rem"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.76rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.7rem",
                        borderRadius: "6px",
                        background: "var(--purple-subtle)",
                        color: "var(--purple-primary)",
                        border: "1px solid var(--border-color)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem"
                      }}
                    >
                      <Calendar size={12} />
                      {edu.period}
                    </span>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-muted)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}
                    >
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: "1.18rem",
                      fontWeight: 700,
                      marginBottom: "0.25rem",
                      color: "var(--text-primary)"
                    }}
                  >
                    {edu.degree}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--purple-primary)",
                      fontWeight: 600,
                      marginBottom: "0.85rem"
                    }}
                  >
                    @{edu.institution}
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
