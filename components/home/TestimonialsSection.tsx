'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Rupa has a rare gift - she listens to what you want and somehow delivers something better. The Weave House is everything we hoped for and more. We get compliments every week.',
    name: 'James & Priya Mackinnon',
    role: 'Homeowners',
    project: 'The Weave House, Glasgow',
  },
  {
    quote:
      "The Civic Skin Pavilion was one of the most talked-about installations at the Festival. Rupa's ability to work within a tight budget without sacrificing ambition is exceptional.",
    name: 'Catriona Drummond',
    role: 'Festivals Director',
    project: 'Edinburgh City Council',
  },
  {
    quote:
      'What sets Rupa apart is her understanding of Indian context combined with international standards. The Terrace Lattice building has become a landmark in Kokapet.',
    name: 'Rohan Mehta',
    role: 'Director',
    project: 'Meridian Developers, Hyderabad',
  },
  {
    quote:
      'The cultural center in Vijayawada is everything we envisioned for our community. Rupa brought a deep respect for our traditions while creating something completely new.',
    name: 'Dr. Venkateswara Rao',
    role: 'Chairman',
    project: 'AP State Cultural Authority',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section
      style={{
        background: 'rgba(251,247,241,0.8)',
        padding: '9rem 2.5rem',
        borderTop: '1px solid rgba(31,26,23,0.08)',
        borderBottom: '1px solid rgba(31,26,23,0.08)',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '5rem',
            color: 'var(--color-rust)',
            lineHeight: 0.5,
            marginBottom: '2rem',
            opacity: 0.6,
          }}
        >
          "
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <p className="testimonial-quote" style={{ marginBottom: '2.5rem' }}>
              {testimonial.quote}
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.3rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--color-void)',
                }}
              >
                {testimonial.name}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  color: 'var(--color-rust)',
                  textTransform: 'uppercase',
                }}
              >
                {testimonial.role} - {testimonial.project}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '3rem' }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                width: index === current ? '2rem' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: index === current ? 'var(--color-rust)' : 'rgba(31,26,23,0.18)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
