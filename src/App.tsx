import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { OurWorkPage } from './components/OurWorkPage'
import { AboutUsPage } from './components/AboutUsPage'
import { ContactUsPage } from './components/ContactUsPage'
import { Footer } from './components/Footer'
import { AnimatedCityscape } from './components/AnimatedCityscape'
import { SplashScreen } from './components/SplashScreen'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'our-work' | 'about-us' | 'contact'>('home')

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'our-work' || hash === 'services') {
        setCurrentPage('our-work')
        if (hash === 'services') {
          setTimeout(() => {
            const el = document.getElementById('services')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      } else if (hash === 'about-us' || hash === 'about') {
        setCurrentPage('about-us')
      } else if (hash === 'contact') {
        setCurrentPage('contact')
      } else if (hash === 'home' || hash === '') {
        setCurrentPage('home')
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handlePageChange = (page: string) => {
    if (page === 'our-work') {
      setCurrentPage('our-work')
      window.location.hash = 'our-work'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'about-us' || page === 'about') {
      setCurrentPage('about-us')
      window.location.hash = 'about-us'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (page === 'contact') {
      setCurrentPage('contact')
      window.location.hash = 'contact'
      window.scrollTo(0, 0)
    } else if (page === 'services') {
      setCurrentPage('our-work')
      window.location.hash = 'services'
      setTimeout(() => {
        const el = document.getElementById('services')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      setCurrentPage('home')
      window.location.hash = 'home'
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <SplashScreen />
      <main className="site-shell">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />

        {currentPage === 'our-work' ? (
          <OurWorkPage />
        ) : currentPage === 'about-us' ? (
          <AboutUsPage onPageChange={handlePageChange} />
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



