export function AppBanner() {
  return (
    <div className="app-banner-card">
      <div className="app-banner-image">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=90"
          alt="Premium Karnik Car Care Mobile App"
          loading="lazy"
        />
      </div>

      <div className="app-banner-content">
        <h3 className="app-banner-title">Premium car care, right at your fingertips.</h3>
        <p className="app-banner-subtitle">
          Explore services, choose your location, manage your vehicle care, and stay connected with Karnik through the app.
        </p>

        <div className="app-store-buttons">
          <a href="#app-store" className="store-btn">
            <svg width="20" height="24" viewBox="0 0 170 170" fill="currentColor">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.08-3.69-3.04-7.69-7.85-12.01-14.42-7.53-11.45-13.26-23.77-17.18-36.96-3.92-13.19-5.88-25.65-5.88-37.38 0-14.02 3.42-25.82 10.26-35.41 6.84-9.59 15.64-14.47 26.4-14.64 4.88 0 10.15 1.25 15.82 3.75 5.66 2.5 9.77 3.75 12.33 3.75 2.17 0 6.13-1.19 11.89-3.57 5.76-2.38 10.87-3.51 15.34-3.39 12.08.6 21.79 5.33 29.13 14.19-10.74 6.5-16.03 15.54-15.87 27.13.16 9.07 3.56 16.73 10.2 22.98 6.64 6.25 14.64 9.87 24 10.86-2.6 7.74-6.03 15.29-10.3 22.65z" />
            </svg>
            <div className="store-btn-text">
              <span className="small-text">Download on the</span>
              <span className="large-text">App Store</span>
            </div>
          </a>

          <a href="#google-play" className="store-btn">
            <svg width="20" height="22" viewBox="0 0 512 512" fill="currentColor">
              <path d="M325.8 253.9L80.6 8.2C76.1 4.5 70.3 2.5 64 2.5c-14.4 0-26 11.6-26 26v455c0 14.4 11.6 26 26 26 6.3 0 12.1-2 16.6-5.7l245.2-245.7c2.2-2.2 3.5-5.2 3.5-8.6 0-3.3-1.3-6.3-3.5-8.5z" />
            </svg>
            <div className="store-btn-text">
              <span className="small-text">GET IT ON</span>
              <span className="large-text">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppBanner
