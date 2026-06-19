"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";

interface SiteNavProps {
  /** Highlight the Blog/News link. */
  activeBlog?: boolean;
  /** Highlight the About link. */
  activeAbout?: boolean;
  /** Force a solid white nav (used on the Cannes page over its banner). */
  solid?: boolean;
}

export default function SiteNav({ activeBlog = false, activeAbout = false, solid = false }: SiteNavProps) {
  const [scrolled, setScrolled] = useState(solid);
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) return; // solid nav: always white, no scroll/dark switching
    let darkZones: Array<[number, number]> = [];
    const refreshZones = () => {
      darkZones = Array.from(document.querySelectorAll(".panel.dk, .ab-hero, .stat-strip, footer")).map((el) => {
        const r = el.getBoundingClientRect();
        const top = r.top + window.scrollY;
        return [top, top + (el as HTMLElement).offsetHeight] as [number, number];
      });
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const probe = window.scrollY + 34;
      setOnDark(darkZones.some(([a, b]) => probe >= a && probe < b));
    };
    refreshZones();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      refreshZones();
      onScroll();
    });
    window.addEventListener("load", () => {
      refreshZones();
      onScroll();
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const close = () => setMenuOpen(false);
  const navClass = ["", scrolled || solid ? "scrolled" : "", onDark ? "on-dark" : "", menuOpen ? "menu-open" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav id="nav" className={navClass}>
        <div className="nav-in">
          <Link href="/" aria-label="LightBoxTV home">
            <img className="nav-logo c" src="/images/logo-color.png" alt="LightBoxTV" />
            <img className="nav-logo w" src="/images/logo-white.png" alt="LightBoxTV" />
          </Link>
          <div className="nav-links">
            <Link href="/#platform">Platform</Link>
            <Link href="/#why">Why LightBoxTV</Link>
            {/* About hidden until the /team page is ready — page still reachable directly */}
            {/* <Link href="/team" className={activeAbout ? "active" : undefined}>About</Link> */}
            <Link href="/blog" className={activeBlog ? "active" : undefined}>News</Link>
          </div>
          <div className="nav-cta">
            <a href={siteConfig.appUrl} className="nav-login">Login</a>
            <Link href="/contact?reason=demo" className="btn dark">Book a demo</Link>
            <button
              className="burger"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
        <div className="mobile-menu">
          <div className="mm-links">
            <Link href="/#platform" onClick={close}>Platform</Link>
            <Link href="/#why" onClick={close}>Why LightBoxTV</Link>
            {/* <Link href="/team" onClick={close}>About</Link> */}
            <Link href="/blog" onClick={close}>News</Link>
            <a href={siteConfig.appUrl} onClick={close}>Login</a>
          </div>
          <div className="mm-footer">
            <Link href="/contact?reason=demo" className="btn dark" onClick={close}>Book a demo</Link>
          </div>
        </div>
      </nav>
      <div className="scrim" onClick={close}></div>
    </>
  );
}
