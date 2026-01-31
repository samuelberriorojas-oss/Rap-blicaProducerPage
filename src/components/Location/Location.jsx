import { SITE_CONFIG } from '../../constants/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../common/SectionHeading';
import './Location.css';

export default function Location() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="location"
      className="section location"
      aria-labelledby="location-heading"
      ref={revealRef}
    >
      <SectionHeading id="location-heading" step="06 — Ubicación">
        Ubicación
      </SectionHeading>
      <p className="location__text reveal">
        Estamos en {SITE_CONFIG.location}. Agende su visita y cree en un espacio real de
        producción.
      </p>
      <div className="location__map reveal reveal-delay-1">
        <iframe
          title={`Ubicación de ${SITE_CONFIG.name} en ${SITE_CONFIG.location}`}
          src={SITE_CONFIG.mapEmbedUrl}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
