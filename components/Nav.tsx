import Link from 'next/link';

export function Nav({ active }: { active?: 'skills' }) {
  return (
    <nav
      className="nav anim-reveal"
      style={{ '--i': 0 } as React.CSSProperties}
    >
      <Link href="/" className="nav-brand">
        402<span className="brand-dot">.</span>md
      </Link>
      <div className="nav-links">
        <Link
          href="/skills"
          className={`nav-link${active === 'skills' ? ' nav-link--active' : ''}`}
          aria-current={active === 'skills' ? 'page' : undefined}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Skills
        </Link>
      </div>
    </nav>
  );
}
