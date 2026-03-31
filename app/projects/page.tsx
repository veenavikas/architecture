'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import SiteImage from '@/components/ui/SiteImage';

const categories = ['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'PUBLIC', 'INTERIOR', 'MASTERPLAN'];

const categoryColors: Record<string, string> = {
  residential: 'var(--color-rust)',
  commercial: 'var(--color-gold)',
  public: '#4A9B7F',
  interior: '#7B4FB5',
  masterplan: '#4A7BB5',
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const { setVariant, setLabel } = useCursorVariant();

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category.toUpperCase() === activeFilter);

  return (
    <div style={{ background: 'var(--color-void)', minHeight: '100vh', paddingTop: '10rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Page title */}
        <div style={{ marginBottom: '4rem' }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '1rem' }}
          >
            Portfolio
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
              Selected<br />Work
            </motion.h1>
          </div>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '5rem' }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
          marginBottom: '8rem',
        }}>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
              className="project-card"
              style={{ height: i % 3 === 0 ? '480px' : '360px' }}
              onMouseEnter={() => { setVariant('image'); setLabel('VIEW'); }}
              onMouseLeave={() => { setVariant('default'); setLabel(''); }}
            >
              <Link href={`/projects/${project.slug}`} style={{ display: 'block', width: '100%', height: '100%' }}>
                <SiteImage
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{ transition: 'transform 0.7s ease', transform: 'scale(1.05)' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  zIndex: 2,
                  background: categoryColors[project.category] || 'var(--color-rust)',
                  padding: '3px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: project.category === 'commercial' ? 'var(--color-void)' : 'var(--color-bone)',
                }}>
                  {project.category}
                </div>
                {project.status === 'unbuilt' && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 2,
                    border: '1px solid rgba(245,240,232,0.3)',
                    padding: '3px 10px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.5rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(245,240,232,0.5)',
                  }}>
                    Unbuilt
                  </div>
                )}
                <div className="project-card-overlay" />
                <div className="project-card-details">
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.15em', color: 'var(--color-rust)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    {project.location.city}, {project.location.country} · {project.year}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 300, color: 'var(--color-bone)', letterSpacing: '-0.01em', maxWidth: '80%' }}>
                      {project.title}
                    </h2>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(245,240,232,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ArrowUpRight size={14} color="var(--color-bone)" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
