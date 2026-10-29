'use client';

import React, { useState, useEffect, useRef } from 'react';

const SCRAMBLE_CHARS = '<>*+=_!/-|#%&$@?~^';

interface ScrambleHeadingProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

export function ScrambleHeading({
  text,
  className = '',
  as: Tag = 'h2',
}: ScrambleHeadingProps) {
  const [displayed, setDisplayed] = useState(text);
  const ref = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  const triggerScramble = () => {
    let iteration = 0;
    const interval = window.setInterval(() => {
      setDisplayed(
        text
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration) return text[idx];
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          })
          .join('')
      );
      iteration += 0.45;
      if (iteration >= text.length) {
        window.clearInterval(interval);
        setDisplayed(text);
      }
    }, 28);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          triggerScramble();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [text]);

  return (
    <Tag
      ref={ref as any}
      onMouseEnter={triggerScramble}
      className={`cursor-default select-none font-mono tracking-tight ${className}`}
    >
      {displayed}
    </Tag>
  );
}
