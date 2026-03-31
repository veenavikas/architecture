'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Layers, Maximize } from 'lucide-react';
import { Project } from '@/data/projects';
import SiteImage from '@/components/ui/SiteImage';

interface Props {
  project: Project;
  nextProject: Project;
}

export default function ProjectDetailClient({ project, nextProject }: Props) {
  return (
    <div style={{ background: 'var(--color-void)', minHeight: '100vh' }}>

      {/* Hero banner */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1] }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <SiteImage
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.3) 50%, rgba(10,10,10,0.1) 100%)' }} />

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ position: 'absolute', top: '7rem', left: '2.5rem', zIndex: 10 }}
        >
          <Link href="/projects" style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.6)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'color 0.3s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-bone)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.6)')}
          >
            <ArrowLeft size={12} /> All Projects
          </Link>
        </motion.div>

        {/* Film-style badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ position: 'absolute', top: '7rem', right: '2.5rem', zIndex: 10 }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(245,240,232,0.4)',
            border: '1px solid rgba(245,240,232,0.15)',
            padding: '6px 14px',
          }}>
            {project.status === 'built' ? '● Built' : project.status === 'unbuilt' ? '○ Unbuilt' : '◐ In Progress'}
          </span>
        </motion.div>

        {/* Title overlay */}
        <div style={{ position: 'absolute', bottom: '4rem', left: '2.5rem', right: '2.5rem', zIndex: 10 }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '0.75rem' }}
          >
            {project.category} · {project.year}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 7vw, 7rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-bone)',
              lineHeight: 0.95,
              maxWidth: '800px',
            }}
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      {/* Info strip */}
      <div style={{
        borderBottom: '1px solid rgba(245,240,232,0.08)',
        padding: '2rem 2.5rem',
        background: '#0D0D0D',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          gap: '3rem',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          {[
            { icon: <MapPin size={12} />, label: 'Location', value: `${project.location.city}, ${project.location.country}` },
            { icon: <Calendar size={12} />, label: 'Year', value: project.year.toString() },
            { icon: <Layers size={12} />, label: 'Type', value: project.category.charAt(0).toUpperCase() + project.category.slice(1) },
            ...(project.area ? [{ icon: <Maximize size={12} />, label: 'Area', value: project.area }] : []),
            ...(project.client ? [{ icon: null, label: 'Client', value: project.client }] : []),
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-rust)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                {item.icon} {item.label}
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--color-bone)' }}>
                {item.value}
              </p>
            </div>
          ))}

          {project.awards && project.awards.length > 0 && (
            <div style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-gold)' }}>
                ★ Awards
              </p>
              {project.awards.map((award, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'rgba(212,168,67,0.7)' }}>
                  {award}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Narrative */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '7rem 2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }} className="md:grid-cols-[1fr_1.5fr]">

          {/* Left: sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {[
              { label: 'The Brief', content: project.brief },
              { label: 'The Idea', content: project.concept },
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '1.2rem' }}>
                  — {section.label}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(245,240,232,0.6)' }}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: making + result */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {[
              { label: 'The Making', content: project.narrative },
              ...(project.result ? [{ label: 'The Result', content: project.result }] : []),
            ].map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '1.2rem' }}>
                  — {section.label}
                </p>
                {section.label === 'The Making' ? (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', lineHeight: 1.9, color: 'rgba(245,240,232,0.6)' }}>
                    {section.content}
                  </p>
                ) : (
                  <blockquote style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                    fontWeight: 300,
                    color: 'var(--color-bone)',
                    lineHeight: 1.5,
                    borderLeft: '2px solid var(--color-rust)',
                    paddingLeft: '1.5rem',
                  }}>
                    {section.content}
                  </blockquote>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div style={{ marginTop: '4rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)',
              border: '1px solid rgba(245,240,232,0.12)',
              padding: '5px 14px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image gallery */}
      {project.images.length > 0 && (
        <div style={{ padding: '0 2.5rem 8rem' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '2.5rem' }}>
              — Project Images
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {project.images.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  style={{ position: 'relative', height: i === 0 ? '520px' : '360px', overflow: 'hidden' }}
                >
                  <SiteImage src={img} alt={`${project.title} — Image ${i + 1}`} fill className="object-cover"
                    style={{ transition: 'transform 0.8s ease', transform: 'scale(1.04)' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Next project */}
      <div style={{ borderTop: '1px solid rgba(245,240,232,0.07)', padding: '5rem 2.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.3)', marginBottom: '0.75rem' }}>
              Next Project
            </p>
            <Link href={`/projects/${nextProject.slug}`} style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              fontWeight: 300,
              color: 'var(--color-bone)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              transition: 'color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-rust)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-bone)')}
            >
              {nextProject.title} <ArrowUpRight size={28} />
            </Link>
          </div>
          <div style={{ position: 'relative', width: '180px', height: '120px', overflow: 'hidden', opacity: 0.7 }}>
            <SiteImage src={nextProject.coverImage} alt={nextProject.title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
