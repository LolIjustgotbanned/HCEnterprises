import type { Metadata } from 'next'
import LegalLayout from '@/components/layout/LegalLayout'

export const metadata: Metadata = {
  title: 'Cookie Policy | HC Enterprises',
  description: 'Information about how HC Enterprises uses cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="June 3, 2025">
      <div className="highlight-box">
        <p>
          This Cookie Policy explains what cookies are, which cookies HC Enterprises uses on
          hcenterprises.co, and how you can manage your preferences. For information about how we
          handle your personal data more broadly, see our{' '}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </div>

      <h2>1. What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They are
        widely used to make websites work efficiently, provide a better user experience, and give
        website owners information about how their site is being used. Cookies can be
        &quot;session&quot; cookies (deleted when you close your browser) or &quot;persistent&quot;
        cookies (remaining on your device until they expire or you delete them).
      </p>
      <p>
        In addition to cookies, we may use similar technologies such as web beacons, pixel tags,
        and local storage. References to &quot;cookies&quot; in this policy include these
        technologies where applicable.
      </p>

      <h2>2. Categories of Cookies We Use</h2>

      <h3>2.1 Strictly Necessary Cookies</h3>
      <p>
        These cookies are essential for the Site to function and cannot be switched off. They are
        typically set in response to actions you take, such as submitting a form or setting your
        privacy preferences. They do not store any personally identifiable information.
      </p>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm text-zinc-400 border-collapse">
          <thead>
            <tr className="border-b border-[#2A2A2A] text-left">
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Name</th>
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Purpose</th>
              <th className="py-2 text-zinc-300 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#2A2A2A]">
              <td className="py-3 pr-4 font-mono text-[#D4AF6A] text-xs">hc_cookie_consent</td>
              <td className="py-3 pr-4">Stores your cookie consent preferences</td>
              <td className="py-3">1 year</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2.2 Analytics Cookies</h3>
      <p>
        These cookies help us understand how visitors interact with our Site by collecting and
        reporting information anonymously. We use this data to improve the Site&apos;s structure
        and content. These cookies are only set with your consent.
      </p>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm text-zinc-400 border-collapse">
          <thead>
            <tr className="border-b border-[#2A2A2A] text-left">
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Name</th>
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Provider</th>
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Purpose</th>
              <th className="py-2 text-zinc-300 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: '_ga', provider: 'Google Analytics', purpose: 'Distinguishes unique users', duration: '2 years' },
              { name: '_ga_*', provider: 'Google Analytics', purpose: 'Maintains session state', duration: '2 years' },
              { name: '_gid', provider: 'Google Analytics', purpose: 'Distinguishes users (short)', duration: '24 hours' },
            ].map((row) => (
              <tr key={row.name} className="border-b border-[#2A2A2A]">
                <td className="py-3 pr-4 font-mono text-[#D4AF6A] text-xs">{row.name}</td>
                <td className="py-3 pr-4">{row.provider}</td>
                <td className="py-3 pr-4">{row.purpose}</td>
                <td className="py-3">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3>2.3 Marketing and Advertising Cookies</h3>
      <p>
        These cookies track your browsing activity across websites to deliver advertisements more
        relevant to you and your interests. They are also used to limit the number of times you see
        an ad and to measure the effectiveness of advertising campaigns. These cookies are only set
        with your consent.
      </p>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm text-zinc-400 border-collapse">
          <thead>
            <tr className="border-b border-[#2A2A2A] text-left">
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Name</th>
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Provider</th>
              <th className="py-2 pr-4 text-zinc-300 font-semibold">Purpose</th>
              <th className="py-2 text-zinc-300 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: '_fbp', provider: 'Meta (Facebook)', purpose: 'Ad delivery and conversion tracking', duration: '3 months' },
              { name: '_fbc', provider: 'Meta (Facebook)', purpose: 'Click ID for ad attribution', duration: '2 years' },
              { name: 'ads/ga-audiences', provider: 'Google Ads', purpose: 'Re-engagement of users via Google Ads', duration: 'Session' },
              { name: '_gcl_au', provider: 'Google Ads', purpose: 'Conversion tracking', duration: '3 months' },
            ].map((row) => (
              <tr key={row.name} className="border-b border-[#2A2A2A]">
                <td className="py-3 pr-4 font-mono text-[#D4AF6A] text-xs">{row.name}</td>
                <td className="py-3 pr-4">{row.provider}</td>
                <td className="py-3 pr-4">{row.purpose}</td>
                <td className="py-3">{row.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Some cookies listed above are set by third-party services (Google, Meta). These third
        parties have their own privacy policies and may use the data they collect for their own
        purposes. We encourage you to review:
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google Privacy Policy
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">
            Meta Privacy Policy
          </a>
        </li>
      </ul>

      <h2>4. Managing Your Cookie Preferences</h2>
      <p>
        When you first visit our Site, a cookie consent banner will appear allowing you to accept
        all cookies or select only essential cookies. Your preferences are stored in the{' '}
        <code className="text-[#D4AF6A] font-mono text-xs bg-[#1A1A1A] px-1.5 py-0.5 rounded">
          hc_cookie_consent
        </code>{' '}
        cookie for one year.
      </p>
      <p>
        You can change your preferences at any time by clearing this cookie and refreshing the
        page, or through your browser settings. Note that disabling certain cookies may affect the
        functionality of our Site.
      </p>

      <h3>Browser-Level Cookie Controls</h3>
      <p>
        Most browsers allow you to manage cookies through their settings. For guidance, visit the
        help page for your browser:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">
            Apple Safari
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h3>Opt-Out of Analytics</h3>
      <p>
        You can opt out of Google Analytics across all websites by installing the{' '}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics Opt-out Browser Add-on
        </a>
        .
      </p>

      <h2>5. Do Not Track</h2>
      <p>
        Some browsers include a &quot;Do Not Track&quot; (DNT) setting. Our Site does not
        currently respond to DNT signals. We encourage you to use the consent controls described
        above to manage your preferences.
      </p>

      <h2>6. Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy as our practices change or as required by law. The
        &quot;Last updated&quot; date at the top of this page reflects the most recent revision. We
        encourage you to review this policy periodically.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about our use of cookies can be directed to{' '}
        <a href="mailto:privacy@hcenterprises.co">privacy@hcenterprises.co</a>.
      </p>
    </LegalLayout>
  )
}
