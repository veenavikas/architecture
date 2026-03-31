import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Services | Rupa Sri Architecture',
  description: 'Architectural design, interior architecture, urban planning, and design consultation services for residential and commercial projects across India.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
