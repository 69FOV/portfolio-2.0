"use client";

import Link from "next/link";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const mailtoLink = `mailto:69fovv@gmail.com?subject=Portfolio Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;
    window.location.href = mailtoLink;
  };

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
          <h1 className="page-title">Contact</h1>
          
          <p className="contact-intro">Reach out directly via email or connect on GitHub or LinkedIn.</p>

          <form className="contact-form" onSubmit={handleSubmit} action="mailto:69fovv@gmail.com" method="post" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" id="name" name="name" required className="form-input" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" id="email" name="email" required className="form-input" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" name="message" required rows={5} className="form-textarea"></textarea>
            </div>
            
            <button type="submit" className="form-button">Send Message</button>
          </form>

          <div className="contact-links">
            <a href="mailto:69fovv@gmail.com" className="contact-link">
              <span className="link-label">Email</span>
              <span className="link-detail">69fovv@gmail.com→</span>
            </a>
            <a href="https://github.com/69FOV" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">GitHub</span>
              <span className="link-detail">github.com/69FOV→</span>
            </a>
            <a href="https://www.linkedin.com/in/leo-magnusson-5169b4399/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-label">LinkedIn</span>
              <span className="link-detail">linkedin.com→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Leo Magnusson.</p>
      </footer>
    </div>
  );
}