export interface Skill {
  name: string;
  note: string;
  url: string;
}

// Agent skills I keep reaching for. Lustra and Speclock are mine; the rest are not.
export const skills: Skill[] = [
  {
    name: 'Lustra',
    note: 'Mine. Code quality for AI agents: runs real dev tooling, then triages the noise with judgment.',
    url: 'https://lustra.sh/',
  },
  {
    name: 'Speclock',
    note: 'Mine. My CLAUDE.md: a spec-locked workflow I run Claude with.',
    url: 'https://github.com/breim/speclock-claude-md',
  },
  {
    name: 'Council',
    note: "Multi-judge consensus for when one model's answer isn't enough.",
    url: 'https://www.skills.sh/boshu2/agentops/council',
  },
  {
    name: 'Documentation Writer',
    note: 'Diátaxis-structured technical docs instead of a wall of text.',
    url: 'https://www.skills.sh/github/awesome-copilot/documentation-writer',
  },
  {
    name: 'Impeccable',
    note: 'Frontend design with real taste. This site was built with it.',
    url: 'https://www.skills.sh/pbakaus/impeccable/impeccable',
  },
  {
    name: 'Naming',
    note: 'Diagnoses why a name falls flat and finds one that lands.',
    url: 'https://www.skills.sh/jwynia/agent-skills/naming',
  },
  {
    name: 'Next.js Best Practices',
    note: 'Keeps RSC boundaries, data fetching, and metadata honest in Next.js.',
    url: 'https://www.skills.sh/vercel-labs/next-skills/next-best-practices',
  },
  {
    name: 'Web Design Guidelines',
    note: 'Audits UI code against the Web Interface Guidelines.',
    url: 'https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines',
  },
  {
    name: 'Agent Browser',
    note: 'Browser control built for agents, not bolted on.',
    url: 'https://www.skills.sh/vercel-labs/agent-browser/agent-browser',
  },
  {
    name: 'Playwright CLI',
    note: 'Drives Playwright from the command line for real browser checks.',
    url: 'https://www.skills.sh/microsoft/playwright-cli/playwright-cli',
  },
  {
    name: 'shadcn/ui',
    note: 'Component search and live examples straight from shadcn/ui.',
    url: 'https://www.skills.sh/shadcn/ui/shadcn',
  },
  {
    name: 'TDD',
    note: "Test-driven development the way it's meant to work.",
    url: 'https://www.skills.sh/mattpocock/skills/tdd',
  },
  {
    name: 'Copywriting',
    note: 'Marketing copy that persuades instead of filling space.',
    url: 'https://www.skills.sh/coreyhaines31/marketingskills/copywriting',
  },
];
