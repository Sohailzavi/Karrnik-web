import { useState, useEffect, useRef } from 'react'

interface LocationItem {
  id: string
  name: string
  area: string
  lat: number
  lng: number
  address: string
  phone: string
  timings: string
  type: 'studio' | 'detailing'
}

const locationsData: LocationItem[] = [
  {
    id: 'kondapur',
    name: 'Karnik Studio — Kondapur',
    area: 'Kondapur, Hyderabad',
    lat: 17.4640,
    lng: 78.3650,
    address: 'Kondapur Main Road, Opp. Botanical Garden, Hitech City, Hyderabad 500084',
    phone: '9133239997',
    timings: 'Mon - Sun: 9:00 AM - 8:30 PM',
    type: 'studio',
  },
  {
    id: 'kompally',
    name: 'Karnik Studio — Kompally',
    area: 'Kompally, Hyderabad',
    lat: 17.5350,
    lng: 78.4850,
    address: 'Kompally Main Road, Near Cine Planet, Hyderabad 500100',
    phone: '9133239997',
    timings: 'Mon - Sun: 9:00 AM - 8:30 PM',
    type: 'studio',
  },
  {
    id: 'miyapur',
    name: 'Karnik Care Hub — Miyapur',
    area: 'Miyapur, Hyderabad',
    lat: 17.4960,
    lng: 78.3580,
    address: 'Miyapur X Roads, Hyderabad 500049',
    phone: '9133239997',
    timings: 'Mon - Sun: 9:00 AM - 8:00 PM',
    type: 'detailing',
  },
  {
    id: 'pashamylaram',
    name: 'Karnik Hub — Pashamylaram',
    area: 'Pashamylaram, Hyderabad',
    lat: 17.5210,
    lng: 78.1820,
    address: 'Pashamylaram Industrial Area, Hyderabad 502307',
    phone: '9133239997',
    timings: 'Mon - Sat: 9:00 AM - 7:00 PM',
    type: 'detailing',
  },
  {
    id: 'gachibowli',
    name: 'Karnik Care Hub — Gachibowli',
    area: 'Gachibowli, Hyderabad',
    lat: 17.4400,
    lng: 78.3480,
    address: 'Gachibowli ORR Junction, Hyderabad 500032',
    phone: '9133239997',
    timings: 'Mon - Sun: 9:00 AM - 8:00 PM',
    type: 'detailing',
  },
  {
    id: 'narsingi',
    name: 'Karnik Hub — Narsingi',
    area: 'Narsingi, Hyderabad',
    lat: 17.3880,
    lng: 78.3680,
    address: 'Narsingi Main Road, Hyderabad 500075',
    phone: '9133239997',
    timings: 'Mon - Sun: 9:00 AM - 8:00 PM',
    type: 'detailing',
  }
]

interface LocationsPageProps {
  onPageChange?: (page: string) => void
}

export function LocationsPage({ onPageChange: _onPageChange }: LocationsPageProps) {
  const [selectedArea, setSelectedArea] = useState('Madhapur, Hyderabad')
  const [selectedRadius, setSelectedRadius] = useState('10 Km')
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [activeStudio, setActiveStudio] = useState<LocationItem | null>(locationsData[0])
  const [mapLoaded, setMapLoaded] = useState(false)

  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  // Load Leaflet dynamically with size invalidation & fallback
  useEffect(() => {
    let isMounted = true

    const loadLeaflet = () => {
      if ((window as any).L) {
        initMap()
        return
      }

      // Add CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link')
        link.id = 'leaflet-css'
        link.rel = 'stylesheet'
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
        document.head.appendChild(link)
      }

      // Add Script
      if (!document.getElementById('leaflet-js')) {
        const script = document.createElement('script')
        script.id = 'leaflet-js'
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
        script.onload = () => {
          if (isMounted) initMap()
        }
        document.body.appendChild(script)
      }
    }

    const initMap = () => {
      const L = (window as any).L
      if (!L || !mapContainerRef.current) return

      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove()
        } catch (e) {
          // Ignore
        }
      }

      // Center around Madhapur/Kondapur [17.4550, 78.3800]
      const map = L.map(mapContainerRef.current, {
        center: [17.4550, 78.3800],
        zoom: 11,
        zoomControl: false,
        attributionControl: false,
      })

      mapInstanceRef.current = map

      // Dark CARTO Map Tile Layer
      const tileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
      })
      
      tileLayer.on('load', () => {
        if (isMounted) setMapLoaded(true)
      })

      tileLayer.addTo(map)

      // Invalidate size after layout completes
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize()
        }
      }, 150)
      setTimeout(() => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize()
        }
      }, 500)

      // Add custom zoom control at top right
      L.control.zoom({ position: 'topright' }).addTo(map)

      // User location blue dot (Madhapur)
      const userDotIcon = L.divIcon({
        className: 'user-location-marker',
        html: `<div class="blue-pulse-dot"></div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      })
      L.marker([17.4483, 78.3915], { icon: userDotIcon }).addTo(map)

      // Radius circle
      const radiusKm = parseInt(selectedRadius, 10) || 10
      L.circle([17.4483, 78.3915], {
        color: 'rgba(255, 255, 255, 0.45)',
        fillColor: 'rgba(255, 255, 255, 0.08)',
        fillOpacity: 0.35,
        radius: radiusKm * 1000,
        weight: 1.5,
      }).addTo(map)

      // Filtered pins
      const filtered = locationsData.filter((loc) => {
        if (selectedFilter === 'Studios') return loc.type === 'studio'
        if (selectedFilter === 'Detailing Bays') return loc.type === 'detailing'
        return true
      })

      // Add Golden Map Pins for Karnik Studios
      filtered.forEach((loc) => {
        const goldPin = L.divIcon({
          className: 'gold-studio-pin',
          html: `
            <div class="pin-gold-container">
              <div class="pin-gold-ring">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#080808" stroke="#dda91e" stroke-width="2"/>
                  <circle cx="12" cy="9" r="2.5" fill="#dda91e"/>
                </svg>
              </div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
        })

        const marker = L.marker([loc.lat, loc.lng], { icon: goldPin }).addTo(map)
        marker.on('click', () => {
          setActiveStudio(loc)
        })
      })
    }

    loadLeaflet()

    return () => {
      isMounted = false
    }
  }, [selectedRadius, selectedFilter])

  const [activeDropdown, setActiveDropdown] = useState<'area' | 'radius' | 'filter' | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="locations-map-page">
      {/* Top Filter Controls Bar */}
      <div className="map-controls-bar" ref={dropdownRef}>
        <div className="map-controls-inner">
          {/* Left: Location Pin Dropdown */}
          <div className="custom-dropdown-container">
            <button 
              type="button"
              className={`custom-dropdown-trigger area-trigger ${activeDropdown === 'area' ? 'is-open' : ''}`}
              onClick={() => setActiveDropdown(activeDropdown === 'area' ? null : 'area')}
            >
              <svg className="location-pin-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="trigger-value">{selectedArea}</span>
              <svg className={`caret-icon ${activeDropdown === 'area' ? 'rotate-caret' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {activeDropdown === 'area' && (
              <div className="custom-dropdown-menu area-menu">
                {['Madhapur, Hyderabad', 'Kondapur, Hyderabad', 'Kompally, Hyderabad', 'Gachibowli, Hyderabad', 'Miyapur, Hyderabad'].map(option => (
                  <button
                    key={option}
                    type="button"
                    className={`dropdown-menu-item ${selectedArea === option ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedArea(option)
                      setActiveDropdown(null)
                    }}
                  >
                    <span>{option}</span>
                    {selectedArea === option && <span className="item-checkmark">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Radius & Filter Dropdowns */}
          <div className="map-right-filters">
            <div className="custom-dropdown-container">
              <button 
                type="button"
                className={`custom-dropdown-trigger pill-trigger ${activeDropdown === 'radius' ? 'is-open' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === 'radius' ? null : 'radius')}
              >
                <span className="trigger-value">{selectedRadius}</span>
                <svg className={`caret-icon ${activeDropdown === 'radius' ? 'rotate-caret' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {activeDropdown === 'radius' && (
                <div className="custom-dropdown-menu pill-menu">
                  {['5 Km', '10 Km', '15 Km', '25 Km'].map(option => (
                    <button
                      key={option}
                      type="button"
                      className={`dropdown-menu-item ${selectedRadius === option ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedRadius(option)
                        setActiveDropdown(null)
                      }}
                    >
                      <span>{option}</span>
                      {selectedRadius === option && <span className="item-checkmark">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="custom-dropdown-container">
              <button 
                type="button"
                className={`custom-dropdown-trigger pill-trigger ${activeDropdown === 'filter' ? 'is-open' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === 'filter' ? null : 'filter')}
              >
                <span className="trigger-value">{selectedFilter}</span>
                <svg className={`caret-icon ${activeDropdown === 'filter' ? 'rotate-caret' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {activeDropdown === 'filter' && (
                <div className="custom-dropdown-menu pill-menu">
                  {['All', 'Studios', 'Detailing Bays'].map(option => (
                    <button
                      key={option}
                      type="button"
                      className={`dropdown-menu-item ${selectedFilter === option ? 'selected' : ''}`}
                      onClick={() => {
                        setSelectedFilter(option)
                        setActiveDropdown(null)
                      }}
                    >
                      <span>{option}</span>
                      {selectedFilter === option && <span className="item-checkmark">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Map Container */}
      <div className="dark-map-viewport">
        {/* Hyderabad Vector Map Overlay / Fallback Graphic matching user screenshot */}
        {!mapLoaded && (
          <div className="hyderabad-vector-map-bg">
            <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
              {/* Dark Map Background */}
              <rect width="1000" height="600" fill="#181d28" />

              {/* Road / Ring Road Paths */}
              <path d="M 100 200 Q 300 150 500 220 T 900 180" fill="none" stroke="#2c364c" strokeWidth="3" />
              <path d="M 200 500 Q 450 350 520 100" fill="none" stroke="#2c364c" strokeWidth="4" />
              <path d="M 150 100 L 850 500" fill="none" stroke="#252e42" strokeWidth="2" />
              
              {/* ORR Circular Loop */}
              <ellipse cx="500" cy="300" rx="380" ry="240" fill="none" stroke="#333f58" strokeWidth="3" strokeDasharray="6 4" />
              
              {/* Radius Circle overlay centered around Madhapur */}
              <circle cx="470" cy="290" r="180" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />

              {/* Blue user pulse dot at Madhapur */}
              <circle cx="470" cy="290" r="10" fill="#3b82f6" />
              <circle cx="470" cy="290" r="18" fill="rgba(59,130,246,0.3)" />

              {/* Highway Badges */}
              <g transform="translate(880, 50)">
                <rect width="36" height="20" rx="4" fill="#080808" stroke="#f59e0b" strokeWidth="1.5"/>
                <text x="18" y="14" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">161AA</text>
              </g>
              <g transform="translate(560, 260)">
                <rect width="28" height="18" rx="4" fill="#080808" stroke="#f59e0b" strokeWidth="1.5"/>
                <text x="14" y="13" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">44</text>
              </g>
              <g transform="translate(685, 450)">
                <rect width="30" height="18" rx="4" fill="#080808" stroke="#f59e0b" strokeWidth="1.5"/>
                <text x="15" y="13" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">163</text>
              </g>
              <g transform="translate(140, 550)">
                <rect width="30" height="18" rx="4" fill="#080808" stroke="#f59e0b" strokeWidth="1.5"/>
                <text x="15" y="13" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle">163</text>
              </g>

              {/* Area Labels (English & Telugu) */}
              <g fill="#a5b4fc" fontSize="13" fontWeight="bold" textAnchor="middle">
                <text x="180" y="120" fill="#c7d2fe">Sangareddy</text>
                <text x="180" y="138" fill="#818cf8" fontSize="11">సంగారెడ్డి</text>

                <text x="430" y="240" fill="#e0e7ff">Miyapur</text>
                <text x="430" y="258" fill="#a5b4fc" fontSize="11">మియాపూర్</text>

                <text x="470" y="325" fill="#ffffff" fontSize="15">MADHAPUR</text>
                <text x="470" y="342" fill="#c7d2fe" fontSize="12">మాధాపూర్</text>

                <text x="560" y="380" fill="#ffffff" fontSize="22" fontWeight="900" letterSpacing="1">Hyderabad</text>
                <text x="560" y="405" fill="#c7d2fe" fontSize="16" fontWeight="bold">హైదరాబాద్</text>

                <text x="430" y="440" fill="#93c5fd">Narsingi</text>
                <text x="430" y="456" fill="#60a5fa" fontSize="11">నార్సింగి</text>

                <text x="660" y="490" fill="#93c5fd" fontSize="15">Vanasthalipuram</text>
                <text x="660" y="508" fill="#60a5fa" fontSize="12">వనస్థలిపురం</text>

                <text x="760" y="300" fill="#93c5fd">Ghatkesar</text>
                <text x="760" y="316" fill="#60a5fa" fontSize="11">ఘట్కేసర్</text>

                <text x="870" y="380" fill="#93c5fd">Bibinagar</text>
                <text x="870" y="396" fill="#60a5fa" fontSize="11">బిబినగర్</text>

                <text x="280" y="270" fill="#93c5fd">Pashamylaram</text>
                <text x="280" y="286" fill="#60a5fa" fontSize="11">పాశమైలారం</text>

                <text x="220" y="380" fill="#93c5fd">Shankarpalle</text>
                <text x="220" y="396" fill="#60a5fa" fontSize="11">శంకర్పల్లి</text>

                <text x="240" y="550" fill="#93c5fd">Chevella</text>
                <text x="240" y="566" fill="#60a5fa" fontSize="11">చేవెళ్ల</text>
              </g>

              {/* Golden Pin Markers */}
              {/* Pin 1: Kompally */}
              <g transform="translate(620, 160)" style={{ cursor: 'pointer' }} onClick={() => setActiveStudio(locationsData[1])}>
                <circle cx="0" cy="0" r="14" fill="#080808" stroke="#dda91e" strokeWidth="2.5" />
                <path d="M-5 -2 L0 -8 L5 -2 C5 2 0 6 0 6 C0 6 -5 2 -5 -2 Z" fill="#dda91e" />
              </g>

              {/* Pin 2: Miyapur */}
              <g transform="translate(430, 270)" style={{ cursor: 'pointer' }} onClick={() => setActiveStudio(locationsData[2])}>
                <circle cx="0" cy="0" r="14" fill="#080808" stroke="#dda91e" strokeWidth="2.5" />
                <path d="M-5 -2 L0 -8 L5 -2 C5 2 0 6 0 6 C0 6 -5 2 -5 -2 Z" fill="#dda91e" />
              </g>

              {/* Pin 3: Pashamylaram */}
              <g transform="translate(235, 215)" style={{ cursor: 'pointer' }} onClick={() => setActiveStudio(locationsData[3])}>
                <circle cx="0" cy="0" r="14" fill="#080808" stroke="#dda91e" strokeWidth="2.5" />
                <path d="M-5 -2 L0 -8 L5 -2 C5 2 0 6 0 6 C0 6 -5 2 -5 -2 Z" fill="#dda91e" />
              </g>

              {/* Pin 4: Narsingi */}
              <g transform="translate(435, 470)" style={{ cursor: 'pointer' }} onClick={() => setActiveStudio(locationsData[5])}>
                <circle cx="0" cy="0" r="14" fill="#080808" stroke="#dda91e" strokeWidth="2.5" />
                <path d="M-5 -2 L0 -8 L5 -2 C5 2 0 6 0 6 C0 6 -5 2 -5 -2 Z" fill="#dda91e" />
              </g>
            </svg>
          </div>
        )}

        <div ref={mapContainerRef} className="leaflet-map-canvas" />

        {/* Selected Studio Info Floating Card */}
        {activeStudio && (
          <div className="map-floating-studio-card">
            <button 
              type="button" 
              className="card-close-btn"
              onClick={() => setActiveStudio(null)}
              aria-label="Close card"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="floating-card-header">
              <h3 className="floating-studio-name">{activeStudio.name}</h3>
            </div>
            
            <div className="floating-studio-details">
              <div className="detail-line">
                <svg className="detail-vector-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{activeStudio.address}</span>
              </div>
              <div className="detail-line">
                <svg className="detail-vector-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{activeStudio.timings} <span className="open-now-badge">● Open Now</span></span>
              </div>
              <div className="detail-line">
                <svg className="detail-vector-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dda91e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href={`tel:${activeStudio.phone}`} className="phone-link">+91 {activeStudio.phone}</a>
              </div>
            </div>

            {/* Studio Facility Tags */}
            <div className="studio-facility-chips">
              <span className="facility-chip">PPF Studio</span>
              <span className="facility-chip">Ceramic Coating</span>
              <span className="facility-chip">VIP Lounge</span>
            </div>

            <div className="floating-card-actions">
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(activeStudio.address)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="map-navigate-btn"
              >
                <span>Get Directions</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LocationsPage
