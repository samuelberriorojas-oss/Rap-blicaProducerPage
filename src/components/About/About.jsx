import { ABOUT_BLOCKS } from '../../constants/aboutContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../common/SectionHeading';
import './About.css';

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="about"
      className="section about"
      aria-labelledby="about-heading"
      ref={revealRef}
    >
      <SectionHeading id="about-heading" step="04 — Historia" subtitle="El camino detrás del estudio.">
        Sobre M&iacute;
      </SectionHeading>

      <div className="about__container">
        {ABOUT_BLOCKS.map((block, index) => (
          <div
            key={block.id}
            className={`about__block reveal reveal-delay-${index + 1} ${block.highlight ? 'about__block--highlight' : ''}`}
          >
            <span className="about__block-num" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div dangerouslySetInnerHTML={{ __html: block.text }} />
          </div>
        ))}
      </div>
    </section>
  );
}
