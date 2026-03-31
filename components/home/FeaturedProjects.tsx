'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '@/components/ui/SectionLabel';
import SiteImage from '@/components/ui/SiteImage';
import { featuredProjects } from '@/data/projects';
import { useCursorVariant } from '@/hooks/useCursorVariant';

export default function FeaturedProjects() {
  const { setVariant, setLabel } = useCursorVariant();
  const [p1, p2, p3, p4] = featuredProjects;

  return (
    <section style={{ background: 'var(--color-paper)', padding: '8rem 2.5rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '4rem',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <SectionLabel>Selected Work</SectionLabel>
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
              Featured
              <br />
              Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/projects"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(31,26,23,0.48)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rust)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(31,26,23,0.48)')}
            >
              View All Work <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.5rem',
            marginBottom: '1.5rem',
          }}
          className="md:grid-cols-[3fr_2fr]"
        >
          {p1 && (
            <motion.div
              className="project-card"
              style={{ height: 'clamp(420px, 55vw, 620px)', borderRadius: '1.25rem' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              onMouseEnter={() => {
                setVariant('image');
                setLabel('VIEW');
              }}
              onMouseLeave={() => {
                setVariant('default');
                setLabel('');
              }}
            >
              <Link href={`/projects/${p1.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                <SiteImage
                  src={p1.coverImage}
                  alt={p1.title}
                  fill
                  className="object-cover"
                  style={{ transition: 'transform 0.8s ease', transform: 'scale(1.05)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    zIndex: 2,
                    background: 'var(--color-rust)',
                    padding: '3px 10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-paper)',
                  }}
                >
                  {p1.category}
                </div>
                <div className="project-card-overlay" />
                <div className="project-card-details">
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      color: 'var(--color-rust)',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {p1.location.city} · {p1.year}
                  </p>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                      fontWeight: 300,
                      color: 'var(--color-paper)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {p1.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[p2, p3].map(
              (project, index) =>
                project && (
                  <motion.div
                    key={project.id}
                    className="project-card"
                    style={{ flex: 1, minHeight: '200px', borderRadius: '1.25rem' }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + index * 0.12,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                    onMouseEnter={() => {
                      setVariant('image');
                      setLabel('VIEW');
                    }}
                    onMouseLeave={() => {
                      setVariant('default');
                      setLabel('');
                    }}
                  >
                    <Link href={`/projects/${project.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                      <SiteImage
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        style={{ transition: 'transform 0.7s ease', transform: 'scale(1.05)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      />
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          left: '0.75rem',
                          zIndex: 2,
                          background: 'var(--color-gold)',
                          padding: '3px 10px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.55rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--color-void)',
                        }}
                      >
                        {project.category}
                      </div>
                      <div className="project-card-overlay" />
                      <div className="project-card-details">
                        <p
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.55rem',
                            letterSpacing: '0.15em',
                            color: 'var(--color-rust)',
                            textTransform: 'uppercase',
                            marginBottom: '0.3rem',
                          }}
                        >
                          {project.location.city} · {project.year}
                        </p>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                            fontWeight: 300,
                            color: 'var(--color-paper)',
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>
                    </Link>
                  </motion.div>
                )
            )}
          </div>
        </div>

        {p4 && (
          <motion.div
            className="project-card"
            style={{ height: 'clamp(280px, 35vw, 480px)', borderRadius: '1.25rem' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
            onMouseEnter={() => {
              setVariant('image');
              setLabel('VIEW');
            }}
            onMouseLeave={() => {
              setVariant('default');
              setLabel('');
            }}
          >
            <Link href={`/projects/${p4.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
              <SiteImage
                src={p4.coverImage}
                alt={p4.title}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 40%', transition: 'transform 0.8s ease', transform: 'scale(1.04)' }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to right, rgba(31,26,23,0.66) 0%, transparent 60%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  padding: '3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: '#7a9d8a',
                    padding: '3px 10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--color-paper)',
                  }}
                >
                  {p4.category}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: 'var(--color-rust)',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  {p4.location.city}, {p4.location.country} · {p4.year}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                    fontWeight: 300,
                    color: 'var(--color-paper)',
                    letterSpacing: '-0.02em',
                    maxWidth: '600px',
                  }}
                >
                  {p4.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
