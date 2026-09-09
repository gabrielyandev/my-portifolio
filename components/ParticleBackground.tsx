"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // 3D Particle Ring / Torus parameters (FIAP Pós Tech signature effect)
    const particleCount = 280;
    const majorRadius = Math.min(width, height) * 0.32;
    const minorRadius = Math.min(width, height) * 0.12;
    const focalLength = 400;

    interface Particle3D {
      u: number;
      v: number;
      speedU: number;
      speedV: number;
      size: number;
      colorType: "magenta" | "cyan" | "purple";
    }

    const particles: Particle3D[] = [];

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.random() * Math.PI * 2;
      const colorRoll = Math.random();
      const colorType = colorRoll > 0.4 ? "magenta" : colorRoll > 0.15 ? "cyan" : "purple";

      particles.push({
        u,
        v,
        speedU: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        speedV: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        size: Math.random() * 2 + 1.2,
        colorType
      });
    }

    let targetRotX = 0.45;
    let targetRotY = 0.3;
    let rotX = 0.45;
    let rotY = 0.3;

    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / width - 0.5) * 2;
      const normY = (e.clientY / height - 0.5) * 2;
      targetRotX = 0.45 + normY * 0.35;
      targetRotY = 0.3 + normX * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth rotation interpolation
      rotX += (targetRotX - rotX) * 0.04;
      rotY += (targetRotY - rotY) * 0.04;

      // Base auto-spin
      const time = performance.now() * 0.0006;
      const currentRotY = rotY + time * 0.5;
      const currentRotX = rotX + Math.sin(time * 0.5) * 0.15;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      const centerX = width > 992 ? width * 0.68 : width * 0.5;
      const centerY = height * 0.48;

      interface ProjectedPoint {
        x2d: number;
        y2d: number;
        z: number;
        size: number;
        color: string;
        alpha: number;
      }

      const projected: ProjectedPoint[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.u += p.speedU;
        p.v += p.speedV;

        // Torus 3D coordinate formula
        const x0 = (majorRadius + minorRadius * Math.cos(p.v)) * Math.cos(p.u);
        const y0 = (majorRadius + minorRadius * Math.cos(p.v)) * Math.sin(p.u);
        const z0 = minorRadius * Math.sin(p.v);

        // Rotate Y
        const x1 = x0 * cosY + z0 * sinY;
        const z1 = -x0 * sinY + z0 * cosY;

        // Rotate X
        const y2 = y0 * cosX - z1 * sinX;
        const z2 = y0 * sinX + z1 * cosX;

        // 3D to 2D projection
        const scale = focalLength / (focalLength + z2 + majorRadius * 1.4);
        const x2d = centerX + x1 * scale;
        const y2d = centerY + y2 * scale;

        // Color based on depth and type
        const depthAlpha = Math.max(0.15, Math.min(0.95, (z2 + majorRadius) / (majorRadius * 2)));
        let color = `rgba(237, 20, 91, ${depthAlpha})`;
        if (p.colorType === "cyan") {
          color = `rgba(0, 210, 255, ${depthAlpha})`;
        } else if (p.colorType === "purple") {
          color = `rgba(168, 85, 247, ${depthAlpha})`;
        }

        projected.push({
          x2d,
          y2d,
          z: z2,
          size: p.size * scale,
          color,
          alpha: depthAlpha
        });
      }

      // Sort by Z for proper depth
      projected.sort((a, b) => a.z - b.z);

      // Draw connective threads for nearby particles
      for (let i = 0; i < projected.length; i += 2) {
        const p1 = projected[i];
        for (let j = i + 1; j < Math.min(i + 8, projected.length); j++) {
          const p2 = projected[j];
          const dx = p1.x2d - p2.x2d;
          const dy = p1.y2d - p2.y2d;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 45) {
            const threadAlpha = (1 - dist / 45) * 0.18 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(237, 20, 91, ${threadAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p1.x2d, p1.y2d);
            ctx.lineTo(p2.x2d, p2.y2d);
            ctx.stroke();
          }
        }
      }

      // Draw particle dots with neon glow
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, Math.max(0.8, p.size), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.alpha > 0.5 ? 8 : 0;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.95
      }}
    />
  );
}
