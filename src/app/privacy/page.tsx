import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | HC Enterprises',
  description: 'How HC Enterprises collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 3, 2025">
      <div className="highlight-box">
        <p>
          HC Enterprises is committed to protecting your privacy. This policy explains what
          personal data we collect, how we use it, and your rights regarding that data. We comply
          with the Personal Information Protection and Electronic Documents Act (PIPEDA) and, where
          applicable, the EU General Data Protection Regulation (GDPR).
        </p>
      </div>

      <h2>1. Who We Are</h2>
      <p>
        HC Enterprises (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is the data controller
        for personal information collected through our website at hcenterprises.co and in connection
        with our Services. Our contact details are set out at the end of this policy.
      </p>

      <h2>2. Information We Collect</h2>
      <h3>2.1 Information You Provide</h3>
      <ul>
        <li><strong>Contact form submissions:</strong> Name, business email address, company revenue range, tier interest, and any information you include in your message.</li>
        <li><strong>Client onboarding:</strong> Business name, contact details, billing information, and any materials or account access you provide to enable us to deliver Services.</li>
        <li><strong>Email communications:</strong> Content of emails and attachments sent to us.</li>
      </ul>

      <h3>2.2 Information Collected Automatically</h3>
      <ul>
        <li><strong>Usage data:</strong> Pages visited, time spent, referring URL, browser type, operating system, and device type.</li>
        <li><strong>IP address:</strong> Used to determine general geographic location and for security purposes.</li>
        <li><strong>Cookies and tracking technologies:</strong> See our <a href="/cookies">Cookie Policy</a> for full details.</li>
      </ul>

      <h3>2.3 Information from Third Parties</h3>
      <p>
        We may receive information about you from third-party advertising platforms (e.g. Google,
        Meta) when you interact with our advertisements, or from referral partners. This information
        is used only for the purposes described in this policy.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>We use personal information for the following purposes:</p>
      <ul>
        <li><strong>To respond to enquiries</strong> submitted via our contact form (legal basis: legitimate interests / consent);</li>
        <li><strong>To deliver and manage Services</strong> under a client engagement (legal basis: contract performance);</li>
        <li><strong>To process payments</strong> and manage billing (legal basis: contract performance, legal obligation);</li>
        <li><strong>To send service communications</strong> such as invoices, reports, and updates relevant to your engagement (legal basis: contract performance);</li>
        <li><strong>To improve our website and Services</strong> through analytics (legal basis: legitimate interests, with consent for non-essential cookies);</li>
        <li><strong>To send marketing communications</strong> about our Services, only where you have consented or we have a legitimate interest and you have not opted out (legal basis: consent / legitimate interests);</li>
        <li><strong>To comply with legal obligations</strong> including tax, accounting, and regulatory requirements (legal basis: legal obligation).</li>
      </ul>

      <h2>4. How We Share Your Information</h2>
      <p>
        We do not sell your personal information. We may share it with the following categories of
        third parties:
      </p>
      <ul>
        <li><strong>Service providers:</strong> Trusted vendors who assist us in operating our business, including payment processors, CRM platforms, email service providers, and analytics tools. These parties process data only on our instructions.</li>
        <li><strong>Professional advisors:</strong> Lawyers, accountants, and auditors where necessary.</li>
        <li><strong>Law enforcement or regulators:</strong> Where required by applicable law or court order.</li>
        <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to equivalent privacy protections.</li>
      </ul>

      <h2>5. International Data Transfers</h2>
      <p>
        Our primary operations are based in Canada. Some of our service providers are located in
        the United States or other jurisdictions. Where we transfer personal data outside of Canada
        or the European Economic Area, we ensure appropriate safeguards are in place, such as
        Standard Contractual Clauses approved by the European Commission or equivalent measures.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary to fulfil the purposes for
        which it was collected, or as required by law:
      </p>
      <ul>
        <li>Contact form enquiries: 2 years from the date of submission;</li>
        <li>Client records: 7 years from the end of the engagement (for tax and legal compliance);</li>
        <li>Website analytics data: 26 months (rolling);</li>
        <li>Marketing consent records: Until consent is withdrawn, plus 2 years thereafter.</li>
      </ul>

      <h2>7. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the following rights regarding your personal
        information:
      </p>
      <ul>
        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
        <li><strong>Erasure:</strong> Request deletion of your personal data, subject to legal retention obligations.</li>
        <li><strong>Restriction:</strong> Request that we restrict the processing of your data in certain circumstances.</li>
        <li><strong>Portability:</strong> Request a machine-readable copy of data you have provided to us.</li>
        <li><strong>Objection:</strong> Object to processing based on legitimate interests, including for direct marketing.</li>
        <li><strong>Withdraw consent:</strong> Where processing is based on consent, withdraw it at any time without affecting the lawfulness of prior processing.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{' '}
        <a href="mailto:privacy@hcenterprises.co">privacy@hcenterprises.co</a>. We will respond
        within 30 days. You also have the right to lodge a complaint with your applicable data
        protection authority.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement industry-standard technical and organisational measures to protect your
        personal information against unauthorised access, loss, destruction, or alteration. These
        include encryption in transit and at rest, access controls, and regular security reviews.
        However, no method of transmission over the internet is 100% secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        Our Site and Services are not directed at individuals under the age of 18. We do not
        knowingly collect personal information from minors. If we become aware that we have
        inadvertently collected such information, we will delete it promptly.
      </p>

      <h2>10. Third-Party Links</h2>
      <p>
        Our Site may contain links to third-party websites. We are not responsible for the privacy
        practices of those sites and encourage you to review their privacy policies.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Material changes will be notified via
        a notice on our Site or by email to active clients. The &quot;Last updated&quot; date at
        the top of this page reflects the date of the most recent revision.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For privacy-related questions, requests, or complaints, please contact our Privacy Officer:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:privacy@hcenterprises.co">privacy@hcenterprises.co</a></li>
        <li><strong>Post:</strong> HC Enterprises, Privacy Officer, Toronto, Ontario, Canada</li>
      </ul>
    </LegalLayout>
  )
}
