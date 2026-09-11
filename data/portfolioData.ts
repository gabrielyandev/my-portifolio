export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
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
  level?: string;
}

export const personalInfo = {
  name: "Gabriel Yan",
  handle: "@gabrielyandev",
  badge: "Full-Stack · Front-End · Back-End",
  typingTexts: [
    "Em desenvolver para o mundo",
    "Em transformar ideias em código",
    "Em criar interfaces de alto impacto",
    "Em arquitetar soluções completas"
  ],
  bioTitle: "Desenvolvedor Full-Stack · Front-End, Back-End & Bancos de Dados",
  bioDescription:
    "Sou brasileiro, baiano e soteropolitano. Desde a infância, aos 13 anos, me tornei amante da tecnologia depois de ver um computador pela primeira vez. Sou um pesquisador nato, autodidata, e trabalhei como freelancer em suporte de TI. Aos 22 anos, descobri minha paixão pela programação, que é minha trilha atual. Estou cursando o 3º período de Análise e Desenvolvimento de Sistemas na Descomplica. Meu próximo passo é Engenharia de Software, com o objetivo de morar no Canadá.",
  profileImage: "/assets/profile1.png",
  cvPath: "/assets/curriculo.pdf",
  github: "https://github.com/gabrielyandev",
  linkedin: "https://www.linkedin.com/in/gabrielyandev/",
  whatsapp: "https://api.whatsapp.com/send?phone=5571996504413&text=Oi,%20vim%20atrav%C3%A9s%20do%20seu%20portif%C3%B3lio%20e%20tenho%20interesse%20em%20seus%20servi%C3%A7os"
};

export const experiences: Experience[] = [
  {
    period: "2024 - 2025",
    role: "DBA (Administrador de Banco de Dados)",
    company: "Focus Tecnologia",
    location: "Salvador, BA",
    description:
      "Atuei na migração do banco de dados e fiz as devidas correções ou implementações de novas funcionalidades, utilizando Firebird, MySQL e Pentaho Data Integration."
  },
  {
    period: "2023 - 2024",
    role: "Desenvolvedor Web",
    company: "99jobs & Freelancer",
    location: "Salvador, BA",
    description:
      "Desenvolvimento de websites e interfaces para clientes com intermediação da plataforma 99jobs e indicações diretas, priorizando responsividade e experiência do usuário."
  }
];

export const educations: Education[] = [
  {
    period: "2023 - 2026",
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Faculdade Descomplica",
    location: "Salvador, BA",
    description:
      "Graduação tecnológica focada em engenharia de software, modelagem de dados, arquitetura web e metodologias ágeis."
  },
  {
    period: "2022",
    degree: "Programador FullStack",
    institution: "Senac",
    location: "Salvador, BA",
    description:
      "Formação intensiva onde construí a base completa de front-end e back-end, desenvolvendo a aplicação 'EASYDATE' como projeto prático de conclusão."
  }
];

export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "HTML5 / Semantic", category: "frontend" },
  { name: "CSS3 / Modern Layouts", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "APIs RESTful", category: "backend" },
  { name: "MySQL", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Firebird", category: "database" },
  { name: "Docker", category: "tools" },
  { name: "Git & GitHub", category: "tools" },
  { name: "Python", category: "backend" },
  { name: "APIs RESTful", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "SQL Server", category: "database" },  
];

export const projects: Project[] = [
  {
    id: "take-ton",
    title: "Ton Maquininhas",
    description:
      "Landing Page focada em afiliado, captura de leads, taxa de conversão elevada e apresentação detalhada de taxas e produtos.",
    image: "/assets/img/take-ton.png",
    tags: ["Landing Page", "Performance", "Conversão"],
    liveUrl: "https://landing-page-ton-gabrielyandev.vercel.app/",
    githubUrl: "https://github.com/gabrielyandev/landing-page-ton"
  },
  {
    id: "my-portfolio",
    title: "Meu Portfólio (Next.js)",
    description:
      "Portfólio moderno de alto padrão construído em Next.js com App Router, TypeScript, Dark/Light mode nativo e animações fluidas.",
    image: "/assets/img/my-portfolio.png",
    tags: ["Next.js", "React", "TypeScript"],
    liveUrl: "https://portfolio-gabrielyandev.vercel.app/",
    githubUrl: "https://github.com/gabrielyandev/my-portifolio"
  },
  {
    id: "tic-tac-toe",
    title: "Tic Tac Toe",
    description:
      "Jogo da Velha interativo projetado para explorar raciocínio algorítmico, lógica de controle de turnos e detecção de vitórias.",
    image: "/assets/img/tic-tac-toe.png",
    tags: ["JavaScript", "Game Logic", "UI"],
    liveUrl: "https://tic-tac-toe-gabrielyandev.vercel.app/",
    githubUrl: "https://github.com/gabrielyandev/tic-tac-toe"
  },
  {
    id: "qr-code",
    title: "Gerador de QR Code",
    description:
      "Aplicação ágil que consome API externa em tempo real para transformar URLs e textos dinâmicos em QR Codes para download.",
    image: "/assets/img/qr-code.png",
    tags: ["API Integration", "JavaScript", "Tools"],
    liveUrl: "https://gerador-qr-code-alpha.vercel.app/",
    githubUrl: "https://github.com/gabrielyandev/gerador-qr-code"
  },
  {
    id: "easy-date",
    title: "Landing Page Easy Date",
    description:
      "Projeto final do curso Senac FullStack, concebido com design responsivo, prototipagem cuidada e componentes visualmente atrativos.",
    image: "/assets/img/easy-date.png",
    tags: ["FullStack", "Landing Page", "Design"],
    liveUrl: "https://landing-page-easy-date-gabrielyandev.vercel.app/",
    githubUrl: "https://github.com/gabrielyandev/landing-page-easy-date"
  },
  {
    id: "form-responsive",
    title: "Formulário Responsivo",
    description:
      "Interface com validações de inputs em tempo real, máscaras de dados amigáveis e feedback instantâneo de erros para o usuário.",
    image: "/assets/img/form-responsive.png",
    tags: ["Form Validation", "UX", "CSS"],
    liveUrl: "https://form-responsive-gabrielyandev.vercel.app/",
    githubUrl: "https://github.com/gabrielyandev/form-responsive"
  },
  {
    id: "calc-react",
    title: "Calculadora em React",
    description:
      "Calculadora inspirada no ecossistema iOS, estruturada com estados controlados e lógica matemática precisa em React.",
    image: "/assets/img/calc-react.png",
    tags: ["React", "State Management", "iOS UI"],
    liveUrl: "https://calculadora-react-kappa-tan.vercel.app/",
    githubUrl: "https://github.com/gabrielyandev/calculadora-react"
  },
  {
    id: "gerador-de-senhas",
    title: "Gerador de Senhas",
    description:
      "Utilitário de segurança cibernética para gerar senhas fortes e aleatórias com filtros de caracteres especiais e tamanho configurável.",
    image: "/assets/img/gerador-de-senhas.png",
    tags: ["Security", "JavaScript", "Utility"],
    liveUrl: "https://gerador-de-senhas-black-gamma.vercel.app/",
    githubUrl: "https://github.com/gabrielyandev/gerador-de-senha"
  }
];
