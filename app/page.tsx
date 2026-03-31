import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import StatsBar from '@/components/home/StatsBar';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import AboutTeaser from '@/components/home/AboutTeaser';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ContactCTABanner from '@/components/home/ContactCTABanner';

export const metadata: Metadata = {
  title: 'Rupa Sri | Architectural Designer — Glasgow & India',
  description: 'Portfolio of Rupa Sri, M.Tech Architect with 5+ years of experience across residential, civic, and cultural typologies in the UK and India.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <StatsBar />
      <FeaturedProjects />
      <AboutTeaser />
      <ServicesTeaser />
      <TestimonialsSection />
      <ContactCTABanner />
    </>
  );
}
