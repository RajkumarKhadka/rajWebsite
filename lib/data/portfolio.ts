export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  accent: "cyan" | "violet" | "emerald" | "gold";
  year: string;
}

export const projects: Project[] = [
  {
    id: "lbu-lms",
    title: "LMS Implementation",
    client: "Lumbini Buddhist University",
    category: "Higher Education IT",
    description:
      "Designed and deployed a comprehensive LMS for Lumbini Buddhist University: course management, online assessments, faculty portals, the works. 5,000+ students moved to digital learning.",
    outcome: "5,000+ students onboarded digitally",
    tags: ["LMS", "Moodle", "Higher Education", "Nepal"],
    accent: "violet",
    year: "2022",
  },
  {
    id: "rju-digitalization",
    title: "University Digitalization",
    client: "Rajarshi Janak University",
    category: "Higher Education IT",
    description:
      "Led the full digital transformation at Rajarshi Janak University as Team Lead, modernizing admin systems, student portals, and academic records across all faculties. Big project, great outcome.",
    outcome: "Complete digital transformation delivered",
    tags: ["Digital Transformation", "ERP", "University", "Team Lead"],
    accent: "cyan",
    year: "2021",
  },
  {
    id: "cloud-migration",
    title: "Cloud Infrastructure Migration",
    client: "Regional NGO Network",
    category: "Cloud Consultation",
    description:
      "Moved a South Asian NGO network from aging on-premise infrastructure to AWS, cutting operational costs significantly and getting uptime to 99.9%. A proper cloud migration done right.",
    outcome: "40% cost reduction, 99.9% uptime",
    tags: ["AWS", "Cloud Migration", "DevOps", "Cost Optimization"],
    accent: "cyan",
    year: "2023",
  },
  {
    id: "workspace-deployment",
    title: "Google Workspace Rollout",
    client: "Nepal Private School Group",
    category: "Google Workspace",
    description:
      "Rolled out Google Workspace across 12 private schools: email migration, admin setup, teacher training, student accounts. 3,000+ users onboarded and actually using it.",
    outcome: "12 schools, 3,000+ users migrated",
    tags: ["Google Workspace", "Email Migration", "Training", "Education"],
    accent: "gold",
    year: "2023",
  },
  {
    id: "ai-workshop",
    title: "AI Tools for Professionals",
    client: "Corporate Training Program",
    category: "Training & AI",
    description:
      "Designed and ran a hands-on AI tools workshop series for 200+ corporate professionals. Real tools (ChatGPT, Gemini), real workflows, real skills they could use the next day.",
    outcome: "200+ professionals trained",
    tags: ["AI Training", "ChatGPT", "Productivity", "Workshops"],
    accent: "emerald",
    year: "2024",
  },
  {
    id: "momayo-platform",
    title: "EdTech SaaS Platform",
    client: "Momayo Technology",
    category: "Web Development",
    description:
      "Built a full-stack EdTech SaaS platform from scratch: course delivery, payment integration, and multi-tenant university dashboards. Designed, built, and launched to market.",
    outcome: "SaaS platform launched to market",
    tags: ["Next.js", "Laravel", "SaaS", "EdTech", "Multi-tenant"],
    accent: "emerald",
    year: "2024",
  },
];
