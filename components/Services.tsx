"use client";

import {
  LayoutDashboard,
  Smartphone,
  TrendingUp,
  Database,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Clock
} from "lucide-react";
import { services, personalInfo } from "@/data/portfolioData";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "LayoutDashboard":
        return <LayoutDashboard size={26} color="var(--purple-primary)" />;
      case "Smartphone":
        return <Smartphone size={26} color="var(--purple-primary)" />;
      case "TrendingUp":
        return <TrendingUp size={26} color="var(--purple-primary)" />;
      case "Database":
        return <Database size={26} color="var(--purple-primary)" />;
      default:
        return <Code2 size={26} color="var(--purple-primary)" />;
    }
  };

  const steps = [
    {
      number: "01",
      title: "Diagnóstico & Escopo",
      desc: "Análise aprofundada da necessidade da sua empresa, definição de requisitos técnicos e planejamento de entregas."
    },
    {
      number: "02",
      title: "Arquitetura & Design",
      desc: "Modelagem do banco de dados, definição de fluxos de usuário e prototipagem de interfaces focadas em usabilidade."
    },
    {
      number: "03",
      title: "Desenvolvimento Ágil",
      desc: "Construção com código limpo, testes contínuos, versionamento no Git e relatórios periódicos de progresso."
    },
    {
      number: "04",
      title: "Deploy & Suporte",
      desc: "Publicação do sistema em produção, empacotamento de aplicativo (quando aplicável) e suporte técnico dedicado."
    }
  ];

  return (
    <section id="servicos" className="section-py" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="section-tag-dot" />
            <span>SOLUÇÕES & SERVIÇOS</span>
          </div>
          <h2 className="section-title">
            DESENVOLVIMENTO DE SOFTWARE <span className="text-gradient">SOB MEDIDA</span>
          </h2>
          <p className="section-subtitle">
            Transformo as operações da sua empresa em aplicações digitais de alto desempenho, escaláveis e focadas no retorno sobre o investimento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid" style={{ marginBottom: "4.5rem" }}>
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card"
              style={{
                padding: "2rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                {/* Top Icon Badge */}
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "12px",
                    background: "var(--purple-subtle)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: "0 4px 14px rgba(124, 58, 237, 0.15)"
                  }}
                >
                  {getIcon(service.icon)}
                </div>

                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--purple-primary)",
                    textTransform: "uppercase",
                    marginBottom: "0.35rem"
                  }}
                >
                  {service.subtitle}
                </div>

                <h3
                  style={{
                    fontSize: "1.22rem",
                    fontWeight: 800,
                    marginBottom: "0.85rem",
                    color: "var(--text-primary)"
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem"
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div style={{ marginBottom: "1.75rem" }}>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.75rem"
                    }}
                  >
                    O que está incluso:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    {service.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.55rem",
                          fontSize: "0.84rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.45
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color="var(--purple-primary)"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technologies Pill Container & CTA */}
              <div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.4rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--border-color)",
                    marginBottom: "1.25rem"
                  }}
                >
                  {service.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "6px",
                        background: "var(--purple-subtle)",
                        color: "var(--purple-primary)",
                        border: "1px solid var(--border-color)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=5571996504413&text=Ola%20Gabriel,%20tenho%20interesse%20em%20contratar%20o%20servico%20de%20${encodeURIComponent(
                    service.title
                  )}.%20Poderiamos%20conversar?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-sm"
                  style={{ width: "100%", textAlign: "center" }}
                >
                  <span>Solicitar este Serviço</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology / Workflow Process */}
        <div
          className="glass-card"
          style={{
            padding: "3rem 2.25rem",
            background: "var(--gradient-card)"
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--purple-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem"
              }}
            >
              <Zap size={14} />
              <span>METODOLOGIA DE ALTA EFICIÊNCIA</span>
            </div>
            <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary)" }}>
              Como Funciona o Processo de Desenvolvimento
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "0.5rem auto 0"
              }}
            >
              Um fluxo estruturado e transparente desde o alinhamento da ideia até a entrega em produção com garantia.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.75rem"
            }}
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                style={{
                  position: "relative",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  background: "var(--bg-glass)",
                  border: "1px solid var(--border-color)"
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "var(--purple-primary)",
                    opacity: 0.8,
                    marginBottom: "0.5rem"
                  }}
                >
                  {step.number}
                </div>
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: "var(--text-primary)"
                  }}
                >
                  {step.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Guarantee banner */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginTop: "2.75rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "8px",
                  background: "var(--purple-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--purple-primary)"
                }}
              >
                <ShieldCheck size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "0.98rem", color: "var(--text-primary)" }}>
                  Garantia de Qualidade & Código Limpo
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                  Documentação técnica, segurança de dados e suporte pós-implantação.
                </div>
              </div>
            </div>

            <a
              href={personalInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Conversar sobre Meu Projeto</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
