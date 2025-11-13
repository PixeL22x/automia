import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Automia</span>
          </div>
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={mobileMenuOpen ? styles.open : ''}></span>
            <span className={mobileMenuOpen ? styles.open : ''}></span>
            <span className={mobileMenuOpen ? styles.open : ''}></span>
          </button>
          <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
            <li><a href="#inicio" onClick={closeMobileMenu}>Inicio</a></li>
            <li><a href="#servicios" onClick={closeMobileMenu}>Servicios</a></li>
            <li><a href="#beneficios" onClick={closeMobileMenu}>Beneficios</a></li>
            <li><a href="#proceso" onClick={closeMobileMenu}>Proceso</a></li>
            <li><a href="https://wa.me/34634968135" target="_blank" rel="noopener noreferrer" className={styles.ctaButton} onClick={closeMobileMenu}>Contacto</a></li>
          </ul>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu}></div>
      )}
    </>
  )
}

