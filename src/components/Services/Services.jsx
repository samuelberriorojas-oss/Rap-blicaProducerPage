import { useState } from 'react';
import { SERVICES, SERVICE_CATEGORIES } from '../../constants/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from './ServiceCard';
import './Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('beats');
  const revealRef = useScrollReveal();

  const filtered = SERVICES.filter((s) => s.category === activeCategory);
  const activeCat = SERVICE_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section
      id="services"
      className="section services-section"
      aria-labelledby="services-heading"
      ref={revealRef}
    >
      <SectionHeading
        id="services-heading"
        step="01 — Servicios"
        subtitle="Todo lo que necesita para crear, grabar y publicar su música."
      >
        Servicios
      </SectionHeading>

      {/* Category buttons */}
      <div className="services__nav reveal" role="tablist" aria-label="Categorías de servicios">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`services__btn ${activeCategory === cat.id ? 'services__btn--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            type="button"
          >
            <span className="services__btn-label">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Active category description */}
      {activeCat?.description && (
        <p className="services__category-desc reveal reveal-delay-1">
          {activeCat.description}
        </p>
      )}

      {/* Cards grid */}
      <div className="services__cards" role="tabpanel">
        {filtered.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            total={filtered.length}
            featured={service.featured}
          />
        ))}
      </div>
    </section>
  );
}
