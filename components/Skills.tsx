import { Code, Database, Wrench, Terminal } from "lucide-react";
import { skills } from "@/data/portfolioData";

export default function Skills() {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const dbSkills = skills.filter((s) => s.category === "database");
  const toolSkills = skills.filter((s) => s.category === "tools");

  const categories = [
    {
      title: "FRONT-END & INTERFACE",
      icon: <Code size={20} color="var(--fiap-magenta)" />,
      items: frontendSkills,
      color: "var(--fiap-magenta)",
      borderGlow: "rgba(237, 20, 91, 0.4)"
    },
    {
      title: "BANCOS DE DADOS & DBA",
      icon: <Database size={20} color="var(--fiap-cyan)" />,
      items: dbSkills,
      color: "var(--fiap-cyan)",
      borderGlow: "rgba(0, 210, 255, 0.4)"
    },
    {
      title: "DEVOPS & WORKFLOW",
      icon: <Wrench size={20} color="#a855f7" />,
      items: toolSkills,
      color: "#a855f7",
      borderGlow: "rgba(168, 85, 247, 0.4)"
    }
  ];

  return (
    <section id="habilidades" className="section-py" style={{ background: "transparent" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">// 03 . HARD SKILLS & STACK</div>
          <h2 className="section-title">
            <span className="text-gradient">TECNOLOGIAS DE DOMÍNIO</span>
          </h2>
          <p className="section-subtitle">
            Ferramentas, linguagens e bancos de dados que utilizo para construir aplicações escaláveis.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "2.25rem 2rem" }}>
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
                    padding: "0.6rem",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: `1px solid ${cat.color}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 0 12px ${cat.borderGlow}`
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                    fontFamily: "monospace"
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                {cat.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      padding: "0.55rem 0.95rem",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      fontSize: "0.85rem",
                      fontFamily: "monospace",
                      fontWeight: 600,
                      color: "#ffffff",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <span style={{ color: cat.color }}>#</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
