"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (systemPrefersDark ? "dark" : "light");
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
    { name: "Sobre mim", href: "#sobre" },
    { name: "Resumo", href: "#resumo" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Projetos", href: "#projetos" }
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
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
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
          height: "4.5rem"
        }}
      >
        {/* Brand */}
        <Link
          href="#inicio"
          style={{
            textDecoration: "none",
            fontSize: "1.25rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            display: "flex",
            alignItems: "center",
            gap: "0.25rem"
          }}
        >
          <span className="text-gradient">{personalInfo.handle}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "2rem"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "var(--text-secondary)",
                fontSize: "0.95rem",
                fontWeight: 500,
                transition: "color 0.2s ease"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Actions: Theme Toggle + WhatsApp CTA + Mobile Menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={toggleTheme}
            aria-label="Alternar tema"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.2s ease"
            }}
          >
            {theme === "dark" ? <Sun size={18} color="#eab308" /> : <Moon size={18} color="#7e22ce" />}
          </button>

          <a
            href={personalInfo.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm desktop-only"
            style={{ display: "none" }}
          >
            <MessageCircle size={16} />
            <span>Contato</span>
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
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "4.5rem",
            left: 0,
            right: 0,
            background: "var(--bg-primary)",
            borderBottom: "1px solid var(--border-color)",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
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
                fontSize: "1.1rem",
                fontWeight: 600,
                padding: "0.5rem 0"
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
            style={{ marginTop: "0.5rem", width: "100%" }}
          >
            <MessageCircle size={18} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </nav>
  );
}
