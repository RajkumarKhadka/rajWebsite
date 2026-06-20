export interface SkillCategory {
  id: string;
  title: string;
  accent: "cyan" | "violet" | "emerald" | "gold";
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    accent: "cyan",
    icon: "💻",
    skills: ["Python", "C++", "PHP", "JavaScript", "HTML / CSS", "OOP Concepts"],
  },
  {
    id: "ai-data",
    title: "AI & Data Science",
    accent: "violet",
    icon: "🤖",
    skills: ["TensorFlow / Keras", "OpenCV", "NumPy / Pandas", "Matplotlib", "Jupyter Notebook", "Data Preprocessing"],
  },
  {
    id: "it-infrastructure",
    title: "IT Infrastructure & Systems",
    accent: "emerald",
    icon: "🖥️",
    skills: ["Linux (Ubuntu)", "Windows OS", "SAP HANA Monitoring", "System Configuration", "Log Monitoring", "Service Management"],
  },
  {
    id: "networking",
    title: "Networking & DevTools",
    accent: "gold",
    icon: "🔌",
    skills: ["Basic Networking", "IP / DHCP / Routing", "Command Line (Linux & Windows)", "GitHub / Git", "XAMPP", "Network Troubleshooting"],
  },
  {
    id: "web-database",
    title: "Web & Database",
    accent: "cyan",
    icon: "🌐",
    skills: ["PHP / MySQL", "HTML / CSS / Bootstrap", "Database Management", "Web Development", "Android Dev (basic)", "XAMPP / Apache"],
  },
  {
    id: "qa-tools",
    title: "QA, SEO & Tools",
    accent: "violet",
    icon: "🧪",
    skills: ["Manual Testing", "Test Case Writing", "Output Validation", "Google Search Console", "Google Analytics", "Semrush"],
  },
];
