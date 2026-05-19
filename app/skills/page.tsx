import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { skills } from '@/data/skills';

export const metadata: Metadata = {
  title: '402.md: Skills I like',
  description:
    'Open-source agent skills I keep reaching for. Lustra is mine; the rest just changed how I work.',
};

export default function SkillsPage() {
  return (
    <main>
      <div className="container">
        <Nav active="skills" />

        <header className="skills-header">
          <span
            className="label anim-reveal"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            Skills I like
          </span>
          <h1
            className="skills-title anim-reveal"
            style={{ '--i': 2 } as React.CSSProperties}
          >
            Skills I keep <span className="hero-accent">coming back to</span>
          </h1>
          <p
            className="skills-intro anim-reveal"
            style={{ '--i': 3 } as React.CSSProperties}
          >
            Open-source agent skills I keep reaching for. Lustra is mine; the
            rest just changed how I work.
          </p>
        </header>

        <section className="skill-list">
          {skills.map((skill, i) => (
            <a
              key={skill.name}
              href={skill.url}
              className="skill anim-reveal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ '--i': 4 + i } as React.CSSProperties}
            >
              <span className="skill-name">
                {skill.name}
                <span className="skill-arrow" aria-hidden="true">
                  →
                </span>
              </span>
              <span className="skill-note">{skill.note}</span>
            </a>
          ))}
        </section>

        <section
          className="skills-cta anim-reveal"
          style={{ '--i': 4 + skills.length } as React.CSSProperties}
        >
          <p className="skills-cta-text">
            All open-source. Take what&rsquo;s useful, fork the rest.
          </p>
          <a
            href="https://github.com/402md"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse on GitHub →
          </a>
        </section>

        <Footer index={5 + skills.length} />
      </div>
    </main>
  );
}
