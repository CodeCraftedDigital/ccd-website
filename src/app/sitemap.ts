import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codecrafteddigital.com";

  // Static pages
  const routes = ["", "/about", "/contact", "/solutions"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // City pages
  const cityPages = [
    "/website-design-michigan",
    "/website-design-troy-mi",
    "/website-design-grand-blanc-mi",
    "/website-design-fenton-mi",
    "/website-design-davison-mi",
    "/website-design-holly-mi",
    "/website-design-linden-mi",
    "/website-design-swartz-creek-mi",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...cityPages];
}
