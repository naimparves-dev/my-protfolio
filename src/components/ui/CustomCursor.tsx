'use client';

import React, { useState, useEffect } from 'react';

export function CustomCursor() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      style={{
        transform: `translate3d(${cursorPos.x - 16}px, ${cursorPos.y - 16}px, 0)`,
      }}
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-8 w-8 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-400/5 shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-transform duration-75 ease-out lg:flex"
    >
      <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
    </div>
  );
}
