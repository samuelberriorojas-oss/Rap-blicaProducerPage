import { SERVICES } from '../../constants/services';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from './ServiceCard';
import './Services.css';

export default function Services() {
  const revealRef = useScrollReveal();

  return (
    <section id="services" className="section services-section" aria-labelledby="services-heading" ref={revealRef}>
      <SectionHeading
        id="services-heading"
        step="01 — Servicios"
        subtitle="Si quieres empezar a crear tu música, este es tu espacio. Te acompañamos desde la idea hasta que tengas una canción lista."
      >
        Servicios
      </SectionHeading>

      <div className="services__cards">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            featured={service.id === 'full-song'}
            className={`reveal reveal-delay-${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
