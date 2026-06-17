"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  {
    title: "Plan with confidence",
    body: "Build audiences, compare inventory and forecast reach across linear and connected TV.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </>
    ),
  },
  {
    title: "Manage it all in one place",
    body: "Create plans, manage deals and collaborate across planning and trading teams seamlessly.",
    icon: (
      <>
        <path d="M4 7h16M4 12h16M4 17h10" />
        <circle cx="18" cy="17" r="2.2" />
      </>
    ),
  },
  {
    title: "Measure across all video",
    body: "See performance, delivery and insights across every screen, in near real time, instantly.",
    icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  },
  {
    title: "One source of truth",
    body: "Every campaign planned and measured in one connected platform your team can share.",
    icon: (
      <>
        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
];

export default function PlatformScroller() {
  const trackRef = useRef<HTMLDivElement>(null);
  const progRef = useRef<HTMLSpanElement>(null);

  const step = () => {
    const card = trackRef.current?.querySelector<HTMLElement>(".pcard");
    return card ? card.offsetWidth + 22 : 320;
  };

  useEffect(() => {
    const track = trackRef.current;
    const prog = progRef.current;
    if (!track || !prog) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const p = max > 0 ? track.scrollLeft / max : 0;
      const w = Math.max(22, (track.clientWidth / track.scrollWidth) * 100);
      prog.style.width = `${w}%`;
      prog.style.left = `${p * (100 - w)}%`;
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="plat-scroller reveal">
      <div className="plat-track" ref={trackRef}>
        {CARDS.map((c) => (
          <div className="pcard" key={c.title}>
            <div className="pc-ico">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                {c.icon}
              </svg>
            </div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
          </div>
        ))}
      </div>
      <div className="plat-controls">
        <div className="plat-arrows">
          <button aria-label="Previous" onClick={() => trackRef.current?.scrollBy({ left: -step(), behavior: "smooth" })}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button aria-label="Next" onClick={() => trackRef.current?.scrollBy({ left: step(), behavior: "smooth" })}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
        <div className="plat-prog"><span ref={progRef}></span></div>
      </div>
    </div>
  );
}
