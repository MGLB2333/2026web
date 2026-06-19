import type { MetadataRoute } from "next";
import { getAllPostMeta } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // "/team" omitted while the About page is unfinished — still reachable by direct URL, just not advertised for indexing.
  const staticRoutes = ["", "/blog", "/contact", "/privacy", "/cookies", "/terms", "/cannes", "/ctv-supply-path-explorer"].map((p) => ({
    url: `${siteConfig.url}${p}`,
    lastModified: new Date(),
  }));

  const posts = getAllPostMeta().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...posts];
}
