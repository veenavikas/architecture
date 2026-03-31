'use client';

import SiteImage from '@/components/ui/SiteImage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

export default function AboutTeaser() {
  return (
    <section style={{
      background: 'var(--color-bone)',
      padding: '8rem 2.5rem',
      overflow: 'hidden',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '5rem',
        alignItems: 'center',
      }}
        className="md:grid-cols-2"
      >
        {/* Image left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          style={{ position: 'relative' }}
        >
          {/* Diagonal brutalist frame */}
          <div style={{
            position: 'relative',
            height: 'clamp(400px, 55vw, 680px)',
            clipPath: 'polygon(0 0, 92% 0, 100% 8%, 100% 100%, 8% 100%, 0 92%)',
            overflow: 'hidden',
          }}>
            <SiteImage
              src="/images/rupa/portrait.jpg"
              alt="Rupa Sri — Architectural Designer"
              fill
              className="object-cover"
              style={{ objectPosition: 'center top' }}
            />
            {/* Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(200,75,49,0.15) 0%, transparent 60%)',
            }} />
          </div>

          {/* Decorative geometric accent */}
          <div style={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            width: '120px',
            height: '120px',
            border: '1px solid var(--color-rust)',
            opacity: 0.3,
            zIndex: -1,
          }} />
          <div style={{
            position: 'absolute',
            top: '-14px',
            left: '-14px',
            width: '60px',
            height: '60px',
            border: '1px solid rgba(44,62,80,0.25)',
            zIndex: -1,
          }} />
        </motion.div>

        {/* Text right */}
        <div>
          <SectionLabel>About</SectionLabel>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              letterSpacing: '-0.02em',
              color: 'var(--color-void)',
              lineHeight: 1.1,
              marginBottom: '2rem',
            }}
          >
            Designing spaces<br />that carry meaning.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              lineHeight: 1.9,
              color: 'rgba(10,10,10,0.65)',
              marginBottom: '2.5rem',
              maxWidth: '480px',
            }}
          >
            Rupa Sri is an M.Tech Architecture graduate based in Glasgow, UK,
            with experience across residential, civic, and cultural design typologies.
            Her work bridges South Asian spatial vocabulary with contemporary
            European sensibilities — creating spaces that feel both rooted and forward.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/about"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-void)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                paddingBottom: '0.25rem',
                borderBottom: '1px solid var(--color-rust)',
                transition: 'color 0.3s, border-color 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--color-rust)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--color-void)';
              }}
            >
              Read The Full Story <ArrowUpRight size={13} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
