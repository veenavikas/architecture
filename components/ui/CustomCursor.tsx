'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { useCursorVariant } from '@/hooks/useCursorVariant';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const { variant, label } = useCursorVariant();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);
    window.addEventListener('mouseenter', show);
    window.addEventListener('mouseleave', hide);
    // Show once mouse moves
    const onMove = () => { setIsVisible(true); window.removeEventListener('mousemove', onMove); };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseenter', show);
      window.removeEventListener('mouseleave', hide);
    };
  }, []);

  const dotVariants = {
    default: { width: 12, height: 12, opacity: 1 },
    hover: { width: 8, height: 8, opacity: 0.8 },
    text: { width: 3, height: 20, borderRadius: 2, opacity: 1 },
    image: { width: 6, height: 6, opacity: 0.6 },
    hidden: { width: 0, height: 0, opacity: 0 },
  };

  const ringVariants = {
    default: { width: 40, height: 40, opacity: 0.4, borderColor: 'rgba(245,240,232,0.4)' },
    hover: { width: 60, height: 60, opacity: 0.8, borderColor: 'rgba(200, 75, 49, 0.6)' },
    text: { width: 24, height: 24, opacity: 0.3, borderColor: 'rgba(245,240,232,0.3)' },
    image: { width: 80, height: 80, opacity: 0.6, borderColor: 'rgba(200, 75, 49, 0.4)' },
    hidden: { width: 0, height: 0, opacity: 0 },
  };

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className="cursor" style={{ opacity: isVisible ? 1 : 0 }}>
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          position: 'fixed',
          top: y,
          left: x,
          borderRadius: variant === 'text' ? '2px' : '50%',
          backgroundColor: 'var(--color-bone)',
          zIndex: 9999,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
        }}
        animate={dotVariants[variant] || dotVariants.default}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />

      {/* Ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: y,
          left: x,
          borderRadius: '50%',
          border: '1px solid rgba(245, 240, 232, 0.4)',
          zIndex: 9998,
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={ringVariants[variant] || ringVariants.default}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {(variant === 'hover' || variant === 'image') && label && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '8px',
            letterSpacing: '0.15em',
            color: 'var(--color-bone)',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </span>
        )}
      </motion.div>
    </div>
  );
}
