export type TechIconId =
  | "flutter"
  | "dart"
  | "react"
  | "nextjs"
  | "tailwindcss"
  | "nodejs"
  | "go"
  | "python"
  | "java"
  | "postgresql"
  | "mongodb"
  | "firebase"
  | "sqlite"
  | "aws"
  | "docker"
  | "githubactions"
  | "figma"
  | "cursor"
  | "git"
  | "stripe"
  | "paypal"
  | "chapa"
  | "telebirr";

export interface TechItem {
  name: string;
  icon: TechIconId;
}

export interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

export const techStack: TechCategory[] = [
  {
    id: "mobile",
    label: "Mobile",
    items: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TailwindCSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Go", icon: "go" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    items: [
      { name: "Stripe", icon: "stripe" },
      { name: "PayPal", icon: "paypal" },
      { name: "Chapa", icon: "chapa" },
      { name: "Telebirr", icon: "telebirr" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { name: "Figma", icon: "figma" },
      { name: "Cursor", icon: "cursor" },
      { name: "Git", icon: "git" },
    ],
  },
];
