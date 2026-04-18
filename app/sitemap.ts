import type { MetadataRoute } from 'next';

const SITE = 'https://402.md';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${SITE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
