'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ContactCTABanner() {
  return (
    <section
      className="noise-overlay"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(238,246,255,1) 100%)',
        padding: '10rem 2.5rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(8rem, 25vw, 22rem)',
            fontWeight: 700,
            color: 'rgba(77,124,255,0.08)',
            letterSpacing: '-0.05em',
            whiteSpace: 'nowrap',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          LET'S TALK
        </p>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-rust)',
            marginBottom: '1.5rem',
          }}
        >
          New Project?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.33, 1, 0.68, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
            letterSpacing: '-0.03em',
            color: 'var(--color-void)',
            lineHeight: 1.05,
            marginBottom: '1.5rem',
          }}
        >
          Have a project
          <br />
          in mind?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            lineHeight: 1.8,
            color: 'rgba(22,32,51,0.72)',
            marginBottom: '3rem',
          }}
        >
          Whether it is a residence in Bangalore or a commercial complex in Hyderabad -
          <br />
          let&apos;s talk about what space can do for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <MagneticButton>
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-paper)',
                background: 'var(--color-rust)',
                padding: '1.2rem 3rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-void)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-paper)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-rust)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-paper)';
              }}
            >
              Start A Conversation <ArrowUpRight size={16} />
            </Link>
          </MagneticButton>

          <p
            style={{
              marginTop: '2rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: 'rgba(22,32,51,0.46)',
            }}
          >
            hello@rupasri.design
          </p>
        </motion.div>
      </div>
    </section>
  );
}
