"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data/skills";
import { useTheme } from "@/lib/ThemeProvider";

const accentColors: Record<string, string> = {
  cyan: "#00D4FF",
  violet: "#7C3AED",
  emerald: "#10B981",
  gold: "#F59E0B",
};

export default function SkillsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="skills" className="relative section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 50%, rgba(16,185,129,0.04), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", letterSpacing: "-0.02em" }}
          >
            Things I Know
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto">
            Tools and technologies I&apos;ve used hands-on — across engineering coursework, lab assistance, internships, and personal projects.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => {
            const color = accentColors[cat.accent];
            const isActive = activeId === cat.id;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl p-6 cursor-pointer transition-all duration-300 overflow-hidden"
                style={{
                  background: isActive
                    ? "var(--surface-card-hover)"
                    : "var(--surface-card)",
                  border: `1px solid ${isActive ? color + "60" : "var(--surface-card-border)"}`,
                  boxShadow: isActive
                    ? `0 0 30px ${color}20, 0 8px 40px ${isDark ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.08)"}`
                    : "none",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={() => setActiveId(cat.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* BG glow */}
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full pointer-events-none transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${color}10, transparent)`,
                    opacity: isActive ? 1 : 0,
                  }}
                />

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3
                    className="font-semibold text-base transition-colors duration-200"
                    style={{
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
                      color: isActive ? color : "var(--text-primary)",
                    }}
                  >
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg transition-all duration-200"
                      style={{
                        background: isActive ? color + "12" : "var(--surface-card-border)",
                        color: isActive ? color : "var(--text-secondary)",
                        border: `1px solid ${isActive ? color + "25" : "var(--surface-card-border)"}`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
