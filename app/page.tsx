"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

type Theme = "dark" | "light";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/placeholder",
    detail: "github.com/placeholder",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/placeholder",
    detail: "linkedin.com/in/placeholder",
  },
  {
    label: "Email",
    href: "mailto:hello@placeholder.dev",
    detail: "hello@placeholder.dev",
  },
];

const profileNotes = [
  { label: "Based in", value: "Remote / Flexible" },
  { label: "Focus", value: "Front-end systems & brand sites" },
  { label: "Availability", value: "Open for new projects" },
];

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    const initialTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: light)").matches
          ? "light"
          : "dark";

    setTheme(initialTheme);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) {
      return;
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [ready, theme]);

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.topBar}>
          <a className={styles.brand} href="#top">
            Maya Rowan
          </a>
          <nav className={styles.nav} aria-label="Section navigation">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </header>

        <main className={styles.main} id="top">
          <section className={styles.hero}>
            <p className={styles.eyebrow}>Designer turned front-end developer</p>
            <h1 className={styles.title}>
              I craft clear, polished portfolio experiences for people who want their work to feel as sharp as it reads.
            </h1>
            <p className={styles.summary}>
              This placeholder portfolio presents a simple, modern one-page presence with thoughtful spacing,
              responsive structure, and a soft dark mode that keeps the focus on the work.
            </p>

            <div className={styles.actionRow}>
              <a className={styles.primaryAction} href="#contact">
                Start a conversation
              </a>
              <a className={styles.secondaryAction} href="mailto:hello@placeholder.dev">
                hello@placeholder.dev
              </a>
            </div>

            <ul className={styles.linkGrid} aria-label="Social links">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a className={styles.linkCard} href={link.href} target="_blank" rel="noreferrer">
                    <span>{link.label}</span>
                    <strong>{link.detail}</strong>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} id="about">
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>About</p>
              <h2>
                A calm visual system, a focused message, and just enough motion to make the page feel alive.
              </h2>
            </div>

            <div className={styles.aboutGrid}>
              <div className={styles.storyCard}>
                <p>
                  I like interfaces that feel intentional from the first glance: measured type, strong contrast,
                  and interactions that reward curiosity without getting in the way. For a small personal site,
                  that means a single page with a memorable hero, approachable sections, and links that are always
                  easy to find.
                </p>
                <p>
                  The content here is placeholder text, but the structure is ready to swap in real work history,
                  current projects, or a sharper personal bio whenever you are ready to customize it.
                </p>
              </div>

              <dl className={styles.profileList}>
                {profileNotes.map((item) => (
                  <div className={styles.profileItem} key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className={styles.section} id="contact">
            <div className={styles.sectionIntro}>
              <p className={styles.sectionLabel}>Contact</p>
              <h2>Available for freelance builds, portfolio refreshes, and small product launches.</h2>
            </div>

            <div className={styles.contactCard}>
              <p>
                If you need a clean online presence that feels professional on desktop and easy to browse on mobile,
                send a note. I usually reply within a couple of business days.
              </p>

              <div className={styles.contactLinks}>
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                    <span>{link.label}</span>
                    <strong>{link.detail}</strong>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <p>© 2026 Maya Rowan. Built with Next.js App Router.</p>
          <a href="mailto:hello@placeholder.dev">Say hello</a>
        </footer>
      </div>
    </div>
  );
}