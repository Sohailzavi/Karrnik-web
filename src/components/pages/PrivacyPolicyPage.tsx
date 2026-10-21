import React, { useState } from 'react'

interface PrivacyPolicyPageProps {
  onPageChange?: (page: string) => void
}

const sections = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'collection', label: '2. Information We Collect' },
  { id: 'usage', label: '3. How We Use Data' },
  { id: 'sharing', label: '4. Information Sharing' },
  { id: 'security', label: '5. Data Security' },
  { id: 'cookies', label: '6. Cookies & Tracking' },
  { id: 'rights', label: '7. Your Rights & Choices' },
  { id: 'updates', label: '8. Policy Updates' },
  { id: 'contact', label: '9. Contact & Inquiries' },
]

export function PrivacyPolicyPage({ onPageChange }: PrivacyPolicyPageProps) {
  const [activeSection, setActiveSection] = useState('introduction')

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const handleNavClick = (e: React.MouseEvent, page: string) => {
    e.preventDefault()
    if (onPageChange) {
      onPageChange(page)
    }
  }

  return (
    <div className="privacy-page">
      {/* Background ambient lighting */}
      <div className="privacy-ambient-glow" aria-hidden="true" />
      <div className="privacy-ambient-glow-secondary" aria-hidden="true" />

      {/* Hero Header */}
      <header className="privacy-hero">
        <div className="privacy-badge">
          <span className="privacy-badge-dot" />
          <span>LEGAL & COMPLIANCE</span>
        </div>
        <h1 className="privacy-hero-title">
          Privacy <span className="text-gold-gradient">Policy</span>
        </h1>
        <p className="privacy-hero-subtitle">
          At KARRNIK, we value the trust you place in us with your vehicles and personal information.
          Learn how we safeguard your data with enterprise-grade privacy and transparency.
        </p>

        <div className="privacy-meta-strip">
          <div className="meta-item">
            <span className="meta-label">LAST UPDATED</span>
            <span className="meta-value">October 24, 2024</span>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <span className="meta-label">APPLIES TO</span>
            <span className="meta-value">KARRNIK Web, App & Studios</span>
          </div>
          <div className="meta-divider" />
          <div className="meta-item">
            <span className="meta-label">STATUS</span>
            <span className="meta-value status-active">Active</span>
          </div>
        </div>
      </header>

      {/* Main 2-Column Layout with Sticky Sidebar */}
      <div className="privacy-layout">
        {/* Sticky Sidebar Navigation */}
        <aside className="privacy-sidebar">
          <div className="sidebar-glass-card">
            <h4 className="sidebar-title">TABLE OF CONTENTS</h4>
            <nav className="sidebar-nav">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span className="sidebar-link-indicator" />
                  <span className="sidebar-link-text">{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="sidebar-help-box">
              <span className="help-box-tag">HAVE QUESTIONS?</span>
              <p className="help-box-text">Our customer care and legal support team is here to help.</p>
              <a
                href="/contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="sidebar-action-btn"
              >
                Contact Support &rarr;
              </a>
            </div>
          </div>
        </aside>

        {/* Content Column */}
        <main className="privacy-main-content">
          {/* Section 1 */}
          <article id="introduction" className="privacy-card">
            <div className="card-header-row">
              <span className="card-num">01</span>
              <div>
                <h2 className="card-title">Introduction & Scope</h2>
                <span className="card-subhead">Our commitment to transparency and confidentiality</span>
              </div>
            </div>
            <div className="card-body">
              <p>
                Welcome to <strong>KARRNIK</strong> ("KARRNIK", "we", "our", or "us"). We specialize in premium
                automotive care, high-precision paint protection films (PPF), ceramic nano-coatings, bespoke detailing,
                and performance maintenance across our flagship studios in Hyderabad.
              </p>
              <p>
                This Privacy Policy outlines how we collect, store, safeguard, and process your personal and vehicular
                data when interacting with our website, our mobile application, or our physical studios. We hold ourselves
                to the highest standards of data integrity and customer privacy.
              </p>
            </div>
          </article>

          {/* Section 2 */}
          <article id="collection" className="privacy-card">
            <div className="card-header-row">
              <span className="card-num">02</span>
              <div>
                <h2 className="card-title">Information We Collect</h2>
                <span className="card-subhead">Data types collected to service your vehicle</span>
              </div>
            </div>
            <div className="card-body">
              <p>To provide tailor-made vehicle care, we may collect the following categories of information:</p>

              <div className="info-feature-grid">
                <div className="info-glass-box">
                  <div className="box-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="box-title">Client Identification</h3>
                    <p className="box-desc">
                      Full name, contact number, verified email address, and billing address submitted via consultations or bookings.
                    </p>
                  </div>
                </div>

                <div className="info-glass-box">
                  <div className="box-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="13" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="box-title">Vehicular Profiling</h3>
                    <p className="box-desc">
                      Make, model, color code, registration, odometer reading, and paint condition recorded during vehicle intake audits.
                    </p>
                  </div>
                </div>

                <div className="info-glass-box">
                  <div className="box-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                      <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="box-title">Transaction Records</h3>
                    <p className="box-desc">
                      Invoices, estimates, service packages chosen, and payment confirmation IDs. Sensitive card details are handled via encrypted PCI gateways.
                    </p>
                  </div>
                </div>

                <div className="info-glass-box">
                  <div className="box-icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="box-title">Digital Diagnostics</h3>
                    <p className="box-desc">
                      Browser metrics, session events, device specs, and performance telemetry gathered to refine your digital browsing experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Section 3 */}
          <article id="usage" className="privacy-card">
            <div className="card-header-row">
              <span className="card-num">03</span>
              <div>
                <h2 className="card-title">How We Use Your Data</h2>
                <span className="card-subhead">Precision execution and dedicated service</span>
              </div>
            </div>
            <div className="card-body">
              <p>We process collected data under legitimate automotive service interests:</p>
              <ul className="luxury-bullet-list">
                <li>
                  <span className="bullet-point" />
                  <span>
                    <strong>Studio Operations:</strong> Booking allocations, scheduling master detailers, and provisioning studio bays for work packages.
                  </span>
                </li>
                <li>
                  <span className="bullet-point" />
                  <span>
                    <strong>Digital Inspection Reports:</strong> Generating pre-service high-resolution photo logs and paint depth gauge assessments.
                  </span>
                </li>
                <li>
                  <span className="bullet-point" />
                  <span>
                    <strong>Warranty Management:</strong> Registering and tracking nationwide manufacturer warranties for PPF (paint protection film) and ceramic coats.
                  </span>
                </li>
                <li>
                  <span className="bullet-point" />
                  <span>
                    <strong>Direct Communications:</strong> Automated job completion SMS, delivery coordination, and personalized maintenance reminders.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* Section 4 */}
          <article id="sharing" className="privacy-card">
            <div className="card-header-row">
              <span className="card-num">04</span>
              <div>
                <h2 className="card-title">Information Sharing & Third Parties</h2>
                <span className="card-subhead">Strict non-disclosure standards</span>
              </div>
            </div>
            <div className="card-body">
              <div className="notice-highlight-box">
                <span className="highlight-tag">ZERO DATA RESALE</span>
                <p>
                  <strong>We never sell, monetise, or distribute your personal details to advertising brokers.</strong>
                </p>
              </div>
              <p>
                We only exchange relevant data with vetted service partners bound by non-disclosure agreements:
              </p>
              <ul className="luxury-bullet-list">
                <li>
                  <span className="bullet-point" />
                  <span>
                    <strong>Certified Film & Chemical Vendors:</strong> For registering official product warranty certifications on your vehicle.
                  </span>
                </li>
                <li>
                  <span className="bullet-point" />
                  <span>
                    <strong>Encrypted Cloud Providers:</strong> Secure AWS/Google Cloud storage running end-to-end encrypted databases.
                  </span>
                </li>
                <li>
                  <span className="bullet-point" />
                  <span>
                    <strong>Statutory Compliance:</strong> When strictly mandated by Indian law enforcement or tax authorities.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          {/* Section 5 */}
          <article id="security" className="privacy-card">
            <div className="card-header-row">
              <span className="card-num">05</span>
              <div>
                <h2 className="card-title">Data Security Architecture</h2>
                <span className="card-subhead">State-of-the-art digital encryption</span>
              </div>
            </div>
            <div className="card-body">
              <p>
                KARRNIK adopts multi-layered defense protocols to ensure your confidential vehicle documents, inspection
                sheets, and customer profiles remain safeguarded:
              </p>
              <div className="security-pillars-row">
                <div className="pillar-item">
                  <span className="pillar-num">256-BIT</span>
                  <span className="pillar-label">SSL Encryption in Transit</span>
                </div>
                <div className="pillar-item">
                  <span className="pillar-num">ROLE-BASED</span>
                  <span className="pillar-label">Restricted Internal Staff Access</span>
                </div>
                <div className="pillar-item">
                  <span className="pillar-num">REGULAR</span>
                  <span className="pillar-label">Security Audits & Patching</span>
                </div>
              </div>
            </div>
          </article>

          {/* Section 6 */}
          <article id="cookies" className="privacy-card">
            <div className="card-header-row">
              <span className="card-num">06</span>
              <div>
                <h2 className="card-title">Cookies & Tracking Technologies</h2>
                <span className="card-subhead">Optimizing interface responsiveness</span>
              </div>
            </div>
            <div className="card-body">
              <p>
                We use minimalist cookies and local storage tokens to preserve session preferences (such as selected studios
                or UI states). You retain total control over your cookie permissions through your web browser configuration.
              </p>
            </div>
          </article>

          {/* Section 7 */}
          <article id="rights" className="privacy-card">
            <div className="card-header-row">
              <span className="card-num">07</span>
              <div>
                <h2 className="card-title">Your Rights & Choices</h2>
                <span className="card-subhead">Empowering customer control</span>
              </div>
            </div>
            <div className="card-body">
              <p>As a valued KARRNIK patron, you maintain full authority to:</p>
              <ul className="luxury-bullet-list">
                <li>
                  <span className="bullet-point" />
                  <span>Request a full export of your personal and vehicle service history file.</span>
                </li>
                <li>
                  <span className="bullet-point" />
                  <span>Update, amend, or correct contact credentials or vehicle ownership details.</span>
                </li>
                <li>
                  <span className="bullet-point" />
                  <span>Request permanent deletion of marketing profiles and communication subscriptions.</span>
                </li>
              </ul>
            </div>
          </article>

          {/* Section 8 */}
          <article id="updates" className="privacy-card">
            <div className="card-header-row">
              <span className="card-num">08</span>
              <div>
                <h2 className="card-title">Policy Modifications</h2>
                <span className="card-subhead">Ongoing regulatory alignment</span>
              </div>
            </div>
            <div className="card-body">
              <p>
                We may periodically update this policy to incorporate emerging privacy laws and new studio offerings.
                All updates will be published with an explicit revision timestamp at the top of this documentation.
              </p>
            </div>
          </article>

          {/* Section 9 */}
          <article id="contact" className="privacy-card privacy-card-gold-glow">
            <div className="card-header-row">
              <span className="card-num highlight">09</span>
              <div>
                <h2 className="card-title">Privacy Officer & Inquiries</h2>
                <span className="card-subhead">We are readily at your service</span>
              </div>
            </div>
            <div className="card-body">
              <p>
                For questions concerning this Privacy Policy, your customer rights, or to initiate a data access request,
                please contact our privacy desk directly:
              </p>

              <div className="contact-details-grid">
                <div className="contact-tile">
                  <span className="tile-label">DIRECT INQUIRIES</span>
                  <a href="mailto:contact@karrnik.in" className="tile-value link">
                    contact@karrnik.in
                  </a>
                </div>
                <div className="contact-tile">
                  <span className="tile-label">CONCIERGE DESK</span>
                  <a href="tel:+919133239997" className="tile-value link">
                    +91 91332 39997
                  </a>
                </div>
                <div className="contact-tile">
                  <span className="tile-label">HEADQUARTERS</span>
                  <span className="tile-value">Kompally & Kondapur, Hyderabad, India</span>
                </div>
              </div>

              <div className="card-action-bar">
                <a
                  href="/contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="specular-styled-btn"
                >
                  <span>Connect With Customer Care &rarr;</span>
                </a>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage
