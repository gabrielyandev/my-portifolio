"use client";

import { Code2, Database, Wrench, Server } from "lucide-react";
import { skills } from "@/data/portfolioData";

export default function Skills() {
  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");
  const dbSkills = skills.filter((s) => s.category === "database");
  const toolSkills = skills.filter((s) => s.category === "tools");

  const categories = [
    {
      title: "FRONT-END & INTERFACE",
      icon: <Code2 size={20} color="var(--purple-primary)" />,
      items: frontendSkills
    },
    {
      title: "BACK-END & APIS",
      icon: <Server size={20} color="var(--purple-primary)" />,
      items: backendSkills
    },
    {
      title: "BANCOS DE DADOS & DADOS",
      icon: <Database size={20} color="var(--purple-primary)" />,
      items: dbSkills
    },
    {
      title: "MOBILE, DEVOPS & FERRAMENTAS",
      icon: <Wrench size={20} color="var(--purple-primary)" />,
      items: toolSkills
    }
  ];

  return (
    <section id="habilidades" className="section-py" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>DOMÍNIO TÉCNICO & STACK</span>
          </div>
          <h2 className="section-title">
            TECNOLOGIAS DE <span className="text-gradient">ALTA PERFORMANCE</span>
          </h2>
          <p className="section-subtitle">
            Conjunto de ferramentas e linguagens consolidadas no mercado para construir sistemas escaláveis e seguros.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.75rem",
            maxWidth: "1150px",
            margin: "0 auto"
          }}
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "2rem 1.6rem" }}>
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
                    borderRadius: "10px",
                    background: "var(--purple-subtle)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 800,
                    letterSpacing: "0.04em",
                    color: "var(--text-primary)"
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                {cat.items.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.45rem 0.85rem",
                      borderRadius: "8px",
                      background: "var(--bg-glass)",
                      border: "1px solid var(--border-color)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      transition: "all 0.2s ease"
                    }}
                  >
                    <span style={{ color: "var(--purple-primary)", fontWeight: 700 }}>&bull;</span>
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
