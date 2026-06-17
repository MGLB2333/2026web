import type { MetadataRoute } from "next";
import { getAllPostMeta } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/blog", "/contact", "/privacy", "/terms", "/cannes"].map((p) => ({
    url: `${siteConfig.url}${p}`,
    lastModified: new Date(),
  }));

  const posts = getAllPostMeta().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticRoutes, ...posts];
}
