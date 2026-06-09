export type ExperienceType = "work" | "education";

export interface ExperienceEntry {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: "cbo",
    type: "work",
    title: "Software Engineer I",
    organization: "Cooperative Bank of Oromia",
    period: "Sep 2023 – Present",
    description:
      "Building fintech platforms, mobile apps, and innovation ecosystem tools used across branches and field operations.",
  },
  {
    id: "hudhud",
    type: "work",
    title: "Software Engineer",
    organization: "HudHud Corporation PLC",
    period: "Jan 2023 – Present",
    description:
      "Shipping e-commerce and logistics products with 50K+ downloads, real-time tracking, and payment integrations.",
  },
  {
    id: "education",
    type: "education",
    title: "B.Sc. Computer Engineering",
    organization: "Jimma University",
    period: "2017 – 2022",
    description:
      "Foundation in software engineering, embedded systems, and computer architecture.",
  },
];
