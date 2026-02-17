import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '../../constants/siteConfig';

export default function ServiceCard({ service, index, featured }) {
  const formattedCOP = service.priceCOP.toLocaleString('es-CO');
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`;

  return (
    <div className={`service-card ${featured ? 'service-card--featured' : ''}`}>
      <span className="service-card__number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>

      {service.badge && (
        <span className="service-card__badge">{service.badge}</span>
      )}

      {service.tag && (
        <span className="service-card__tag">{service.tag}</span>
      )}

      <h3 className="service-card__title">{service.title}</h3>

      <div className="service-card__price">
        <span className="service-card__price-cop">
          ${formattedCOP} COP{service.priceLabel || ''}
        </span>
        <span className="service-card__price-usd">
          ~${service.priceUSD} USD{service.priceLabel || ''}
        </span>
      </div>

      <p className="service-card__description">{service.description}</p>

      <ul className="service-card__features">
        {service.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="service-card__cta"
        aria-label={`Pedir ${service.title} por WhatsApp`}
      >
        <FaWhatsapp aria-hidden="true" />
        <span>Pedir por WhatsApp</span>
      </a>
    </div>
  );
}
