import { useState, useEffect } from 'react'
import { Header } from './components/layout/Header'
import { Hero } from './components/sections/Hero'
import { Features } from './components/sections/Features'
import { Services } from './components/sections/Services'
import { OurWorkPage } from './components/pages/OurWorkPage'
import { AboutUsPage } from './components/pages/AboutUsPage'
import { ContactUsPage } from './components/pages/ContactUsPage'
import { LocationsPage } from './components/pages/LocationsPage'
import { Footer } from './components/layout/Footer'
import { AnimatedCityscape } from './components/ui/AnimatedCityscape'
import { SplashScreen } from './components/ui/SplashScreen'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'our-work' | 'about-us' | 'locations' | 'contact'>('home')

  useEffect(() => {
    const handlePath = () => {
      const path = window.location.pathname.replace(/^\/+/, '')
      const hash = window.location.hash.replace('#', '')
      // Some links still use hashes to scroll to sections on the homepage or our-work page
      if (path === 'our-work' || path === 'services' || hash === 'services') {
        setCurrentPage('our-work')
        if (path === 'services' || hash === 'services') {
          setTimeout(() => {
            const el = document.getElementById('services')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      } else if (path === 'about-us' || path === 'about') {
        setCurrentPage('about-us')
      } else if (path === 'contact') {
        setCurrentPage('contact')
      } else if (path === 'locations') {
        setCurrentPage('locations')
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else if (path === 'process' || ['process', 'pricing', 'testimonials', 'faq'].includes(hash)) {
        setCurrentPage('home')
        setTimeout(() => {
          const el = document.getElementById(hash || 'process')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else if (path === 'home' || path === '') {
        setCurrentPage('home')
      }
    }
    handlePath()
    window.addEventListener('popstate', handlePath)
    return () => window.removeEventListener('popstate', handlePath)
  }, [])

  const handlePageChange = (page: string) => {
    if (page === 'our-work') {
      setCurrentPage('our-work')
      window.history.pushState(null, '', '/our-work')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'about-us' || page === 'about') {
      setCurrentPage('about-us')
      window.history.pushState(null, '', '/about-us')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'contact') {
      setCurrentPage('contact')
      window.history.pushState(null, '', '/contact')
      window.scrollTo(0, 0)
    } else if (page === 'locations' || page.startsWith('locations#')) {
      setCurrentPage('locations')
      window.history.pushState(null, '', `/locations`)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (['process', 'pricing', 'testimonials', 'faq'].includes(page)) {
      setCurrentPage('home')
      window.history.pushState(null, '', `/`)
      setTimeout(() => {
        const el = document.getElementById(page)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else if (page === 'services') {
      setCurrentPage('our-work')
      window.history.pushState(null, '', '/our-work')
      setTimeout(() => {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      setCurrentPage('home')
      window.history.pushState(null, '', '/')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <SplashScreen />
      <main className="site-shell">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />

        {currentPage === 'our-work' ? (
          <OurWorkPage onPageChange={handlePageChange} />
        ) : currentPage === 'about-us' ? (
          <AboutUsPage onPageChange={handlePageChange} />
        ) : currentPage === 'locations' ? (
          <LocationsPage onPageChange={handlePageChange} />
        ) : currentPage === 'contact' ? (
          <ContactUsPage onPageChange={handlePageChange} />
        ) : (
          <>
            <Hero onPageChange={handlePageChange} />
            <Features />
            <Services />
          </>
        )}

        <Footer onPageChange={handlePageChange} />
        <AnimatedCityscape />
      </main>
    </>
  )
}

export default App



