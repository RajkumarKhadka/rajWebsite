"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/ThemeProvider";

const contactInfo = [
  { icon: "✉️", label: "Email", value: "rajkumarkd01@gmail.com", href: "mailto:rajkumarkd01@gmail.com" },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/raj-kumar-khadka", href: "https://www.linkedin.com/in/raj-kumar-khadka" },
  { icon: "🌐", label: "GitHub", value: "github.com/RajkumarKhadka", href: "https://github.com/RajkumarKhadka" },
  { icon: "📍", label: "Location", value: "Ramechhap / Kathmandu, Nepal", href: null },
];

const serviceOptions = [
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
  "Other",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", service: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.service || "General Inquiry");
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:rajkumarkd01@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputStyle = (name: string) => ({
    background: focused === name
      ? (isDark ? "rgba(0,212,255,0.04)" : "rgba(0,212,255,0.05)")
      : (isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)"),
    border: `1px solid ${focused === name ? "rgba(0,212,255,0.4)" : (isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.12)")}`,
    boxShadow: focused === name ? "0 0 15px rgba(0,212,255,0.08)" : "none",
    color: isDark ? "#F9FAFB" : "#0F172A",
    transition: "all 0.2s ease",
  });

  return (
    <section id="contact" className="relative section-padding bg-[#111827]/30">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(0,212,255,0.06), transparent)",
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
            Let&apos;s Connect
          </h2>
          <p className="text-[#9CA3AF] max-w-xl mx-auto">
            Have a question, project idea, or just want to say hi? Drop me a message — I reply within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--surface-card-border)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3
                className="font-semibold mb-4"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", color: "var(--text-primary)" }}
              >
                Get in touch directly
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-sm flex-shrink-0"
                      style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#6B7280] text-xs">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-[#9CA3AF] text-sm hover:text-[#00D4FF] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[#9CA3AF] text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div
              className="p-6 rounded-2xl"
              style={{
                background: "rgba(16,185,129,0.04)",
                border: "1px solid rgba(16,185,129,0.15)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[#10B981] font-medium text-sm" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}>
                  Open to new opportunities
                </span>
              </div>
              <p className="text-[#9CA3AF] text-xs leading-relaxed">
                Looking for opportunity, collaborations, and interesting projects. If you have something in mind, let&apos;s talk.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl space-y-5"
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--surface-card-border)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder=""
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={inputStyle("name")}
                  />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={inputStyle("email")}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                  style={{ ...inputStyle("service"), color: formData.service ? (isDark ? "#F9FAFB" : "#0F172A") : (isDark ? "#4B5563" : "#94A3B8") }}
                >
                  <option value="" style={{ background: isDark ? "#1E293B" : "#ffffff", color: isDark ? "#F9FAFB" : "#0F172A" }}>Select a topic...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} style={{ background: isDark ? "#1E293B" : "#ffffff", color: isDark ? "#F9FAFB" : "#0F172A" }}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  required
                  rows={5}
                  placeholder="What's on your mind..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-[#4B5563] outline-none resize-none"
                  style={inputStyle("message")}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-xl font-semibold text-sm text-[#0A0F1E] bg-[#00D4FF] hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.25)] hover:shadow-[0_0_35px_rgba(0,212,255,0.4)]"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
