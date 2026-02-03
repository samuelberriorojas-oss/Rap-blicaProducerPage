import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants/navigation';
import { SITE_CONFIG } from '../../constants/siteConfig';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import logoRP from '../../assets/images/Logo RP-Photoroom.png';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollTo = useScrollToSection();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavClick(href) {
    const id = href.replace('#', '');
    scrollTo(id);
    setMenuOpen(false);
  }

  function handleContactClick() {
    scrollTo('contact');
    setMenuOpen(false);
  }

  function close() {
    setMenuOpen(false);
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Navegación principal">
      <div className="navbar__inner">
        <button
          className="navbar__brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          type="button"
          aria-label="Ir al inicio"
        >
          <img
            src={logoRP}
            alt={`Logo de ${SITE_CONFIG.name}`}
            className="navbar__logo"
            width="36"
            height="36"
          />
          <span className="navbar__title">{SITE_CONFIG.name}</span>
        </button>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          type="button"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>

        {menuOpen && (
          <div
            className="navbar__overlay"
            onClick={close}
            aria-hidden="true"
          />
        )}

        <div
          id="nav-menu"
          className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}
        >
          <div className="navbar__links">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                className="navbar__link"
                onClick={() => handleNavClick(link.href)}
                type="button"
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            className="navbar__cta"
            onClick={handleContactClick}
            type="button"
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  );
}
