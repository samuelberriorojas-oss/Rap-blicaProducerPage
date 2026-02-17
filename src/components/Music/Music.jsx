import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../common/SectionHeading';
import './Music.css';

const SPOTIFY_EMBED = 'https://open.spotify.com/embed/playlist/5P7eaYhiDG1JNlnRmUY7kX?utm_source=generator&theme=0';

export default function Music() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="music"
      className="section music"
      aria-labelledby="music-heading"
      ref={revealRef}
    >
      <SectionHeading id="music-heading" step="03 — Música">
        Nuestras Producciones
      </SectionHeading>

      <p className="music__intro reveal">
        Cada canción de esta playlist fue creada, grabada y masterizada en{' '}
        <strong>Rapública Producer</strong>. Desde 2020, artistas de Armenia y Colombia
        han pasado por este estudio para convertir sus ideas en tracks reales. Beats
        originales, voces profesionales y masters de calidad &mdash; todo nació aquí.
      </p>

      <div className="music__player reveal reveal-delay-1">
        <iframe
          title="Playlist de Rapública Producer en Spotify"
          src={SPOTIFY_EMBED}
          width="100%"
          height="452"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ border: 0, borderRadius: '12px' }}
        />
      </div>

      <div className="music__follow reveal reveal-delay-2">
        <span className="music__follow-label">Encuéntranos en</span>
        <div className="music__follow-links">
          <a
            href="https://www.instagram.com/saamuelberrio_mowks"
            target="_blank"
            rel="noopener noreferrer"
            className="music__follow-link"
          >
            <FaInstagram aria-hidden="true" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/@mowksofficial624"
            target="_blank"
            rel="noopener noreferrer"
            className="music__follow-link"
          >
            <FaYoutube aria-hidden="true" />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}
