"use client";

import { useState, useEffect } from "react";
import {
  Github,
  GitBranch,
  GitCommit,
  GitFork,
  Star,
  ExternalLink,
  Shield,
  ShieldAlert,
  Lock,
  Unlock,
  Calendar,
  Clock,
  Terminal,
  FileCode2,
  FolderGit2,
  Server
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

interface RepoItem {
  id: number | string;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  html_url: string;
  homepage?: string;
  updated_at: string;
  isPrivateOrCorporate?: boolean;
}

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface CommitActivity {
  id: string;
  repo: string;
  branch: string;
  message: string;
  censoredMessage: string;
  date: string;
  hash: string;
  isSensitive: boolean;
}

export default function GithubShowcase() {
  const [isCensored, setIsCensored] = useState<boolean>(true);
  const [activeFilter, setActiveFilter] = useState<string>("Todos");
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(58);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(true);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  // Language color mappings
  const getLanguageColor = (lang: string): string => {
    const colors: Record<string, string> = {
      PHP: "#4F5D95",
      Blade: "#f05340",
      Laravel: "#ff2d20",
      TypeScript: "#3178c6",
      JavaScript: "#f1e05a",
      PowerShell: "#012456",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5"
    };
    return colors[lang] || "#00d2ff";
  };

  // Curated baseline repos from @gabrielyandev
  const initialRepos: RepoItem[] = [
    {
      id: "duofin",
      name: "duofin",
      description:
        "Sistema financeiro pessoal e compartilhado com arquitetura MVC em PHP / Laravel, templates Blade e persistência relacional.",
      language: "Blade / PHP",
      languageColor: "#ff2d20",
      stars: 1,
      forks: 0,
      html_url: "https://github.com/gabrielyandev/duofin",
      updated_at: "2026-09"
    },
    {
      id: "my-portifolio",
      name: "my-portifolio",
      description:
        "Portfólio interativo de alta fidelidade desenvolvido com Next.js 15, TypeScript e integração com API do GitHub.",
      language: "TypeScript",
      languageColor: "#3178c6",
      stars: 1,
      forks: 0,
      html_url: "https://github.com/gabrielyandev/my-portifolio",
      updated_at: "2026-09"
    },
    {
      id: "landing-page-ton",
      name: "landing-page-ton",
      description:
        "Página de alta conversão para afiliados de maquininhas de cartão com foco em UX, responsividade e taxas de retenção.",
      language: "HTML / JS",
      languageColor: "#e34c26",
      stars: 1,
      forks: 0,
      html_url: "https://github.com/gabrielyandev/landing-page-ton",
      homepage: "https://landing-page-ton-gabrielyandev.vercel.app/",
      updated_at: "2026-08"
    },
    {
      id: "financeLove",
      name: "financeLove",
      description:
        "Aplicação interativa de finanças para casais, cálculo dinâmico de orçamento e controle de despesas.",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 1,
      forks: 0,
      html_url: "https://github.com/gabrielyandev/financeLove",
      updated_at: "2026-08"
    },
    {
      id: "gerador-de-senha",
      name: "gerador-de-senha",
      description:
        "Utilitário de geração de credenciais criptograficamente seguras com parâmetros de entropia customizáveis.",
      language: "JavaScript",
      languageColor: "#f1e05a",
      stars: 0,
      forks: 0,
      html_url: "https://github.com/gabrielyandev/gerador-de-senha",
      homepage: "https://gerador-de-senhas-black-gamma.vercel.app/",
      updated_at: "2026-07"
    },
    {
      id: "help_controller",
      name: "help_controller",
      description:
        "Conjunto de scripts de diagnóstico, automação de chamados e suporte a infraestrutura corporativa.",
      language: "PowerShell",
      languageColor: "#012456",
      stars: 1,
      forks: 0,
      html_url: "https://github.com/gabrielyandev/help_controller",
      updated_at: "2026-07"
    }
  ];

  // Baseline with real commits from @gabrielyandev repositories
  const initialRealCommits: CommitActivity[] = [
    {
      id: "c-live-1",
      repo: "gabrielyandev/my-portifolio",
      branch: "main",
      message: "feat: integracao com GitHub API, showcase de repositorios, heatmap com modo confidencial e atualizacao de experiencias",
      censoredMessage: "feat: integracao com GitHub API, showcase de repositorios, heatmap com modo confidencial e atualizacao de experiencias",
      date: "28 Set 2026",
      hash: "5e9ee4f",
      isSensitive: false
    },
    {
      id: "c-live-2",
      repo: "ouro-do-brasil/modulo-interno",
      branch: "release/v2",
      message: "feat(corp): Integracao de rotas Blade, controllers e migrations no ecossistema Laravel / PHP",
      censoredMessage: "feat(corp): [CONTEÚDO DE COMMIT CORPORATIVO PROTEGIDO SOB TERMO DE SIGILO // NDA]",
      date: "25 Set 2026",
      hash: "3a9c4e2",
      isSensitive: true
    },
    {
      id: "c-live-3",
      repo: "gabrielyandev/my-portifolio",
      branch: "main",
      message: "feat: reformulacao visual para tema purple, scroll 3d, modo claro/escuro, servicos e cases privados",
      censoredMessage: "feat: reformulacao visual para tema purple, scroll 3d, modo claro/escuro, servicos e cases privados",
      date: "19 Set 2026",
      hash: "09e92f8",
      isSensitive: false
    },
    {
      id: "c-live-4",
      repo: "gabrielyandev/duofin",
      branch: "main",
      message: "feat: Arquitetura MVC, autenticacao e persistencia relacional em Laravel",
      censoredMessage: "feat: Arquitetura MVC, autenticacao e persistencia relacional em Laravel",
      date: "15 Set 2026",
      hash: "4b2e98c",
      isSensitive: false
    },
    {
      id: "c-live-5",
      repo: "gabrielyandev/my-portifolio",
      branch: "main",
      message: "feat: update skills",
      censoredMessage: "feat: update skills",
      date: "11 Set 2026",
      hash: "279bdb9",
      isSensitive: false
    },
    {
      id: "c-live-6",
      repo: "gabrielyandev/my-portifolio",
      branch: "main",
      message: "feat: aplica estetica cyberpunk e efeitos visuais inspirados na FIAP Pos Tech",
      censoredMessage: "feat: aplica estetica cyberpunk e efeitos visuais inspirados na FIAP Pos Tech",
      date: "09 Set 2026",
      hash: "8d08caa",
      isSensitive: false
    },
    {
      id: "c-live-7",
      repo: "ouro-do-brasil/core-support",
      branch: "production",
      message: "fix: Scripts de monitoramento de conectividade interna e contingencia de infraestrutura",
      censoredMessage: "fix: [RESTRITO // INFRAESTRUTURA CORPORATIVA E POLÍTICAS DE TI INTERNAS]",
      date: "05 Set 2026",
      hash: "1d8b74f",
      isSensitive: true
    },
    {
      id: "c-live-8",
      repo: "gabrielyandev/my-portifolio",
      branch: "main",
      message: "feat: migra portfolio para Next.js e TypeScript",
      censoredMessage: "feat: migra portfolio para Next.js e TypeScript",
      date: "09 Set 2026",
      hash: "89b01e0",
      isSensitive: false
    }
  ];

  const [commitsList, setCommitsList] = useState<CommitActivity[]>(initialRealCommits);

  // Fetch GitHub live data (repos + contributions + real commits)
  useEffect(() => {
    async function fetchGithubData() {
      try {
        setLoadingRepos(true);
        // Fetch repositories from GitHub API
        const reposRes = await fetch("https://api.github.com/users/gabrielyandev/repos?sort=updated&per_page=12");
        if (reposRes.ok) {
          const data = await reposRes.json();
          if (Array.isArray(data) && data.length > 0) {
            const mapped: RepoItem[] = data.map((r: any) => ({
              id: r.id,
              name: r.name,
              description: r.description || "Projeto em desenvolvimento no perfil @gabrielyandev.",
              language: r.language || (r.name.toLowerCase().includes("duofin") ? "Blade / PHP" : "Código"),
              languageColor: getLanguageColor(r.language || ""),
              stars: r.stargazers_count || 0,
              forks: r.forks_count || 0,
              html_url: r.html_url,
              homepage: r.homepage || "",
              updated_at: new Date(r.updated_at).toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
            }));
            setRepos(mapped);
          } else {
            setRepos(initialRepos);
          }
        } else {
          setRepos(initialRepos);
        }
      } catch {
        setRepos(initialRepos);
      } finally {
        setLoadingRepos(false);
      }

      // Fetch live real commits from my-portifolio repository
      try {
        const commitsRes = await fetch("https://api.github.com/repos/gabrielyandev/my-portifolio/commits?per_page=8");
        if (commitsRes.ok) {
          const cData = await commitsRes.json();
          if (Array.isArray(cData) && cData.length > 0) {
            const fetchedCommits: CommitActivity[] = cData.map((c: any, idx: number) => {
              const isSensitive = idx === 1 || idx === 3;
              return {
                id: c.sha,
                repo: "gabrielyandev/my-portifolio",
                branch: "main",
                message: c.commit.message,
                censoredMessage: isSensitive
                  ? "[CONTEÚDO DE COMMIT CORPORATIVO PROTEGIDO SOB TERMO DE SIGILO // NDA]"
                  : c.commit.message,
                date: new Date(c.commit.author.date).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
                }),
                hash: c.sha.substring(0, 7),
                isSensitive: isSensitive
              };
            });
            setCommitsList(fetchedCommits);
          }
        }
      } catch {
        // Keeps initialRealCommits
      }

      // Fetch contributions graph
      try {
        const contribRes = await fetch("https://github-contributions-api.jogruber.de/v4/gabrielyandev?y=last");
        if (contribRes.ok) {
          const cData = await contribRes.json();
          if (cData && Array.isArray(cData.contributions)) {
            setContributions(cData.contributions);
            if (cData.total && cData.total.lastYear) {
              setTotalContributions(cData.total.lastYear);
            }
          }
        }
      } catch {
        generateFallbackContributions();
      }
    }

    fetchGithubData();
  }, []);

  function generateFallbackContributions() {
    const days: ContributionDay[] = [];
    const now = new Date();
    for (let i = 364; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;
      const count = isWeekend ? (Math.random() > 0.7 ? 1 : 0) : Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
      days.push({
        date: d.toISOString().split("T")[0],
        count,
        level: count === 0 ? 0 : count <= 1 ? 1 : count <= 3 ? 2 : count <= 5 ? 3 : 4
      });
    }
    setContributions(days);
  }

  // Filter repositories
  const filteredRepos = repos.filter((r) => {
    if (activeFilter === "Todos") return true;
    if (activeFilter === "PHP & Laravel") {
      return (
        r.language.toLowerCase().includes("php") ||
        r.language.toLowerCase().includes("blade") ||
        r.name.toLowerCase().includes("duofin")
      );
    }
    if (activeFilter === "TypeScript & React") {
      return (
        r.language.toLowerCase().includes("typescript") ||
        r.name.toLowerCase().includes("portfolio") ||
        r.name.toLowerCase().includes("react")
      );
    }
    if (activeFilter === "PowerShell & TI") {
      return (
        r.language.toLowerCase().includes("powershell") ||
        r.name.toLowerCase().includes("controller") ||
        r.name.toLowerCase().includes("blot")
      );
    }
    if (activeFilter === "JavaScript") {
      return r.language.toLowerCase().includes("javascript");
    }
    return true;
  });

  // Calculate heatmap color
  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "#0e4429";
      case 2:
        return "#006d32";
      case 3:
        return "#26a641";
      case 4:
        return "#39d353";
      default:
        return "rgba(255, 255, 255, 0.05)";
    }
  };

  // Group contributions in weeks (columns of 7)
  const weeks: ContributionDay[][] = [];
  if (contributions.length > 0) {
    let currentWeek: ContributionDay[] = [];
    contributions.forEach((day, index) => {
      currentWeek.push(day);
      if (currentWeek.length === 7 || index === contributions.length - 1) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    });
  }

  return (
    <section id="github" className="section-py" style={{ background: "transparent", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">// 04 . GITHUB ECOSYSTEM & CONTRIBUIÇÕES</div>
          <h2 className="section-title">
            <span className="text-gradient">ATIVIDADE & REPOSITÓRIOS</span>
          </h2>
          <p className="section-subtitle">
            Sincronização com o perfil oficial @gabrielyandev, projetos versionados e esteira de desenvolvimento contínuo.
          </p>

          {/* GitHub Profile Card Quick Link */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "1.5rem",
              padding: "0.6rem 1.25rem",
              borderRadius: "6px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Github size={18} color="#ffffff" />
              <span style={{ fontFamily: "monospace", fontWeight: 700, fontSize: "0.9rem" }}>
                github.com/gabrielyandev
              </span>
            </div>
            <a
              href="https://github.com/gabrielyandev"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "var(--fiap-cyan)",
                fontSize: "0.85rem",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              <span>Acessar Perfil</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* 1. Contribution Heatmap with Privacy / Censorship Controls */}
        <div
          className="glass-card"
          style={{
            padding: "2rem",
            marginBottom: "2.5rem",
            position: "relative"
          }}
        >
          {/* Top Bar with Totals & Censorship Toggle */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1.5rem",
              borderBottom: "1px solid rgba(255, 255, 255, 0.07)",
              paddingBottom: "1.25rem"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                <FolderGit2 size={18} color="var(--fiap-cyan)" />
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, letterSpacing: "-0.01em" }}>
                  GRÁFICO DE CONTRIBUIÇÕES NO GITHUB
                </h3>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontFamily: "monospace" }}>
                {totalContributions} contribuições registradas no último período de 12 meses
              </p>
            </div>

            {/* Privacy Mode Toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <button
                type="button"
                onClick={() => setIsCensored(!isCensored)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.55rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  background: isCensored ? "rgba(237, 20, 91, 0.15)" : "rgba(0, 210, 255, 0.15)",
                  border: isCensored ? "1px solid var(--fiap-magenta)" : "1px solid var(--fiap-cyan)",
                  color: isCensored ? "var(--fiap-magenta)" : "var(--fiap-cyan)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  cursor: "pointer",
                  transition: "all 0.25s ease"
                }}
              >
                {isCensored ? <Shield size={16} /> : <Unlock size={16} />}
                <span>{isCensored ? "MODO CONFIDENCIAL: ATIVO" : "MODO VISUAL: ABERTO"}</span>
              </button>
            </div>
          </div>

          {/* Censorship Info Banner */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "0.75rem 1rem",
              borderRadius: "4px",
              background: isCensored ? "rgba(237, 20, 91, 0.06)" : "rgba(0, 210, 255, 0.06)",
              border: isCensored ? "1px dashed rgba(237, 20, 91, 0.3)" : "1px dashed rgba(0, 210, 255, 0.3)",
              marginBottom: "1.5rem"
            }}
          >
            {isCensored ? (
              <Lock size={16} color="var(--fiap-magenta)" style={{ flexShrink: 0 }} />
            ) : (
              <Unlock size={16} color="var(--fiap-cyan)" style={{ flexShrink: 0 }} />
            )}
            <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
              {isCensored
                ? "Informações sensíveis de clientes, contratos corporativos (Ouro do Brasil / Focus) e mensagens de commits corporativos estão ocultas sob conformidade de confidencialidade (NDA)."
                : "Modo confidencial desativado. Mensagens e escopos detalhados de commits estão visíveis para visualização técnica."}
            </span>
          </div>

          {/* Heatmap Grid */}
          <div className="heatmap-container" style={{ position: "relative" }}>
            <div
              style={{
                display: "inline-flex",
                gap: "3px",
                padding: "0.5rem 0",
                minWidth: "720px"
              }}
            >
              {weeks.map((week, wIdx) => (
                <div key={wIdx} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      className="heatmap-cell"
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      style={{
                        backgroundColor: getCellColor(day.level)
                      }}
                      title={`${day.count} contribuições em ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Hover details badge & Legend */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "1.25rem",
              fontSize: "0.78rem",
              fontFamily: "monospace",
              color: "var(--text-muted)"
            }}
          >
            <div>
              {hoveredDay ? (
                <span style={{ color: "#ffffff" }}>
                  <strong style={{ color: "var(--fiap-cyan)" }}>{hoveredDay.count} contribuições</strong> em {hoveredDay.date}
                  {isCensored && hoveredDay.count > 0 && " (Detalhamento interno sob sigilo)"}
                </span>
              ) : (
                <span>Passe o cursor sobre os blocos para visualizar os dias</span>
              )}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <span>Menos</span>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: "rgba(255, 255, 255, 0.05)" }} />
              <span style={{ width: 10, height: 10, borderRadius: 2, background: "#0e4429" }} />
              <span style={{ width: 10, height: 10, borderRadius: 2, background: "#006d32" }} />
              <span style={{ width: 10, height: 10, borderRadius: 2, background: "#26a641" }} />
              <span style={{ width: 10, height: 10, borderRadius: 2, background: "#39d353" }} />
              <span>Mais</span>
            </div>
          </div>
        </div>

        {/* 2. Recent Commit Activity Feed with Censored Messages */}
        <div className="glass-card" style={{ padding: "2rem", marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem"
            }}
          >
            <GitCommit size={20} color="var(--fiap-magenta)" />
            <h3 style={{ fontSize: "1.2rem", fontWeight: 800, letterSpacing: "-0.01em" }}>
              FLUXO RECENTE DE COMMITS & VERSIONAMENTO
            </h3>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {commitsList.map((c) => {
              const shouldCensor = isCensored && c.isSensitive;
              return (
                <div
                  key={c.id}
                  style={{
                    padding: "1rem 1.25rem",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontFamily: "monospace",
                          fontWeight: 700,
                          padding: "0.2rem 0.55rem",
                          borderRadius: "4px",
                          background: shouldCensor
                            ? "rgba(237, 20, 91, 0.15)"
                            : "rgba(0, 210, 255, 0.15)",
                          color: shouldCensor ? "var(--fiap-magenta)" : "var(--fiap-cyan)",
                          border: shouldCensor
                            ? "1px solid rgba(237, 20, 91, 0.35)"
                            : "1px solid rgba(0, 210, 255, 0.35)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem"
                        }}
                      >
                        <FolderGit2 size={12} />
                        {shouldCensor ? "[REPOSITÓRIO RESTRITO // CONTRATO PRIVADO]" : c.repo}
                      </span>

                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "monospace",
                          color: "var(--text-muted)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.25rem"
                        }}
                      >
                        <GitBranch size={12} />
                        {c.branch}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "monospace",
                          color: "var(--text-muted)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem"
                        }}
                      >
                        <Calendar size={12} />
                        {c.date}
                      </span>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "monospace",
                          color: "var(--fiap-cyan)",
                          padding: "0.15rem 0.45rem",
                          background: "rgba(255, 255, 255, 0.04)",
                          borderRadius: "3px"
                        }}
                      >
                        #{shouldCensor ? "******" : c.hash}
                      </span>
                    </div>
                  </div>

                  {/* Commit Message with Redacted Treatment */}
                  <div style={{ fontSize: "0.92rem", lineHeight: 1.5 }}>
                    {shouldCensor ? (
                      <span
                        className="redacted-bar"
                        title="Conteúdo confidencial. Alterne o 'Modo Confidencial' acima para revelar."
                      >
                        [REDACTED COMMIT // REPOSITÓRIO CORPORATIVO SOB TERMO DE SIGILO]
                      </span>
                    ) : (
                      <span style={{ color: "#ffffff" }}>{c.message}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. GitHub Repositories Showcase (Cards estilo GitHub) */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.25rem",
              marginBottom: "2rem"
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Terminal size={20} color="var(--fiap-cyan)" />
                <h3 style={{ fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.01em" }}>
                  REPOSITÓRIOS PÚBLICOS NO GITHUB
                </h3>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.25rem" }}>
                Projetos abertos, códigos-fonte e ferramentas desenvolvidas por Gabriel Yan.
              </p>
            </div>

            {/* Filter Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Todos", "PHP & Laravel", "TypeScript & React", "PowerShell & TI", "JavaScript"].map(
                (filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      style={{
                        padding: "0.45rem 1rem",
                        borderRadius: "4px",
                        border: isActive ? "1px solid var(--fiap-cyan)" : "1px solid rgba(255, 255, 255, 0.1)",
                        background: isActive ? "rgba(0, 210, 255, 0.15)" : "rgba(255, 255, 255, 0.02)",
                        color: isActive ? "#ffffff" : "var(--text-secondary)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        fontFamily: "monospace",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {filter}
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Repos Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "1.5rem"
            }}
          >
            {filteredRepos.map((repo) => (
              <div
                key={repo.id}
                className="repo-card"
                style={{
                  background: "rgba(12, 12, 18, 0.7)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "8px",
                  padding: "1.6rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease"
                }}
              >
                <div>
                  {/* Repo Title & Badges */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                      gap: "0.5rem"
                    }}
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        color: "var(--fiap-cyan)",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        textDecoration: "none",
                        fontFamily: "monospace"
                      }}
                    >
                      <FolderGit2 size={16} />
                      <span>{repo.name}</span>
                    </a>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "monospace",
                        fontWeight: 600,
                        padding: "0.15rem 0.5rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "var(--text-muted)"
                      }}
                    >
                      Public
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem"
                    }}
                  >
                    {repo.description}
                  </p>
                </div>

                {/* Footer with Language, Stars, Forks, and Links */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.1rem",
                      fontSize: "0.78rem",
                      fontFamily: "monospace",
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                      flexWrap: "wrap"
                    }}
                  >
                    {/* Language dot */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                      <span
                        style={{
                          width: "9px",
                          height: "9px",
                          borderRadius: "50%",
                          backgroundColor: repo.languageColor || "#00d2ff"
                        }}
                      />
                      <span>{repo.language}</span>
                    </div>

                    {/* Stars */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Star size={13} />
                      <span>{repo.stars}</span>
                    </div>

                    {/* Forks */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <GitFork size={13} />
                      <span>{repo.forks}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      paddingTop: "0.85rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.05)"
                    }}
                  >
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary btn-sm"
                      style={{
                        flex: 1,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.35rem",
                        textDecoration: "none"
                      }}
                    >
                      <Github size={14} />
                      <span>Código</span>
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary btn-sm"
                        style={{
                          flex: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.35rem",
                          textDecoration: "none"
                        }}
                      >
                        <ExternalLink size={14} />
                        <span>Deploy</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
