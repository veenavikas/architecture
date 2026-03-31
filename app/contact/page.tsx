import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact | Rupa Sri Architecture',
  description: 'Start a conversation about your architectural project. Available for residential, commercial, and cultural projects across India.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
