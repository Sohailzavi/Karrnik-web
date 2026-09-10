import React, { useState } from 'react'

interface ContactUsPageProps {
  onPageChange?: (page: string) => void
}

export function ContactUsPage({ onPageChange: _onPageChange }: ContactUsPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    carModel: '',
    location: '',
    comment: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        mobile: '',
        carModel: '',
        location: '',
        comment: '',
      })
    }, 4000)
  }

  return (
    <div className="contact-us-page">
      <div className="contact-container-inner">
        {/* Main Title */}
        <h1 className="contact-page-title">Contact Us</h1>

        {/* 2-Column Grid */}
        <div className="contact-grid">
          {/* Left Column - Need Information */}
          <div className="contact-info-col">
            <h2 className="info-title-white">Need more information?</h2>
            <h2 className="info-title-gold">Get in touch with us</h2>
            <p className="info-subtitle">
              A complete automotive care experience, just a message away.
            </p>

            <div className="contact-details-list">
              {/* Phone */}
              <div className="detail-item">
                <div className="detail-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="detail-text-group">
                  <span className="detail-label">Phone Number</span>
                  <span className="detail-value">9133239997</span>
                </div>
              </div>

              {/* Email */}
              <div className="detail-item">
                <div className="detail-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="detail-text-group">
                  <span className="detail-label">Email</span>
                  <span className="detail-value">contact@karnik.in</span>
                </div>
              </div>

              {/* Locations */}
              <div className="detail-item">
                <div className="detail-icon-box">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="detail-text-group">
                  <span className="detail-label">Locations</span>
                  <span className="detail-value">Kompally & Kondapur, Hyderabad</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Send Message Form */}
          <div className="contact-form-col">
            <h2 className="form-title">Send Message</h2>
            <p className="form-subtitle">
              Please fill out the form below with your details and message to contact us.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row-2col">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact-input-white"
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="contact-input-white"
                />
              </div>

              <div className="form-row-full">
                <input
                  type="text"
                  name="carModel"
                  placeholder="Car Model"
                  value={formData.carModel}
                  onChange={handleChange}
                  className="contact-input-white"
                />
              </div>

              <div className="form-row-full">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="contact-input-white"
                />
              </div>

              <div className="form-row-full">
                <textarea
                  name="comment"
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={5}
                  className="contact-textarea-dark"
                />
              </div>

              {submitted && (
                <div className="form-success-msg">
                  Thank you! Your message has been sent successfully. Our team will contact you shortly.
                </div>
              )}

              <div className="form-submit-row">
                <button type="submit" className="contact-submit-btn">
                  <span className="submit-btn-text">Contact</span>
                  <span className="submit-btn-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="#080808" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
