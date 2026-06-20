"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/data/services";

const accentConfig = {
  cyan:    { color: "#00D4FF", bg: "rgba(0,212,255,0.06)",   border: "rgba(0,212,255,0.2)"   },
  violet:  { color: "#7C3AED", bg: "rgba(124,58,237,0.06)",  border: "rgba(124,58,237,0.2)"  },
  emerald: { color: "#10B981", bg: "rgba(16,185,129,0.06)",  border: "rgba(16,185,129,0.2)"  },
  gold:    { color: "#F59E0B", bg: "rgba(245,158,11,0.06)",  border: "rgba(245,158,11,0.2)"  },
};

export default function ServiceCard({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);
  const cfg = accentConfig[service.accent];

  return (
    <motion.div
      className="relative rounded-2xl p-6 cursor-default overflow-hidden group"
      style={{
        background: hovered ? "var(--surface-card-hover)" : "var(--surface-card)",
        border: `1px solid ${hovered ? cfg.border : "var(--surface-card-border)"}`,
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.15), 0 0 0 1px ${cfg.border}`
          : "0 2px 12px rgba(0,0,0,0.06)",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${cfg.color}50, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* NEW badge */}
      {service.isNew && (
        <span
          className="absolute top-4 right-4 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider"
          style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
        >
          NEW
        </span>
      )}

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 transition-all duration-300"
        style={{
          background: hovered ? cfg.bg : "var(--surface-card-border)",
          border: `1px solid ${hovered ? cfg.border : "var(--surface-card-border)"}`,
        }}
      >
        {service.icon}
      </div>

      {/* Title */}
      <h3
        className="text-base font-semibold mb-2.5 transition-colors duration-300"
        style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
          letterSpacing: "-0.02em",
          color: hovered ? cfg.color : "var(--text-primary)",
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-5" style={{ fontSize: "0.84rem", color: "var(--text-muted)" }}>
        {service.description}
      </p>

      {/* Feature list — revealed on hover (hidden when empty) */}
      {service.features.length > 0 && (
        <div
          className="space-y-1.5 mb-5 overflow-hidden transition-all duration-400"
          style={{ maxHeight: hovered ? "120px" : "0", opacity: hovered ? 1 : 0 }}
        >
          {service.features.map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs" style={{ color: "#9CA3AF" }}>
              <span style={{ color: cfg.color, fontSize: "0.6rem" }}>✦</span>
              {f}
            </div>
          ))}
        </div>
      )}

      {/* CTA link */}
      <a
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-xs font-medium transition-all duration-300 mt-auto"
        style={{ color: hovered ? cfg.color : "#4B5563" }}
        onClick={(e) => e.stopPropagation()}
      >
        <span>{service.ctaLabel}</span>
        <span
          className="transition-transform duration-300"
          style={{ transform: hovered ? "translateX(3px)" : "translateX(0)" }}
        >
          →
        </span>
      </a>
    </motion.div>
  );
}
