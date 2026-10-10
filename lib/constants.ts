export const SITE = {
  name: "Abdulsemed Mussema",
  firstName: "Abdulsemed",
  title: "Senior Software Engineer & Co-founder",
  shortTitle: "Senior Software Engineer",
  tagline: "Aspiring Co-founder",
  email: "abdumussema22@gmail.com",
  phone: "+251 94 651 4836",
  github: "https://github.com/AbdulsemedM",
  linkedin: "https://www.linkedin.com/in/abdulsemedm",
  location: "Addis Ababa, Ethiopia",
  timeZone: "Africa/Addis_Ababa",
  resumePath: "/resume.pdf",
} as const;

export const SEO = {
  title: "Abdulsemed Mussema — Senior Software Engineer & Co-founder",
  description:
    "Portfolio of Abdulsemed Mussema, Senior Software Engineer specializing in Flutter, React, Firebase, payment integrations, and cloud-native apps.",
} as const;

export const SECTION_IDS = {
  about: "about",
  capabilities: "capabilities",
  projects: "work",
  experience: "experience",
  contact: "contact",
} as const;

export const NAV_LINKS = [
  { label: "About", href: `#${SECTION_IDS.about}` },
  { label: "Work", href: `#${SECTION_IDS.projects}` },
  { label: "Experience", href: `#${SECTION_IDS.experience}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
] as const;
