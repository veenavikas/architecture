'use client';

import { motion } from 'framer-motion';

interface SectionLabelProps {
  children: string;
  className?: string;
  delay?: number;
  light?: boolean;
}

export default function SectionLabel({
  children,
  className = '',
  delay = 0,
  light = false,
}: SectionLabelProps) {
  return (
    <motion.div
      className={`section-label ${className}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        color: light ? 'rgba(31,26,23,0.52)' : 'var(--color-rust)',
        marginBottom: '1.5rem',
      }}
    >
      <span style={{
        display: 'block',
        width: '2rem',
        height: '1px',
        background: light ? 'rgba(31,26,23,0.22)' : 'var(--color-rust)',
      }} />
      {children}
    </motion.div>
  );
}
