import { Github, Linkedin, MapPin, Target, Database, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={20} color="#a855f7" />,
      title: "Desenvolvimento",
      desc: "Front-End & Back-End"
    },
    {
      icon: <Database size={20} color="#ec4899" />,
      title: "Bancos de Dados",
      desc: "MySQL, Postgres, Firebird"
    },
    {
      icon: <MapPin size={20} color="#3b82f6" />,
      title: "Origem",
      desc: "Salvador, BA - Brasil"
    },
    {
      icon: <Target size={20} color="#10b981" />,
      title: "Próximo Passo",
      desc: "Engenharia de Software"
    }
  ];

  return (
    <section id="sobre" className="section-py" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Conheça minha história</span>
          <h2 className="section-title">
            <span className="text-gradient">Sobre mim</span>
          </h2>
          <p className="section-subtitle">
            {personalInfo.bioTitle}
          </p>
        </div>

        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto"
          }}
        >
          {/* Main Bio Card */}
          <div className="glass-card" style={{ padding: "2.5rem" }}>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.85",
                color: "var(--text-secondary)",
                marginBottom: "2rem"
              }}
            >
              {personalInfo.bioDescription}
            </p>

            {/* Mini Highlights Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                gap: "1.25rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid var(--border-color)",
                marginBottom: "2rem"
              }}
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem",
                    borderRadius: "0.75rem",
                    background: "rgba(255, 255, 255, 0.02)"
                  }}
                >
                  <div
                    style={{
                      padding: "0.6rem",
                      borderRadius: "0.5rem",
                      background: "rgba(255, 255, 255, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 500 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 700 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Connect Links */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1.5rem",
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
                <span>Conectar no LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary btn-sm"
              >
                <Github size={16} />
                <span>Seguir no GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
