"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero3DCard from "./Hero3DCard";
import AnimatedName from "./AnimatedName";

const roles = [
  "IT Infrastructure and Platform Engineer",
  "Someone Who Gets Things Done",
  "AI & EdTech Nerd",
  "Cloud Tinkerer",
  "Making EdTech Actually Work",
  "Computer Engineer",
];

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span style={{ color: "#00D4FF" }}>
      {displayed}
      <span className="opacity-60 animate-pulse">|</span>
    </span>
  );
}

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 pb-8 md:pt-20 md:pb-12">

      {/* Two-column: text left, card right */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-24">

        {/* ── LEFT ── */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}
        >

          {/* Availability pill */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-xs text-[#9CA3AF] font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              Based in Nepal · Available worldwide
            </span>
          </motion.div>

          {/* Massive greeting — dunks-inspired */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <h1
              className="text-white leading-[0.95] mb-2 tracking-tight"
              style={{
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "clamp(2.4rem, 5.5vw, 6rem)",
                fontWeight: 300,
                letterSpacing: "-0.04em",
              }}
            >
              Hello, I&apos;m
            </h1>
            {/* Scramble-reveal animated name */}
            <div className="mb-8 leading-[0.95]">
              <AnimatedName />
            </div>
          </motion.div>

          {/* Role typewriter */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="text-[#9CA3AF] mb-5"
            style={{
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              minHeight: "1.8rem",
              letterSpacing: "-0.01em",
            }}
          >
            <TypewriterText />
          </motion.p>

          {/* Description */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="text-[#6B7280] leading-relaxed mb-10"
            style={{
              fontSize: "clamp(0.9rem, 1.4vw, 1.05rem)",
              maxWidth: "46ch",
            }}
          >
            Computer Engineer from Nepal with hands-on experience in IT infrastructure,
            AI/ML, and system administration — from SAP HANA monitoring and Docker
            environments to building Nepali Sign Language detection. I learn fast and make it work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="/assets/files/cv.pdf"
              download
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-[#0A0F1E] transition-all duration-300"
              style={{
                background: "#00D4FF",
                boxShadow: "0 0 28px rgba(0,212,255,0.3)",
              }}
            >
              <span>Download CV</span>
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(0,212,255,0.1))",
                border: "1px solid rgba(124,58,237,0.4)",
                color: "#c4b5fd",
                boxShadow: "0 0 20px rgba(124,58,237,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, rgba(124,58,237,0.28), rgba(0,212,255,0.15))";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 28px rgba(124,58,237,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(0,212,255,0.1))";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(124,58,237,0.15)";
              }}
            >
              <span>Explore Services</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: 3D flip card ── */}
        <Hero3DCard />
      </div>
    </div>
  );
}
