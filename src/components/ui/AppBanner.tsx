export function AppBanner() {
  return (
    <div className="app-banner-card">
      <div className="app-banner-image">
        <img
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=90"
          alt="Premium Karrnik Car Care Mobile App"
          loading="lazy"
        />
      </div>

      <div className="app-banner-content">
        <h3 className="app-banner-title">Premium car care, right at your fingertips.</h3>
        <p className="app-banner-subtitle">
          Explore services, choose your location, manage your vehicle care, and stay connected with Karrnik through the app.
        </p>

        <div className="app-store-buttons">
          <a href="#app-store" className="store-badge-svg-link" aria-label="Download on the App Store">
            <svg width="155" height="48" viewBox="0 0 135 40" fill="none">
              <rect width="134" height="39" x="0.5" y="0.5" rx="7.5" fill="#000000" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <g transform="translate(9.5, 8) scale(0.075)">
                <path fill="#FFFFFF" d="M187.2 196.4c-.4-43.1 35.1-63.7 36.7-64.8-20.1-29.4-51.3-33.4-62.4-33.8-26.6-2.7-52 15.7-65.5 15.7-13.5 0-34.4-15.3-56.5-14.9-29.1.4-55.9 16.9-70.9 43-30.3 52.6-7.8 130.3 21.6 172.7 14.4 20.8 31.5 44 54 43.1 21.7-.9 29.9-14 56.1-14 26.2 0 33.6 14 56.5 13.5 23.4-.4 38.2-21.1 52.5-42.1 16.6-24.2 23.4-47.7 23.8-48.9-.5-.2-45.7-17.5-46.1-69.7zM147.2 64.9c12-14.5 20.1-34.7 17.8-54.9-17.3.7-38.3 11.5-50.7 26-11.1 12.8-20.8 33.4-18.2 53.2 19.3 1.5 39.1-9.8 51.1-24.3z" />
              </g>
              <text x="36" y="15" fill="#FFFFFF" fontSize="7.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="400" letterSpacing="0.2">Download on the</text>
              <text x="36" y="28" fill="#FFFFFF" fontSize="13" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" letterSpacing="-0.2">App Store</text>
            </svg>
          </a>

          <a href="#google-play" className="store-badge-svg-link" aria-label="Get it on Google Play">
            <svg width="155" height="48" viewBox="0 0 135 40" fill="none">
              <rect width="134" height="39" x="0.5" y="0.5" rx="7.5" fill="#000000" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              <g transform="translate(10, 8) scale(0.046)">
                <path fill="#00D2FF" d="M32.5 18.2A22.7 22.7 0 0 0 27 34.2v443.6c0 6 2 11.5 5.5 16l230.9-230.9L32.5 18.2z"/>
                <path fill="#00F076" d="M341.2 342.6L263.4 262.9 341.2 183.2 422 230c14.2 8.1 23 23.2 23 39.9s-8.8 31.8-23 39.9l-80.8 32.8z"/>
                <path fill="#FF3A44" d="M341.2 342.6l-77.8-79.7L32.5 493.8c4.3 2.5 9.4 3.9 14.8 3.9 5.8 0 11.5-1.6 16.5-4.5l277.4-150.6z"/>
                <path fill="#FFE000" d="M341.2 183.2L63.8 32.5C58.8 29.6 53.1 28 47.3 28c-5.4 0-10.5 1.4-14.8 3.9l230.9 230.9 77.8-79.6z"/>
              </g>
              <text x="36" y="15" fill="#A1A1AA" fontSize="7" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="500" letterSpacing="0.4">GET IT ON</text>
              <text x="36" y="28" fill="#FFFFFF" fontSize="13" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="600" letterSpacing="-0.2">Google Play</text>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AppBanner
