import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";
import "@/styles/article.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How LightBoxTV collects, uses and protects information when you use our website and platform.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />

      <header className="art-hero">
        <div className="wrap">
          <div className="crumb"><Link href="/">← Back to home</Link></div>
          <div className="art-head">
            <span className="cat">Legal</span>
            <h1>Privacy Policy</h1>
            <p className="sub">How LightBoxTV collects, uses and protects information when you use our website and platform.</p>
          </div>
          <div className="art-meta"><div className="who">Last updated: June 2026<span>This is a placeholder policy — replace with your reviewed legal copy.</span></div></div>
        </div>
      </header>

      <article className="wrap">
        <div className="prose">
          <p><strong>This is a template.</strong> The text below is sample wording to show structure and layout. It is not legal advice. Replace it with a policy reviewed by your legal team before publishing.</p>

          <h2>1. Overview</h2>
          <p>LightBoxTV (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains what information we collect, why we collect it, and the choices you have. It applies to our website and to the LightBoxTV platform.</p>

          <h2>2. Information we collect</h2>
          <p>We collect information you provide directly and information gathered automatically as you use our services.</p>
          <ul>
            <li><strong>Information you provide</strong> — such as your name, work email, company and any details you share when you contact us or request a demo.</li>
            <li><strong>Usage information</strong> — such as pages visited, features used and general device and browser information.</li>
            <li><strong>Cookies and similar technologies</strong> — used to keep the site working, remember preferences and understand how it is used.</li>
          </ul>

          <h2>3. How we use information</h2>
          <p>We use the information we collect to provide and improve our services, respond to enquiries, arrange demos, keep our services secure, and meet our legal obligations.</p>

          <h2>4. How we share information</h2>
          <p>We do not sell your personal information. We share it only with service providers who help us operate, with your consent, or where required by law.</p>

          <h2>5. Data retention</h2>
          <p>We keep personal information only for as long as needed for the purposes set out in this policy, unless a longer retention period is required by law.</p>

          <h2>6. Your rights</h2>
          <p>Depending on your location, you may have the right to access, correct, delete or restrict the use of your personal information. To exercise any of these rights, contact us using the details below.</p>

          <h2>7. Security</h2>
          <p>We use appropriate technical and organisational measures to protect personal information against loss, misuse and unauthorised access.</p>

          <h2>8. Changes to this policy</h2>
          <p>We may update this policy from time to time. When we do, we will revise the date at the top of this page.</p>

          <h2>9. Contact us</h2>
          <p>If you have any questions about this policy or how we handle your information, email us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        </div>

        <div className="art-foot">
          <Link href="/" className="btn line">← Back to home</Link>
          <Link href="/terms" className="btn line">Terms of Service →</Link>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
