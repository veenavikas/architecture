'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown, Globe, AtSign, ExternalLink } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useCursorVariant } from '@/hooks/useCursorVariant';

export default function HeroSection() {
  const { setVariant } = useCursorVariant();

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background:
          'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(248,251,255,0.98) 50%, rgba(238,246,255,1) 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 14% 16%, rgba(77,124,255,0.18), transparent 18%), radial-gradient(circle at 82% 20%, rgba(125,166,255,0.18), transparent 22%), linear-gradient(135deg, rgba(232,241,251,0.8), transparent 60%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '14%',
          right: '-8%',
          width: '28rem',
          height: '28rem',
          borderRadius: '50%',
          border: '1px solid rgba(77,124,255,0.16)',
          background: 'rgba(255,255,255,0.42)',
          boxShadow: '0 24px 60px rgba(113, 148, 206, 0.18)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10rem',
          left: '-6rem',
          width: '26rem',
          height: '26rem',
          borderRadius: '50%',
          border: '1px solid rgba(125,166,255,0.2)',
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          padding: '8rem 2.5rem 5rem',
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-rust)',
            marginBottom: '1.5rem',
          }}
        >
          Architectural Designer · Glasgow to India
        </motion.p>

        <div style={{ overflow: 'hidden' }}>
          <motion.div
            style={{
              display: 'flex',
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              letterSpacing: '-0.05em',
              lineHeight: 0.84,
              fontSize: 'clamp(5rem, 18vw, 16rem)',
              color: 'var(--color-void)',
            }}
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
          >
            RUPA
          </motion.div>
        </div>

        <div style={{ overflow: 'hidden' }}>
          <motion.div
            style={{
              display: 'flex',
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              letterSpacing: '-0.05em',
              lineHeight: 0.84,
              fontSize: 'clamp(5rem, 18vw, 16rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(22,32,51,0.22)',
              marginLeft: '4rem',
            }}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            SRI
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: [0.33, 1, 0.68, 1] }}
          style={{
            height: '1px',
            background: 'linear-gradient(to right, var(--color-rust), rgba(77,124,255,0.1))',
            transformOrigin: 'left',
            margin: '2rem 0',
            maxWidth: '700px',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.33, 1, 0.68, 1] }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)',
            fontWeight: 300,
            color: 'rgba(22,32,51,0.72)',
            maxWidth: '520px',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}
        >
          Spatial design that feels calm, rooted, and precise.
          <br />
          M.Tech Architecture · 5+ years across residential, civic, and cultural work
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.33, 1, 0.68, 1] }}
          style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}
        >
          <MagneticButton>
            <Link
              href="/projects"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-paper)',
                background: 'var(--color-void)',
                padding: '1rem 2.2rem',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 18px 40px rgba(77,124,255,0.16)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-rust)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-paper)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--color-void)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-paper)';
              }}
            >
              View Projects
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-void)',
                border: '1px solid rgba(77,124,255,0.16)',
                background: 'rgba(255,255,255,0.52)',
                backdropFilter: 'blur(16px)',
                padding: '1rem 2.2rem',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-rust)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-rust)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(77,124,255,0.16)';
                (e.currentTarget as HTMLElement).style.color = 'var(--color-void)';
              }}
            >
              Get In Touch
            </Link>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 2,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(22,32,51,0.48)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} color="rgba(22,32,51,0.48)" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          right: '2.5rem',
          display: 'flex',
          gap: '1.2rem',
          zIndex: 2,
        }}
      >
        {[
          { icon: <Globe size={15} />, href: 'https://linkedin.com' },
          { icon: <AtSign size={15} />, href: 'https://instagram.com' },
          { icon: <ExternalLink size={15} />, href: 'https://behance.net' },
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'rgba(22,32,51,0.52)', transition: 'color 0.3s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rust)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(22,32,51,0.52)')}
          >
            {social.icon}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
