import type { NextConfig } from 'next';

const linkHeader = [
  '</sitemap.xml>; rel="sitemap"; type="application/xml"',
  '</robots.txt>; rel="describedby"; type="text/plain"',
  '</>; rel="alternate"; type="text/markdown"',
  '<https://github.com/402md>; rel="author"',
].join(', ');

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          { key: 'Link', value: linkHeader },
          { key: 'Vary', value: 'Accept' },
        ],
      },
    ];
  },
};

export default nextConfig;
