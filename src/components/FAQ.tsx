import { useState } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'What services does Karnik provide?',
    answer:
      'Karnik offers car wash, interior and exterior detailing, ceramic coating, PPF, graphene coating, polishing, window tinting, car wrapping, alloy and tyre upgrades, audio and lighting upgrades, denting and painting, AC service, and periodic maintenance.',
  },
  {
    id: '2',
    question: 'Do I need to book a service in advance?',
    answer: 'Yes, booking in advance ensures dedicated time slots, expert attention, and seamless service delivery.',
  },
  {
    id: '3',
    question: 'How much advance payment is required?',
    answer: 'A nominal deposit confirms your appointment, with the balance payable upon service completion.',
  },
  {
    id: '4',
    question: 'Can I cancel my booking?',
    answer: 'Yes, cancellations made 24 hours prior to your scheduled slot are eligible for a full refund.',
  },
  {
    id: '5',
    question: 'Do you offer pickup and drop?',
    answer: 'Yes, we offer complimentary pickup and drop services for selected detailing and protection packages.',
  },
  {
    id: '6',
    question: 'Where is Karnik located?',
    answer:
      'Karnik Precision Studio is located at Kompally and Kondapur, Hyderabad. Contact us for precise location details and turn-by-turn guidance.',
  },
]

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1')

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="faq-section" id="faq" aria-labelledby="faq-heading">
      <div className="faq-main-content">
        <div className="faq-intro">
          <h2 id="faq-heading" className="faq-title">
            <span className="white-text">Frequently asked</span>
            <br />
            <span className="gold-text">questions</span>
          </h2>
          <p className="faq-subtitle">Everything you need to know before bringing your car to Karnik.</p>
        </div>

        <div className="faq-list">
          {faqData.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id} className={`faq-card ${isOpen ? 'is-open' : ''}`}>
                <div
                  className="faq-header-row"
                  onClick={() => toggleFAQ(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleFAQ(item.id)
                    }
                  }}
                >
                  <h3 className="faq-question">{item.question}</h3>
                  <button
                    type="button"
                    className={`faq-toggle-btn ${isOpen ? 'open-btn' : ''}`}
                    aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
                  >
                    {isOpen ? '−' : '+'}
                  </button>
                </div>

                {isOpen && <p className="faq-answer">{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQ
