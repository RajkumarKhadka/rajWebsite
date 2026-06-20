"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeProvider";

const items = [
  "IT Infrastructure",
  "Python Development",
  "AI & Machine Learning",
  "Docker & CI/CD",
  "SAP HANA Support",
  "Web Development",
  "Linux Administration",
  "Data Preprocessing",
  "Network Troubleshooting",
  "Quality Assurance",
  "Database Management",
  "Cybersecurity",
];

const SEPARATOR = "✦";

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const repeated = [...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex items-center gap-0 flex-shrink-0 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "33.333%"] : ["0%", "-33.333%"] }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="text-sm font-medium text-[#9CA3AF] hover:text-white transition-colors duration-200 cursor-default px-5 tracking-wide">
              {item}
            </span>
            <span className="text-[#00D4FF] text-xs opacity-40">{SEPARATOR}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function MarqueeStrip() {
  const { theme } = useTheme();
  const fadeColor = theme === "dark" ? "#0A0F1E" : "#F5F7FA";

  return (
    <section className="relative py-5 overflow-hidden" aria-hidden="true">
      {/* Background */}
      <div className="absolute inset-0 border-y border-white/[0.04]" />

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(90deg, ${fadeColor}, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(270deg, ${fadeColor}, transparent)` }} />

      <div className="space-y-0">
        <MarqueeRow />
      </div>
    </section>
  );
}
