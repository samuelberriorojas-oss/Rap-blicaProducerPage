import { useState, useEffect } from 'react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button
      className={`scroll-to-top ${visible ? 'scroll-to-top--visible' : ''}`}
      onClick={scrollUp}
      aria-label="Volver arriba"
      type="button"
    >
      &#8593;
    </button>
  );
}
