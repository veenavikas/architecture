'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Phone, Globe, AtSign, ExternalLink, ArrowUpRight, CheckCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  location: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, 'Please write at least 20 characters about your project'),
  referral: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPageClient() {
  const [formState, setFormState] = useState<FormState>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setFormState('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setFormState('success');
        reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <div style={{ background: 'var(--color-void)', minHeight: '100vh', paddingTop: '6rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        minHeight: 'calc(100vh - 6rem)',
      }}
        className="md:grid-cols-2"
      >
        {/* Left panel — dark */}
        <div style={{
          background: '#080808',
          padding: '6rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRight: '1px solid rgba(245,240,232,0.06)',
        }}>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '1.5rem' }}
          >
            Let's Collaborate
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              letterSpacing: '-0.03em',
              color: 'var(--color-bone)',
              lineHeight: 1.05,
              marginBottom: '3rem',
            }}
          >
            Let's build<br />something<br />together.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '3rem' }}
          >
            {[
              { icon: <MapPin size={14} />, text: 'Glasgow, UK (Available for India projects remotely & on-site)' },
              { icon: <Mail size={14} />, text: 'hello@rupasri.design', href: 'mailto:hello@rupasri.design' },
              { icon: <Phone size={14} />, text: '+44 7XXX XXXXXX', href: 'tel:+44700000000' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <span style={{ color: 'var(--color-rust)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.08em', color: 'rgba(245,240,232,0.55)', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-bone)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.55)')}>
                    {item.text}
                  </a>
                ) : (
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'rgba(245,240,232,0.45)', lineHeight: 1.5 }}>{item.text}</p>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', marginBottom: '3rem' }}
          >
            {[
              { icon: <Globe size={16} />, href: 'https://linkedin.com' },
              { icon: <AtSign size={16} />, href: 'https://instagram.com' },
              { icon: <ExternalLink size={16} />, href: 'https://behance.net' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 40, height: 40, border: '1px solid rgba(245,240,232,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(245,240,232,0.4)', transition: 'all 0.3s ease', textDecoration: 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-rust)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-rust)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,240,232,0.15)'; (e.currentTarget as HTMLElement).style.color = 'rgba(245,240,232,0.4)'; }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              border: '1px solid rgba(200,75,49,0.2)',
              padding: '0.75rem 1.25rem',
              background: 'rgba(200,75,49,0.06)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              alignSelf: 'flex-start',
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4A9B7F', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,240,232,0.5)' }}>
              Currently accepting projects for 2025
            </span>
          </motion.div>
        </div>

        {/* Right panel — bone */}
        <div style={{
          background: 'var(--color-bone)',
          padding: '6rem 4rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          {formState === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              style={{ textAlign: 'center', padding: '3rem 0' }}
            >
              <CheckCircle size={48} color="var(--color-rust)" style={{ margin: '0 auto 1.5rem' }} />
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: '2rem', color: 'var(--color-void)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Message sent.
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'rgba(10,10,10,0.55)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Thank you for reaching out. I'll review your project details and be in touch within 48 hours.
              </p>
              <button onClick={() => setFormState('idle')} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--color-void)', border: '1px solid rgba(10,10,10,0.2)', padding: '0.75rem 1.5rem', background: 'transparent', cursor: 'pointer',
              }}>
                Send Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-rust)', marginBottom: '2.5rem' }}>
                Project Enquiry
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 2rem' }}>
                {/* Name */}
                <div style={{ gridColumn: '1 / -1', marginBottom: '1.8rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input {...register('name')} className="form-input" placeholder="Your full name" />
                  {errors.name && <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-rust)', marginTop: '0.3rem' }}>{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: '0.4rem' }}>
                    Email *
                  </label>
                  <input {...register('email')} type="email" className="form-input" placeholder="your@email.com" />
                  {errors.email && <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-rust)', marginTop: '0.3rem' }}>{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: '0.4rem' }}>
                    Phone
                  </label>
                  <input {...register('phone')} type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" />
                </div>

                {/* Project type */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: '0.4rem' }}>
                    Project Type *
                  </label>
                  <select {...register('projectType')} className="form-input form-select" style={{ background: 'transparent', color: 'var(--color-void)' }}>
                    <option value="">Select type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="public">Public / Cultural</option>
                    <option value="interior">Interior Architecture</option>
                    <option value="consultation">Design Consultation</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-rust)', marginTop: '0.3rem' }}>{errors.projectType.message}</p>}
                </div>

                {/* Location */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: '0.4rem' }}>
                    Project Location
                  </label>
                  <input {...register('location')} className="form-input" placeholder="City, India" />
                </div>

                {/* Budget */}
                <div style={{ marginBottom: '1.8rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: '0.4rem' }}>
                    Budget Range
                  </label>
                  <select {...register('budget')} className="form-input form-select" style={{ background: 'transparent', color: 'var(--color-void)' }}>
                    <option value="">Select range</option>
                    <option value="below-50l">Below ₹50 Lakhs</option>
                    <option value="50l-1cr">₹50L – ₹1 Crore</option>
                    <option value="1cr-5cr">₹1 – ₹5 Crore</option>
                    <option value="5cr-25cr">₹5 – ₹25 Crore</option>
                    <option value="above-25cr">Above ₹25 Crore</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                {/* Message */}
                <div style={{ gridColumn: '1 / -1', marginBottom: '1.8rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: '0.4rem' }}>
                    Project Description *
                  </label>
                  <textarea {...register('message')} className="form-input" placeholder="Tell me about your project — site, scale, vision, timeline..." rows={4} style={{ resize: 'vertical', borderBottom: '1px solid rgba(10,10,10,0.2)' }} />
                  {errors.message && <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-rust)', marginTop: '0.3rem' }}>{errors.message.message}</p>}
                </div>

                {/* Referral */}
                <div style={{ gridColumn: '1 / -1', marginBottom: '2.5rem' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.45)', display: 'block', marginBottom: '0.4rem' }}>
                    How did you find me? (optional)
                  </label>
                  <input {...register('referral')} className="form-input" placeholder="Google, LinkedIn, referral, etc." />
                </div>
              </div>

              {formState === 'error' && (
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-rust)', marginBottom: '1rem' }}>
                  Something went wrong. Please email directly at hello@rupasri.design
                </p>
              )}

              <button
                type="submit"
                disabled={formState === 'submitting'}
                style={{
                  width: '100%',
                  background: formState === 'submitting' ? 'rgba(10,10,10,0.6)' : 'var(--color-void)',
                  color: 'var(--color-bone)',
                  border: 'none',
                  padding: '1.2rem 2rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  cursor: formState === 'submitting' ? 'not-allowed' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { if (formState !== 'submitting') (e.currentTarget as HTMLElement).style.background = 'var(--color-rust)'; }}
                onMouseLeave={e => { if (formState !== 'submitting') (e.currentTarget as HTMLElement).style.background = 'var(--color-void)'; }}
              >
                {formState === 'submitting' ? (
                  <span>Sending...</span>
                ) : (
                  <>Send Message <ArrowUpRight size={14} /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
