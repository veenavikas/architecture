'use client';
import { useEffect, useRef } from 'react';

export function useSmoothScroll() {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let animFrame: number;

    const initLenis = async () => {
      const { default: Lenis } = await import('lenis');
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      }) as { raf: (time: number) => void; destroy: () => void };

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis?.raf(time);
        animFrame = requestAnimationFrame(raf);
      }
      animFrame = requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      cancelAnimationFrame(animFrame);
      lenis?.destroy();
    };
  }, []);

  return lenisRef;
}
