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
  badges?: string[]
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'premium-detailing',
    title: 'Premium Detailing',
    subtitle: 'Complete interior and exterior care. Restore the finish. Refresh every detail.',
    price: '₹4,999',
    unit: '/ package',
    buttonText: 'Grab',
    buttonIcon: '🔑',
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
    buttonIcon: '🔑',
    badges: ['Drive Confident 24/7', 'Advanced Care • Always On', '+ Premium Protection', 'Longer Shine'],
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
    buttonIcon: '🔑',
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
                  <span className="cloud-symbol">☁</span>
                  <span className="sun-symbol">☀</span>
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
              <span className="plan-button-icon">⚡</span>
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

            {/* Corner + Button */}
            <button type="button" className="plan-plus-btn" aria-label="Add item">
              +
            </button>

            {/* Badges for Ceramic Protection */}
            {plan.badges && (
              <div className="plan-badges-container">
                <span className="badge badge-dark">Drive Confident 24/7</span>
                <span className="badge badge-purple">Advanced Care • Always On</span>
                <span className="badge badge-lime">+ Premium Protection</span>
                <span className="badge badge-silver">Longer Shine</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
