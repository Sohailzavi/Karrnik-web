interface PricingPlan {
  id: string
  title: string
  subtitle: string
  price: string
  unit: string
  buttonText: string
  buttonIcon?: string
  isHighlighted?: boolean
  features: string[]
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'premium-detailing',
    title: 'Premium Detailing',
    subtitle: 'Complete interior and exterior care. Restore the finish. Refresh every detail.',
    price: '₹4,999',
    unit: '/ package',
    buttonText: 'Grab',
    features: [
      'Exterior Detailing',
      'Interior Detailing',
      'Car Polishing',
      'Wheel & Tyre Care',
    ],
  },
  {
    id: 'ceramic-protection',
    title: 'Ceramic Protection',
    subtitle: 'Long-lasting protection with a premium finish. Keep your car looking newer, for longer.',
    price: '₹16,999',
    unit: '/ package',
    isHighlighted: true,
    buttonText: 'Grab',
    features: [
      'Paint Preparation',
      'Ceramic Coating',
      'Exterior Detailing',
      'Final Inspection',
    ],
  },
  {
    id: 'protection-plus',
    title: 'Protection Plus',
    subtitle: 'Advanced protection for your daily drive. More control. More confidence.',
    price: 'Custom Quote',
    unit: '/ Vehicle',
    buttonText: 'Contact',
    features: [
      'Paint Protection Film (PPF)',
      'Ceramic Coating',
      'Exterior Detailing',
      'Window Protection',
    ],
  },
]

export function Pricing() {
  return (
    <div className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
      <div className="pricing-header">
        <h2 id="pricing-heading" className="pricing-title">
          <span className="white-text">EXCLUSIVE CARE</span>
          <br />
          <span className="gold-text">EXCEPTIONAL VALUE</span>
        </h2>
        <p className="pricing-subtitle">
          Premium services, thoughtfully bundled to give your car the care it deserves.
        </p>
      </div>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.isHighlighted ? 'pricing-card-highlighted' : ''}`}
          >
            {/* Top Icon */}
            <div className="plan-top-icon">
              {plan.id === 'premium-detailing' && (
                <div className="icon-box grey-icon">
                  <div className="inner-sq" />
                </div>
              )}
              {plan.id === 'ceramic-protection' && (
                <div className="icon-box sun-cloud-icon">
                  <svg width="58" height="42" viewBox="0 0 60 42" fill="none">
                    <circle cx="40" cy="14" r="12" fill="#F59E0B" />
                    <path d="M18 34h26a10 10 0 002-19.8 13 13 0 00-24.8-3.4A10 10 0 0018 34z" fill="url(#cloudGrad)" />
                    <defs>
                      <linearGradient id="cloudGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E5E7EB" />
                        <stop offset="100%" stopColor="#9CA3AF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
              {plan.id === 'protection-plus' && (
                <div className="icon-box ppf-icon">
                  <div className="grid-sqs">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
            </div>

            <h3 className="plan-title">{plan.title}</h3>
            <p className="plan-subtitle">{plan.subtitle}</p>

            <div className="plan-price-row">
              <span className="plan-price">{plan.price}</span>
              <span className="plan-unit">{plan.unit}</span>
            </div>

            <button type="button" className="plan-button">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>{plan.buttonText}</span>
            </button>

            <div className="plan-features-label">YOU WILL GET</div>

            <ul className="plan-features-list">
              {plan.features.map((feature) => (
                <li key={feature} className="plan-feature-item">
                  <span className="check-icon">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Floating Badges on Ceramic Protection Card */}
            {plan.isHighlighted && (
              <div className="plan-floating-badges" aria-hidden="true">
                <div className="floating-badge badge-drive">
                  <span className="drive-sub">Drive Confident</span>
                  <span className="drive-main">24/7</span>
                </div>
                <div className="floating-badge badge-advanced">
                  <span>Advanced Care &bull; Always On</span>
                </div>
                <div className="floating-badge badge-protection">
                  <span>+ Premium</span>
                  <span>Protection</span>
                </div>
                <div className="floating-badge badge-shine">
                  <span>Longer Shine</span>
                </div>
              </div>
            )}

            {/* Corner + Action Button */}
            <button type="button" className="plan-plus-btn" aria-label="Add item">
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing

