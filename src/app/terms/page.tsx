import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service | HC Enterprises',
  description: 'Terms and conditions governing your use of HC Enterprises services.',
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 3, 2025">
      <div className="highlight-box">
        <p>
          Please read these Terms of Service carefully before engaging HC Enterprises or using our
          website. By accessing our website or entering into a service agreement, you accept these
          terms in full.
        </p>
      </div>

      <h2>1. Agreement to Terms</h2>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and use of the HC
        Enterprises website at hcenterprises.co (&quot;Site&quot;) and all associated services
        offered by HC Enterprises (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). By using the Site or engaging our services, you agree to be bound by
        these Terms and our <a href="/privacy">Privacy Policy</a>.
      </p>
      <p>
        If you do not agree with these Terms, you must not access or use our Site or services. We
        reserve the right to update these Terms at any time, and your continued use following any
        changes constitutes acceptance of those changes.
      </p>

      <h2>2. Services</h2>
      <p>
        HC Enterprises provides brand strategy, digital systems architecture, performance marketing,
        and related growth services to businesses (&quot;Services&quot;). The specific scope,
        deliverables, timelines, and fees applicable to each engagement are set out in a separate
        Service Agreement or Statement of Work (&quot;SOW&quot;) executed between the Company and
        the client.
      </p>
      <p>
        These Terms apply to all visitors of the Site and, together with the applicable SOW, govern
        all client engagements. In the event of a conflict between these Terms and an SOW, the SOW
        shall prevail to the extent of the inconsistency.
      </p>

      <h2>3. Eligibility</h2>
      <p>
        You must be at least 18 years of age and have the legal authority to enter into binding
        contracts on behalf of yourself or your organisation to use our Services. By engaging our
        Services, you represent and warrant that you meet these requirements.
      </p>

      <h2>4. Client Obligations</h2>
      <p>As a client of HC Enterprises, you agree to:</p>
      <ul>
        <li>Provide accurate, complete, and up-to-date information necessary for us to perform the Services;</li>
        <li>Grant timely access to any accounts, platforms, assets, or personnel reasonably required;</li>
        <li>Review and provide feedback on deliverables within the timeframes agreed in the SOW;</li>
        <li>Pay all invoices in accordance with the agreed payment schedule;</li>
        <li>Comply with all applicable laws in connection with your use of our Services, including advertising standards and data protection laws;</li>
        <li>Not use the Services to engage in any unlawful, harmful, deceptive, or fraudulent activities.</li>
      </ul>
      <p>
        Delays caused by failure to meet these obligations may affect delivery timelines and do not
        constitute a breach by HC Enterprises.
      </p>

      <h2>5. Fees and Payment</h2>
      <p>
        Fees for Services are set out in the applicable SOW. Unless otherwise agreed in writing:
      </p>
      <ul>
        <li>Monthly retainer fees are due and payable in advance on the first business day of each month;</li>
        <li>Onboarding and implementation fees are due prior to commencement of work;</li>
        <li>Invoices not paid within 14 days of the due date may incur a late payment charge of 1.5% per month on the outstanding balance;</li>
        <li>All fees are exclusive of applicable taxes (including GST/HST/VAT), which will be added where applicable.</li>
      </ul>
      <p>
        We reserve the right to suspend Services for non-payment after reasonable written notice.
      </p>

      <h2>6. Term and Termination</h2>
      <p>
        All engagements begin with a minimum initial term of three (3) months as specified in the
        SOW. Following the initial term, engagements continue on a month-to-month basis unless
        either party provides at least 30 days&apos; written notice of termination.
      </p>
      <p>
        HC Enterprises may terminate the engagement immediately upon written notice if you: (a)
        materially breach these Terms or the SOW and fail to cure such breach within 10 business
        days of notice; (b) become insolvent or make an assignment for the benefit of creditors; or
        (c) engage in conduct that is unlawful, harmful, or damaging to HC Enterprises&apos;
        reputation.
      </p>
      <p>
        Upon termination, you remain liable for all fees accrued up to the date of termination. No
        refunds are provided for pre-paid fees unless otherwise agreed in writing.
      </p>

      <h2>7. Intellectual Property</h2>
      <h3>7.1 Client-Owned Materials</h3>
      <p>
        All materials, data, trademarks, and content you provide to HC Enterprises remain your
        property. You grant us a limited, non-exclusive licence to use these materials solely to
        perform the Services.
      </p>
      <h3>7.2 Deliverables</h3>
      <p>
        Upon receipt of full payment, all final deliverables specifically created for you under an
        SOW (&quot;Work Product&quot;) are assigned to you. HC Enterprises retains ownership of all
        underlying tools, methodologies, frameworks, templates, and pre-existing intellectual
        property used to create the Work Product.
      </p>
      <h3>7.3 Portfolio Rights</h3>
      <p>
        Unless expressly prohibited in writing, HC Enterprises reserves the right to reference your
        name, logo, and results achieved as part of our marketing and portfolio materials.
      </p>

      <h2>8. Confidentiality</h2>
      <p>
        Each party agrees to keep the other&apos;s Confidential Information strictly confidential
        and not to disclose it to any third party without prior written consent, except as required
        by law. &quot;Confidential Information&quot; means any non-public business, technical, or
        financial information disclosed by one party to the other that is designated as confidential
        or that reasonably should be understood to be confidential. This obligation survives
        termination of the engagement for a period of two (2) years.
      </p>

      <h2>9. Warranties and Disclaimers</h2>
      <p>
        HC Enterprises warrants that the Services will be performed in a professional and
        workmanlike manner consistent with industry standards. We do not guarantee specific
        outcomes, revenue results, or return on investment, as these depend on many factors outside
        our control.
      </p>
      <p>
        The Site and any information provided on it are offered on an &quot;as is&quot; basis
        without warranties of any kind, express or implied, including fitness for a particular
        purpose or non-infringement.
      </p>

      <h2>10. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by applicable law, HC Enterprises&apos; total liability to
        you for any claims arising under or in connection with these Terms or any SOW shall not
        exceed the total fees paid by you to HC Enterprises in the three (3) months immediately
        preceding the event giving rise to the claim.
      </p>
      <p>
        In no event shall HC Enterprises be liable for any indirect, incidental, special,
        consequential, or punitive damages, including loss of profits, loss of data, or business
        interruption, even if advised of the possibility of such damages.
      </p>

      <h2>11. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless HC Enterprises and its officers,
        directors, employees, and agents from and against any claims, liabilities, damages, losses,
        and expenses (including reasonable legal fees) arising out of or relating to: (a) your
        breach of these Terms; (b) your use of the Services in violation of any applicable law; or
        (c) any third-party claim arising from content or materials you provided to us.
      </p>

      <h2>12. Governing Law and Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the Province of Ontario and the federal laws of
        Canada applicable therein, without regard to conflict of law principles. Any dispute arising
        under these Terms shall first be subject to good-faith negotiation between the parties. If
        unresolved within 30 days, the dispute shall be submitted to binding arbitration in Toronto,
        Ontario in accordance with the Arbitration Act, 1991 (Ontario).
      </p>

      <h2>13. General</h2>
      <ul>
        <li><strong>Entire Agreement:</strong> These Terms, together with any applicable SOW and our Privacy Policy, constitute the entire agreement between you and HC Enterprises regarding the subject matter hereof.</li>
        <li><strong>Severability:</strong> If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</li>
        <li><strong>Waiver:</strong> Failure to enforce any provision of these Terms shall not constitute a waiver of our right to enforce it in the future.</li>
        <li><strong>Assignment:</strong> You may not assign your rights or obligations under these Terms without our prior written consent. We may assign our rights to a successor in connection with a merger, acquisition, or sale of assets.</li>
      </ul>

      <h2>14. Contact</h2>
      <p>
        For questions about these Terms, please contact us at{' '}
        <a href="mailto:legal@hcenterprises.co">legal@hcenterprises.co</a>.
      </p>
    </LegalLayout>
  )
}
