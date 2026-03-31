'use client';

import Link from 'next/link';
import { Globe, AtSign, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'Architectural Design', href: '/services#architectural-design' },
    { label: 'Interior Architecture', href: '/services#interior-architecture' },
    { label: 'Urban Planning', href: '/services#urban-master-planning' },
    { label: 'Design Consultation', href: '/services#design-consultation' },
  ];

  return (
    <footer
      style={{
        background: 'rgba(244,238,230,0.92)',
        borderTop: '1px solid rgba(31,26,23,0.08)',
        padding: '5rem 2.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  color: 'var(--color-void)',
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                Rupa Sri
              </div>
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(31,26,23,0.4)',
                lineHeight: 1.8,
              }}
            >
              Architectural Designer
              <br />
              Glasgow, UK to India
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(31,26,23,0.42)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rust)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(31,26,23,0.42)')}
              >
                <Globe size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(31,26,23,0.42)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rust)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(31,26,23,0.42)')}
              >
                <AtSign size={16} />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(31,26,23,0.42)', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rust)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(31,26,23,0.42)')}
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-rust)',
                marginBottom: '1.5rem',
              }}
            >
              Navigation
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link"
                    style={{ fontSize: '0.8rem', color: 'rgba(31,26,23,0.56)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-rust)',
                marginBottom: '1.5rem',
              }}
            >
              Services
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link"
                    style={{ fontSize: '0.8rem', color: 'rgba(31,26,23,0.56)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-rust)',
                marginBottom: '1.5rem',
              }}
            >
              Get In Touch
            </p>
            <a
              href="mailto:hello@rupasri.design"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'rgba(31,26,23,0.56)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '0.75rem',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-rust)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(31,26,23,0.56)')}
            >
              hello@rupasri.design
            </a>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'rgba(31,26,23,0.34)',
                lineHeight: 1.7,
              }}
            >
              Currently accepting
              <br />
              projects for 2025-26
            </p>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(31,26,23,0.08)', marginBottom: '2rem' }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              color: 'rgba(31,26,23,0.32)',
            }}
          >
            © {currentYear} Rupa Sri. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.12em',
              color: 'rgba(31,26,23,0.32)',
            }}
          >
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
