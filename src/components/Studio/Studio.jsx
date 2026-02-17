import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../common/SectionHeading';
import estudio1 from '../../assets/images/Estudio 1.jpeg';
import estudio2 from '../../assets/images/Estudio 2.jpeg';
import estudio3 from '../../assets/images/Estudio 3.jpeg';
import estudio4 from '../../assets/images/Estudio 4.jpeg';
import './Studio.css';

const IMAGES = [
  { src: estudio4, alt: 'Vista principal del estudio Rapública Producer', label: 'El Estudio' },
  { src: estudio1, alt: 'Espacio de producción musical en el estudio', label: 'Producción' },
  { src: estudio2, alt: 'Equipos de grabación y mezcla profesional', label: 'Equipos' },
  { src: estudio3, alt: 'Área de grabación y monitoreo del estudio', label: 'Grabación' },
];

export default function Studio() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="studio"
      className="section studio"
      aria-labelledby="studio-heading"
      ref={revealRef}
    >
      <SectionHeading
        id="studio-heading"
        step="02 — El Estudio"
        subtitle="Un espacio pensado para crear, grabar y producir sin presión."
      >
        El Estudio
      </SectionHeading>

      <div className="studio__grid">
        {IMAGES.map((img, i) => (
          <div
            key={i}
            className={`studio__item ${i === 0 ? 'studio__item--hero' : ''} reveal reveal-delay-${i + 1}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="studio__img"
              loading={i === 0 ? 'eager' : 'lazy'}
              width="600"
              height="400"
            />
            <span className="studio__label">{img.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
