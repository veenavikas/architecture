'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export type CursorVariant = 'default' | 'hover' | 'text' | 'image' | 'hidden';

interface CursorContextType {
  variant: CursorVariant;
  setVariant: (variant: CursorVariant) => void;
  label: string;
  setLabel: (label: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  variant: 'default',
  setVariant: () => {},
  label: '',
  setLabel: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [label, setLabel] = useState('');

  return (
    <CursorContext.Provider value={{ variant, setVariant, label, setLabel }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursorVariant() {
  return useContext(CursorContext);
}
