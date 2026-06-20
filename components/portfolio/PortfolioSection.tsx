"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/portfolio";

const allCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const accentText: Record<string, string> = {
  cyan: "#00D4FF",
  violet: "#7C3AED",
  emerald: "#10B981",
  gold: "#F59E0B",
};

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative section-padding bg-[#111827]/40">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(0,212,255,0.04), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#10B981] mb-4 font-mono">
            {'// My Work'}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", letterSpacing: "-0.02em" }}
          >
            Projects I&apos;m Proud Of
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto">
            Real clients, real challenges, real results. Here&apos;s a selection of what I&apos;ve worked on.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-2 rounded-full text-sm transition-all duration-200"
              style={{
                background:
                  activeFilter === cat ? "#00D4FF" : "rgba(255,255,255,0.05)",
                color: activeFilter === cat ? "#0A0F1E" : "#9CA3AF",
                border: `1px solid ${activeFilter === cat ? "#00D4FF" : "rgba(255,255,255,0.08)"}`,
                fontWeight: activeFilter === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => {
              const color = accentText[project.accent];
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-pointer"
                  style={{
                    background: "var(--surface-card)",
                    border: "1px solid var(--surface-card-border)",
                    backdropFilter: "blur(12px)",
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: color + "60",
                    boxShadow: `0 0 30px ${color}20, 0 8px 40px rgba(0,0,0,0.5)`,
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
                  />

                  {/* Category tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        background: color + "15",
                        color: color,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="text-[#6B7280] text-xs font-mono">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-semibold mb-1 transition-colors"
                    style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mb-3 font-mono">{project.client}</p>

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    {project.description}
                  </p>

                  {/* Outcome */}
                  <div
                    className="flex items-center gap-2 p-3 rounded-lg text-sm font-medium mb-4"
                    style={{ background: color + "08", border: `1px solid ${color}20` }}
                  >
                    <span style={{ color }}>✦</span>
                    <span style={{ color }}>{project.outcome}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded text-[#6B7280]"
                        style={{ background: "rgba(255,255,255,0.04)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
