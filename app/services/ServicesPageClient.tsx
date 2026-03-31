'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { services } from '@/data/services';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ServicesPageClient() {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

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
            Expertise
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
              What I<br />Offer
            </motion.h1>
          </div>
        </div>

        {/* Accordion services */}
        <div style={{ borderTop: '1px solid rgba(245,240,232,0.08)' }}>
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ borderBottom: '1px solid rgba(245,240,232,0.08)' }}
            >
              <button
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '2.5rem 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'none',
                  textAlign: 'left',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    color: openId === service.id ? 'var(--color-rust)' : 'rgba(245,240,232,0.1)',
                    transition: 'color 0.4s ease',
                    letterSpacing: '-0.02em',
                    minWidth: '4rem',
                  }}>
                    {service.number}
                  </span>
                  <div>
                    <h2 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
                      fontWeight: 300,
                      color: openId === service.id ? 'var(--color-bone)' : 'rgba(245,240,232,0.7)',
                      letterSpacing: '-0.02em',
                      transition: 'color 0.4s ease',
                    }}>
                      {service.name}
                    </h2>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.1em',
                      color: 'rgba(245,240,232,0.3)',
                      marginTop: '0.3rem',
                    }}>
                      {service.tagline}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openId === service.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ color: openId === service.id ? 'var(--color-rust)' : 'rgba(245,240,232,0.25)', flexShrink: 0 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openId === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 0 3rem 6rem', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="md:grid-cols-[1.5fr_1fr]">
                      <div>
                        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', lineHeight: 1.9, color: 'rgba(245,240,232,0.55)', marginBottom: '2rem' }}>
                          {service.description}
                        </p>
                        <div>
                          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '1rem' }}>
                            Deliverables
                          </p>
                          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {service.deliverables.map((item, j) => (
                              <li key={j} style={{
                                fontFamily: 'var(--font-sans)',
                                fontSize: '0.88rem',
                                color: 'rgba(245,240,232,0.5)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '0.75rem',
                              }}>
                                <span style={{ color: 'var(--color-rust)', flexShrink: 0, marginTop: '2px' }}>→</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Pricing note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: '7rem',
            padding: '4rem',
            border: '1px solid rgba(245,240,232,0.08)',
            background: 'rgba(245,240,232,0.02)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: 300, color: 'var(--color-bone)', marginBottom: '1rem', lineHeight: 1.4 }}>
            Every project is unique.
          </p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'rgba(245,240,232,0.45)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Fees are structured based on scope, scale, and timeline.<br />Let's have a conversation about what your project needs.
          </p>
          <MagneticButton>
            <Link href="/contact" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-bone)',
              border: '1px solid rgba(245,240,232,0.25)',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-rust)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-rust)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,240,232,0.25)'; }}
            >
              Request A Quote <ArrowUpRight size={12} />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
