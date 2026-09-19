"use client";

import { useEffect, useRef } from "react";

export default function ScrollObject3D() {
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

    // Track scroll with lerp for organic momentum
    let currentScroll = window.scrollY;
    let targetScroll = window.scrollY;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Track mouse for subtle parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / width - 0.5) * 2;
      targetMouseY = (e.clientY / height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Golden ratio for Icosahedron vertices
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseScale = Math.min(width, height) * 0.16;

    // 12 vertices of regular icosahedron
    const rawVertices: [number, number, number][] = [
      [-1, phi, 0],
      [1, phi, 0],
      [-1, -phi, 0],
      [1, -phi, 0],
      [0, -1, phi],
      [0, 1, phi],
      [0, -1, -phi],
      [0, 1, -phi],
      [phi, 0, -1],
      [phi, 0, 1],
      [-phi, 0, -1],
      [-phi, 0, 1]
    ];

    // Normalize vertices to unit sphere
    const icosaVertices = rawVertices.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len] as [number, number, number];
    });

    // 30 edges connecting vertices
    const edges: [number, number][] = [];
    for (let i = 0; i < icosaVertices.length; i++) {
      for (let j = i + 1; j < icosaVertices.length; j++) {
        const dx = icosaVertices[i][0] - icosaVertices[j][0];
        const dy = icosaVertices[i][1] - icosaVertices[j][1];
        const dz = icosaVertices[i][2] - icosaVertices[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        // In unit icosahedron, adjacent vertices have dist ~ 1.051
        if (dist > 0.95 && dist < 1.15) {
          edges.push([i, j]);
        }
      }
    }

    // Additional floating data particles around the object
    const particleCount = 45;
    const orbitParticles: {
      angle: number;
      speed: number;
      radius: number;
      inclination: number;
      size: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      orbitParticles.push({
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        radius: Math.random() * 1.4 + 1.25,
        inclination: (Math.random() - 0.5) * Math.PI,
        size: Math.random() * 2 + 1.2
      });
    }

    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll interpolation
      currentScroll += (targetScroll - currentScroll) * 0.08;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, currentScroll / docHeight)) : 0;

      // Theme detection
      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      // Palette adjustments
      const primaryRgb = isLight ? "124, 58, 237" : "168, 85, 247";
      const secondaryRgb = isLight ? "79, 70, 229" : "192, 132, 252";
      const glowRgb = isLight ? "124, 58, 237" : "147, 51, 234";

      // Dynamic path according to page scroll:
      // Hero (progress ~ 0): on the right side
      // Services (progress ~ 0.2): drifts towards center-left
      // Projects (progress ~ 0.45): drifts to center-right
      // About/Resumo (progress ~ 0.7): glides to upper-left
      // CTA (progress ~ 1): centers at bottom
      const isMobile = width < 768;
      let targetPosX: number;
      let targetPosY: number;
      let scaleMult: number;

      if (isMobile) {
        targetPosX = width * 0.5;
        targetPosY = height * (0.35 + Math.sin(progress * Math.PI * 2) * 0.15);
        scaleMult = 0.85 + Math.sin(progress * Math.PI * 3) * 0.15;
      } else {
        // Multi-stage trajectory across sections
        if (progress < 0.25) {
          const t = progress / 0.25;
          targetPosX = width * (0.75 - t * 0.45);
          targetPosY = height * (0.46 + t * 0.08);
          scaleMult = 1.0 + t * 0.15;
        } else if (progress < 0.55) {
          const t = (progress - 0.25) / 0.3;
          targetPosX = width * (0.3 + t * 0.48);
          targetPosY = height * (0.54 - t * 0.06);
          scaleMult = 1.15 - t * 0.1;
        } else if (progress < 0.8) {
          const t = (progress - 0.55) / 0.25;
          targetPosX = width * (0.78 - t * 0.52);
          targetPosY = height * (0.48 + t * 0.06);
          scaleMult = 1.05 + t * 0.15;
        } else {
          const t = (progress - 0.8) / 0.2;
          targetPosX = width * (0.26 + t * 0.24);
          targetPosY = height * (0.54 - t * 0.04);
          scaleMult = 1.2 - t * 0.1;
        }
      }

      // Dynamic rotation driven by scroll velocity and progress
      const scrollRotationY = currentScroll * 0.0035;
      const scrollRotationX = currentScroll * 0.0022;
      const scrollRotationZ = Math.sin(currentScroll * 0.001) * 0.4;

      const baseAutoTime = performance.now() * 0.0007;

      rotX = scrollRotationX + baseAutoTime * 0.4 + mouseY * 0.3;
      rotY = scrollRotationY + baseAutoTime * 0.7 + mouseX * 0.4;
      rotZ = scrollRotationZ + baseAutoTime * 0.2;

      const currentScale = baseScale * scaleMult;
      const focalLength = 550;

      // Rotation Matrix Trigonometry
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosZ = Math.cos(rotZ);
      const sinZ = Math.sin(rotZ);

      // Project vertices
      const projected = icosaVertices.map(([vx, vy, vz]) => {
        // Rotate Y
        let x1 = vx * cosY + vz * sinY;
        let y1 = vy;
        let z1 = -vx * sinY + vz * cosY;

        // Rotate X
        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        // Rotate Z
        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        const pZ = z3 * currentScale;
        const scale = focalLength / (focalLength + pZ + currentScale * 1.5);

        return {
          x2d: targetPosX + x3 * currentScale * scale,
          y2d: targetPosY + y3 * currentScale * scale,
          z: pZ,
          scale
        };
      });

      // Draw glowing outer aura
      const gradient = ctx.createRadialGradient(
        targetPosX,
        targetPosY,
        10,
        targetPosX,
        targetPosY,
        currentScale * 1.65
      );
      gradient.addColorStop(0, `rgba(${glowRgb}, ${isLight ? 0.09 : 0.14})`);
      gradient.addColorStop(0.6, `rgba(${primaryRgb}, ${isLight ? 0.03 : 0.06})`);
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(targetPosX, targetPosY, currentScale * 1.65, 0, Math.PI * 2);
      ctx.fill();

      // Render connected wireframe edges
      for (let i = 0; i < edges.length; i++) {
        const [idx1, idx2] = edges[i];
        const p1 = projected[idx1];
        const p2 = projected[idx2];

        // Depth cueing
        const avgZ = (p1.z + p2.z) / 2;
        const depthAlpha = Math.max(0.12, Math.min(0.85, (avgZ + currentScale) / (currentScale * 2)));

        ctx.beginPath();
        ctx.moveTo(p1.x2d, p1.y2d);
        ctx.lineTo(p2.x2d, p2.y2d);
        ctx.lineWidth = Math.max(0.8, (p1.scale + p2.scale) * 1.1);
        ctx.strokeStyle = `rgba(${primaryRgb}, ${depthAlpha * (isLight ? 0.75 : 0.65)})`;
        ctx.stroke();
      }

      // Render vertices with glow
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const vertexAlpha = Math.max(0.25, Math.min(0.95, (p.z + currentScale) / (currentScale * 2)));

        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, Math.max(2.2, 3.8 * p.scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${secondaryRgb}, ${vertexAlpha})`;
        ctx.shadowBlur = isLight ? 6 : 10;
        ctx.shadowColor = `rgba(${glowRgb}, ${vertexAlpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Render orbiting satellites / tech particles
      for (let i = 0; i < orbitParticles.length; i++) {
        const op = orbitParticles[i];
        op.angle += op.speed;

        const orbitR = currentScale * op.radius;
        const ox = Math.cos(op.angle) * orbitR;
        const oy = Math.sin(op.angle) * Math.sin(op.inclination) * orbitR;
        const oz = Math.sin(op.angle) * Math.cos(op.inclination) * orbitR;

        // Apply same rotations
        let x1 = ox * cosY + oz * sinY;
        let y1 = oy;
        let z1 = -ox * sinY + oz * cosY;

        let x2 = x1;
        let y2 = y1 * cosX - z1 * sinX;
        let z2 = y1 * sinX + z1 * cosX;

        let x3 = x2 * cosZ - y2 * sinZ;
        let y3 = x2 * sinZ + y2 * cosZ;
        let z3 = z2;

        const scale = focalLength / (focalLength + z3 + currentScale * 1.5);
        const px = targetPosX + x3 * scale;
        const py = targetPosY + y3 * scale;

        const alpha = Math.max(0.15, Math.min(0.9, (z3 + currentScale * 1.5) / (currentScale * 3)));

        ctx.beginPath();
        ctx.arc(px, py, op.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${secondaryRgb}, ${alpha * (isLight ? 0.8 : 0.95)})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${glowRgb}, ${alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.92
      }}
      aria-hidden="true"
    />
  );
}
