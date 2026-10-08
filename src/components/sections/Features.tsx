const featureItems = [
  {
    title: 'Transparent Pricing',
    text: 'Clear costs with no hidden fees.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: 'Expert Technicians',
    text: 'Certified professionals, trusted results.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Advanced Diagnostics',
    text: 'We identify the real issue.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: 'Quick Turnaround',
    text: 'Most services completed within hours.',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export function Features() {
  return (
    <section className="features-section" id="features" aria-labelledby="features-title">
      <div className="features-intro">
        <h2 id="features-title" className="features-main-heading">
          <span className="gold-heading-text">Why Karrnik </span>
          <span className="white-heading-text">Stands Out</span>
        </h2>
        <p className="features-main-desc">
          Premium care, advanced technology, and trusted<br />
          results for every drive.
        </p>
      </div>

      <div className="feature-list">
        {featureItems.map((item) => (
          <article className="feature-card-item" key={item.title}>
            <div className="feature-icon-badge" aria-hidden="true">
              {item.icon}
            </div>
            <div className="feature-info">
              <h3 className="feature-item-title">{item.title}</h3>
              <p className="feature-item-desc">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}



