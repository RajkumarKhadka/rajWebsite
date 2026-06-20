"use client";

import { useTheme } from "@/lib/ThemeProvider";
import Logo from "@/components/ui/Logo";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raj-kumar-khadka/", icon: "in" },
  { label: "GitHub", href: "https://github.com/RajkumarKhadka", icon: "gh" },
  { label: "Twitter/X", href: "https://x.com/rajkhadka_", icon: "𝕏" },
  { label: "Instagram", href: "https://www.instagram.com/raj_kumar_khadka_/", icon: "ig" },
];

const serviceLinks = [
  { label: "Computer Engineering Notes and Resources", href: "#services" },
  { label: "Engineering Licence Exam Resources", href: "#services" },
  { label: "Scholarships For Abroad Studies", href: "#services" },
  { label: "Foreign Language Learning", href: "#services" },
  { label: "Projects", href: "#services" },
  { label: "Prepare For Loksewa Exam", href: "#services" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label="Toggle light/dark mode"
      className="flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
      style={{
        background: isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)",
        border: isDark ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(0,0,0,0.12)",
        color: isDark ? "#9CA3AF" : "#475569",
      }}
    >
      {/* Track */}
      <span
        className="relative inline-flex w-9 h-5 rounded-full transition-all duration-300 flex-shrink-0"
        style={{
          background: isDark
            ? "linear-gradient(135deg, #1E293B, #0F172A)"
            : "linear-gradient(135deg, #00D4FF, #7C3AED)",
          border: isDark ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <span
          className="absolute top-0.5 w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center text-[10px]"
          style={{
            background: "#FFFFFF",
            left: isDark ? "2px" : "calc(100% - 18px)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
          }}
        >
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>
      {isDark ? "Dark mode" : "Light mode"}
    </button>
  );
}

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="relative border-t border-white/5 bg-[#0A0F1E]">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo size={36} />
              <span
                className="font-semibold text-lg text-white"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
              >
                Raj Kumar Khadka
              </span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-6">
              Computer Engineer from Kathmandu, Nepal — passionate about IT infrastructure, AI/ML, and building systems that actually work. Sharing useful resources for fellow engineers along the way.
            </p>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs text-[#9CA3AF]">Open for new projects</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#9CA3AF] hover:text-[#00D4FF] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className="text-white font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
            >
              Connect
            </h4>
            <div className="space-y-3 mb-6">
              <a
                href="mailto:rajkumarkd01@gmail.com"
                className="flex items-center gap-2 text-[#9CA3AF] hover:text-[#00D4FF] text-sm transition-colors group"
              >
                <span className="text-[#00D4FF] text-xs">→</span>
                rajkumarkd01@gmail.com
              </a>
              <p className="flex items-center gap-2 text-[#9CA3AF] text-sm">
                <span className="text-[#00D4FF] text-xs">📍</span>
                Ramechhap / Kathmandu, Nepal
              </p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-xs transition-all duration-200 hover:text-[#6557F0] hover:border-[#6557F0]/50 hover:bg-[#6557F0]/5"
                  style={{
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.12)"}`,
                    color: isDark ? "#9CA3AF" : "#64748B",
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: isDark ? "#6B7280" : "#64748B" }}>
            © {new Date().getFullYear()} Raj Kumar Khadka · Nepal
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
