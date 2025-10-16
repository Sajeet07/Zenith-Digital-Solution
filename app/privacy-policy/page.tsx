import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Zenith Digital Solution",
  description: "Read the privacy policy for Zenith Digital Solution. Learn how we collect, use, and protect your information when you use our website and services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f9fafb', minHeight: '100vh', color: '#222' }}>
      <main style={{ maxWidth: '700px', margin: '0 auto', padding: '3rem 1rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#2d2d2d' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '1.5rem', color: '#555' }}>
          Last updated: October 16, 2025
        </p>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>1. Introduction</h2>
          <p>
            Zenith Digital Solution ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>2. Information We Collect</h2>
          <ul style={{ marginLeft: '1.5rem', color: '#444' }}>
            <li>Personal Information (e.g., name, email address, phone number)</li>
            <li>Usage Data (e.g., pages visited, time spent on site, browser type)</li>
            <li>Cookies and Tracking Technologies</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>3. How We Use Your Information</h2>
          <ul style={{ marginLeft: '1.5rem', color: '#444' }}>
            <li>To provide and maintain our services</li>
            <li>To improve and personalize your experience</li>
            <li>To communicate with you about updates, offers, or support</li>
            <li>To comply with legal obligations</li>
          </ul>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>4. Sharing Your Information</h2>
          <p>
            We do not sell your personal information. We may share information with trusted third parties who assist us in operating our website and services, as required by law, or to protect our rights.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>5. Your Rights & Choices</h2>
          <p>
            You have the right to access, update, or delete your personal information. You may also opt out of certain communications at any time.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>6. Security</h2>
          <p>
            We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
          </p>
        </section>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@zenithdigitalsolution.com.np" style={{ color: '#2563eb' }}>info@zenithdigitalsolution.com.np</a>.
          </p>
        </section>
      </main>
    </div>
  )
}