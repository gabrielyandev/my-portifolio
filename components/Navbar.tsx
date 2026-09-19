"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, MessageCircle, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = saved || "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Experiência", href: "#resumo" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contato", href: "#contato" }
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled ? "var(--navbar-bg)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid var(--border-color)" : "1px solid transparent",
        transition: "all 0.3s ease"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "4.75rem"
        }}
      >
        {/* Brand */}
        <Link
          href="#inicio"
          style={{
            textDecoration: "none",
            fontSize: "1.25rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem"
          }}
        >
          <div
            style={{
              width: "2.2rem",
              height: "2.2rem",
              borderRadius: "8px",
              background: "var(--purple-subtle)",
              border: "1px solid var(--purple-primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--purple-primary)",
              boxShadow: "0 0 12px var(--purple-glow)"
            }}
          >
            <Code2 size={16} />
          </div>
          <span style={{ color: "var(--text-primary)", fontWeight: 800 }}>
            gabrielyan<span style={{ color: "var(--purple-primary)" }}>.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "2.25rem"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: "none",
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                letterSpacing: "0.01em",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--purple-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
            title={theme === "dark" ? "Mudar para Modo Claro" : "Mudar para Modo Escuro"}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              borderRadius: "10px",
              width: "2.6rem",
              height: "2.6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--purple-primary)";
              e.currentTarget.style.boxShadow = "0 0 12px var(--purple-glow)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-color)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {theme === "dark" ? (
              <Sun size={18} color="var(--purple-primary)" />
            ) : (
              <Moon size={18} color="var(--purple-primary)" />
            )}
          </button>

          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm desktop-only"
          >
            <MessageCircle size={15} />
            <span>Contratar Serviços</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
            className="mobile-toggle"
            style={{
              display: "flex",
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: "8px",
              color: "var(--text-primary)",
              cursor: "pointer",
              padding: "0.5rem"
            }}
          >
            {isMenuOpen ? <X size={20} color="var(--purple-primary)" /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "4.75rem",
            left: 0,
            right: 0,
            background: "var(--bg-card)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border-color)",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "var(--text-primary)",
                fontSize: "1.05rem",
                fontWeight: 600,
                padding: "0.35rem 0"
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => setIsMenuOpen(false)}
            style={{ marginTop: "0.75rem", width: "100%" }}
          >
            <MessageCircle size={17} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}
