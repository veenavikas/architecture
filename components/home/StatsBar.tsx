'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: 5, suffix: '+', label: 'Years', sublabel: 'Experience' },
  { number: 12, suffix: '+', label: 'Projects', sublabel: 'Completed' },
  { number: 3, suffix: '', label: 'Countries', sublabel: 'Worked In' },
  { number: 4, suffix: '', label: 'Awards', sublabel: 'Received' },
];

function CounterNumber({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span
      style={{
        fontFamily: 'var(--font-playfair)',
        fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
        fontWeight: 800,
        color: 'var(--color-void)',
        lineHeight: 1,
      }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      style={{
        background: 'rgba(235,227,214,0.55)',
        borderBottom: '1px solid rgba(31,26,23,0.08)',
        padding: '5rem 2.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '3rem',
        }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.33, 1, 0.68, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              paddingLeft: index > 0 ? '3rem' : 0,
              borderLeft: index > 0 ? '1px solid rgba(31,26,23,0.08)' : 'none',
            }}
          >
            <CounterNumber target={stat.number} suffix={stat.suffix} active={isInView} />
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-void)',
                  marginBottom: '0.2rem',
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(31,26,23,0.4)',
                }}
              >
                {stat.sublabel}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
