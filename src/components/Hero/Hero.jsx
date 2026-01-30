import { useScrollToSection } from '../../hooks/useScrollToSection';
import { SITE_CONFIG } from '../../constants/siteConfig';
import logoRP from '../../assets/images/LogoRapublica.jpeg';
import './Hero.css';

export default function Hero() {
  const scrollTo = useScrollToSection();

  return (
    <header className="hero">
      <div className="hero__noise" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__logo-wrap">
          <img
            src={logoRP}
            alt={`Logo de ${SITE_CONFIG.name}`}
            className="hero__logo"
            width="120"
            height="120"
          />
        </div>

        <div className="hero__equalizer" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>

        <p className="hero__label">Estudio de Producci&oacute;n Musical</p>

        <h1 className="hero__title">
          <span className="hero__title-line">Rap&uacute;blica</span>
          <span className="hero__title-line hero__title-line--outline">Producer</span>
        </h1>

        <p className="hero__subtitle">
          Trap &bull; Hip Hop &bull; Reguet&oacute;n &bull; Boom Bap &bull; Lo-Fi &bull; Afro
        </p>

        <p className="hero__location">
          {SITE_CONFIG.location}
        </p>

        <div className="hero__actions">
          <button className="hero__cta" onClick={() => scrollTo('services')} type="button">
            Ver Servicios
          </button>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </header>
  );
}
