const testimonials = [
  {
    id: '1',
    quote: 'Got ceramic coating done at Karrnik and the finish is outstanding. The team explained everything clearly and the final result exceeded my expectations.',
    name: 'Arjun K.',
    service: 'Ceramic Coating · Kompally',
  },
  {
    id: '2',
    quote: 'PPF installation on my BMW M3 was flawless. Seamless edge wrapping and zero air bubbles. Truly precision detailers in Kondapur.',
    name: 'Vikram R.',
    service: 'Paint Protection Film · Kondapur',
  },
  {
    id: '3',
    quote: 'The interior leather restoration and deep sanitization brought my car back to showroom condition. Super impressed with their service.',
    name: 'Siddharth M.',
    service: 'Interior Detailing · Hyderabad',
  },
  {
    id: '4',
    quote: 'Got full body vinyl wrapping done along with alloy upgrades. The attention to detail and paint correction is unmatched.',
    name: 'Rahul V.',
    service: 'Car Wrapping & Alloys · Kondapur',
  },
  {
    id: '5',
    quote: 'Professional staff, top-grade products, and quick turnaround time. Their hydrophobic graphene coating is incredible in the rains.',
    name: 'Pradeep S.',
    service: 'Graphene Shield · Kompally',
  },
]

// Duplicate list for seamless 100% infinite marquee loop
const movingTestimonials = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <div className="testimonials-section" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-header">
        <h2 id="testimonials-heading" className="testimonials-title">
          <span className="white-text">THE DIFFERENCE IS IN</span>
          <br />
          <span className="gold-text">THE DETAIL</span>
        </h2>
        <p className="testimonials-subtitle">Trusted by Drivers</p>
      </div>

      {/* Infinite Moving Marquee Container */}
      <div className="testimonials-marquee-wrapper">
        <div className="testimonials-track">
          {movingTestimonials.map((t, idx) => (
            <div key={`${t.id}-${idx}`} className="testimonial-card">
              <div className="quote-mark">”</div>
              <p className="testimonial-quote">{t.quote}</p>
              <div className="testimonial-author">
                <h4 className="author-name">{t.name}</h4>
                <p className="author-service">{t.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-dots">
        <span className="dot" />
        <span className="dot active-pill" />
        <span className="dot" />
      </div>
    </div>
  )
}

export default Testimonials
