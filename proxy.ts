import { NextResponse, type NextRequest } from 'next/server';
import { projects } from '@/data/projects';

export const config = {
  matcher: '/',
};

function wantsMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  const parts = accept
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  let mdQ = -1;
  let htmlQ = -1;
  for (const part of parts) {
    const [type, ...params] = part.split(';').map((s) => s.trim());
    const qParam = params.find((p) => p.startsWith('q='));
    const q = qParam ? parseFloat(qParam.slice(2)) : 1;
    if (type === 'text/markdown') mdQ = Math.max(mdQ, q);
    else if (type === 'text/html' || type === 'application/xhtml+xml')
      htmlQ = Math.max(htmlQ, q);
  }
  return mdQ > 0 && mdQ >= htmlQ;
}

function renderMarkdown(): string {
  const projectSection = projects
    .map((p) => {
      const title = p.url ? `[${p.name}](${p.url})` : p.name;
      const tech = p.technologies.join(', ');
      return `### ${title}\n\n_Status: ${p.status}_\n\n${p.description}\n\n**Stack:** ${tech}`;
    })
    .join('\n\n');

  return `# 402.md — Payment infrastructure for the agentic web

I'm Henrique Breim. I build open-source payment infrastructure for agentic systems, web payments, and crypto. This is my hobby, built in my free time. 402.md is where I publish everything.

## Thesis

Most SaaS companies will become a \`.md\` file. A set of instructions for how an agent should act on a problem. Interfaces full of buttons and dense dashboards will look like 90s websites in a few years.

The future is a prompt, maybe over voice. Instead of building another SaaS, I'd rather build infrastructure that lets agents solve problems on their own.

YAGNI. Build what's needed, nothing more.

## Projects

${projectSection}

## Contact

- Email: hello@402.md
- Twitter/X: https://x.com/_breim
- LinkedIn: https://www.linkedin.com/in/henrique-breim/
- Discord: https://discord.gg/v6s9HFkZrV
- GitHub: https://github.com/402md
`;
}

export function proxy(request: NextRequest) {
  if (!wantsMarkdown(request.headers.get('accept'))) {
    return NextResponse.next();
  }

  const body = renderMarkdown();
  const tokens = Math.ceil(body.length / 4);

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(tokens),
      Vary: 'Accept',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
