import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="fl">
            <img src="/images/logo-white.png" alt="LightBoxTV" />
            <p>
              The operating system for modern TV advertising. Plan, manage and measure every
              campaign in one place.
            </p>
          </div>
          <div className="foot-cols">
            <div>
              <h6>Explore</h6>
              <Link href="/#platform">Platform</Link>
              <Link href="/#why">Why LightBoxTV</Link>
              <Link href="/blog">Blog</Link>
            </div>
            <div>
              <h6>Company</h6>
              <Link href="/team">About</Link>
              <Link href="/contact?reason=demo">Book a demo</Link>
              <Link href="/contact">Contact us</Link>
              <a href={siteConfig.appUrl}>Login</a>
            </div>
            <div>
              <h6>Get in touch</h6>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <Link href="/">lightboxtv.com</Link>
            </div>
          </div>
        </div>
        <div className="foot-base">
          <span>© 2026 LightBoxTV. All rights reserved.</span>
          <span>
            <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
