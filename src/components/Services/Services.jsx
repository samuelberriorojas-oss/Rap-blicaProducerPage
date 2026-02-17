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
        subtitle="Todo lo que necesita para crear, grabar y publicar su música. Elija la categoría que más se ajuste a lo que busca."
      >
        Servicios
      </SectionHeading>

      {/* Category tabs */}
      <div className="services__tabs reveal" role="tablist" aria-label="Categorías de servicios">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            className={`services__tab ${activeCategory === cat.id ? 'services__tab--active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            type="button"
          >
            <span className="services__tab-step">{cat.step}</span>
            <span className="services__tab-label">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Category subtitle */}
      <p className="services__category-hint reveal reveal-delay-1">
        {activeCat?.step} &mdash; {activeCat?.label}
      </p>

      {/* Cards grid */}
      <div className="services__cards reveal reveal-delay-1" role="tabpanel">
        {filtered.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            featured={service.featured}
          />
        ))}
      </div>
    </section>
  );
}
