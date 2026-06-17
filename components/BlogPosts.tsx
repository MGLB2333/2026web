"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import PostCard from "./PostCard";
import type { PostMeta } from "@/lib/posts";

/** Blog index body: hero with category filter, featured post, and the
    filterable post grid. Filter state lives here so the chips (in the hero)
    drive the grid below. */
export default function BlogPosts({
  featured,
  posts,
  categories,
}: {
  featured: PostMeta | null;
  posts: PostMeta[];
  categories: string[];
}) {
  const [active, setActive] = useState("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const visible = active === "all" ? posts : posts.filter((p) => p.category === active);

  // Reveal grid cards on mount and on every filter change (the global
  // ScrollReveal runs once, so re-rendered cards need to be shown here).
  useEffect(() => {
    gridRef.current
      ?.querySelectorAll<HTMLElement>(".reveal")
      .forEach((el) => el.classList.add("in"));
  }, [active, visible.length]);

  return (
    <>
      <header className="blog-hero">
        <div className="wrap">
          <span className="eyebrow">Newsroom</span>
          <h1>Latest news.</h1>
          <p>
            Press releases, product news and perspectives on planning, automation and measurement
            for modern TV advertising.
          </p>
          <div className="filters">
            <button
              className={`chip ${active === "all" ? "on" : ""}`.trim()}
              onClick={() => setActive("all")}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`chip ${active === cat ? "on" : ""}`.trim()}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {featured && (
        <section className="wrap">
          <Link href={`/blog/${featured.slug}`} className="featured reveal">
            <div className="ph">
              {featured.image && <img src={featured.image} alt="" />}
              <span className="cat">{featured.category}</span>
            </div>
            <div className="fb">
              <div className="meta">Featured · {featured.readingTime}</div>
              <h2>{featured.title}</h2>
              <p>{featured.description}</p>
              <span className="more">Read the article →</span>
            </div>
          </Link>
        </section>
      )}

      <section className="wrap">
        <div className="postgrid" ref={gridRef}>
          {visible.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
