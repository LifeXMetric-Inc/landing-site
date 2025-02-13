import { useCallback } from 'react';
import { useLocation } from 'wouter';

export function useScrollTo() {
  const [, setLocation] = useLocation();

  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setLocation('/' + (elementId ? '#' + elementId : ''));
    }
  }, [setLocation]);

  return scrollTo;
}
