import type { Metadata } from 'next';
import ProcessPageClient from './ProcessPageClient';

export const metadata: Metadata = {
  title: 'Design Process | Rupa Sri Architecture',
  description: 'How Rupa Sri works — from discovery and concept through to construction documentation and handover.',
};

export default function ProcessPage() {
  return <ProcessPageClient />;
}
