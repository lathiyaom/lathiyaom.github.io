import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const useLenis = (options = {}) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);
  const defaultOptionsRef = useRef({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smoothWheel: true,
    smoothTouch: false,
    touchMultiplier: 2,
    wheelMultiplier: 1,
    infinite: false,
    ...options,
  });

  const stop = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  }, []);

  const start = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  }, []);

  const scrollTo = useCallback((target, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  }, []);

  const getScroll = useCallback(() => {
    return lenisRef.current?.scrolled ?? 0;
  }, []);

  useEffect(() => {
    const lenis = new Lenis(defaultOptionsRef.current);
    lenisRef.current = lenis;

    const animate = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return {
    lenis: lenisRef.current,
    stop,
    start,
    scrollTo,
    getScroll,
  };
};
