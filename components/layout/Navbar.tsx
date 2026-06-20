"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function NepalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const nst = new Date(utc + 5 * 3600000 + 45 * 60000);
      const h = nst.getHours();
      const m = nst.getMinutes().toString().padStart(2, "0");
      const ampm = h >= 12 ? "PM" : "AM";
      const h12 = h % 12 || 12;
      setTime(`NPT ${h12}:${m} ${ampm}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="hidden lg:flex items-center gap-2 text-xs text-[#6B7280] font-mono tracking-wide select-none">
      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
      {time}
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setTimeout(() => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 280);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0F1E]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_1px_40px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <Logo size={40} />
            <span
              className="text-base tracking-tight transition-colors duration-200"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", letterSpacing: "-0.02em" }}
            >
              <span className="text-white font-bold group-hover:text-[#F5A623] transition-colors duration-200">Raj Kumar</span>
              <span className="text-[#9CA3AF] font-light"> Khadka</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 tracking-wide ${
                    isActive ? "text-white" : "text-[#6B7280] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "linear-gradient(135deg, rgba(0,212,255,0.12), rgba(124,58,237,0.12))",
                        border: "1px solid rgba(0,212,255,0.2)",
                      }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Nepal time + CTA */}
          <div className="hidden md:flex items-center gap-5">
            <NepalTime />
            <a
              href="#contact"
              className="group relative overflow-hidden px-5 py-2.5 rounded-lg text-sm font-bold text-[#0A0F1E] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] hover:scale-105"
              style={{ background: "linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)" }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Let&apos;s Talk
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-[#9CA3AF] hover:text-white transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-px bg-current transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0D1224]/95 backdrop-blur-2xl border-t border-white/[0.06]"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileLink(e, link.href)}
                  className="text-[#9CA3AF] hover:text-white py-3 px-3 rounded-lg hover:bg-white/5 text-sm transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleMobileLink(e, "#contact")}
                className="mt-3 px-5 py-3 rounded-lg text-sm font-semibold text-center text-[#0A0F1E] bg-[#00D4FF]"
              >
                Let&apos;s Talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
