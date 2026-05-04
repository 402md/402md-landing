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
      'Prepaid credit cards for AI agents. Fund a card with USDC on Stellar, set spending policies via smart contracts, and let your agents pay for services autonomously.',
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
      'Lightweight macOS menu bar app to keep your Mac awake. Toggle indefinite, 15/30-minute, or 1-hour sessions, with optional display-wake. Built in Swift on top of IOKit power assertions.',
    technologies: ['Swift', 'macOS', 'IOKit'],
    url: 'https://github.com/breim/nonap',
    status: 'live',
  },
];
