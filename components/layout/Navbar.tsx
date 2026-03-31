'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';
import { useCursorVariant } from '@/hooks/useCursorVariant';

const navLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setVariant } = useCursorVariant();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '1.5rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition:
            'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease, padding 0.4s ease',
          background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.58)',
          backdropFilter: 'blur(22px)',
          borderBottom: scrolled ? '1px solid rgba(77,124,255,0.14)' : '1px solid rgba(77,124,255,0.08)',
          boxShadow: scrolled ? '0 18px 42px rgba(109, 146, 204, 0.12)' : '0 8px 28px rgba(109, 146, 204, 0.08)',
          paddingTop: scrolled ? '1rem' : '1.5rem',
          paddingBottom: scrolled ? '1rem' : '1.5rem',
        }}
      >
        <Link
          href="/"
          className="nav-link"
          style={{ fontSize: '1rem', letterSpacing: '0.1em', fontWeight: 700 }}
          onMouseEnter={() => setVariant('hover')}
          onMouseLeave={() => setVariant('default')}
        >
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <rect width="42" height="42" fill="none" />
            <path
              d="M4 4H20L28 16H20V28H4V4Z"
              stroke="var(--color-void)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M22 16H38V38H22V22L30 16"
              stroke="var(--color-rust)"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="29" cy="10" r="3" fill="var(--color-rust)" />
          </svg>
        </Link>

        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              onMouseEnter={() => setVariant('hover')}
              onMouseLeave={() => setVariant('default')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <MagneticButton className="hidden md:flex">
            <Link
              href="/contact"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-void)',
                border: '1px solid rgba(31,26,23,0.16)',
                background: 'rgba(251,247,241,0.72)',
                padding: '0.6rem 1.4rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'var(--color-rust)';
                el.style.borderColor = 'var(--color-rust)';
                el.style.color = 'var(--color-paper)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = 'rgba(251,247,241,0.72)';
                el.style.borderColor = 'rgba(31,26,23,0.16)';
                el.style.color = 'var(--color-void)';
              }}
            >
              Hire Me
            </Link>
          </MagneticButton>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-void)',
              cursor: 'pointer',
              padding: '0.25rem',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--color-paper)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
            }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 + index * 0.07,
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                    fontWeight: 300,
                    color: pathname === link.href ? 'var(--color-rust)' : 'var(--color-void)',
                    textDecoration: 'none',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <Link
                href="/contact"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--color-void)',
                  border: '1px solid rgba(31,26,23,0.16)',
                  padding: '0.8rem 2rem',
                  textDecoration: 'none',
                }}
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
