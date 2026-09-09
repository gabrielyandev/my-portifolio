import { Github, Linkedin, MapPin, Target, Database, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={20} color="var(--fiap-magenta)" />,
      title: "DESENVOLVIMENTO",
      desc: "Front-End & Back-End"
    },
    {
      icon: <Database size={20} color="var(--fiap-cyan)" />,
      title: "BANCOS DE DADOS",
      desc: "MySQL, Postgres, Firebird"
    },
    {
      icon: <MapPin size={20} color="#a855f7" />,
      title: "LOCALIZAÇÃO",
      desc: "Salvador, BA - Brasil"
    },
    {
      icon: <Target size={20} color="#10b981" />,
      title: "FOCO DE CARREIRA",
      desc: "Engenharia de Software"
    }
  ];

  return (
    <section id="sobre" className="section-py" style={{ background: "transparent" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// 01 . SOBRE MIM</div>
          <h2 className="section-title">
            <span className="text-gradient">TRAJETÓRIA & IDENTIDADE</span>
          </h2>
          <p className="section-subtitle">
            {personalInfo.bioTitle}
          </p>
        </div>

        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="glass-card" style={{ padding: "2.75rem 2.25rem" }}>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.9",
                color: "var(--text-secondary)",
                marginBottom: "2.25rem"
              }}
            >
              {personalInfo.bioDescription}
            </p>

            {/* Highlights Grid with Tech styling */}
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
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)"
                  }}
                >
                  <div
                    style={{
                      padding: "0.5rem",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.03)",
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
                        fontFamily: "monospace",
                        color: "var(--text-muted)",
                        letterSpacing: "0.08em"
                      }}
                    >
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 700 }}>
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
                <span>Perfil no LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-sm"
              >
                <Github size={16} />
                <span>Repositórios GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
