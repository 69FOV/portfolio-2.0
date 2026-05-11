import Link from "next/link";

type NavProps = {
  currentPath?: string;
};

export default function Nav({ currentPath = "/" }: NavProps) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/focus", label: "Focus" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="nav" aria-label="Main navigation">
      <Link href="/" className="nav-logo" aria-label="Leo Magnusson Home">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 2L29.5 10V22L16 30L2.5 22V10L16 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
      <div className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={currentPath === link.href ? "nav-link active" : "nav-link"}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}