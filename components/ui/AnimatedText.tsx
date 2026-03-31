'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  children: string | ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div';
  type?: 'words' | 'lines' | 'fade';
  once?: boolean;
}

export default function AnimatedText({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  type = 'words',
  once = true,
}: AnimatedTextProps) {
  if (type === 'fade') {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {children}
      </motion.div>
    );
  }

  if (typeof children !== 'string') {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay }}
      >
        {children}
      </motion.div>
    );
  }

  const words = children.split(' ');

  return (
    <Tag className={className} style={{ overflow: 'hidden' }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.25em' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once }}
            transition={{
              duration: 0.7,
              ease: [0.33, 1, 0.68, 1],
              delay: delay + i * 0.08,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
