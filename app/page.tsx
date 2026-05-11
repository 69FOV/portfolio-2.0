"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Theme = "dark" | "light";

const socialLinks = [
  { label: "Email", href: "mailto:69fovv@gmail.com", detail: "69fovv@gmail.com" },
  { label: "GitHub", href: "https://github.com/69FOV", detail: "github.com/69FOV" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leo-magnusson-5169b4399/", detail: "linkedin.com/in/leo-magnusson" },
];

const focusAreas = [
  { years: "2+ years", title: "Building and shipping production software" },
  { years: "Python + TS", title: "Backend and frontend development" },
  { years: "Open", title: "Available for projects and collaboration" },
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const initialTheme: Theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    setTheme(initialTheme);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [ready, theme]);

  return (
    <div className="page">
      <header className="header">
        <Link href="/" className="logo" aria-label="Leo Magnusson Home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M16 2L29.5 10V22L16 30L2.5 22V10L16 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/focus">Focus</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button type="button" className="theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </header>

      <main className="main">
        <section className="hero">
          <p className="subtitle">Full-stack software engineer</p>
          <h1 className="title">Leo Magnusson</h1>
          <div className="hero-links">
            <a href="mailto:69fovv@gmail.com">Email Leo</a>
            <a href="https://github.com/69FOV" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/leo-magnusson-5169b4399/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </section>

        <section className="section" id="focus">
          <h2 className="section-title">What I focus on</h2>
          <div className="focus-grid">
            {focusAreas.map((item) => (
              <div key={item.title} className="focus-card">
                <span className="focus-years">{item.years}</span>
                <span className="focus-title">{item.title}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <h2 className="section-title">About</h2>
          <p className="about-text">Software engineer focused on building automated systems and clean, maintainable code. Comfortable across the full stack with a preference for backend development.</p>
        </section>

        <section className="section" id="projects-preview">
          <h2 className="section-title">Projects</h2>
          <Link href="/projects" className="projects-link">View all projects →</Link>
        </section>

        <section className="section" id="contact">
          <h2 className="section-title">Contact</h2>
          <p className="contact-text">Reach out directly via email or connect on GitHub or LinkedIn.</p>
          <div className="contact-links">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="link-label">{link.label}</span>
                <span className="link-detail">{link.detail}→</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Leo Magnusson.</p>
      </footer>
    </div>
  );
}