import { Briefcase, GraduationCap, Download, Calendar, MapPin } from "lucide-react";
import { experiences, educations, personalInfo } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="resumo" className="section-py">
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Trajetória</span>
          <h2 className="section-title">
            <span className="text-gradient">Resumo Profissional</span>
          </h2>
          <p className="section-subtitle">
            Minha experiência de atuação no mercado e a base acadêmica que construí ao longo dos anos.
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            maxWidth: "1050px",
            margin: "0 auto"
          }}
          className="experience-grid"
        >
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
                  borderRadius: "0.75rem",
                  background: "var(--gradient-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}
              >
                <Briefcase size={20} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Experiências</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {experiences.map((exp, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "1.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.75rem"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        background: "rgba(168, 85, 247, 0.15)",
                        color: "var(--accent-purple)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem"
                      }}
                    >
                      <Calendar size={13} />
                      {exp.period}
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}
                    >
                      <MapPin size={13} />
                      {exp.location}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                    {exp.role}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--accent-pink)",
                      fontWeight: 600,
                      marginBottom: "0.75rem"
                    }}
                  >
                    {exp.company}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
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
                  borderRadius: "0.75rem",
                  background: "var(--gradient-main)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}
              >
                <GraduationCap size={20} />
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800 }}>Formações</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {educations.map((edu, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "1.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "0.75rem"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        background: "rgba(59, 130, 246, 0.15)",
                        color: "var(--accent-blue)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem"
                      }}
                    >
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem"
                      }}
                    >
                      <MapPin size={13} />
                      {edu.location}
                    </span>
                  </div>

                  <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                    {edu.degree}
                  </h4>
                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--accent-blue)",
                      fontWeight: 600,
                      marginBottom: "0.75rem"
                    }}
                  >
                    {edu.institution}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
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
