import { FaWhatsapp, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { SITE_CONFIG } from '../../constants/siteConfig';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollTo = useScrollToSection();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand-block">
          <p className="footer__brand">{SITE_CONFIG.name}</p>
          <p className="footer__tagline">Estudio de Producción Musical</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <button type="button" onClick={() => scrollTo('services')}>Servicios</button>
          <button type="button" onClick={() => scrollTo('studio')}>Estudio</button>
          <button type="button" onClick={() => scrollTo('music')}>Música</button>
          <button type="button" onClick={() => scrollTo('about')}>Sobre Mí</button>
          <button type="button" onClick={() => scrollTo('contact')}>Contacto</button>
        </nav>

        <div className="footer__social">
          <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/saamuelberrio_mowks" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://open.spotify.com/playlist/5P7eaYhiDG1JNlnRmUY7kX" target="_blank" rel="noopener noreferrer" aria-label="Spotify"><FaSpotify /></a>
          <a href="https://www.youtube.com/@mowksofficial624" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
        </div>

        <div className="footer__line" aria-hidden="true" />

        <p className="footer__copy">
          &copy; {year} {SITE_CONFIG.name} &mdash; {SITE_CONFIG.location}
        </p>
      </div>
    </footer>
  );
}
