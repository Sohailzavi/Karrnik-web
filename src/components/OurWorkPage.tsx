import { servicesData } from '../data/servicesData'
import AppBanner from './AppBanner'

export function OurWorkPage() {
  return (
    <div className="our-work-page">
      {/* Hero Banner with Studio Light Box & Supercar Background */}
      <section className="our-work-hero">
        <div className="studio-lightbox-ceiling">
          <div className="lightbox-panel"></div>
        </div>
        <div className="our-work-hero-overlay"></div>

        <div className="our-work-hero-content">
          <span className="our-work-gold-tag">Our Work</span>
          <h1 className="our-work-title">DETAILS THAT SPEAK FOR THEMSELVES.</h1>
          <p className="our-work-subtitle">
            Explore the detailing, protection, customization, and restoration work we deliver for every vehicle.
          </p>
        </div>
      </section>

      {/* Services Section Under Our Work */}
      <section className="services-categories-container" id="services">
        {servicesData.map((category) => (
          <div key={category.id} className="service-category-group">
            {/* Group Header (Left or Right aligned per user mockups) */}
            <div className={`category-header-row align-${category.titleAlign}`}>
              <h2 className="our-work-grid-title">
                <span className="white-text">{category.categoryTitle}</span>
                {category.titleGoldPart && (
                  <span className="gold-text">{category.titleGoldPart}</span>
                )}
              </h2>
            </div>

            {/* 4-Tile Grid */}
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

      {/* Mobile App Banner */}
      <AppBanner />
    </div>
  )
}

export default OurWorkPage
