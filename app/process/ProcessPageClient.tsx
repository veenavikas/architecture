'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';

const phases = [
  {
    number: '01',
    name: 'Discovery',
    description: 'We begin with deep listening. Your vision, the site, the brief, and the budget — every project starts with understanding what you truly need, not just what you think you want.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
        <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="1" />
        <line x1="40" y1="10" x2="40" y2="70" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1" />
        <circle cx="40" cy="40" r="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Concept',
    description: 'Initial spatial ideas and design directions. We explore multiple concepts before converging on one that best responds to the site, the brief, and the budget.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
        <path d="M20 60 L40 20 L60 60 Z" stroke="currentColor" strokeWidth="1" />
        <path d="M30 45 L50 45" stroke="currentColor" strokeWidth="1" />
        <circle cx="40" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'Design Development',
    description: 'The chosen direction is developed in full detail — plans, sections, elevations, material choices, and structural coordination. This phase transforms a concept into a buildable design.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
        <rect x="15" y="15" width="50" height="50" stroke="currentColor" strokeWidth="1" />
        <rect x="25" y="25" width="30" height="30" stroke="currentColor" strokeWidth="1" />
        <line x1="15" y1="15" x2="5" y2="5" stroke="currentColor" strokeWidth="1" />
        <line x1="65" y1="15" x2="75" y2="5" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    number: '04',
    name: 'Documentation',
    description: 'Technical drawings for permits and construction — fully coordinated architectural drawings sets for statutory approval and contractor tendering.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
        <rect x="20" y="10" width="40" height="60" stroke="currentColor" strokeWidth="1" />
        <line x1="28" y1="28" x2="52" y2="28" stroke="currentColor" strokeWidth="1" />
        <line x1="28" y1="38" x2="52" y2="38" stroke="currentColor" strokeWidth="1" />
        <line x1="28" y1="48" x2="42" y2="48" stroke="currentColor" strokeWidth="1" />
        <path d="M20 10 L34 10 L34 20 L20 20" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    number: '05',
    name: 'Execution',
    description: 'On-site coordination and design oversight throughout construction. Regular site visits, RFI responses, and material approval ensure the design intent is realized accurately.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
        <path d="M10 60 L20 20 L40 40 L55 15 L70 60 Z" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    number: '06',
    name: 'Handover',
    description: 'Final delivery, walkthroughs, and post-occupancy review. We do not disappear at practical completion - we follow up to make sure the space works as well in use as it did on paper.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
        <path d="M15 40 L35 58 L65 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

export default function ProcessPageClient() {
  return (
    <div style={{ background: 'var(--color-void)', minHeight: '100vh', paddingTop: '10rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem 8rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '6rem' }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '1rem' }}
          >
            Methodology
          </motion.p>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(3.5rem, 10vw, 9rem)',
                letterSpacing: '-0.03em',
                color: 'var(--color-bone)',
                lineHeight: 0.9,
              }}
            >
              How We<br />Work
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.45)',
              maxWidth: '520px',
              marginTop: '2rem',
            }}
          >
            Architecture is a collaborative process. Here is how we work together — from the first conversation to the day you walk through the finished door.
          </motion.p>
        </div>

        {/* Process cards — horizontal scroll on desktop */}
        <div className="process-track" style={{ paddingBottom: '2rem' }}>
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              className="process-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
              style={{
                border: '1px solid rgba(245,240,232,0.08)',
                padding: '2.5rem',
                background: 'rgba(245,240,232,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                transition: 'border-color 0.4s ease, background 0.4s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200,75,49,0.3)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(200,75,49,0.04)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,240,232,0.08)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(245,240,232,0.02)';
              }}
            >
              {/* Icon */}
              <div style={{ color: 'rgba(245,240,232,0.2)', width: 80, height: 80 }}>
                {phase.icon}
              </div>

              {/* Number */}
              <div>
                <span style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '4rem',
                  fontWeight: 800,
                  color: 'rgba(200,75,49,0.15)',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                }}>
                  {phase.number}
                </span>
              </div>

              {/* Content */}
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: 'var(--color-bone)',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.01em',
                }}>
                  {phase.name}
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.88rem',
                  lineHeight: 1.85,
                  color: 'rgba(245,240,232,0.45)',
                }}>
                  {phase.description}
                </p>
              </div>

              {/* Step indicator */}
              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {phases.map((_, j) => (
                  <span key={j} style={{
                    display: 'block',
                    width: j === i ? '1.5rem' : '6px',
                    height: '2px',
                    background: j === i ? 'var(--color-rust)' : 'rgba(245,240,232,0.15)',
                    borderRadius: '1px',
                    transition: 'all 0.3s ease',
                  }} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginTop: '6rem', textAlign: 'center', maxWidth: '600px', margin: '6rem auto 0' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 300,
            color: 'rgba(245,240,232,0.6)',
            lineHeight: 1.6,
          }}>
            "Every project is different. But the commitment to making something meaningful — that never changes."
          </p>
        </motion.div>
      </div>
    </div>
  );
}
