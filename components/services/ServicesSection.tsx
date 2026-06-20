"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="relative section-padding bg-[#0A0F1E] [data-theme=light]:bg-[#F5F7FA]" style={{ background: "var(--bg-primary)" }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 50%, rgba(124,58,237,0.05), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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
            Resources & Useful Links
          </h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            A curated collection of notes, exam prep materials, scholarship guides, and project resources — all free to access.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
