import { Code, Database, Wrench, Layers } from "lucide-react";
import { skills } from "@/data/portfolioData";

export default function Skills() {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const dbSkills = skills.filter((s) => s.category === "database");
  const toolSkills = skills.filter((s) => s.category === "tools");

  const categories = [
    {
      title: "Front-End & Interface",
      icon: <Code size={22} color="#a855f7" />,
      items: frontendSkills,
      color: "var(--accent-purple)"
    },
    {
      title: "Bancos de Dados & DBA",
      icon: <Database size={22} color="#ec4899" />,
      items: dbSkills,
      color: "var(--accent-pink)"
    },
    {
      title: "Ferramentas & DevOps",
      icon: <Wrench size={22} color="#3b82f6" />,
      items: toolSkills,
      color: "var(--accent-blue)"
    }
  ];

  return (
    <section id="habilidades" className="section-py" style={{ background: "var(--bg-secondary)" }}>
      <div className="container">
        <div className="section-header">
          <span className="badge-pill">Tecnologias</span>
          <h2 className="section-title">
            <span className="text-gradient">Hard Skills</span>
          </h2>
          <p className="section-subtitle">
            Linguagens, frameworks e tecnologias que utilizo diariamente para criar soluções eficientes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1.5rem"
                }}
              >
                <div
                  style={{
                    padding: "0.6rem",
                    borderRadius: "0.75rem",
                    background: "rgba(255, 255, 255, 0.04)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{cat.title}</h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                {cat.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.6rem 1rem",
                      borderRadius: "0.75rem",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-color)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <Layers size={14} color={cat.color} />
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
