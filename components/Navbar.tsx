"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, MessageCircle, Terminal } from "lucide-react";
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
    { index: "01", name: "Início", href: "#inicio" },
    { index: "02", name: "Sobre", href: "#sobre" },
    { index: "03", name: "Resumo", href: "#resumo" },
    { index: "04", name: "Skills", href: "#habilidades" },
    { index: "05", name: "GitHub", href: "#github" },
    { index: "06", name: "Projetos", href: "#projetos" }
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: isScrolled ? "var(--navbar-bg)" : "rgba(3, 3, 5, 0.4)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: isScrolled ? "1px solid var(--border-color)" : "1px solid rgba(255, 255, 255, 0.05)",
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
        {/* Brand with cyber logo */}
        <Link
          href="#inicio"
          style={{
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
        >
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "4px",
              background: "rgba(237, 20, 91, 0.15)",
              border: "1px solid var(--fiap-magenta)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--fiap-magenta)",
              boxShadow: "0 0 10px rgba(237, 20, 91, 0.3)"
            }}
          >
            <Terminal size={14} />
          </div>
          <span style={{ color: "#fff", fontWeight: 800 }}>
            gabrielyan<span style={{ color: "var(--fiap-magenta)" }}>.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links with Tech Indexes */}
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
                fontSize: "0.88rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              <span
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.75rem",
                  color: "var(--fiap-magenta)"
                }}
              >
                //{link.index}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Right Actions: Theme Toggle + Contact CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              borderRadius: "4px",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--fiap-magenta)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-color)")}
          >
            {theme === "dark" ? <Sun size={17} color="#00d2ff" /> : <Moon size={17} color="#ed145b" />}
          </button>

          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm desktop-only"
            style={{ display: "none" }}
          >
            <MessageCircle size={15} />
            <span>Falar Comigo</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
            className="mobile-toggle"
            style={{
              display: "flex",
              background: "none",
              border: "none",
              color: "var(--text-primary)",
              cursor: "pointer",
              padding: "0.25rem"
            }}
          >
            {isMenuOpen ? <X size={24} color="var(--fiap-magenta)" /> : <Menu size={24} />}
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
            background: "rgba(3, 3, 5, 0.98)",
            borderBottom: "1px solid var(--fiap-magenta)",
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            boxShadow: "0 10px 40px rgba(0,0,0,0.8)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                textDecoration: "none",
                color: "#ffffff",
                fontSize: "1.1rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.75rem"
              }}
            >
              <span style={{ color: "var(--fiap-magenta)", fontFamily: "monospace", fontSize: "0.9rem" }}>
                //{link.index}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={() => setIsMenuOpen(false)}
            style={{ marginTop: "1rem", width: "100%" }}
          >
            <MessageCircle size={18} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}
