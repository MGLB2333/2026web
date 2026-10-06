import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import "@/styles/article.css";

export const metadata: Metadata = {
  title: "Platform Privacy Notice",
  description:
    "How LightBox TV Ltd handles personal information in connection with the LightBoxTV platform, including user accounts, client operations and Data Partner audience data.",
  alternates: { canonical: "/data-privacy" },
};

export default function DataPrivacyPage() {
  return (
    <div className="page-narrow">
      <SiteNav />

      <header className="art-hero">
        <div className="wrap">
          <div className="crumb"><Link href="/">← Back to home</Link></div>
          <div className="art-head">
            <span className="cat">Legal</span>
            <h1>LightBoxTV Platform Privacy Notice</h1>
            <p className="sub">This notice explains how LightBox TV Ltd handles personal information in connection with the LightBoxTV platform.</p>
          </div>
          <div className="art-meta"><div className="who">Last updated: October 2026</div></div>
        </div>
      </header>

      <article className="wrap">
        <div className="prose">
          <p><em>For information about how we process personal information through our website and in connection with enquiries, marketing and other business activities, please see our <Link href="/privacy">Website Privacy Policy</Link>.</em></p>

          <h2>About LightBoxTV</h2>
          <p>LightBox TV Ltd (“LightBoxTV”, “we”, “us” or “our”) provides a technology platform that businesses in the advertising and media industry use to plan, manage, measure and report on advertising campaigns.</p>
          <p>Our clients, typically media agencies and advertisers, determine how they use the platform, including the campaigns they manage and the data and audience products they choose to use.</p>

          <h2>1. Information we collect</h2>
          <p>The information we process depends on how you and your organisation use the platform.</p>
          <p><strong>Information you or your organisation provide</strong></p>
          <ul>
            <li>Account information for platform users, such as name, business email address, employer, job title and access permissions.</li>
            <li>Correspondence with us about the platform, including support requests.</li>
            <li>Information entered into or provided to the platform by our clients. This is primarily business and campaign information but may include information relating to individuals.</li>
          </ul>
          <p><strong>Information collected automatically</strong></p>
          <ul>
            <li>Technical information such as IP address, browser and device type.</li>
            <li>Login, authentication and security information.</li>
            <li>Records of activity within the platform.</li>
            <li>Diagnostic and performance information.</li>
          </ul>
          <p><strong>Information from other sources</strong></p>
          <p>We may receive information from our clients and other parties where necessary to provide and operate the platform, including information required to establish and administer user accounts.</p>

          <h2>2. Data Partners and audience data</h2>
          <p>LightBoxTV may make data and audience products from third-party data providers (“Data Partners”) available through the platform. Clients may choose to use these products in connection with their advertising activities.</p>
          <p>Data Partners collect and develop their datasets independently of LightBoxTV and are responsible for their processing of personal data in accordance with applicable data protection law.</p>
          <p>Audience data made available through the platform is generally provided in aggregated or otherwise non-identifying form.</p>
          <p>LightBoxTV does not use Data Partner products for the purpose of identifying or re-identifying individuals.</p>
          <p>Further information about relevant Data Partners and products is available on request.</p>

          <h2>3. Our role</h2>
          <p>LightBoxTV acts as a controller where we determine the purposes and means of processing personal information. This includes activities such as administering user accounts and access, maintaining the security of the platform and supporting platform users.</p>
          <p>Where we process personal information on behalf of a client, our processing is governed by our agreement with that client and applicable data protection law.</p>
          <p>Where personal data is processed in connection with Data Partner products or other third-party data, the respective roles and responsibilities of LightBoxTV, our clients and relevant third parties depend on the nature of the processing and the applicable contractual arrangements.</p>

          <h2>4. How we use personal information</h2>
          <p>Where we act as a controller, we may process personal information to:</p>
          <ul>
            <li>provide, administer and support the platform and our services;</li>
            <li>create and manage user accounts and access;</li>
            <li>communicate with platform users;</li>
            <li>operate, secure, maintain and improve the platform and our services;</li>
            <li>support and manage our client relationships;</li>
            <li>detect and prevent misuse, fraud and security incidents; and</li>
            <li>comply with legal and regulatory obligations and protect our legal rights.</li>
          </ul>
          <p>Where we process personal information on behalf of a client, we do so in accordance with that client’s instructions and our agreement with them.</p>

          <h2>5. Legal bases</h2>
          <p>Where UK or EU data protection law applies and we act as a controller, we rely on one or more of the following legal bases:</p>
          <ul>
            <li><strong>Contract</strong> – where processing is necessary to provide the platform and our services under our agreements with clients and users.</li>
            <li><strong>Legitimate interests</strong> – to administer, operate, secure and improve the platform, support its users and manage our client relationships, where those interests are not overridden by individual rights.</li>
            <li><strong>Consent</strong> – where consent is required or otherwise relied upon.</li>
            <li><strong>Legal obligation</strong> – where processing is necessary to comply with applicable law.</li>
          </ul>
          <p>Where we process personal information on behalf of a client, that client is responsible for determining the applicable legal basis for the processing.</p>

          <h2>6. Sharing information</h2>
          <p>We may share personal information where necessary with:</p>
          <ul>
            <li>service providers that support the operation and provision of our platform and services;</li>
            <li>professional advisers, such as lawyers, accountants and insurers;</li>
            <li>clients and business partners where necessary to provide our services;</li>
            <li>regulators, public authorities or law enforcement where required by law or otherwise permitted under applicable law; and</li>
            <li>parties involved in a potential or actual investment, merger, acquisition, restructuring or sale of all or part of our business.</li>
          </ul>
          <p>Where required, we put appropriate contractual and data protection safeguards in place.</p>

          <h2>7. International transfers</h2>
          <p>Personal information may be processed in countries outside the UK or European Economic Area.</p>
          <p>Where applicable data protection law requires safeguards for an international transfer, we use appropriate measures, such as applicable adequacy arrangements or approved contractual safeguards.</p>

          <h2>8. How long we keep information</h2>
          <p>We retain personal information for as long as reasonably necessary for the purposes for which it is processed, taking into account our legal, regulatory and contractual obligations.</p>
          <p>Where we process personal information on behalf of a client, retention may also be governed by our agreement with that client and their instructions.</p>
          <p>When personal information is no longer required, we delete or anonymise it as appropriate.</p>

          <h2>9. Security</h2>
          <p>We use appropriate technical and organisational measures designed to protect personal information against unauthorised or unlawful processing and against accidental loss, destruction or damage.</p>
          <p>Platform users are responsible for keeping their login credentials secure.</p>

          <h2>10. Cookies and similar technologies</h2>
          <p>We use cookies and similar technologies where necessary to operate and secure the platform and may use other technologies to understand and improve how it is used.</p>
          <p>Where required by law, we obtain consent before using non-essential cookies or similar technologies.</p>
          <p>Cookies and similar technologies used on our website are addressed in our <Link href="/privacy">Website Privacy Policy</Link>.</p>

          <h2>11. Children</h2>
          <p>The LightBoxTV platform is a business-to-business service and is not intended for use by children.</p>

          <h2>12. Your rights</h2>
          <p>Depending on applicable law and the circumstances, you may have rights in relation to your personal information, including rights to:</p>
          <ul>
            <li>access personal information held about you;</li>
            <li>have inaccurate information corrected;</li>
            <li>request deletion of your information;</li>
            <li>restrict or object to certain processing;</li>
            <li>receive certain information in a portable format; and</li>
            <li>withdraw consent where processing is based on consent.</li>
          </ul>
          <p>These rights may be subject to conditions and exemptions under applicable law.</p>
          <p>Where LightBoxTV processes personal information on behalf of a client or another controller, we may refer your request to that organisation or assist them in responding to it.</p>
          <p>You may also have the right to complain to the UK Information Commissioner’s Office or another competent data protection authority. We would welcome the opportunity to address any concerns with you first.</p>

          <h2>13. Changes to this notice</h2>
          <p>We may update this notice from time to time to reflect changes to our services, processing activities or applicable law. The date at the top indicates when it was last updated.</p>

          <h2>14. Contact us</h2>
          <p>If you have questions about this notice or wish to exercise your rights, please contact:</p>
          <p>
            LightBox TV Ltd
            <br />New House
            <br />67–68 Hatton Garden, Suite 10
            <br />London EC1N 8JY
            <br />United Kingdom
          </p>
          <p>Email: <a href="mailto:privacy@lightboxtv.com">privacy@lightboxtv.com</a></p>
        </div>

        <div className="art-foot">
          <Link href="/" className="btn line">← Back to home</Link>
          <Link href="/privacy" className="btn line">Website Privacy Policy →</Link>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
