import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site";
import "@/styles/article.css";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you access and use the LightBoxTV website and platform.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />

      <header className="art-hero">
        <div className="wrap">
          <div className="crumb"><Link href="/">← Back to home</Link></div>
          <div className="art-head">
            <span className="cat">Legal</span>
            <h1>Terms of Service</h1>
            <p className="sub">The terms that apply when you access and use the LightBoxTV website and platform.</p>
          </div>
          <div className="art-meta"><div className="who">Last updated: June 2026<span>This is a placeholder agreement — replace with your reviewed legal copy.</span></div></div>
        </div>
      </header>

      <article className="wrap">
        <div className="prose">
          <p><strong>This is a template.</strong> The text below is sample wording to show structure and layout. It is not legal advice. Replace it with terms reviewed by your legal team before publishing.</p>

          <h2>1. Acceptance of terms</h2>
          <p>By accessing or using the LightBoxTV website and platform (the &quot;Services&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Services.</p>

          <h2>2. Use of the Services</h2>
          <p>You may use the Services only in line with these terms and any applicable laws. You are responsible for any activity that takes place under your account.</p>
          <ul>
            <li>Do not misuse, disrupt or attempt to gain unauthorised access to the Services.</li>
            <li>Do not use the Services to infringe the rights of others.</li>
            <li>Keep your account credentials secure and confidential.</li>
          </ul>

          <h2>3. Accounts</h2>
          <p>Some features require an account. You agree to provide accurate information and to keep it up to date. We may suspend or terminate accounts that breach these terms.</p>

          <h2>4. Intellectual property</h2>
          <p>The Services, including all content, branding and software, are owned by LightBoxTV or its licensors and are protected by applicable laws. These terms do not grant you any rights to our trademarks or branding.</p>

          <h2>5. Subscriptions and fees</h2>
          <p>Where the Services are provided under a paid plan, the applicable fees, billing terms and renewal conditions will be set out in your order or agreement with us.</p>

          <h2>6. Disclaimers</h2>
          <p>The Services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. To the fullest extent permitted by law, we make no warranties of any kind regarding the Services.</p>

          <h2>7. Limitation of liability</h2>
          <p>To the fullest extent permitted by law, LightBoxTV will not be liable for any indirect, incidental or consequential damages arising from your use of the Services.</p>

          <h2>8. Changes to these terms</h2>
          <p>We may update these terms from time to time. When we do, we will revise the date at the top of this page. Continued use of the Services means you accept the updated terms.</p>

          <h2>9. Contact us</h2>
          <p>If you have any questions about these terms, email us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        </div>

        <div className="art-foot">
          <Link href="/" className="btn line">← Back to home</Link>
          <Link href="/privacy" className="btn line">Privacy Policy →</Link>
        </div>
      </article>

      <SiteFooter />
    </>
  );
}
