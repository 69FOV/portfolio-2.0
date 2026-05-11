import Link from "next/link";

const projects = [
  {
    name: "Onyx",
    category: "Finance / AI",
    description: "Fully automated AI-powered personal finance app. Helps users manage money, budget, and invest across assets with minimal effort.",
  },
  {
    name: "Jade",
    category: "Real Estate / AI",
    description: "AI-powered virtual wholesaling platform. Helps identify, analyze, and prioritize real estate deals faster through automated lead scoring, comps, and deal tracking.",
  },
];

export default function Projects() {
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
          <h1 className="page-title">Projects</h1>
          
          <table className="projects-table" role="table" aria-label="Projects">
            <thead>
              <tr>
                <th scope="col">Project</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.name}>
                  <td className="project-name">{project.name}</td>
                  <td className="project-category">{project.category}</td>
                  <td className="project-description">{project.description}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="project-images">
            <figure className="project-figure">
              <img src="/project1.jpg" alt="Onyx project screenshot showing dashboard" className="project-image" />
              <figcaption>Onyx Dashboard</figcaption>
            </figure>
            <figure className="project-figure">
              <img src="/project2.jpg" alt="Jade project screenshot showing deal analysis" className="project-image" />
              <figcaption>Jade Deal Analysis</figcaption>
            </figure>
            <figure className="project-figure">
              <img src="/logo.svg" alt="Leo Magnusson portfolio logo" className="project-image" />
              <figcaption>Portfolio Logo</figcaption>
            </figure>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Leo Magnusson.</p>
      </footer>
    </div>
  );
}