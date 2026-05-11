import Link from "next/link";

const skills = ["Python", "TypeScript", "JavaScript", "SQL", "HTML / CSS", "Docker", "YAML", "Postgres", "Redis", "React"];

export default function About() {
  return (
    <div className="page">
      <header className="header">
        <Link href="/" className="logo" aria-label="Leo Magnusson Home">
          <img src="/logo.png" alt="Leo Magnusson Logo" width={32} height={32} />
        </Link>
        <nav className="nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/focus">Focus</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="main">
        <section className="section">
          <h1 className="page-title">About</h1>
          
          <div className="about-content">
            <img src="/profile.svg" alt="Leo Magnusson profile" className="about-image" />
            <p className="about-text">
              Software engineer focused on building automated systems and clean, maintainable code. 
              Comfortable across the full stack with a preference for backend development.
            </p>
            
            <h2 className="skills-title">Tech Stack</h2>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Leo Magnusson.</p>
      </footer>
    </div>
  );
}