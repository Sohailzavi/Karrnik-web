import { useState } from 'react'

const processSteps = [
  {
    step: '1',
    badge: '1–2 Mins',
    badgeType: 'gold',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Book Your Service',
    text: 'Choose your preferred service, select your location (Kompally or Kondapur), and book your slot in just a few clicks.',
    align: 'left',
  },
  {
    step: '2',
    badge: 'Vehicle In',
    badgeType: 'grey',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Service & Care',
    text: 'Our expert team works on your vehicle using premium products and industry-leading techniques to deliver the best results.',
    align: 'right',
  },
  {
    step: '3',
    badge: '1–2 Hours',
    badgeType: 'grey',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
        <path d="M9 14l2 2 4-4"/>
      </svg>
    ),
    title: 'Quality Check',
    text: 'Every vehicle goes through a detailed inspection to ensure the highest standards of quality, finish, and customer satisfaction.',
    align: 'left',
  },
  {
    step: '4',
    badge: 'You Drive',
    badgeType: 'gold',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2"/>
        <circle cx="7" cy="17" r="2"/>
        <circle cx="17" cy="17" r="2"/>
      </svg>
    ),
    title: 'Ready to Hit the Road',
    text: 'Get your car back, looking refreshed, protected, and ready for every journey ahead.',
    align: 'right',
  },
]

export function ProcessFlow() {
  const [activeLocation, setActiveLocation] = useState<'Kompally' | 'Kondapur'>('Kondapur')

  return (
    <div className="process-flow-section" id="process">
      {/* Header Banner */}
      <div className="process-header-banner">
        <div className="location-toggle-pill">
          <button
            type="button"
            className={`location-btn ${activeLocation === 'Kompally' ? 'active' : ''}`}
            onClick={() => setActiveLocation('Kompally')}
          >
            Kompally
          </button>
          <button
            type="button"
            className={`location-btn ${activeLocation === 'Kondapur' ? 'active' : ''}`}
            onClick={() => setActiveLocation('Kondapur')}
          >
            Kondapur
          </button>
        </div>

        <div className="process-header-text">
          <h3 className="process-title">
            <span className="white-text">From Booking to</span>
            <br />
            <span className="gold-text">A Better Drive</span>
          </h3>
          <p className="process-subtitle">
            A seamless service experience designed to give your car the care, protection, and performance it deserves.
          </p>
        </div>
      </div>

      {/* Zig-Zag Timeline Container with Dark Car Background */}
      <div className="process-timeline-container">
        <div className="process-steps-grid">
          {/* SVG Connecting Lines between steps */}
          <svg className="process-connector-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="goldConnectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dda91e" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#fff3b0" stopOpacity="1" />
                <stop offset="100%" stopColor="#dda91e" stopOpacity="0.9" />
              </linearGradient>
              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Track background path */}
            <path
              className="connector-track-path"
              d="M 43.5 10.4 C 54 10.4, 46 36.8, 56.5 36.8 C 46 36.8, 54 63.2, 43.5 63.2 C 54 63.2, 46 89.6, 56.5 89.6"
              fill="none"
              stroke="rgba(221, 169, 30, 0.3)"
              strokeWidth="2.5"
              vectorEffect="non-scaling-stroke"
            />

            {/* Glowing animated active path */}
            <path
              className="connector-active-path"
              d="M 43.5 10.4 C 54 10.4, 46 36.8, 56.5 36.8 C 46 36.8, 54 63.2, 43.5 63.2 C 54 63.2, 46 89.6, 56.5 89.6"
              fill="none"
              stroke="url(#goldConnectorGrad)"
              strokeWidth="3"
              strokeDasharray="8 6"
              vectorEffect="non-scaling-stroke"
              filter="url(#goldGlow)"
            />
          </svg>

          {processSteps.map((step) => (
            <div key={step.step} className={`process-step-card card-align-${step.align}`}>
              <div className={`step-badge badge-${step.badgeType}`}>
                <span>{step.badge}</span>
              </div>
              <div className="step-content">
                <div className="step-title-row">
                  <span className="step-icon">{step.icon}</span>
                  <h4 className="step-title">{step.title}</h4>
                </div>
                <p className="step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProcessFlow
