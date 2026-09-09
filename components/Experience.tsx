import { Briefcase, GraduationCap, Download, Calendar, MapPin } from "lucide-react";
import { experiences, educations, personalInfo } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="resumo" className="section-py" style={{ background: "transparent" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// 02 . EXPERIÊNCIA & FORMAÇÃO</div>
          <h2 className="section-title">
            <span className="text-gradient">RESUMO PROFISSIONAL</span>
          </h2>
          <p className="section-subtitle">
            Atuação técnica no mercado corporativo e desenvolvimento acadêmico contínuo.
          </p>

          <div style={{ marginTop: "2rem" }}>
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
                marginBottom: "2rem"
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "6px",
                  background: "rgba(237, 20, 91, 0.15)",
                  border: "1px solid var(--fiap-magenta)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fiap-magenta)",
                  boxShadow: "0 0 15px rgba(237, 20, 91, 0.4)"
                }}
              >
                <Briefcase size={18} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.01em" }}>
                EXPERIÊNCIAS
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
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                        background: "rgba(237, 20, 91, 0.15)",
                        color: "var(--fiap-magenta)",
                        border: "1px solid rgba(237, 20, 91, 0.3)",
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
                        fontFamily: "monospace",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}
                    >
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.25rem", color: "#fff" }}>
                    {exp.role}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--fiap-cyan)",
                      fontWeight: 600,
                      marginBottom: "0.85rem",
                      fontFamily: "monospace"
                    }}
                  >
                    @{exp.company}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
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
                marginBottom: "2rem"
              }}
            >
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "6px",
                  background: "rgba(0, 210, 255, 0.15)",
                  border: "1px solid var(--fiap-cyan)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--fiap-cyan)",
                  boxShadow: "0 0 15px rgba(0, 210, 255, 0.35)"
                }}
              >
                <GraduationCap size={18} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "-0.01em" }}>
                FORMAÇÕES
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
                        fontSize: "0.75rem",
                        fontFamily: "monospace",
                        fontWeight: 700,
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                        background: "rgba(0, 210, 255, 0.15)",
                        color: "var(--fiap-cyan)",
                        border: "1px solid rgba(0, 210, 255, 0.3)",
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
                        fontFamily: "monospace",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}
                    >
                      <MapPin size={12} />
                      {edu.location}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.25rem", color: "#fff" }}>
                    {edu.degree}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--fiap-cyan)",
                      fontWeight: 600,
                      marginBottom: "0.85rem",
                      fontFamily: "monospace"
                    }}
                  >
                    @{edu.institution}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
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
