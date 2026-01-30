import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced) {
      element.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.15, rootMargin: options.rootMargin ?? '0px' }
    );

    const reveals = element.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
