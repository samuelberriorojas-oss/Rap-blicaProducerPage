import { useCallback } from 'react';

export function useScrollToSection() {
  return useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
}
