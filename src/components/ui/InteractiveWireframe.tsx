'use client';

import React, { useRef, useState, useEffect } from 'react';

export function InteractiveWireframe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [wireframeMode, setWireframeMode] = useState<'wireframe' | 'hybrid'>('wireframe');
  const rotRef = useRef({
    x: 0.4,
    y: 0.6,
    vx: 0.005,
    vy: 0.012,
    dragging: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    const numSteps = 110;
    const tubeSegments = 10;
    const R = 68;
    const r = 26;
    const tubeR = 14;

    const ringCenters: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < numSteps; i++) {
      const t = (i / numSteps) * Math.PI * 2;
      const p = 2;
      const q = 3;
      const rad = R + r * Math.cos(q * t);
      const x = rad * Math.cos(p * t);
      const y = rad * Math.sin(p * t);
      const z = r * Math.sin(q * t) * 1.4;
      ringCenters.push({ x, y, z });
    }

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const st = rotRef.current;
      if (!st.dragging) {
        st.x += st.vx;
        st.y += st.vy;
        st.vx *= 0.985;
        st.vy *= 0.985;
        if (Math.abs(st.vy) < 0.008) st.vy = st.vy >= 0 ? 0.008 : -0.008;
        if (Math.abs(st.vx) < 0.003) st.vx = 0.003;
      }

      const cosX = Math.cos(st.x);
      const sinX = Math.sin(st.x);
      const cosY = Math.cos(st.y);
      const sinY = Math.sin(st.y);

      const project = (pt: { x: number; y: number; z: number }) => {
        const x1 = pt.x * cosY - pt.z * sinY;
        const z1 = pt.z * cosY + pt.x * sinY;
        const y2 = pt.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + pt.y * sinX;
        const fov = 320;
        const scale = fov / (fov + z2 + 160);
        return { sx: width / 2 + x1 * scale, sy: height / 2 + y2 * scale, z: z2 };
      };

      const rings: { sx: number; sy: number; z: number }[][] = [];
      for (let i = 0; i < numSteps; i++) {
        const curr = ringCenters[i];
        const next = ringCenters[(i + 1) % numSteps];
        const tx = next.x - curr.x;
        const ty = next.y - curr.y;
        const tz = next.z - curr.z;
        const tLen = Math.hypot(tx, ty, tz) || 1;
        const ux = tx / tLen;
        const uy = ty / tLen;
        const uz = tz / tLen;

        let nx = -uy;
        let ny = ux;
        const nLen = Math.hypot(nx, ny, 0) || 1;
        nx /= nLen;
        ny /= nLen;

        const bx = -uz * ny;
        const by = uz * nx;
        const bz = ux * ny - uy * nx;

        const ringPts: { sx: number; sy: number; z: number }[] = [];
        for (let j = 0; j < tubeSegments; j++) {
          const a = (j / tubeSegments) * Math.PI * 2;
          const ca = Math.cos(a);
          const sa = Math.sin(a);
          ringPts.push(
            project({
              x: curr.x + tubeR * (ca * nx + sa * bx),
              y: curr.y + tubeR * (ca * ny + sa * by),
              z: curr.z + tubeR * (sa * bz),
            })
          );
        }
        rings.push(ringPts);
      }

      ctx.lineWidth = wireframeMode === 'hybrid' ? 1.5 : 1.05;
      for (let i = 0; i < numSteps; i++) {
        const nextI = (i + 1) % numSteps;
        const isEmerald = i / numSteps < 0.5;
        ctx.strokeStyle = isEmerald
          ? 'rgba(52, 211, 153, 0.55)'
          : 'rgba(56, 189, 248, 0.55)';

        if (wireframeMode === 'hybrid' && i % 2 === 0) {
          ctx.fillStyle = isEmerald
            ? 'rgba(16, 185, 129, 0.12)'
            : 'rgba(37, 99, 235, 0.12)';
          ctx.beginPath();
          ctx.moveTo(rings[i][0].sx, rings[i][0].sy);
          ctx.lineTo(rings[nextI][0].sx, rings[nextI][0].sy);
          ctx.lineTo(rings[nextI][4].sx, rings[nextI][4].sy);
          ctx.closePath();
          ctx.fill();
        }

        ctx.beginPath();
        for (let j = 0; j < tubeSegments; j++) {
          const p = rings[i][j];
          if (j === 0) ctx.moveTo(p.sx, p.sy);
          else ctx.lineTo(p.sx, p.sy);
        }
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        for (let j = 0; j < tubeSegments; j += 2) {
          ctx.moveTo(rings[i][j].sx, rings[i][j].sy);
          ctx.lineTo(rings[nextI][j].sx, rings[nextI][j].sy);
        }
        ctx.stroke();
      }

      animId = window.requestAnimationFrame(render);
    };

    animId = window.requestAnimationFrame(render);
    return () => window.cancelAnimationFrame(animId);
  }, [wireframeMode]);

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-emerald-500/25 bg-[#070b12] p-4 shadow-[0_0_50px_-15px_rgba(34,197,94,0.25)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.12),rgba(59,130,246,0.08),transparent_70%)]" />
      <div className="mb-2 flex w-full items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1.5 font-mono text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          REAL-TIME 3D GEOMETRY
        </span>
        <button
          type="button"
          onClick={() => setWireframeMode(wireframeMode === 'wireframe' ? 'hybrid' : 'wireframe')}
          className="rounded-lg border border-slate-700 bg-slate-900/90 px-2.5 py-1 font-mono text-[11px] text-slate-300 hover:border-emerald-400/60 hover:text-emerald-300"
        >
          Mode: {wireframeMode === 'wireframe' ? 'Wireframe' : 'Shader + Mesh'}
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={420}
        height={250}
        onPointerDown={(e) => {
          rotRef.current.dragging = true;
          rotRef.current.lastX = e.clientX;
          rotRef.current.lastY = e.clientY;
        }}
        onPointerMove={(e) => {
          if (!rotRef.current.dragging) return;
          const dx = e.clientX - rotRef.current.lastX;
          const dy = e.clientY - rotRef.current.lastY;
          rotRef.current.y += dx * 0.012;
          rotRef.current.x += dy * 0.012;
          rotRef.current.vy = dx * 0.004;
          rotRef.current.vx = dy * 0.004;
          rotRef.current.lastX = e.clientX;
          rotRef.current.lastY = e.clientY;
        }}
        onPointerUp={() => {
          rotRef.current.dragging = false;
        }}
        onPointerLeave={() => {
          rotRef.current.dragging = false;
        }}
        className="max-w-full cursor-grab active:cursor-grabbing touch-none"
      />

      <div className="mt-2 flex w-full items-center justify-between border-t border-slate-800/80 pt-2 text-[11px] font-mono text-slate-400">
        <span>↻ DRAG TO SPIN WITH MOMENTUM</span>
        <span className="text-blue-400">60 FPS CANVAS SHADER</span>
      </div>
    </div>
  );
}
