import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codecrafteddigital.com";

  // Fetch solutions
  const solutions = await client.fetch(`
    *[_type == "solution"] {
      "slug": slug.current,
      _updatedAt
    }
  `);

  // Fetch SEO pages (city pages)
  const seoPages = await client.fetch(`
    *[_type == "seoPage"] {
      "slug": slug.current,
      _updatedAt
    }
  `);

  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // Solution pages
  const solutionPages = solutions.map((solution: any) => ({
    url: `${baseUrl}/${solution.slug}`,
    lastModified: new Date(solution._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // SEO/City pages
  const cityPages = seoPages.map((page: any) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...solutionPages, ...cityPages];
}
