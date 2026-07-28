export interface Skill {
  name: string;
  note: string;
  url: string;
}

// Agent skills I keep reaching for. Lustra, Speclock, and Great Ideas are mine; the rest are not.
export const skills: Skill[] = [
  {
    name: 'Lustra',
    note: 'Mine. Runs the real tooling on your code (lint, types, tests, security), then sorts the output into what needs fixing and what to ignore.',
    url: 'https://lustra.sh/',
  },
  {
    name: 'Speclock',
    note: 'Mine. The CLAUDE.md I hand Claude on every project. Spec first, code second.',
    url: 'https://github.com/breim/speclock-claude-md',
  },
  {
    name: 'Great Ideas',
    note: 'Mine. Reads the last 7 days of Product Hunt, Reddit, and HN, then ranks what is worth building from S to C. Every idea comes with a dated link.',
    url: 'https://github.com/breim/great-ideas',
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
    note: 'Frontend design with actual taste. I built this site with it.',
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
    note: 'Makes the agent write the failing test before it writes the code.',
    url: 'https://www.skills.sh/mattpocock/skills/tdd',
  },
  {
    name: 'Copywriting',
    note: 'Headlines, CTAs, and page structure that sell instead of filling space.',
    url: 'https://www.skills.sh/coreyhaines31/marketingskills/copywriting',
  },
  {
    name: 'User Research',
    note: 'Structures the interview, then turns the transcripts into findings you can act on.',
    url: 'https://www.skills.sh/cookiy-ai/user-research-skill/user-research-cookiy',
  },
];
