import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import CannesForm from "@/components/CannesForm";
import "@/styles/form.css";
import "@/styles/cannes.css";

export const metadata: Metadata = {
  title: "Meet us at Cannes",
  description:
    "Meet the LightBoxTV team at Cannes Lions 2026, 22–25 June. Request a meeting on the Croisette.",
  alternates: { canonical: "/cannes" },
};

export default function CannesPage() {
  return (
    <>
      <SiteNav solid />

      <div className="cannes-page">
        <section className="cannes-hero">
          <div className="wrap">
            <div className="hero-banner">
              <div className="grad-fallback"></div>
              <img className="cannes-photo" src="/images/cannesimage.webp" alt="Cannes Croisette" />
              <div className="ov"></div>
              <div className="banner-inner">
                <div className="banner-copy">
                  <span className="eyebrow">Cannes Lions 2026</span>
                  <h1>Meet us<br />at Cannes.</h1>
                  <div className="date-pill">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
                    22nd — 25th June 2026
                  </div>
                  <p className="sub">We&apos;ll be on the Croisette for Cannes Lions. Fill out the form to get in touch and schedule some time to connect with the LightBoxTV team.</p>
                </div>
                <div className="banner-form">
                  <CannesForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
