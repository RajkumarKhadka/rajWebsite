export type ServiceAccent = "cyan" | "violet" | "emerald" | "gold";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: ServiceAccent;
  features: string[];
  link: string;
  ctaLabel: string;
  isNew?: boolean;
}

export const services: Service[] = [
  {
    id: "engineering-notes",
    title: "Computer Engineering Notes and Resources",
    description:
      "All students have easy access to resources for every semester's subjects.",
    icon: "📚",
    accent: "cyan",
    features: [
      "Semester-wise organized notes",
      "Lecture slides & lab practicals",
      "Past exam papers & solutions",
      "Subject-wise study resources",
    ],
    link: "https://drive.google.com/drive/u/0/folders/1HM1D3xS5b0rFUHeHVKuFrxCKsuKfzJIl",
    ctaLabel: "Get Notes",
  },
  {
    id: "licence-exam",
    title: "Engineering Licence Exam Resources",
    description:
      "Essential resources for preparing for the engineering license exam.",
    icon: "📝",
    accent: "violet",
    features: [
      "NEC exam preparation materials",
      "Past papers & detailed solutions",
      "Subject-wise revision guides",
      "Exam tips & strategy notes",
    ],
    link: "https://drive.google.com/drive/folders/1EUGtXtbvDYtobBTiGQBT7BucJAicLYoW",
    ctaLabel: "Get Resources",
  },
  {
    id: "scholarship",
    title: "Scholarships For Abroad Studies",
    description:
      "Get access to valuable resources for securing a scholarship, including IELTS, GRE preparation materials.",
    icon: "🌏",
    accent: "emerald",
    features: [
      "IELTS & GRE prep materials",
      "Scholarship application guides",
      "SOP & essay writing templates",
      "Country-specific funding info",
    ],
    link: "https://drive.google.com/drive/folders/1rr_phEFdgHHUzSITOQ_R3i8oflP2EWBi",
    ctaLabel: "Get Scholarship Resources",
  },
  {
    id: "foreign-language",
    title: "Foreign Language Learning",
    description:
      "If you enjoy learning foreign languages in your free time like I do, these resources are for you.",
    icon: "🗣️",
    accent: "gold",
    features: [
      "Beginner-friendly learning paths",
      "Grammar & vocabulary guides",
      "Free practice & audio materials",
      "Japanese, Korean & more",
    ],
    link: "https://drive.google.com/drive/folders/1Q6MvKevUGpTxmNhHZW-Bf_dOJMhDeaMc",
    ctaLabel: "Get Drive Link Now",
  },
  {
    id: "projects",
    title: "Projects",
    description:
      "Various academic and personal projects are available on my GitHub repository.",
    icon: "💻",
    accent: "cyan",
    features: [
      "Ishara Setu — Sign Language Detection",
      "Notera — Notes Management System",
      "Source code & documentation",
      "Open source & BE final year work",
    ],
    link: "https://github.com/RajkumarKhadka",
    ctaLabel: "Github Link",
  },
  {
    id: "loksewa",
    title: "Prepare For Loksewa Exam",
    description:
      "Focused resources for effective Loksewa exam preparation.",
    icon: "📋",
    accent: "violet",
    features: [
      "Engineering service exam prep",
      "Subject-wise question banks",
      "Previous year papers & answers",
      "Model questions & mock tests",
    ],
    link: "https://drive.google.com/drive/folders/1UST6ZIP4rQRBZiaDcLoqq9Uv23MA8UUU",
    ctaLabel: "Get Resources",
  },
];
