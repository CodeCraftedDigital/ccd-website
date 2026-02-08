import { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

export default async function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codecrafteddigital.com";

  // Fetch all SEO pages from Sanity
  const seoPages = await client.fetch(`
    *[_type == "seoPage"] {
      "slug": slug.current,
      _updatedAt
    }
  `);

  // Static pages
  const routes = ["", "/about", "/contact", "/solutions"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic SEO pages from Sanity
  const dynamicPages = seoPages.map((page: any) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: new Date(page._updatedAt),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...dynamicPages];
}
