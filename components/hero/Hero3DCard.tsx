"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero3DCard() {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setTilt({ x: -dy * 14, y: dx * 14 });
      const gx = ((e.clientX - rect.left) / rect.width) * 100;
      const gy = ((e.clientY - rect.top) / rect.height) * 100;
      setGlare({ x: gx, y: gy, opacity: 0.15 });
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setTilt({ x: 0, y: 0 });
    setGlare((g) => ({ ...g, opacity: 0 }));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex items-center justify-center flex-shrink-0"
      style={{ perspective: "1400px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setFlipped(!flipped)}
        title="Click to flip"
        className="relative cursor-pointer select-none"
        style={{
          width: "300px",
          height: "400px",
          transformStyle: "preserve-3d",
          transition: flipped
            ? "transform 0.75s cubic-bezier(0.22,1,0.36,1)"
            : "transform 0.15s ease-out",
          transform: flipped
            ? `rotateX(${tilt.x}deg) rotateY(${180 + tilt.y}deg)`
            : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >

        {/* ── FRONT: Profile Photo ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            boxShadow: "0 30px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Photo */}
          <Image
            src="/assets/image/profile.jpg"
            alt="Raj Kumar Khadka"
            fill
            className="object-cover object-top"
            priority
            onError={(e) => {
              // Hide broken image — placeholder overlay will show
              (e.target as HTMLImageElement).style.opacity = "0";
            }}
          />

          {/* Fallback gradient shown when no photo */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(145deg, #1E293B 0%, #0F172A 100%)",
              zIndex: -1,
            }}
          >
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl mb-4"
              style={{
                background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(124,58,237,0.2))",
                border: "2px solid rgba(0,212,255,0.3)",
              }}
            >
              👤
            </div>
            <p
              className="text-[#6B7280] text-xs text-center px-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Add profile.jpg to{"\n"}/public/assets/image/
            </p>
          </div>

          {/* Bottom gradient overlay */}
          <div
            className="absolute inset-x-0 bottom-0 h-2/5"
            style={{
              background: "linear-gradient(to top, rgba(10,15,30,0.95) 0%, rgba(10,15,30,0.6) 50%, transparent 100%)",
            }}
          />

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px z-10"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.8), rgba(124,58,237,0.6), transparent)",
            }}
          />

          {/* Glare */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
              transition: "opacity 0.3s ease",
            }}
          />


          {/* Flip hint */}
          <div
            className="absolute top-3 right-3 z-10 text-xs opacity-40"
            style={{ color: "#9CA3AF", fontFamily: "'JetBrains Mono', monospace" }}
          >
            flip →
          </div>
        </div>

        {/* ── BACK: How I Work ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex flex-col justify-between p-6"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "linear-gradient(145deg, #1a0a2e 0%, #0A0F1E 100%)",
            border: "1px solid rgba(124,58,237,0.25)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.7), rgba(0,212,255,0.5), transparent)",
            }}
          />

          {/* Glare on back */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle at ${100 - glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 65%)`,
              transition: "opacity 0.3s ease",
            }}
          />

          <div>
            <p
              className="text-[#7C3AED] text-xs tracking-widest uppercase mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace", opacity: 0.8 }}
            >
              {'How I Work'}
            </p>

            <div className="space-y-3">
              {[
                { step: "01", label: "Understand the Problem", color: "#00D4FF", desc: "Read the docs, ask the right questions, dig into requirements first" },
                { step: "02", label: "Plan & Design", color: "#7C3AED", desc: "Map out the solution cleanly before writing a single line" },
                { step: "03", label: "Build & Validate", color: "#10B981", desc: "Write clean code, test every output, iterate until it works" },
                { step: "04", label: "Ship & Document", color: "#F59E0B", desc: "Deliver working software, leave clear documentation behind" },
              ].map(({ step, label, color, desc }) => (
                <div key={step} className="flex items-start gap-3">
                  <span
                    className="text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace", color, opacity: 0.7 }}
                  >
                    {step}
                  </span>
                  <div>
                    <p
                      className="text-white text-xs font-semibold"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
                    >
                      {label}
                    </p>
                    <p className="text-[#6B7280] text-xs leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-xl p-3"
            style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}
          >
            <p className="text-[#10B981] text-xs font-medium flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse flex-shrink-0" />
              Open to new roles & collaborations
            </p>
            <p className="text-[#6B7280] text-xs">Nepal · Remote · Open to Opportunities</p>
          </div>

          <div
            className="absolute bottom-3 right-3 text-xs opacity-40"
            style={{ color: "#6B7280", fontFamily: "'JetBrains Mono', monospace" }}
          >
            ← back
          </div>
        </div>
      </div>
    </motion.div>
  );
}
