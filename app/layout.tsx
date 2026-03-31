import type { Metadata } from 'next';
import { Cormorant_Garamond, Space_Mono, DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageTransition from '@/components/layout/PageTransition';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import { CursorProvider } from '@/hooks/useCursorVariant';
import SmoothScrollProvider from '@/components/layout/SmoothScrollProvider';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-space-mono',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Rupa Sri | Architectural Designer — Glasgow & India',
    template: '%s | Rupa Sri Architecture',
  },
  description: 'Portfolio of Rupa Sri, M.Tech Architect with 5+ years of experience across residential, civic, and cultural typologies in the UK and India. Available for projects across India.',
  keywords: [
    'architect india',
    'architectural designer',
    'portfolio',
    'residential architecture india',
    'M.Tech architect',
    'glasgow architect india',
    'rupa sri architecture',
    'architecture hyderabad',
    'architecture vijayawada',
    'architecture glasgow',
  ],
  authors: [{ name: 'Rupa Sri' }],
  creator: 'Rupa Sri',
  openGraph: {
    title: 'Rupa Sri — Architectural Designer',
    description: 'Award-winning design across UK and India. 5+ years of built and unbuilt work.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Rupa Sri Architecture Portfolio' }],
    type: 'website',
    locale: 'en_GB',
    siteName: 'Rupa Sri Architecture',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rupa Sri — Architectural Designer',
    description: 'Award-winning design across UK and India.',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://rupasri.design'),
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${spaceMono.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body>
        <CursorProvider>
          <SmoothScrollProvider>
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
          </SmoothScrollProvider>
        </CursorProvider>
      </body>
    </html>
  );
}
