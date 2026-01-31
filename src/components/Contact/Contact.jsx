import { FaWhatsapp } from 'react-icons/fa';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SITE_CONFIG } from '../../constants/siteConfig';
import SectionHeading from '../common/SectionHeading';
import './Contact.css';

export default function Contact() {
  const revealRef = useScrollReveal();

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent('¡Hola! Me gustaría conocer más sobre los servicios de Rapública Producer.')}`;

  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-heading"
      ref={revealRef}
    >
      <SectionHeading id="contact-heading" step="05 — Contacto" subtitle="Estamos listos para trabajar con usted.">
        Contacto
      </SectionHeading>

      {/* Big WhatsApp CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="contact__whatsapp-hero reveal"
      >
        <FaWhatsapp className="contact__wa-icon" aria-hidden="true" />
        <div className="contact__wa-text">
          <span className="contact__wa-title">Escríbenos por WhatsApp</span>
          <span className="contact__wa-sub">Respuesta rápida &mdash; agende su sesión hoy</span>
        </div>
      </a>

      <div className="contact__info reveal reveal-delay-1">
        <a href={`mailto:${SITE_CONFIG.email}`} className="contact__card">
          <span className="contact__card-label">Correo</span>
          <span className="contact__card-value">{SITE_CONFIG.email}</span>
        </a>

        <div className="contact__card">
          <span className="contact__card-label">Ubicación</span>
          <span className="contact__card-value">{SITE_CONFIG.location}</span>
        </div>

        <div className="contact__card">
          <span className="contact__card-label">Horario</span>
          <span className="contact__card-value">Lun — Sáb / Flexible</span>
        </div>
      </div>
    </section>
  );
}
