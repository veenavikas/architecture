'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { ReactNode } from 'react';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useSmoothScroll();
  return <>{children}</>;
}
