import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollReveal from "@/components/ScrollReveal";
import { getAllPostMeta } from "@/lib/posts";
import "@/styles/home.css";

const THUMBS = ["", "v2", "v3"];

export default function HomePage() {
  const latest = getAllPostMeta().slice(0, 3);

  return (
    <>
      <SiteNav />
      <ScrollReveal />

      <header className="hero" id="top">
        <div className="wrap hero-in">
          <h1 className="display">
            The operating system for
            <br />
            <span className="nowrap" style={{ color: "var(--blue-deep)" }}>
              modern TV advertising
            </span>
          </h1>
          <p className="sub">
            Plan, manage and measure every TV advertising campaign in one place. LightBoxTV brings
            fragmented workflows back together and gives every planner more time back.
          </p>
          <div className="cta-row">
            <Link href="/contact?reason=demo" className="btn dark">
              Book a demo <span className="ar">↗</span>
            </Link>
            <Link href="#platform" className="btn line">Explore the platform</Link>
          </div>
        </div>
      </header>

      <div className="stack">
        {/* three-word callout */}
        <section className="panel dk" id="problem">
          <div className="wrap pad">
            <div className="callout reveal">
              <div className="c"><div className="w">FRAGMENTED<span className="acc">.</span></div><p>Plans split across spreadsheets, broadcaster portals, emails and decks.</p><div className="bar"></div></div>
              <div className="c"><div className="w">COMPLEX<span className="acc">.</span></div><p>More inventory, audiences and measurement options every year.</p><div className="bar"></div></div>
              <div className="c"><div className="w">CONNECTED<span className="acc">.</span></div><p>LightBoxTV brings it all back together. One source of truth.</p><div className="bar"></div></div>
            </div>
          </div>
        </section>

        {/* statement */}
        <section className="panel dk">
          <div className="wrap pad-lg">
            <h2 className="h2 statement reveal">We&apos;re bringing modern TV <span className="acc">back together</span>.</h2>
            <p className="stmt-sub lead reveal">TV planning has changed. What was a handful of linear channels is now dozens of platforms, formats and buying routes. LightBoxTV unifies planning, forecasting, collaboration and analytics so teams can move as one.</p>
          </div>
        </section>

        {/* The platform — Plan / Manage / Measure */}
        <section className="panel cr" id="what">
          <div className="wrap pad">
            <div className="plat-head reveal">
              <span className="eyebrow">The platform</span>
              <h2 className="h2">Everything you need,<br />all in one place.</h2>
              <p className="lead">Plan, manage and measure every TV advertising campaign without switching between tools.</p>
            </div>
            <div className="plat-vgrid">
              <div className="pvcard reveal">
                <div className="pv-ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg></div>
                <h3>Plan with confidence</h3>
                <p>Build audiences, compare inventory and forecast reach across linear and connected TV.</p>
              </div>
              <div className="pvcard reveal">
                <div className="pv-ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M4 12h16M4 17h10" /><circle cx="18" cy="17" r="2.2" /></svg></div>
                <h3>Manage it all in one place</h3>
                <p>Create plans, manage deals and collaborate across planning and trading teams seamlessly.</p>
              </div>
              <div className="pvcard reveal">
                <div className="pv-ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg></div>
                <h3>Measure across all video</h3>
                <p>Track performance, delivery and insights across every screen, in near real time.</p>
              </div>
              <div className="pvcard reveal">
                <div className="pv-ico"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg></div>
                <h3>One source of truth</h3>
                <p>Every campaign planned and measured in one connected platform your team can share.</p>
              </div>
            </div>
          </div>
        </section>

        {/* feature stat */}
        <section className="panel cr">
          <div className="wrap pad">
            <div className="feat reveal">
              <div>
                <span className="eyebrow" style={{ color: "#fff", opacity: 0.85 }}>The outcome</span>
                <h2 style={{ marginTop: 14 }}>Give planners 10+ hours back every week.</h2>
                <p>By automating workflows, connecting systems and creating a single source of truth, LightBoxTV gives planning teams their time back.</p>
              </div>
              <div className="art">
                <svg viewBox="0 0 220 200" fill="none" aria-hidden="true" style={{ height: "100%" }}><polygon points="110,20 190,66 110,112 30,66" fill="rgba(255,255,255,.9)"></polygon><polygon points="30,66 110,112 110,188 30,142" fill="rgba(255,255,255,.45)"></polygon><polygon points="190,66 110,112 110,188 190,142" fill="rgba(255,255,255,.7)"></polygon></svg>
              </div>
            </div>
          </div>
        </section>

        {/* modules */}
        <section className="panel lt" id="platform">
          <div className="wrap pad">
            <div className="reveal" style={{ maxWidth: "62ch", marginBottom: 14 }}>
              <span className="eyebrow">Inside the platform</span>
              <h2 className="h2" style={{ marginTop: 14 }}>Run better TV with one workflow.</h2>
              <p className="lead" style={{ marginTop: 18 }}>From audience building to forecasting, trading and analytics, every step lives in one connected platform.</p>
            </div>
            <div className="mgrid">
              <div className="mcard reveal"><div className="icot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"></circle><path d="M3 20a6 6 0 0 1 12 0"></path><path d="M16 11l2 2 4-4"></path></svg></div><h4>Audience Builder</h4><p>Location, first and third party data, and the data marketplace.</p></div>
              <div className="mcard reveal"><div className="icot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h10"></path></svg></div><h4>Planner</h4><p>Select inventory, forecast reach and allocate budget.</p></div>
              <div className="mcard reveal"><div className="icot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18v12H3zM3 7l3-3h12l3 3M9 12h6"></path></svg></div><h4>Dealbook</h4><p>Manage pricing, inventory and commitments together.</p></div>
              <div className="mcard reveal"><div className="icot"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"></path></svg></div><h4>Analytics</h4><p>Reporting, reach and frequency, and cross platform performance.</p></div>
            </div>
          </div>
        </section>

        {/* benefits */}
        <section className="panel dk" id="why">
          <div className="wrap pad">
            <div className="reveal" style={{ maxWidth: "60ch", marginBottom: 14 }}>
              <span className="eyebrow">Why agencies choose LightBoxTV</span>
              <h2 className="h2" style={{ marginTop: 14 }}>Smart automation that does the busywork for you.</h2>
            </div>
            <div className="bgrid reveal">
              <div className="bcell"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7z"></path></svg></div><h4>Automate the busywork</h4><p>Replace manual planning and reporting steps with automated workflows.</p></div>
              <div className="bcell"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"></path></svg></div><h4>Reduce errors</h4><p>Cut duplication and rework with one connected source of truth.</p></div>
              <div className="bcell"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"></circle><path d="M3 20a6 6 0 0 1 12 0"></path><path d="M16 11l2 2 4-4"></path></svg></div><h4>Audience led plans</h4><p>Build audiences and forecast reach in a fraction of the time.</p></div>
              <div className="bcell"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg></div><h4>A holistic view</h4><p>See campaign performance across every screen, in near real time.</p></div>
              <div className="bcell"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2"></path><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2"></path></svg></div><h4>Fits your stack</h4><p>Connects with the existing agency systems and tools your teams use.</p></div>
              <div className="bcell"><div className="ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="9" r="2.4"></circle><circle cx="16" cy="9" r="2.4"></circle><path d="M3 19a5 5 0 0 1 10 0M13 19a5 5 0 0 1 8-4"></path></svg></div><h4>Teams in sync</h4><p>Improve collaboration across planning, trading and analytics.</p></div>
            </div>
          </div>
        </section>

        {/* latest posts */}
        <section className="panel cr" id="news">
          <div className="wrap pad">
            <div className="news-head reveal">
              <div><span className="eyebrow">In the news</span><h2 className="h2" style={{ marginTop: 14 }}>Latest news.</h2></div>
              <Link href="/blog" className="btn line">View all posts <span className="ar">↗</span></Link>
            </div>
            <div className="news">
              {latest.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="acard reveal">
                  <div className={`thumb ${THUMBS[i] ?? ""}`.trim()}>
                    {post.image && <img src={post.image} alt="" />}
                    <span className="cat">{post.category}</span>
                  </div>
                  <div className="ab">
                    <span className="date">{post.formattedDate}</span>
                    <h4>{post.title}</h4>
                    <p>{post.description}</p>
                    <span className="more">Read more ↗</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* big CTA */}
        <section className="panel dk" id="demo">
          <div className="wrap pad">
            <div className="bigcta reveal">
              <Link href="/contact?reason=demo"><h3>Book<br />a demo</h3><span className="ar">↗</span></Link>
              <Link href="/contact?reason=sales"><h3>Talk<br />to us</h3><span className="ar">↗</span></Link>
            </div>
          </div>
        </section>
      </div>

      <SiteFooter />
    </>
  );
}
