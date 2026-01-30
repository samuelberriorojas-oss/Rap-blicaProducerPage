import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../common/SectionHeading';
import estudio1 from '../../assets/images/Estudio 1.jpeg';
import estudio2 from '../../assets/images/Estudio 2.jpeg';
import estudio3 from '../../assets/images/Estudio 3.jpeg';
import './Studio.css';

const IMAGES = [
  { src: estudio1, alt: 'Vista del estudio de grabación Rapública Producer', label: 'El Estudio' },
  { src: estudio2, alt: 'Equipos de producción musical en el estudio', label: 'Equipos' },
  { src: estudio3, alt: 'Área de grabación y mezcla del estudio', label: 'Grabación' },
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
          <div key={i} className={`studio__item ${i === 0 ? 'studio__item--featured' : ''} reveal reveal-delay-${i + 1}`}>
            <img
              src={img.src}
              alt={img.alt}
              className="studio__img"
              loading="lazy"
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
