import Link from "next/link";

const focusAreas = [
  { years: "2+ years", title: "Building and shipping production software" },
  { years: "Python + TS", title: "Backend and frontend development" },
  { years: "Open", title: "Available for projects and collaboration" },
];

export default function Focus() {
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
      </header>

      <main className="main">
        <section className="section">
          <h1 className="page-title">Focus</h1>
          
          <div className="focus-grid">
            {focusAreas.map((item) => (
              <div key={item.title} className="focus-card">
                <span className="focus-years">{item.years}</span>
                <span className="focus-title">{item.title}</span>
              </div>
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