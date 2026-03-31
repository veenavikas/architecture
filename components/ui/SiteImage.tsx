'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';

const FALLBACK_SRC = '/images/placeholder-project.svg';

export default function SiteImage({ src, alt, onError, ...props }: ImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      onError={(event) => {
        if (currentSrc !== FALLBACK_SRC) {
          setCurrentSrc(FALLBACK_SRC);
        }
        onError?.(event);
      }}
    />
  );
}
