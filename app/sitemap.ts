import { MetadataRoute } from 'next'
import { PROGRAMS } from '@/lib/constants'

const BASE = 'https://codeorange.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const programPages = PROGRAMS
    .filter((p) => p.slug !== 'privacy-track') // has its own static page below
    .map((p) => ({
      url: `${BASE}/programs/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [
    { url: BASE,                              lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/programs`,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/programs/privacy-track`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/fellowships`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/community`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/apply`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...programPages,
  ]
}
