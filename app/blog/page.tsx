import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import BlogPosts from "@/components/BlogPosts";
import { getAllPostMeta, getCategories, getFeaturedPost } from "@/lib/posts";
import "@/styles/blog.css";

export const metadata: Metadata = {
  title: "Latest news",
  description:
    "Press releases, product news and perspectives on planning, automation and measurement for modern TV advertising.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPostMeta();
  const featured = getFeaturedPost(posts) ?? null;
  // Chips come from every post, featured included — otherwise a category with
  // only one post in it disappears from the filters the moment it is featured.
  const categories = getCategories(posts);

  return (
    <div className="page-narrow">
      <SiteNav activeBlog />
      <ScrollReveal />

      <div className="blog-page">
        <BlogPosts featured={featured} posts={posts} categories={categories} />

        <section className="endcta">
          <div className="wrap">
            <div className="box reveal">
              <h2>See LightBoxTV in action.</h2>
              <p>
                See how leading agencies are replacing fragmented workflows with one platform for
                planning, managing and measuring modern TV advertising.
              </p>
              <Link href="/contact?reason=demo" className="btn lite">
                Book a demo <span className="ar">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
