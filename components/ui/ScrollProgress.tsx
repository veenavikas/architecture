'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      id="scroll-progress"
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'var(--color-rust)',
        transformOrigin: 'left',
        zIndex: 1000,
        pointerEvents: 'none',
      }}
    />
  );
}
