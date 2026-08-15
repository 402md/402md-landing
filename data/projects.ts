export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
  status: 'live' | 'building' | 'planned' | 'testnet';
}

export const projects: Project[] = [
  {
    slug: 'agents-honestly',
    name: 'Agents Honestly',
    description:
      'Free, open-source book on building agentic systems that hold up in production. 23 parts and 214 chapters, from the first LLM API call through retrieval, context management, tool design, durable execution, observability, and security. Written for backend engineers. No signup, no paywall.',
    technologies: ['AI Agents', 'Production Systems', 'Open Source'],
    url: 'https://agentshonestly.com/',
    status: 'live',
  },
  {
    slug: 'lang-on-rock',
    name: 'Lang on Rock',
    description:
      'Document database for AI agents. Stores Open Knowledge Format bundles as a compiled index, so an agent asks for the section it needs instead of crawling Markdown or querying a vector store. One binary, embedded or over the network, with an MCP server for Claude Code and Cursor.',
    technologies: ['Bun', 'MCP', 'AI Agents', 'Database'],
    url: 'https://langonrock.com/',
    status: 'live',
  },
  {
    slug: 'ccworklog',
    name: 'ccworklog',
    description:
      'Turns Claude Code and opencode transcripts into a timesheet. It reads the gaps between events to work out how long you were actually working, so there is no timer to start. Reports by day, week, month, session, or project, with token costs, as a table, JSON, HTML, or PDF.',
    technologies: ['TypeScript', 'Bun', 'CLI', 'AI Agents'],
    url: 'https://github.com/breim/ccworklog',
    status: 'live',
  },
  {
    slug: 'loop-harness',
    name: 'Loop Harness',
    description:
      'Claude Code plugin for building engineering loops that run without a human in the seat. A loop finds the work, hands it to a coding agent, checks the result against a goal, and picks the next move. Comes with skills to qualify, scaffold, and review loops, plus a separate verifier agent that only judges and never fixes.',
    technologies: ['Claude Code', 'AI Agents', 'Automation'],
    url: 'https://github.com/breim/loop-harness',
    status: 'live',
  },
  {
    slug: 'lustra',
    name: 'Lustra',
    description:
      'Code quality skill for AI coding agents. Runs the real tooling (lint, type-check, tests, security and dependency scans), then sorts the output into what needs fixing and what to ignore. Catches defects plain linters walk past, in JavaScript, TypeScript, Python, Go, and Rust.',
    technologies: ['AI Agents', 'Code Quality', 'Polyglot'],
    url: 'https://lustra.sh/',
    status: 'live',
  },
  {
    slug: 'facilitator',
    name: 'Facilitator',
    description:
      'Cross-chain x402 facilitator. Lets sellers accept USDC across multiple networks without configuring a wallet for each one. Currently supports Stellar, Base, and Solana.',
    technologies: ['x402', 'Cross-chain', 'USDC'],
    url: 'https://facilitator.402.md/',
    status: 'testnet',
  },
  {
    slug: 'agentcard',
    name: 'AgentCard',
    description:
      'Prepaid credit cards for AI agents. Fund a card with USDC on Stellar, write the spending rules into a smart contract, and let your agents pay for services on their own.',
    technologies: ['Stellar', 'USDC', 'Smart Contracts'],
    url: 'https://agentcard.402.md/',
    status: 'live',
  },
  {
    slug: 'wallet',
    name: 'x402 Wallet',
    description:
      'Wallet for Stellar and EVM (Base). Connect Claude Desktop to the x402 protocol and consume paid endpoints directly from your AI assistant.',
    technologies: ['Stellar', 'EVM', 'x402', 'MCP'],
    url: 'https://wallet.402.md/',
    status: 'live',
  },
  {
    slug: 'nonap',
    name: 'NoNap',
    description:
      'macOS menu bar app that keeps your Mac awake. Run it indefinitely, or for 15 minutes, 30 minutes, or an hour, with optional display-wake. Swift, on top of IOKit power assertions.',
    technologies: ['Swift', 'macOS', 'IOKit'],
    url: 'https://github.com/breim/nonap',
    status: 'live',
  },
];
