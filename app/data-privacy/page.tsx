import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/article.css";

export const metadata: Metadata = {
  title: "Data Privacy Policy",
  description:
    "LightBox TV LTD data privacy policy — what information we collect through our advertising technology, how we process it, and the legal bases we rely on.",
  alternates: { canonical: "/data-privacy" },
};

export default function DataPrivacyPage() {
  return (
    <>
      <SiteNav />

      <header className="art-hero">
        <div className="wrap">
          <div className="crumb"><Link href="/">← Back to home</Link></div>
          <div className="art-head">
            <span className="cat">Legal</span>
            <h1>LightBox TV LTD Privacy Policy</h1>
            <p className="sub">What information we collect through our advertising technology, how we process it, and the legal bases we rely on.</p>
          </div>
          <div className="art-meta"><div className="who">Updated on 09.04.2022</div></div>
        </div>
      </header>

      <article className="wrap">
        <div className="prose">
          <h2>About our business</h2>
          <p>LightboxTV provides tools and services that help advertisers and agencies run advertising campaigns on OTT/CTV devices (e.g., streaming devices, “Smart TVs”). We provide services to companies including media agencies and their clients—global advertisers—who may purchase media or data by using our technologies. We use the information that we receive from our partners, including publishers and supply side platforms (“SSPs”), demand side platforms (“DSPs”), data management platforms (“DMPs”), data providers and others (together, “Partners”), to engage in targeted advertising and related data services. This means that we partner with third-party OTT/CTV devices to enrich or serve ads within their TV channels that are customised to their users. We do this by inferring interests and locations from information we have been passed or collected. The overall result is that the consumer receives advertising which is more specifically tailored to his or her interests, and the advertiser reaches an audience which is more interested in its products or services. As noted below, consumers have choices with respect whether to allow targeted advertising and we honour those preferences.</p>
          <p>LightBoxTV participates in the IAB Europe Transparency &amp; Consent Framework and complies with its Specifications and Policies. LightBoxTV’s identification number within the framework is 1175.</p>

          <h2>1. What information do we collect?</h2>
          <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
          <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
          <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

          <h3>Information automatically collected</h3>
          <p><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
          <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
          <p>The information we collect includes:</p>
          <ul>
            <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called &apos;crash dumps&apos;), and hardware settings).</li>
            <li><strong>Location Data.</strong> We collect location data such as information about your device&apos;s location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
          </ul>

          <h2>2. How do we process your information?</h2>
          <p><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
          <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
          <ul>
            <li><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
            <li><strong>To save or protect an individual&apos;s vital interest.</strong> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
          </ul>

          <h2>3. What legal bases do we rely on to process your information?</h2>
          <p><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests.</p>
          <p>If you are located in the EU or UK, this section applies to you.</p>
          <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
          <ul>
            <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time.</li>
            <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
            <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
          </ul>

          <h2>4. Do we use cookies and other tracking technologies?</h2>
          <p><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
          <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.</p>
          <h3>Specific cookie types used by LightBox TV LTD</h3>
          <p><strong>Google Analytics (persistent).</strong> LightBox TV LTD uses Google Analytics to help us analyse how visitors use the Website. Among other things, Google Analytics uses cookies to collect information about the number of visits to the Website, the webpage that referred visitors to the Website, language, device, browser and operating system, the pages visitors view within the Website and other similar details. We do not share this information with third parties. When used this way the Google Analytics cookie is a persistent cookie, and will remain on your device until the cookie expires or you delete it.</p>

          <h2>5. How long do we keep your information?</h2>
          <p><strong>In Short:</strong> We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.</p>
          <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
          <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>

          <h2>6. Do we collect information from minors?</h2>
          <p><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age.</p>
          <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:contact@lightboxtv.co.uk">contact@lightboxtv.co.uk</a>.</p>

          <h2>7. Do we make updates to this notice?</h2>
          <p><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
          <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated &apos;Revised&apos; date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

          <h2>8. Controls for Do Not Track</h2>
          <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (&apos;DNT&apos;) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>

          <h2>9. How can I contact you about this notice?</h2>
          <p>If you have questions or comments about this notice, you may email us at <a href="mailto:contact@lightboxtv.co.uk">contact@lightboxtv.co.uk</a> or by post to:</p>
          <p>
            LightBox TV LTD
            <br />New House
            <br />67-68 Hatton Garden, Suite 10
            <br />London
            <br />EC1N 8JY
            <br />United Kingdom
          </p>
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
