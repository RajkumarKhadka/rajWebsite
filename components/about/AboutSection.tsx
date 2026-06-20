"use client";

import { motion } from "framer-motion";
import { useRef, useState, ReactNode } from "react";

// ─── Sub-components ────────────────────────────────────────────────────────────

function DatePill({ date, color }: { date: string; color: string }) {
  return (
    <span
      className="inline-block text-[12px] font-mono font-semibold px-2.5 py-0.5 rounded-full"
      style={{ color, background: color + "15", border: `1px solid ${color}30` }}
    >
      {date}
    </span>
  );
}

function LogoSlot({ src, alt, name }: { src?: string; alt: string; name: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="w-4 h-4 rounded-sm flex-shrink-0 overflow-hidden"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        {src && <img src={src} alt={alt} className="w-full h-full object-cover" />}
      </div>
      <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{name}</span>
    </div>
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────────

type Position = { title: string; dateRange: string };

type TimelineEntry = {
  year: string;
  title: string;
  color: string;
  desc: string;
  dateRange?: string;
  logoSrc?: string;
  institution?: string;
  subTitle?: string;
  location?: string;
  positions?: Position[];
};

type Project = {
  name: string;
  year: string;
  description: string;
  tools: string[];
  contribution: string;
  githubLink: string;
  projectLink?: string;
  media: string[];
};

type Certification = {
  title: string;
  issuer: string;
  issuedOn: string;
  licenseNo?: string;
  note?: string;
  logo?: string;
  credentialImage?: string;
  credentialLink?: string;
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const timeline: TimelineEntry[] = [
  {
    year: "2020",
    title: "XII, Computer Science",
    color: "#b794ff",
    desc: "Completed +2 Science from Viswa Niketan College, (NEB).",
    dateRange: "Apr 2018 - May 2020",
    logoSrc: "/assets/image/Logo/viswa_niketan_logo.jpg",
  },
  {
    year: "2025",
    title: "BE Computer Engineering",
    color: "#10B981",
    desc: "Completed BE in Computer Engineering from NEC, (PU).",
    dateRange: "July 2021 – Aug 2025",
    logoSrc: "/assets/image/Logo/nec_college_logo.png",
  },
  {
    year: "2026",
    title: "Career Begins",
    color: "#F59E0B",
    desc: "Began professional journey as an IT Lab Assistant at NEC, supporting numerious students in coding labs and managing lab infrastructure.",
  },
  {
    year: "Early 2026",
    title: "Nepal Engineering College",
    color: "#00b7ff",
    desc: "Supported 100+ students per semester in coding labs, resolved software and hardware issues, and managed lab setup across CS.",
    dateRange: "Nov 2025 – Apr 2026",
    logoSrc: "/assets/image/Logo/nec_college_logo.png",
    institution: "Nepal Engineering College, Bhaktapur Nepal",
    positions: [
      { title: "IT Lab Assistant", dateRange: "Nov 2025 – Apr 2026" },
    ],
  },
  {
    year: "Late 2026",
    title: "Bizhub Consulting Services",
    color: "#e5ff009a",
    desc: "SAP HANA system monitoring, Docker environment management, CI/CD pipeline support with GitHub Actions, and Linux server administration in live production environments.",
    dateRange: "Apr 2026 – Present",
    logoSrc: "/assets/image/Logo/bizhub logo.png",
    institution: "Bizhub Consulting Services, Lalitpur Nepal",
    positions: [
      { title: "Junior IT Infrastructure", dateRange: "July 2026 – Present" },
      { title: "IT Infra Intern", dateRange: "April 2026 – July 2026" },
    ],
  },
];

const projects: Project[] = [
  {
    name: "Ishara Setu",
    year: "2025",
    description: "AI-powered Nepali Sign Language Detection System using TensorFlow and OpenCV. Converts gestures into real-time text and speech.",
    tools: ["TensorFlow", "OpenCV", "MongoDB"],
    contribution: "Data preprocessing and model development",
    githubLink: "https://github.com/RajkumarKhadka/Ishara-Setu.git",
    media: ["/assets/image/Projects/Ishara_Setu/ishara1.jpg",
      "/assets/image/Projects/Ishara_Setu/ishara2.jpg",
      "/assets/image/Projects/Ishara_Setu/ishara3.jpg",
      "/assets/image/Projects/Ishara_Setu/ishara4.jpg",
      "/assets/image/Projects/Ishara_Setu/ishara5.jpg",
      "/assets/image/Projects/Ishara_Setu/ishara6.jpg",
      "/assets/image/Projects/Ishara_Setu/ishara7.jpg"
    ],
  },
  {
    name: "Karmalaya-X : From Ideas to Impact",
    year: "2025",
    description: "Project competition hosted by NEC and CARRD showcasing AI-driven social-impact work. Presented Ishara Setu before government dignitaries and gained real-world project communication experience.",
    tools: ["TensorFlow", "OpenCV", "Python"],
    contribution: "Project presentation and AI/ML knowledge exchange",
    githubLink: "https://github.com/RajkumarKhadka?tab=repositories",
    media: ["/assets/image/Projects/Karmalaya/karmalaya_X.jpg"],
  },
  {
    name: "Notera : E-Notes Management System",
    year: "2024",
    description: "Web platform for organizing academic notes built with PHP, MySQL, and Bootstrap. Supports note upload, categorization, and structured database management.",
    tools: ["PHP", "MySQL", "XAMPP", "HTML/CSS", "JavaScript", "Bootstrap"],
    contribution: "Full-stack development and database design",
    githubLink: "https://github.com/RajkumarKhadka/Notera_fork.git",
    media: ["/assets/image/Projects/Notera/notera1.jpg",
      "/assets/image/Projects/Notera/notera2.jpg",
      "/assets/image/Projects/Notera/notera3.jpg",
      "/assets/image/Projects/Notera/notera4.jpg",
      "/assets/image/Projects/Notera/notera5.jpg",
      "/assets/image/Projects/Notera/notera6.jpg",
      "/assets/image/Projects/Notera/notera7.jpg"
    ],
  },
  {
    name: "Nec Ingenium 2023",
    year: "2023",
    description: "Volunteered at NEC Ingenium 2023, Nepal Engineering College's flagship project exhibition. Engaged with peer tech projects and contributed to event organization.",
    tools: ["Event Volunteering", "Project Exhibition", "Tech Networking"],
    contribution: "Volunteer organizer and peer project reviewer",
    githubLink: "https://github.com/RajkumarKhadka?tab=repositories",
    media: ["/assets/image/Projects/Nec Ingenium/nec_ingenium_participate.jpg"],
  },
];

const certifications: Certification[] = [
  {
    title: "Cybersecurity - ADBInstitute",
    issuer: "Asian Development Bank Institute",
    issuedOn: "Mar 2026",
    note: "Credential ID: 165724-177-382-6508",
    logo: "/assets/image/Logo/adbi.jpg",
    credentialLink: "https://elearning-adbi.org/certificate-verifier/?code=165724-177-382-6508",
  },
  {
    title: "Dean’s List Recognition",
    issuer: "Pokhara University (PU), Nepal",
    issuedOn: "20th Feb 2026",
    note: "Awarded in BE Computer Engineering.",
    logo: "/assets/image/Logo/pokhara_uni.jpg",
    credentialImage: "/assets/image/Certification/Dean’s list Award.jpg",
  },
  {
    title: "Registered Computer Engineer",
    issuer: "Nepal Engineering Council",
    issuedOn: "11th Jan 2026",
    licenseNo: "96844",
    logo: "/assets/image/Logo/nec_council_logo.jpeg",
    credentialImage: "/assets/image/Certification/licence_certificate.jpg",
  },
  {
    title: "Cybersecurity Workshop",
    issuer: "Logpoint",
    issuedOn: "Apr 2025",
    note: "Issued by Logpoint",
    logo: "/assets/image/Logo/logpoint.jpg",
    credentialImage: "/assets/image/Certification/cybersecurity_ participate.jpg",
  },
  {
    title: "Python for Beginners",
    issuer: "Simplilearn - Skillup",
    issuedOn: "19th Feb 2025",
    note: "Credential ID: 7929231",
    logo: "/assets/image/Logo/skillup_logo.jpg",
    credentialLink: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIzIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzkyOTIzMV84MjYzMjEwMTczOTk3MjIwMDE4Mi5wbmciLCJ1c2VybmFtZSI6IlJhaiBLdW1hciBLaGFka2EifQ%3D%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true",
  },
  {
    title: "Project Competition",
    issuer: "Nec Ingenium",
    issuedOn: "5th Oct 2023",
    note: "Issued By NEC Ingenium",
    logo: "",
    credentialImage: "/assets/image/Certification/nec_ingenium_participate.jpg",
  },
];

// ─── Timeline card content ──────────────────────────────────────────────────────

function CardContent({ item }: { item: TimelineEntry }) {
  if (item.positions) {
    return (
      <>
        <div className="flex items-start gap-2 mb-1.5">
          <div
            className="w-5 h-5 rounded flex-shrink-0 mt-0.5 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {item.logoSrc && <img src={item.logoSrc} alt={item.title} className="w-full h-full object-cover" />}
          </div>
          <div>
            <h4
              className="font-semibold text-sm leading-tight"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", color: item.color }}
            >
              {item.institution}
            </h4>
            {item.location && (
              <p className="text-[10px] mt-0.5" style={{ color: "var(--text-secondary)" }}>{item.location}</p>
            )}
          </div>
        </div>
        <div className="relative pl-4 mt-1">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px" style={{ background: item.color }} />
          {item.positions.map((pos, pi) => (
            <div key={pi} className={`relative flex items-start gap-2 ${pi > 0 ? "mt-3" : ""}`}>
              <div
                className="absolute left-0 w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color + "70", border: `1px solid ${item.color}`, top: "4px", transform: "translateX(-3px)" }}
              />
              <div className="pl-1.5">
                <p className="text-xs font-semibold text-white leading-tight">{pos.title}</p>
                <div className="mt-0.5"><DatePill date={pos.dateRange} color={item.color} /></div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs leading-relaxed mt-3" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
      </>
    );
  }

  if (item.subTitle) {
    return (
      <>
        <h4
          className="font-semibold text-sm mb-1"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", color: item.color }}
        >
          {item.title}
        </h4>
        <p className="text-xs font-semibold mb-1.5" style={{ color: "var(--text-secondary)" }}>{item.subTitle}</p>
        <div className="flex items-center gap-2 mb-1.5 flex-nowrap">
          {item.dateRange && <DatePill date={item.dateRange} color={item.color} />}
          {item.institution && <LogoSlot src={item.logoSrc} alt={item.title} name={item.institution} />}
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
      </>
    );
  }

  if (item.dateRange) {
    return (
      <>
        <div className="flex items-start gap-2 mb-1">
          <div
            className="w-5 h-5 rounded flex-shrink-0 mt-0.5 overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {item.logoSrc && <img src={item.logoSrc} alt={item.title} className="w-full h-full object-cover rounded" />}
          </div>
          <div className="flex items-start justify-between gap-2 flex-1 min-w-0">
            <h4
              className="font-semibold text-sm leading-tight min-w-0"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", color: item.color }}
            >
              {item.title}
            </h4>
            <div className="flex-shrink-0"><DatePill date={item.dateRange} color={item.color} /></div>
          </div>
        </div>
        {item.institution && (
          <p className="text-xs mb-1.5 pl-7" style={{ color: "var(--text-secondary)" }}>{item.institution}</p>
        )}
        <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
      </>
    );
  }

  return (
    <>
      <h4
        className="font-semibold text-sm mb-1"
        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", color: item.color }}
      >
        {item.title}
      </h4>
      <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
    </>
  );
}

// ─── Carousel ──────────────────────────────────────────────────────────────────

function ArrowBtn({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xl font-bold transition-all"
      style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.25)", color: "#00D4FF" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.2)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.08)"; }}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}

function CarouselRow({ label, children }: { label: string; children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") =>
    scrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-5">
        <h3
          className="text-lg font-semibold text-white"
          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
        >
          {label}
        </h3>
        <div className="flex gap-2">
          <ArrowBtn direction="left" onClick={() => scroll("left")} />
          <ArrowBtn direction="right" onClick={() => scroll("right")} />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="carousel-scroll flex gap-5 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const total = project.media.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <>
      <div
        className="rounded-2xl p-6 flex-shrink-0 flex flex-col"
        style={{
          width: "280px",
          minHeight: "230px",
          background: "var(--surface-card)",
          border: "1px solid var(--surface-card-border)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-start justify-between mb-3">
          <h4
            className="font-semibold text-white text-sm leading-tight flex-1 mr-2"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
          >
            {project.name}
          </h4>
          <span
            className="flex-shrink-0 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full"
            style={{ color: "#00D4FF", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
          >
            {project.year}
          </span>
        </div>
        <p className="text-xs leading-relaxed mb-2" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>
        <div className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
          <p>- Tools: {project.tools.join(", ")}</p>
          <p className="mt-1">- Contribution: {project.contribution}</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold font-mono uppercase tracking-wider transition-colors"
            style={{ color: "#00D4FF" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7C3AED"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00D4FF"; }}
          >
            GITHUB LINK ›
          </a>
          <button
            onClick={() => { setOpen(true); setIdx(0); }}
            className="text-[11px] font-semibold font-mono uppercase tracking-wider transition-colors"
            style={{ color: "#00D4FF" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#7C3AED"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#00D4FF"; }}
          >
            VIEW PROJECT ›
          </button>
        </div>
      </div>

      {/* View Project Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
            style={{ background: "var(--surface-card)", border: "1px solid var(--surface-card-border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm transition-colors"
              style={{ background: "rgba(255,255,255,0.12)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
            >
              ✕
            </button>

            {/* Media area */}
            {total > 0 ? (
              <div className="relative">
                {/* Slide */}
                <div className="aspect-video bg-black flex items-center justify-center">
                  {project.media[idx]?.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video
                      key={idx}
                      src={project.media[idx]}
                      controls
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      key={idx}
                      src={project.media[idx]}
                      alt={`${project.name} – slide ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Prev / Next arrows */}
                {total > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-bold z-10 transition-colors"
                      style={{ background: "rgba(0,0,0,0.55)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.35)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.55)"; }}
                    >‹</button>
                    <button
                      onClick={next}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl font-bold z-10 transition-colors"
                      style={{ background: "rgba(0,0,0,0.55)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,212,255,0.35)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(0,0,0,0.55)"; }}
                    >›</button>
                  </>
                )}

                {/* Dot indicators + counter */}
                {total > 1 && (
                  <div className="flex items-center justify-center gap-3 py-3" style={{ background: "rgba(0,0,0,0.4)" }}>
                    <div className="flex gap-1.5">
                      {project.media.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIdx(i)}
                          className="rounded-full transition-all"
                          style={{
                            width: i === idx ? "20px" : "6px",
                            height: "6px",
                            background: i === idx ? "#00D4FF" : "rgba(255,255,255,0.3)",
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {idx + 1} / {total}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div
                className="aspect-video flex items-center justify-center"
                style={{ background: "rgba(0,212,255,0.04)", borderBottom: "1px solid var(--surface-card-border)" }}
              >
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>No media available yet</p>
              </div>
            )}

            {/* Info */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3
                  className="font-semibold text-white text-lg"
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
                >
                  {project.name}
                </h3>
                <span
                  className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ color: "#00D4FF", background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}
                >
                  {project.year}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ─── Cert Card ─────────────────────────────────────────────────────────────────

function CertCard({ cert }: { cert: Certification }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="rounded-2xl p-6 flex-shrink-0 flex flex-col"
        style={{
          width: "280px",
          minHeight: "230px",
          background: "var(--surface-card)",
          border: "1px solid var(--surface-card-border)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-start gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            {cert.logo
              ? <img src={cert.logo} alt={cert.title} className="w-full h-full object-cover" />
              : <span className="text-lg">🏆</span>}
          </div>
          <div className="flex-1 min-w-0">
            <h4
              className="font-semibold text-white text-sm leading-tight"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
            >
              {cert.title}
            </h4>
            <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>{cert.issuer}</p>
          </div>
        </div>
        <div className="mb-3">
          <span
            className="inline-block text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full"
            style={{ color: "#10B981", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)" }}
          >
            Issued on: {cert.issuedOn}
          </span>
        </div>
        {cert.licenseNo && (
          <p className="text-xs flex-1" style={{ color: "var(--text-secondary)" }}>
            Licence No: {cert.licenseNo}
          </p>
        )}
        {cert.note && (
          <p className="text-xs flex-1" style={{ color: "var(--text-secondary)" }}>
            {cert.note}
          </p>
        )}
        {cert.credentialLink ? (
          <a
            href={cert.credentialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-4 text-[11px] font-semibold font-mono uppercase tracking-wider text-left transition-colors"
            style={{ color: "#00D4FF" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#7C3AED"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#00D4FF"; }}
          >
            SHOW CREDENTIAL ›
          </a>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="mt-auto pt-4 text-[11px] font-semibold font-mono uppercase tracking-wider text-left transition-colors"
            style={{ color: "#00D4FF" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#7C3AED"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "#00D4FF"; }}
          >
            SHOW CREDENTIAL ›
          </button>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl overflow-hidden"
            style={{ background: "var(--surface-card)", border: "1px solid var(--surface-card-border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >✕</button>
            {cert.credentialImage ? (
              <img src={cert.credentialImage} alt={cert.title} className="w-full object-contain" />
            ) : (
              <div className="p-12 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <p className="font-semibold text-white mb-1">{cert.title}</p>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Credential image coming soon.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <>
      <style>{`.carousel-scroll::-webkit-scrollbar { display: none; }`}</style>
      <section id="about" className="relative section-padding bg-[#111827]/30">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(245,158,11,0.04), transparent)" }}
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", letterSpacing: "-0.02em" }}
            >
              Raj Kumar Khadka
            </h2>
            <p className="text-[#9CA3AF] max-w-4xl mx-auto text-base leading-relaxed mb-4">
              I&apos;m a Computer Engineer from Nepal who loves building things that actually work. I&apos;ve gone hands-on across IT infrastructure, AI/ML, and system administration — from Docker stacks and CI/CD pipelines to SAP HANA monitoring and Nepali Sign Language detection.
              <br /><br />
              <span
                className="font-bold"
                style={{
                  background: "linear-gradient(135deg, #6557F0, #00D4FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real problems deserve real, working solutions.
              </span>
            </p>
            <p className="text-[#9CA3AF] max-w-4xl mx-auto text-base leading-relaxed">
              Currently gaining professional experience at BizHub Consulting while continuing to learn every day. I believe in understanding a problem deeply before writing a single line of code — and I care about leaving every project cleaner than I found it. 🇳🇵
            </p>
          </motion.div>

          {/* Projects & Certifications carousels */}
          <div className="mb-20 space-y-14">
            <CarouselRow label="Projects">
              {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
            </CarouselRow>

            <CarouselRow label="Certification">
              {certifications.map((c, i) => <CertCard key={i} cert={c} />)}
            </CarouselRow>
          </div>

          {/* Philosophy quote */}
          <motion.div
            className="relative text-center mb-20 py-10 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.1)" }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)" }}
            />
            <p className="text-[#9CA3AF] text-sm uppercase tracking-widest font-mono mb-4">My approach</p>
            <blockquote
              className="text-2xl md:text-3xl font-semibold px-6 max-w-3xl mx-auto"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif", letterSpacing: "-0.02em", color: "var(--text-primary)" }}
            >
              &ldquo;Understand Deep · Plan Smart · Build Clean ·{" "}
              <span style={{ background: "linear-gradient(135deg, #00D4FF, #7C3AED)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Ship With Purpose
              </span>
              &rdquo;
            </blockquote>
          </motion.div>

          {/* Career Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              className="text-center text-xl font-semibold text-white mb-10"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif" }}
            >
              Career Timeline
            </h3>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D4FF]/40 via-[#7C3AED]/30 to-transparent md:-translate-x-1/2" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row items-start gap-6 md:gap-8`}
                  >
                    <div
                      className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-1.5 border-2 border-[#0A0F1E] z-10"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className={`hidden md:flex ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"} flex-1`}>
                      <span
                        className="font-mono text-sm font-semibold px-3 py-1 rounded-full"
                        style={{ color: item.color, background: item.color + "15", border: `1px solid ${item.color}30` }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <div className={`flex-1 ml-10 md:ml-0 ${i % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                      <div
                        className="p-4 rounded-xl"
                        style={{ background: "var(--surface-card)", border: "1px solid var(--surface-card-border)" }}
                      >
                        <div className="flex items-center gap-2 mb-1.5 md:hidden">
                          <span className="font-mono text-xs font-semibold" style={{ color: item.color }}>{item.year}</span>
                        </div>
                        <CardContent item={item} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
