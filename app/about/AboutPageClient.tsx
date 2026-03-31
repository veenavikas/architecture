'use client';

import { motion } from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import SiteImage from '@/components/ui/SiteImage';
import { timeline } from '@/data/timeline';

const skills = [
  { name: 'AutoCAD', level: 95 },
  { name: 'Revit (BIM)', level: 90 },
  { name: 'SketchUp', level: 92 },
  { name: 'Rhino / Grasshopper', level: 80 },
  { name: 'Lumion / V-Ray', level: 85 },
  { name: 'Adobe Creative Suite', level: 88 },
  { name: 'Sustainable Design', level: 82 },
  { name: 'Construction Documentation', level: 90 },
];

const skillTags = [
  'Conceptual Design', 'Parametric Modeling', 'Sustainable Design',
  'BIM', 'Rendering', 'Site Analysis', 'Master Planning',
  'Interior Design', 'Urban Design', 'Residential Architecture',
  'Cultural Architecture', 'Adaptive Reuse', 'Conservation',
  'Material Specification', 'Lighting Design', 'Landscape Coordination',
];

const typeColors: Record<string, string> = {
  education: '#4A9B7F',
  work: 'var(--color-rust)',
  award: 'var(--color-gold)',
  milestone: 'rgba(245,240,232,0.5)',
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ marginBottom: '1.5rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'rgba(245,240,232,0.7)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-rust)' }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.33, 1, 0.68, 1] }}
          style={{ transformOrigin: 'left', height: '100%', background: 'linear-gradient(to right, var(--color-rust), var(--color-gold))' }}
        />
      </div>
    </motion.div>
  );
}

export default function AboutPageClient() {
  return (
    <div style={{ background: 'var(--color-void)', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        <SiteImage
          src="/images/rupa/portrait-wide.jpg"
          alt="Rupa Sri — Architectural Designer"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.4) 60%)' }} />

        <div style={{ position: 'absolute', bottom: '5rem', left: '2.5rem', zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
          >
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-bone)',
              lineHeight: 1,
            }}>
              Hello,<br />
              I'm <span style={{ color: 'var(--color-rust)', WebkitTextStroke: 0 }}>Rupa.</span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Bio section */}
      <section style={{ padding: '8rem 2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }} className="md:grid-cols-[1.5fr_1fr]">

          {/* Bio text */}
          <div>
            <SectionLabel>Biography</SectionLabel>
            {[
              "Rupa Sri is an architectural designer with an M.Tech Architecture degree (2020) and over five years of experience across residential, civic, and cultural typologies. She currently works as a Senior Designer at NORD Architecture in Glasgow, UK.",
              "Her work is defined by a close attention to the relationship between built form and the people who inhabit it. She draws on the rich spatial traditions of South Asia — from the courtyard typologies of Andhra Pradesh to the jali screens of Deccan architecture — and brings them into conversation with the precision and rigour of European design practice.",
              "Rupa's projects have ranged from a 800 sqft festival pavilion assembled in 48 hours to a 85-acre riverside masterplan. What connects them is a consistent commitment to material honesty, environmental responsiveness, and the conviction that good design is for everyone.",
              "She is currently exploring opportunities to bring her internationally-informed practice back to India, and is particularly interested in residential, institutional, and cultural commissions in the Telugu-speaking states and Karnataka.",
            ].map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  lineHeight: 1.9,
                  color: 'rgba(245,240,232,0.6)',
                  marginBottom: '1.5rem',
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Key facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            style={{
              border: '1px solid rgba(245,240,232,0.08)',
              padding: '2.5rem',
              alignSelf: 'start',
              background: 'rgba(245,240,232,0.02)',
            }}
          >
            {[
              { label: 'Education', value: 'M.Tech Architecture, 2020' },
              { label: 'Based In', value: 'Glasgow, UK → India (Returning)' },
              { label: 'Languages', value: 'Telugu, English, Hindi' },
              { label: 'Experience', value: '5+ Years' },
              { label: 'Typologies', value: 'Residential, Civic, Cultural, Interior' },
              { label: 'Tools', value: 'AutoCAD, Revit, SketchUp, Rhino, Lumion, Adobe Suite' },
              { label: 'Currently', value: 'Accepting projects for 2025–26' },
            ].map((fact, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: '1rem',
                paddingBottom: '1.2rem',
                marginBottom: '1.2rem',
                borderBottom: i < 6 ? '1px solid rgba(245,240,232,0.06)' : 'none',
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-rust)', paddingTop: '2px' }}>
                  {fact.label}
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'rgba(245,240,232,0.7)', lineHeight: 1.5 }}>
                  {fact.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: '#080808', padding: '8rem 2.5rem', borderTop: '1px solid rgba(245,240,232,0.05)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionLabel light>Career Timeline</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: 'var(--color-bone)', marginBottom: '5rem', lineHeight: 1 }}
          >
            The Path Here
          </motion.h2>

          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            <div className="timeline-line" />
            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{ position: 'relative', marginBottom: '3.5rem' }}
              >
                <div className="timeline-dot" style={{ background: typeColors[entry.type] }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: typeColors[entry.type] }}>
                    {entry.year}
                  </span>
                  <span style={{ width: '1.5rem', height: '1px', background: 'rgba(245,240,232,0.15)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.25)' }}>
                    {entry.type}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--color-bone)', marginBottom: '0.25rem' }}>
                  {entry.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', color: typeColors[entry.type], marginBottom: '0.6rem' }}>
                  {entry.organization}
                </p>
                {entry.description && (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.45)', maxWidth: '560px' }}>
                    {entry.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section style={{ padding: '8rem 2.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <SectionLabel>Skills & Tools</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.02em', color: 'var(--color-bone)', marginBottom: '4rem', lineHeight: 1 }}
          >
            Capabilities
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }} className="md:grid-cols-2">
            <div>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.06} />
              ))}
            </div>

            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {skillTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,232,0.5)',
                      border: '1px solid rgba(245,240,232,0.1)',
                      padding: '6px 14px',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--color-rust)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-rust)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.5)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,240,232,0.1)';
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy quote */}
      <section style={{
        background: 'var(--color-bone)',
        padding: '10rem 2.5rem',
        textAlign: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1] }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 300,
            color: 'var(--color-void)',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}>
            "I believe the best buildings are the ones<br />
            that change how you feel without you<br />
            ever knowing why."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: 'var(--color-rust)' }} />
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-slate)' }}>
              Rupa Sri
            </p>
            <span style={{ display: 'block', width: '2rem', height: '1px', background: 'var(--color-rust)' }} />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
