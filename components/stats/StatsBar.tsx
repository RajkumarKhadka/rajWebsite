"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 1, suffix: "+", label: "Years In", color: "#00D4FF" },
  { value: 10, suffix: "+", label: "Projects Done", color: "#7C3AED" },
  { value: 6, suffix: "+", label: "Programming Languages", color: "#10B981" },
  { value: 15, suffix: "+", label: "Certifications", color: "#F59E0B" },
];

function AnimatedCounter({
  value,
  suffix,
  color,
  inView,
}: {
  value: number;
  suffix: string;
  color: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span
      className="text-4xl md:text-5xl font-bold tabular-nums"
      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", color }}
    >
      {count}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#111827] border-y border-white/5" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 50%, rgba(0,212,255,0.04), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                color={stat.color}
                inView={inView}
              />
              <span className="text-[#9CA3AF] text-sm font-medium">{stat.label}</span>
              <div
                className="w-8 h-0.5 rounded-full mt-1"
                style={{ backgroundColor: stat.color, opacity: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
