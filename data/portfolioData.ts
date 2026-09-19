export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  galleryImages?: string[];
  tags: string[];
  techStack: string[];
  diferenciais: string;
  isPrivate: boolean;
  statusBadge: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverables: string[];
  technologies: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export const personalInfo = {
  name: "Gabriel Yan",
  handle: "@gabrielyandev",
  role: "Desenvolvedor Full-Stack & Engenheiro de Software",
  badge: "Disponível para novos projetos e contratos",
  typingTexts: [
    "Sistemas Web & Dashboards Sob Medida",
    "Aplicações Multiplataforma & PWAs",
    "Landing Pages de Alta Conversão",
    "Arquiteturas Escaláveis & Bancos de Dados"
  ],
  bioTitle: "Desenvolvedor Full-Stack especializado em soluções web corporativas e produtos digitais",
  bioDescription:
    "Com sólido domínio em front-end, back-end e engenharia de dados, desenvolvo sistemas sob medida para empresas e empreendedores que buscam eficiência operacional, automação de processos e alta conversão. Da concepção do banco de dados relacional à entrega de PWAs e dashboards em tempo real, construo aplicações seguras, responsivas e prontas para escalar.",
  profileImage: "/assets/profile1.png",
  cvPath: "/assets/curriculo.pdf",
  github: "https://github.com/gabrielyandev",
  linkedin: "https://www.linkedin.com/in/gabrielyandev/",
  whatsapp: "https://api.whatsapp.com/send?phone=5571996504413&text=Ola%20Gabriel,%20vi%20seu%20portfolio%20e%20gostaria%20de%20solicitar%20um%20orcamento%20para%20desenvolver%20um%20projeto."
};

export const services: ServiceItem[] = [
  {
    id: "sistemas-web",
    title: "Sistemas Web & Dashboards",
    subtitle: "Gestão Corporativa & Operacional",
    description:
      "Plataformas completas para centralizar operações, gerenciar fluxos de trabalho, controle de chamados e relatórios analíticos com métricas dinâmicas em tempo real.",
    icon: "LayoutDashboard",
    deliverables: [
      "Quadro Kanban e gestão de tarefas em equipe",
      "Relatórios interativos com gráficos e KPIs",
      "Painel administrativo com controle de acessos (ACL/RBAC)",
      "Central de notificações e alertas em tempo real"
    ],
    technologies: ["Laravel", "PHP 8.3", "Vue.js", "MySQL", "Tailwind CSS"]
  },
  {
    id: "pwa-mobile",
    title: "PWAs & Aplicações Multiplataforma",
    subtitle: "Web com Performance Nativa",
    description:
      "Aplicações web progressivas preparadas para instalação em dispositivos móveis e empacotamento nativo com suporte a APK para Android via Capacitor.",
    icon: "Smartphone",
    deliverables: [
      "Instalação direta no celular sem necessidade de app store",
      "Geração de APK nativo para distribuição Android",
      "Comportamento offline e carregamento ultraveloz",
      "Interface fluida com design mobile-first refinado"
    ],
    technologies: ["PWA", "Capacitor", "Android APK", "Vue.js", "Alpine.js"]
  },
  {
    id: "landing-pages",
    title: "Landing Pages de Alta Conversão",
    subtitle: "Vendas, Afiliados e Captação de Leads",
    description:
      "Páginas focadas estritamente em persuasão e vendas, com velocidade máxima de carregamento, comparativos dinâmicos de planos e gatilhos de conversão.",
    icon: "TrendingUp",
    deliverables: [
      "Estrutura otimizada para tráfego pago (Google Ads e Meta Ads)",
      "Cronômetros regressivos e simulação de planos/taxas",
      "Integração imediata com botões de WhatsApp e checkout",
      "Layout responsivo com compatibilidade a modo escuro/claro"
    ],
    technologies: ["HTML5", "CSS3 Moderno", "JavaScript ES6+", "Design Responsivo"]
  },
  {
    id: "bancos-integracoes",
    title: "Engenharia de Dados & Integrações",
    subtitle: "APIs Seguras & Migração de Dados",
    description:
      "Modelagem, migração e otimização de bancos de dados relacionais e criação de APIs RESTful estruturadas para conectar sistemas corporativos e serviços externos.",
    icon: "Database",
    deliverables: [
      "Modelagem e normalização de bancos de dados relacionais",
      "Migração e tratamento de bases legadas",
      "Desenvolvimento de APIs RESTful documentadas",
      "Rotinas de automação e integração de serviços"
    ],
    technologies: ["MySQL", "PostgreSQL", "Firebird", "Pentaho Data Integration", "Node.js"]
  }
];

export const projects: Project[] = [
  {
    id: "portal-ourobras",
    title: "Portal Ourobras",
    subtitle: "Sistema Web Full-Stack & PWA Corporativo",
    description:
      "Sistema web full-stack desenvolvido para centralizar a gestão de chamados técnicos, fluxos de suporte interno e comunicação corporativa. O projeto conta com um painel administrativo robusto, sistema de controle de acesso, módulos de tutoriais, newsletter e uma central de notificações em tempo real.",
    image: "/assets/img/projects/ourobras-preview.png",
    galleryImages: [
      "/assets/img/projects/ourobras-preview.png"
    ],
    tags: ["Full-Stack", "PWA", "Laravel", "Vue.js", "Capacitor", "MySQL"],
    techStack: [
      "PHP 8.3",
      "Laravel",
      "JavaScript",
      "Vue.js",
      "Alpine.js",
      "Tailwind CSS",
      "MySQL",
      "Capacitor",
      "PWA"
    ],
    diferenciais:
      "Estrutura adaptada como Progressive Web App (PWA) e empacotamento nativo via Capacitor com suporte a APK para Android, garantindo uma experiência multiplataforma fluida e otimizada.",
    isPrivate: true,
    statusBadge: "Projeto Corporativo Privado"
  },
  {
    id: "taskhub",
    title: "TaskHub",
    subtitle: "Plataforma de Gestão de Projetos, Produtividade & Tarefas",
    description:
      "Sistema web full-stack desenvolvido para otimizar o fluxo de trabalho de equipes, combinando ferramentas avançadas de produtividade em um único painel. A aplicação conta com um Quadro Kanban interativo, Calendário integrado, gerenciamento detalhado de Minhas Tarefas, painel completo de Relatórios e KPIs com gráficos dinâmicos, módulo de Anotações, criação de Fluxogramas & Diagramas e um sistema robusto de Aprovação e Gestão de Usuários.",
    image: "/assets/img/projects/taskhub-kanban.png",
    galleryImages: [
      "/assets/img/projects/taskhub-kanban.png",
      "/assets/img/projects/taskhub-reports.png"
    ],
    tags: ["SaaS / Gestão", "Kanban", "KPIs", "Laravel", "Vue.js", "SPA"],
    techStack: [
      "PHP",
      "Laravel",
      "JavaScript",
      "Vue.js",
      "Tailwind CSS",
      "MySQL",
      "Single Page Application (SPA)"
    ],
    diferenciais:
      "Interface moderna e responsiva (Single Page Application), múltiplos quadros de projetos, gráficos de progresso em tempo real e controle de acesso hierárquico para administradores e colaboradores.",
    isPrivate: true,
    statusBadge: "Sistema Corporativo Privado"
  },
  {
    id: "landing-page-ton",
    title: "Landing Page Ton",
    subtitle: "Página de Vendas, Afiliados e Conversão",
    description:
      "Projeto de landing page responsiva desenvolvida para apresentação de planos, taxas e maquininhas de cartão (Ton), com foco total em experiência do usuário (UX) e conversão de vendas. A página conta com seções estruturadas contendo banner promocional, cronômetro regressivo dinâmico, comparativo de planos, cards de depoimentos de clientes, seção de perguntas frequentes (FAQ), apresentação de aplicativo mobile e diferenciais competitivos.",
    image: "/assets/img/projects/ton-landing.png",
    galleryImages: [
      "/assets/img/projects/ton-landing.png"
    ],
    tags: ["Landing Page", "Alta Conversão", "UX / UI", "Mobile First", "JavaScript"],
    techStack: [
      "HTML5 Semântico",
      "CSS3 Avançado",
      "JavaScript ES6+",
      "Design Responsivo",
      "Gatilhos de Conversão"
    ],
    diferenciais:
      "Layout moderno alinhado à identidade visual da marca, paleta de cores de alto impacto com suporte a modo escuro/claro e seções fluidas voltadas para otimização de conversão.",
    isPrivate: true,
    statusBadge: "Case de Conversão / Vendas"
  }
];

export const experiences: Experience[] = [
  {
    period: "2024 - 2025",
    role: "DBA (Administrador de Banco de Dados)",
    company: "Focus Tecnologia",
    location: "Salvador, BA",
    description:
      "Atuação direta na migração de bancos de dados relacionais, estruturação de rotinas ETL e correções de integridade, aplicando Firebird, MySQL e Pentaho Data Integration."
  },
  {
    period: "2023 - 2024",
    role: "Desenvolvedor Web & Freelancer",
    company: "99jobs & Clientes Diretos",
    location: "Salvador, BA",
    description:
      "Planejamento e construção de aplicações completas, landing pages de alta conversão e interfaces administrativas focadas em responsividade, usabilidade e entrega de valor para o negócio."
  }
];

export const educations: Education[] = [
  {
    period: "2023 - 2026",
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Descomplica",
    location: "Salvador, BA",
    description:
      "Formação acadêmica superior direcionada à engenharia de software, modelagem de dados, arquitetura web, microsserviços e governança de TI."
  },
  {
    period: "2022",
    degree: "Programador Full-Stack",
    institution: "Senac",
    location: "Salvador, BA",
    description:
      "Formação imersiva em desenvolvimento full-stack, consolidando bases de front-end, back-end e consumo de APIs com criação de projeto prático integrado."
  }
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Alpine.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5 Semântico", category: "frontend" },
  { name: "CSS3 / Modern Layouts", category: "frontend" },
  { name: "PHP 8.3", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "APIs RESTful", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Firebird", category: "database" },
  { name: "Capacitor / PWA", category: "tools" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Pentaho Data Integration", category: "tools" }
];
