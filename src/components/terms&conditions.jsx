import React, { useState } from "react";

// ---- EasePay Legal Pages (Single-file React Component) ----
// - Contains Privacy Policy and Terms of Service in one component
// - Uses Tailwind for styling
// - Includes quick navigation and print button
// - Replace CONTACT_EMAIL with your actual contact address

const CONTACT_EMAIL = "mayureshreddy2006@gmail.com"; // TODO: change to your email
const EFFECTIVE_DATE = "August 17, 2025"; // Update when needed

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className="prose max-w-none text-gray-700 leading-relaxed">{children}</div>
  </div>
);

export default function EasePayLegal() {
    const [view, setView] = useState("privacy");

    return (
      <div className="min-h-screen bg-gray-50 p-6 md:p-10" style={{textAlign:'center'}}>
        <div className="max-w-4xl mx-auto">
          <header className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">EasePay Legal</h1>
            <p className="text-gray-600 mt-1">Privacy Policy & Terms of Service</p>
          </header>

          <nav className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setView("privacy")}
              className={`px-4 py-2 rounded-2xl shadow-sm border text-sm font-medium transition ${
                view === "privacy"
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-900 border-gray-200 hover:border-gray-400"
              }`}
              aria-pressed={view === "privacy"}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setView("terms")}
              className={`px-4 py-2 rounded-2xl shadow-sm border text-sm font-medium transition ${
                view === "terms"
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-900 border-gray-200 hover:border-gray-400"
              }`}
              aria-pressed={view === "terms"}
            >
              Terms of Service
            </button>
            <button
              onClick={() => window.print()}
              className="ml-auto px-4 py-2 rounded-2xl shadow-sm border text-sm font-medium bg-white hover:border-gray-400"
              title="Print this page"
            >
              Print
            </button>
          </nav>

          <main className="bg-white rounded-2xl shadow p-6 md:p-8 border border-gray-100">
            {view === "privacy" ? <PrivacyPolicy /> : <TermsOfService />}
          </main>

          <footer className="max-w-4xl mx-auto text-xs text-gray-500 mt-6">
            <p>
              Note: These documents are templates tailored for a hackathon project. They do not constitute legal advice. Consider consulting a lawyer for production use.
            </p>
          </footer>
        </div>
      </div>
    );
  }

  function PrivacyPolicy() {
    return (
      <article>
        <h2 className="text-2xl font-bold">Privacy Policy</h2>
        <p className="text-gray-600 mt-1">Effective Date: {EFFECTIVE_DATE}</p>

        <Section title="Overview">
          <p>
            EasePay ("we," "our," or "us") values your privacy. This Privacy Policy explains how we collect, use, and protect information when you use our application to pay utilities and micro-services using digital currency.
          </p>
        </Section>

        <Section title="Information We Collect">
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Account Information:</strong> Wallet address (via Pi SDK), display name, basic profile details.
            </li>
            <li>
              <strong>Transaction Data:</strong> Bill or service identifiers, amounts, timestamps, and transaction hashes.
            </li>
            <li>
              <strong>Optional Contact Details:</strong> Email or phone if you choose to add them for receipts or support.
            </li>
            <li>
              <strong>Usage Data:</strong> Device/browser type and app interaction metrics collected in aggregate for analytics.
            </li>
          </ul>
        </Section>

        <Section title="How We Use Information">
          <ul className="list-disc pl-6 space-y-1">
            <li>Process payments and provide receipts and transaction history.</li>
            <li>Maintain security, prevent fraud, and troubleshoot issues.</li>
            <li>Improve app performance, features, and user experience.</li>
            <li>Send important notices about changes to the app or policies.</li>
          </ul>
        </Section>

        <Section title="Data Sharing">
          <ul className="list-disc pl-6 space-y-1">
            <li>We do not sell personal data.</li>
            <li>
              Limited sharing with service providers (e.g., hosting, analytics, cloud infrastructure) under confidentiality obligations.
            </li>
            <li>
              Some transaction metadata may be recorded on a blockchain and can be publicly viewable by design.
            </li>
          </ul>
        </Section>

        <Section title="Data Security">
          <ul className="list-disc pl-6 space-y-1">
            <li>Wallet login and payments handled via the Pi SDK.</li>
            <li>Encryption in transit (HTTPS) and industry-standard safeguards.</li>
            <li>Hashed references (e.g., SHA-256) for sensitive records where applicable.</li>
          </ul>
        </Section>

        <Section title="Your Rights">
          <ul className="list-disc pl-6 space-y-1">
            <li>Request access, correction, or deletion of your information, subject to legal and technical limits.</li>
            <li>Opt out of optional communications at any time.</li>
          </ul>
        </Section>

        <Section title="Data Retention">
          <p>
            We retain information only as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements.
          </p>
        </Section>

        <Section title="Children's Privacy">
          <p>
            EasePay is not directed to children under the age of 13. If you believe a minor has provided us information, contact us to request deletion.
          </p>
        </Section>

        <Section title="Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material changes will be communicated within the app. Continued use of EasePay after changes constitutes acceptance.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions or requests? Email us at <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </article>
    );
  }

  function TermsOfService() {
    return (
      <article>
        <h2 className="text-2xl font-bold">Terms of Service</h2>
        <p className="text-gray-600 mt-1">Effective Date: {EFFECTIVE_DATE}</p>

        <Section title="Acceptance of Terms">
          <p>
            These Terms govern your use of EasePay. By accessing or using the application, you agree to be bound by these Terms and our Privacy Policy.
          </p>
        </Section>

        <Section title="Eligibility & Compliance">
          <ul className="list-disc pl-6 space-y-1">
            <li>You must have a valid account and digital wallet compatible with the app.</li>
            <li>You are responsible for complying with all applicable laws in your jurisdiction.</li>
          </ul>
        </Section>

        <Section title="Services">
          <ul className="list-disc pl-6 space-y-1">
            <li>Utility payments (e.g., electricity, water, internet) and mobile recharges.</li>
            <li>Community micro-services listings and payments between users.</li>
            <li>Authentication and payments facilitated via the Pi SDK.</li>
          </ul>
        </Section>

        <Section title="User Responsibilities">
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate bill/service identifiers and payment details.</li>
            <li>Maintain the security of your wallet credentials and device.</li>
            <li>Use the app only for lawful purposes and respectful interactions.</li>
          </ul>
        </Section>

        <Section title="Payments, Fees, and Finality">
          <ul className="list-disc pl-6 space-y-1">
            <li>All transactions are recorded and may be immutable depending on network design.</li>
            <li>Network or service fees may apply and will be shown prior to payment when possible.</li>
            <li>Transactions are generally final; we are not responsible for errors due to incorrect input by users.</li>
          </ul>
        </Section>

        <Section title="Platform Role & Third Parties">
          <ul className="list-disc pl-6 space-y-1">
            <li>EasePay is a platform that facilitates payments; it is not the provider of utility services.</li>
            <li>We do not control third-party utility providers or their service quality and availability.</li>
          </ul>
        </Section>

        <Section title="Prohibited Activities">
          <ul className="list-disc pl-6 space-y-1">
            <li>Fraud, money laundering, or any unlawful activity.</li>
            <li>Interference with the app’s security or operation.</li>
            <li>Impersonation or misrepresentation.</li>
          </ul>
        </Section>

        <Section title="Intellectual Property">
          <p>
            The app, trademarks, and content are owned by EasePay or its licensors and protected by applicable IP laws. You receive a limited, non-exclusive license to use the app.
          </p>
        </Section>

        <Section title="Disclaimers & Limitation of Liability">
          <ul className="list-disc pl-6 space-y-1">
            <li>The app is provided on an "as is" and "as available" basis without warranties of any kind.</li>
            <li>We are not liable for indirect, incidental, or consequential damages, or for loss of tokens due to user error or wallet compromise.</li>
          </ul>
        </Section>

        <Section title="Termination">
          <p>
            We may suspend or terminate access for violations of these Terms, suspected fraud, or security risks. You may stop using the app at any time.
          </p>
        </Section>

        <Section title="Changes to Terms">
          <p>
            We may update these Terms from time to time. Material changes will be communicated in-app. Continued use after changes constitutes acceptance of the updated Terms.
          </p>
        </Section>

        <Section title="Governing Law & Dispute Resolution">
          <p>
            These Terms are governed by applicable laws of your country or region, unless local law requires otherwise. Disputes will be resolved through informal negotiation first, then arbitration or small-claims court where permitted.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Need help? Email <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </article>
    );
}