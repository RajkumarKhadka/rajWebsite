"use client";

import dynamic from "next/dynamic";
import { Component, ReactNode, useCallback, useRef, useState } from "react";
import HeroContent from "./HeroContent";

class SceneErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// Dynamically import Three.js scene (SSR-safe)
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMouse({ x, y });
    });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative min-h-screen overflow-hidden flex flex-col justify-center"
      style={{ background: "linear-gradient(180deg, #0A0F1E 0%, #0D1224 60%, #111827 100%)" }}
    >
      {/* Mouse spotlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(600px circle at ${mouse.x}% ${mouse.y}%, rgba(0,212,255,0.07) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)`,
        }}
      />

      {/* Radial hero glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(0,212,255,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Secondary violet glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 80%, rgba(124,58,237,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Three.js particles */}
      <SceneErrorBoundary>
        <HeroScene />
      </SceneErrorBoundary>

      {/* Main content */}
      <HeroContent />
    </section>
  );
}
