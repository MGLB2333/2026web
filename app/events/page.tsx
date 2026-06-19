import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import EventsGrid from "@/components/EventsGrid";
import { getUpcomingEvents, getPastEvents } from "@/lib/events";
import "@/styles/events.css";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Where you'll find the LightBoxTV team. Meet us at the industry's biggest moments — or catch up on where we've been.",
  alternates: { canonical: "/events" },
};

// Re-evaluate the upcoming/past split daily so events move across without a redeploy.
export const revalidate = 86400;

function count(n: number, noun: string) {
  return `${n} ${noun}${n !== 1 ? "s" : ""}`;
}

export default function EventsPage() {
  const now = new Date();
  const upcoming = getUpcomingEvents(now);
  const past = getPastEvents(now);
  const nextSlug = upcoming[0]?.slug;

  return (
    <>
      <SiteNav activeEvents />

      <header className="ev-hero">
        <div className="glow a"></div>
        <div className="glow b"></div>
        <div className="wrap in">
          <span className="eyebrow">Events</span>
          <h1>Where you&apos;ll find the LightBoxTV team.</h1>
          <p>We&apos;re out at the industry&apos;s biggest moments. Come and meet us — or catch up on where we&apos;ve been.</p>
        </div>
      </header>

      <section className="ev-sec">
        <div className="wrap">
          <div className="ev-head">
            <div>
              <span className="lbl">Upcoming</span>
              <h2>Coming up next.</h2>
            </div>
            <span className="count">{count(upcoming.length, "upcoming event")}</span>
          </div>
          <EventsGrid items={upcoming} initial={3} nextSlug={nextSlug} />
        </div>
      </section>

      <section className="ev-sec alt">
        <div className="wrap">
          <div className="ev-head">
            <div>
              <span className="lbl">Archive</span>
              <h2>Where we&apos;ve been.</h2>
            </div>
            <span className="count">{count(past.length, "past event")}</span>
          </div>
          <EventsGrid items={past} initial={6} past />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
