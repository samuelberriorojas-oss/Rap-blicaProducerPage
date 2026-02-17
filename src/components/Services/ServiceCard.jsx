import { FaWhatsapp } from 'react-icons/fa';
import { SITE_CONFIG } from '../../constants/siteConfig';

export default function ServiceCard({ service, index, total, featured }) {
  const formattedCOP = service.priceCOP.toLocaleString('es-CO');
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(service.whatsappMsg)}`;

  return (
    <div
      className={`service-card ${featured ? 'service-card--featured' : ''} ${total === 3 ? '' : 'service-card--wide'}`}
    >
      {/* Header: badge + tag row */}
      {(service.badge || service.tag) && (
        <div className="service-card__labels">
          {service.badge && (
            <span className="service-card__badge">{service.badge}</span>
          )}
          {service.tag && (
            <span className="service-card__tag">{service.tag}</span>
          )}
        </div>
      )}

      {/* Title */}
      <h3 className="service-card__title">{service.title}</h3>

      {/* Price block */}
      <div className="service-card__price">
        <span className="service-card__price-cop">
          ${formattedCOP}<span className="service-card__price-currency"> COP</span>{service.priceLabel && <span className="service-card__price-label">{service.priceLabel}</span>}
        </span>
        <span className="service-card__price-usd">
          ~${service.priceUSD} USD{service.priceLabel || ''}
        </span>
      </div>

      {/* Divider */}
      <div className="service-card__divider" aria-hidden="true" />

      {/* Description */}
      <p className="service-card__description">{service.description}</p>

      {/* Features */}
      <ul className="service-card__features">
        {service.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      {/* CTA */}
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
