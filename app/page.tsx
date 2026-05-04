import { projects } from '@/data/projects';

function StatusIndicator({ status }: { status: string }) {
  const labels: Record<string, string> = {
    live: 'Live',
    building: 'Building',
    planned: 'Planned',
    testnet: 'Testnet',
  };
  return (
    <span className={`status status--${status}`}>
      <span className="status-dot" />
      {labels[status] || status}
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <div className="container">
        <nav
          className="nav anim-reveal"
          style={{ '--i': 0 } as React.CSSProperties}
        >
          <span className="nav-brand">
            402<span className="brand-dot">.</span>md
          </span>
        </nav>

        <header className="hero">
          <h1
            className="hero-title anim-reveal"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            <span className="hero-line">Payment infrastructure</span>{' '}
            <span className="hero-line">for the agentic web</span>
          </h1>
          <p
            className="hero-sub anim-reveal"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            I&rsquo;m Henrique Breim. I build open-source payment infrastructure
            for agentic systems, web payments, and crypto. This is my hobby,
            built in my free time. 402.md is where I publish everything.
          </p>
          <div
            className="hero-actions anim-reveal"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            <a
              href="#projects"
              className="btn btn-primary"
            >
              View projects
            </a>
            <a
              href="https://github.com/402md"
              className="btn btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </header>

        <section className="section-thesis">
          <span
            className="label anim-reveal"
            style={{ '--i': 5 } as React.CSSProperties}
          >
            Thesis
          </span>
          <div
            className="thesis anim-reveal"
            style={{ '--i': 6 } as React.CSSProperties}
          >
            <p>
              Most SaaS companies will become a <code>.md</code> file. A set of
              instructions for how an agent should act on a problem. Interfaces
              full of buttons and dense dashboards will look like 90s websites
              in a few years.
            </p>
            <p>
              The future is a prompt, maybe over voice. Instead of building
              another SaaS, I&rsquo;d rather build infrastructure that lets
              agents solve problems on their own.
            </p>
            <p>
              YAGNI. Build what&rsquo;s needed, nothing more.
            </p>
          </div>
        </section>

        <section id="projects" className="section-projects">
          <span
            className="label anim-reveal"
            style={{ '--i': 9 } as React.CSSProperties}
          >
            Projects
          </span>
          <div className="project-list">
            {projects.map((project, i) => (
              <article
                key={project.slug}
                className="project anim-reveal"
                style={{ '--i': 10 + i } as React.CSSProperties}
              >
                <div className="project-top">
                  <h3 className="project-name">
                    {project.url ? (
                      <a href={project.url} className="project-link">
                        {project.name}
                        <span className="project-arrow" aria-hidden="true">
                          →
                        </span>
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  <StatusIndicator status={project.status} />
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-connect">
          <span
            className="label anim-reveal"
            style={{ '--i': 14 } as React.CSSProperties}
          >
            Say hi
          </span>
          <div
            className="connect anim-reveal"
            style={{ '--i': 15 } as React.CSSProperties}
          >
            <p className="connect-text">
              If this is your kind of rabbit hole, I&rsquo;d love to chat.
              Whether you&rsquo;re building with agents, thinking about web
              payments, or just curious about where this is all going.
            </p>
            <div className="connect-links">
              <a
                href="mailto:hello@402.md"
                className="connect-link"
              >
                hello@402.md
              </a>
              <a
                href="https://x.com/_breim"
                className="connect-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter / X
              </a>
              <a
                href="https://www.linkedin.com/in/henrique-breim/"
                className="connect-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://discord.gg/v6s9HFkZrV"
                className="connect-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
            </div>
          </div>
        </section>

        <footer
          className="footer anim-reveal"
          style={{ '--i': 16 } as React.CSSProperties}
        >
          <span className="footer-brand">
            402<span className="brand-dot">.</span>md
          </span>
          <span className="footer-author">Henrique Breim</span>
        </footer>
      </div>
    </main>
  );
}
