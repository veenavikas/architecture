'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/data/projects';
import { useCursorVariant } from '@/hooks/useCursorVariant';
import SiteImage from '@/components/ui/SiteImage';

interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
  priority?: boolean;
}

const categoryColors: Record<string, string> = {
  residential: 'var(--color-rust)',
  commercial: 'var(--color-gold)',
  public: '#4A9B7F',
  interior: '#7B4FB5',
  masterplan: '#4A7BB5',
};

export default function ProjectCard({
  project,
  className = '',
  index = 0,
  priority = false,
}: ProjectCardProps) {
  const { setVariant, setLabel } = useCursorVariant();

  return (
    <motion.div
      className={`project-card ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: index * 0.1 }}
      onMouseEnter={() => { setVariant('image'); setLabel('VIEW'); }}
      onMouseLeave={() => { setVariant('default'); setLabel(''); }}
    >
      <Link href={`/projects/${project.slug}`} className="block w-full h-full">
        {/* Image */}
        <div className="relative w-full h-full overflow-hidden">
          <SiteImage
            src={project.coverImage}
            alt={project.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out"
            style={{ transform: 'scale(1.05)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.12)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)';
            }}
          />

          {/* Category tag */}
          <div
            className="absolute top-4 left-4 z-10"
            style={{
              background: categoryColors[project.category] || 'var(--color-rust)',
              padding: '4px 10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--color-bone)',
            }}
          >
            {project.category}
          </div>

          {/* Overlay */}
          <div className="project-card-overlay" />

          {/* Details */}
          <div className="project-card-details">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  color: 'var(--color-rust)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  {project.location.city}, {project.location.country} · {project.year}
                </p>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 300,
                  color: 'var(--color-bone)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}>
                  {project.title}
                </h3>
              </div>
              <div style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: '1px solid rgba(245,240,232,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginLeft: '1rem',
              }}>
                <ArrowUpRight size={16} color="var(--color-bone)" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
