import { servicesData } from '../data/servicesData'
import ProcessFlow from './ProcessFlow'
import AppBanner from './AppBanner'

export function ServicesPage() {
  return (
    <div className="services-page">
      {/* Services Hero Header */}
      <section className="services-page-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <span className="services-gold-tag">Our Services</span>
          <h1 className="services-page-title">PRECISION CAR CARE FOR EVERY VEHICLE.</h1>
          <p className="services-page-subtitle">
            From fundamental detailing to advanced ceramic protection, paint film, customization, and periodic maintenance.
          </p>
        </div>
      </section>

      {/* Services Grid Section by Category */}
      <section className="services-categories-container">
        {servicesData.map((category) => (
          <div key={category.id} className="service-category-group">
            {/* Group Header (Left or Right aligned per user mockups) */}
            <div className={`category-header-row align-${category.titleAlign}`}>
              <h2 className="category-title">
                <span className="white-text">{category.categoryTitle}</span>
                {category.titleGoldPart && (
                  <span className="gold-text">{category.titleGoldPart}</span>
                )}
              </h2>
            </div>

            {/* 4-Tile Grid matching client images */}
            <div className="service-tiles-grid">
              {category.tiles.map((tile) => (
                <div key={tile.id} className="service-tile-card">
                  <div
                    className="tile-image-bg"
                    style={{ backgroundImage: `url(${tile.image})` }}
                  />
                  <div className="tile-overlay">
                    <div className="tile-content">
                      <h3 className="tile-title">{tile.title}</h3>
                      {tile.description && (
                        <p className="tile-description">{tile.description}</p>
                      )}
                      <div className="tile-book-pill">
                        <span>Book Service</span>
                        <span className="pill-arrow">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Process Flow */}
      <ProcessFlow />

      {/* Mobile App Banner */}
      <AppBanner />
    </div>
  )
}

export default ServicesPage
