import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Rupa Sri | Architectural Designer',
  description: 'M.Tech Architecture graduate with 5+ years of experience across residential, civic, and cultural design typologies in the UK and India.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
