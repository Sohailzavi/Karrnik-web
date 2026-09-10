import { useState } from 'react'

const processSteps = [
  {
    step: '1',
    badge: '1–2 Mins',
    badgeType: 'gold',
    icon: '📅',
    title: '1 . Book Your Service',
    text: 'Choose your preferred service, select your location (Kompally or Kondapur), and book your slot in just a few clicks.',
    align: 'left',
  },
  {
    step: '2',
    badge: 'Vehicle In',
    badgeType: 'grey',
    icon: '🔧',
    title: '2 . Service & Care',
    text: 'Our expert team works on your vehicle using premium products and industry-leading techniques to deliver the best results.',
    align: 'right',
  },
  {
    step: '3',
    badge: '1–2 Hours',
    badgeType: 'grey',
    icon: '📋',
    title: '3 . Quality Check',
    text: 'Every vehicle goes through a detailed inspection to ensure the highest standards of quality, finish, and customer satisfaction.',
    align: 'left',
  },
  {
    step: '4',
    badge: 'You Drive',
    badgeType: 'gold',
    icon: '🚘',
    title: '4 . Ready to Hit the Road',
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
            <span className="white-text" style={{ whiteSpace: 'nowrap' }}>From Booking to</span>
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

            {/* Connection Node Dots */}
            <circle cx="43.5" cy="10.4" r="1.4" fill="#dda91e" filter="url(#goldGlow)" className="connector-node-dot" />
            <circle cx="56.5" cy="36.8" r="1.4" fill="#dda91e" filter="url(#goldGlow)" className="connector-node-dot" />
            <circle cx="43.5" cy="63.2" r="1.4" fill="#dda91e" filter="url(#goldGlow)" className="connector-node-dot" />
            <circle cx="56.5" cy="89.6" r="1.4" fill="#dda91e" filter="url(#goldGlow)" className="connector-node-dot" />
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
