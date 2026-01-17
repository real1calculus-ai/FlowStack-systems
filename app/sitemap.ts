import { projects } from '@/data/projects'
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coreline-automations.vercel.app'

  const routes: MetadataRoute.Sitemap = [
    '',
    '/projects',
    '/services',
    '/about',
    '/contact',
    '/toolbox',
    '/journey',
    '/how-to-add-projects',
  ].map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: new Date(),
  }))

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
  }))

  return [...routes, ...projectRoutes]
}
