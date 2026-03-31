'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';

const services = [
  {
    number: '01',
    name: 'Architectural Design',
    description:
      'From concept to construction documentation - complete design services for residences, civic, and cultural buildings.',
    href: '/services#architectural-design',
  },
  {
    number: '02',
    name: 'Interior Architecture',
    description:
      'Spatial experiences that provoke and comfort. Material, light, and proportion working in concert.',
    href: '/services#interior-architecture',
  },
  {
    number: '03',
    name: 'Urban & Master Planning',
    description:
      'Thinking at the scale of the city - from site analysis to masterplan visualizations.',
    href: '/services#urban-master-planning',
  },
];

export default function ServicesTeaser() {
  return (
    <section
      style={{
        background: 'linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(238,246,255,0.86) 100%)',
        padding: '8rem 2.5rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <SectionLabel light>Services</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.02em',
              color: 'var(--color-void)',
              lineHeight: 1,
            }}
          >
            What I
            <br />
            Offer
          </motion.h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5px',
            border: '1px solid rgba(77,124,255,0.12)',
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.33, 1, 0.68, 1] }}
              style={{
                position: 'relative',
                padding: '3rem 2.5rem',
                border: '1px solid rgba(77,124,255,0.12)',
                background: 'rgba(255,255,255,0.58)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 18px 44px rgba(112,146,201,0.12)',
                transition: 'background 0.4s ease',
                cursor: 'none',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(240,246,255,0.82)';
                const border = (e.currentTarget as HTMLElement).querySelector('.service-border') as HTMLElement;
                if (border) border.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.58)';
                const border = (e.currentTarget as HTMLElement).querySelector('.service-border') as HTMLElement;
                if (border) border.style.opacity = '0';
              }}
            >
              <div
                className="service-border"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--color-rust)',
                  opacity: 0,
                  transition: 'opacity 0.4s ease',
                }}
              />

              <p
                style={{
                  fontFamily: 'var(--font-playfair)',
                  fontSize: '3.5rem',
                  fontWeight: 800,
                  color: 'rgba(77,124,255,0.16)',
                  lineHeight: 1,
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.03em',
                }}
              >
                {service.number}
              </p>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: 'var(--color-void)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.01em',
                }}
              >
                {service.name}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  lineHeight: 1.8,
                  color: 'rgba(22,32,51,0.72)',
                  marginBottom: '2rem',
                }}
              >
                {service.description}
              </p>

              <Link
                href={service.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(22,32,51,0.56)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rust)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(22,32,51,0.56)')}
              >
                Learn More <ArrowUpRight size={11} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
