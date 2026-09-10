import FoldText from './FoldText'

const features = [
  { title: 'Transparent Pricing', text: 'Clear costs with no hidden fees.', symbol: '↗' },
  { title: 'Expert Technicians', text: 'Certified professionals, trusted results.', symbol: '✦' },
  { title: 'Advanced Diagnostics', text: 'Precision checks for every detail.', symbol: '⌁' },
  { title: 'Quick Turnaround', text: 'Quality service, right on time.', symbol: '◌' },
]

export function Features() {
  return (
    <section className="features-section" id="features" aria-labelledby="features-title">
      <div className="features-intro">
        <div className="eyebrow">
          <FoldText
            text="WHY KARNIK STANDS OUT"
            splitBy="char"
            hinge="top"
            trigger="scroll"
            duration={0.6}
            stagger={0.03}
            fontSize="1.05rem"
            fontWeight={800}
            color="#dda91e"
          />
        </div>
        <h2 id="features-title">
          <FoldText
            text={'Premium care, advanced technology, and trusted\nresults for every drive.'}
            splitBy="word"
            hinge="top"
            trigger="scroll"
            duration={0.7}
            stagger={0.04}
            fontSize="clamp(1.75rem, 2.5vw, 2.7rem)"
            fontWeight={400}
            color="#ffffff"
          />
        </h2>
      </div>

      <div className="feature-list">
        {features.map(({ title, text, symbol }) => (
          <article className="feature" key={title}>
            <span className="feature-icon" aria-hidden="true">
              {symbol}
            </span>
            <h3>
              <FoldText
                text={title}
                splitBy="char"
                hinge="top"
                trigger="scroll"
                duration={0.55}
                stagger={0.025}
                fontSize="1.35rem"
                fontWeight={700}
                color="#ffffff"
              />
            </h3>
            <p className="feature-text">{text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}


