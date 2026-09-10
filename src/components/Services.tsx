import React, { useState } from 'react'
import WorkShowcase from './WorkShowcase'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import ProcessFlow from './ProcessFlow'
import AppBanner from './AppBanner'

interface ServiceItem {
  title: string
  titleNode?: React.ReactNode
  image: string
  hasBookNow?: boolean
}

interface ServiceCategory {
  id: string
  title: string
  layoutType: 'asymmetric-4' | 'grid-6' | 'grid-3'
  items: ServiceItem[]
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'clean-detailing',
    title: 'Clean & Detailing',
    layoutType: 'asymmetric-4',
    items: [
      {
        title: 'Car Washing',
        image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Interior Detailing',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Exterior Detailing',
        image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Car Polishing',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=90',
      },
    ],
  },
  {
    id: 'protection',
    title: 'Protection',
    layoutType: 'asymmetric-4',
    items: [
      {
        title: 'Ceramic Coating',
        image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Graphene Coating',
        image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'PPF',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Window Tint',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=90',
      },
    ],
  },
  {
    id: 'customize',
    title: 'Customize',
    layoutType: 'grid-6',
    items: [
      {
        title: 'Car Lighting',
        image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Car Wrapping',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Car Tires',
        image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1200&q=90',
        hasBookNow: true,
      },
      {
        title: 'Audio System',
        image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Alloy Wheels',
        titleNode: <>Alloy Wh<span className="gold-text">ee</span>ls</>,
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Car Accessories',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=90',
      },
    ],
  },
  {
    id: 'repair-maintenance',
    title: 'Repair & Maintenance',
    layoutType: 'grid-3',
    items: [
      {
        title: 'Denting & Painting',
        image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'AC Services',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=90',
      },
      {
        title: 'Periodic Maintenance',
        image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=90',
      },
    ],
  },
]

export function Services() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({})

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="services-header">
        <div className="services-header-right">
          <h2 id="services-heading" className="services-title">
            <span className="white-text">Our </span>
            <span className="gold-text">Services</span>
          </h2>
          <p className="services-subtitle">Everything Your Car Needs.</p>
        </div>
      </div>

      <div className="services-list">
        {serviceCategories.map((category) => {
          const isOpen = !!openCategories[category.id]
          return (
            <div key={category.id} className={`service-category ${isOpen ? 'is-open' : ''}`}>
              <div
                className="category-header-row"
                onClick={() => toggleCategory(category.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleCategory(category.id)
                  }
                }}
              >
                <h3 className="category-title">{category.title}</h3>
                <button
                  type="button"
                  className={`category-arrow-btn ${isOpen ? 'active' : ''}`}
                  aria-label={`Toggle ${category.title} services`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <path
                      d="M10 8L14 12L10 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="category-divider" />

              {isOpen && (
                <div className={`service-cards-grid layout-${category.layoutType}`}>
                  {category.items.map((item, index) => (
                    <div key={item.title} className={`service-card service-card-${index}`}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <div className="service-card-overlay">
                        <div className="service-card-content">
                          {item.hasBookNow && (
                            <div className="card-book-now-pill">
                              <span>Book Now</span>
                              <span className="card-book-now-arrow">&rarr;</span>
                            </div>
                          )}
                          <h4 className="service-card-title">{item.titleNode || item.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Showcase Card inside Services */}
      <WorkShowcase />

      {/* Exclusive Care Exceptional Value Pricing Section */}
      <Pricing />

      {/* The Difference Is In The Detail Testimonials Section */}
      <Testimonials />

      {/* Frequently Asked Questions Section */}
      <FAQ />

      {/* From Booking to A Better Drive Process Section */}
      <ProcessFlow />

      {/* Mobile App Download Banner */}
      <AppBanner />
    </section>
  )
}

export default Services






