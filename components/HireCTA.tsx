"use client";

import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Linkedin,
  Github,
  CheckCircle,
  Clock,
  Sparkles,
  Send,
  Calendar,
  Layers
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function HireCTA() {
  const [selectedProjectType, setSelectedProjectType] = useState("Sistema Web / Dashboard");
  const [selectedTimeline, setSelectedTimeline] = useState("Início Imediato");

  const projectTypes = [
    "Sistema Web / Dashboard",
    "PWA & App Multiplataforma",
    "Landing Page de Alta Conversão",
    "Banco de Dados & Integrações",
    "Outra Solução Sob Medida"
  ];

  const timelines = ["Início Imediato", "Próximos 15-30 dias", "Planejamento / Cotação"];

  const buildWhatsAppUrl = () => {
    const text = `Ola Gabriel! Vim atraves do seu portfolio e gostaria de solicitar uma proposta comercial.
*Tipo de Projeto:* ${selectedProjectType}
*Previsao de Inicio:* ${selectedTimeline}
Podemos alinhar os detalhes?`;
    return `https://api.whatsapp.com/send?phone=5571996504413&text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className="section-py" style={{ position: "relative" }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 4vw, 3.5rem)",
            background: "var(--gradient-card)",
            borderColor: "var(--border-hover)",
            boxShadow: "var(--shadow-glow)"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
              alignItems: "center"
            }}
            className="hero-grid"
          >
            {/* Left Info Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.4rem 0.95rem",
                  borderRadius: "999px",
                  background: "var(--purple-subtle)",
                  border: "1px solid var(--border-color)",
                  marginBottom: "1.5rem"
                }}
              >
                <div className="pulse-status" />
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--purple-primary)"
                  }}
                >
                  AGENDA ABERTA PARA PROJETOS & CONTRATOS
                </span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(2.1rem, 4vw, 3.2rem)",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.18,
                  marginBottom: "1.25rem"
                }}
              >
                Pronto para transformar sua ideia em um <span className="text-gradient">sistema de alto nível?</span>
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.75,
                  marginBottom: "2rem"
                }}
              >
                Seja para informatizar processos internos, lançar um produto digital escalável ou criar páginas que maximizam vendas, estou pronto para entregar uma solução completa e segura.
              </p>

              {/* Benefits Checklist */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
                {[
                  "Atendimento direto com o desenvolvedor, sem intermediários",
                  "Código versionado, limpo e documentado",
                  "Arquitetura moderna (Laravel, Vue.js, React/Next.js, MySQL)",
                  "Entrega no prazo combinado com suporte contínuo"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <CheckCircle size={18} color="var(--purple-primary)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "0.93rem", color: "var(--text-primary)" }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-sm"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary btn-sm"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Estimator Card */}
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "16px",
                padding: "2.25rem 2rem",
                border: "1px solid var(--border-color)",
                boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.5)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "var(--purple-primary)",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem"
                }}
              >
                <Sparkles size={16} />
                <span>SOLICITAÇÃO RÁPIDA DE PROPOSTA</span>
              </div>

              <h3
                style={{
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem"
                }}
              >
                Qual solução você precisa?
              </h3>

              {/* Project Type Buttons */}
              <div style={{ marginBottom: "1.75rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginBottom: "0.75rem",
                    textTransform: "uppercase"
                  }}
                >
                  Tipo de Aplicação:
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                  {projectTypes.map((type) => {
                    const isSelected = selectedProjectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedProjectType(type)}
                        style={{
                          padding: "0.6rem 0.95rem",
                          borderRadius: "8px",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          background: isSelected ? "var(--gradient-main)" : "var(--bg-glass)",
                          color: isSelected ? "#ffffff" : "var(--text-secondary)",
                          border: isSelected
                            ? "1px solid transparent"
                            : "1px solid var(--border-color)",
                          boxShadow: isSelected ? "0 4px 14px rgba(124, 58, 237, 0.35)" : "none"
                        }}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Selector */}
              <div style={{ marginBottom: "2rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    marginBottom: "0.75rem",
                    textTransform: "uppercase"
                  }}
                >
                  Previsão de Início:
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
                  {timelines.map((timeline) => {
                    const isSelected = selectedTimeline === timeline;
                    return (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => setSelectedTimeline(timeline)}
                        style={{
                          padding: "0.55rem 0.9rem",
                          borderRadius: "8px",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          background: isSelected ? "var(--purple-subtle)" : "transparent",
                          color: isSelected ? "var(--purple-primary)" : "var(--text-muted)",
                          border: isSelected
                            ? "1px solid var(--purple-primary)"
                            : "1px solid var(--border-color)"
                        }}
                      >
                        {timeline}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Action */}
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: "100%", textAlign: "center", padding: "1rem 1.5rem" }}
              >
                <MessageCircle size={18} />
                <span>Enviar Solicitação via WhatsApp</span>
              </a>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.45rem",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  marginTop: "1rem",
                  textAlign: "center"
                }}
              >
                <Clock size={13} />
                <span>Resposta ágil em horário comercial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
