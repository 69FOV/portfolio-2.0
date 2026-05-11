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