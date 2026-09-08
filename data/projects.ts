export type CompanyId = "cbo" | "hudhud" | "other";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  company: CompanyId;
  companyLabel: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

export const projects: Project[] = [
  {
    id: "merchant-nation",
    title: "Merchant Nation Command",
    company: "cbo",
    companyLabel: "Cooperative Bank of Oromia",
    description:
      "Full-stack field operations and branch management platform. Solo build with Next.js frontend, Node.js backend, and full cloud deployment.",
    tags: ["Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    links: [
      {
        label: "Live Demo",
        url: "https://merchant-nation-2omx.vercel.app",
      },
    ],
  },
  {
    id: "dxvalley",
    title: "DxValley",
    company: "cbo",
    companyLabel: "Cooperative Bank of Oromia",
    description:
      "Innovation and startup ecosystem platform powered by Cooperative Bank of Oromia, connecting entrepreneurs with resources and mentorship.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    links: [{ label: "Visit Site", url: "https://dxvalley.com" }],
  },
  {
    id: "cooperatives",
    title: "Bank Cooperatives Management System",
    company: "cbo",
    companyLabel: "Cooperative Bank of Oromia",
    description:
      "Web platform for managing member finances, loans, and communications across local cooperatives — all in one secure place.",
    tags: ["React", "Next.js", "Firebase", "TailwindCSS"],
    links: [
      {
        label: "Innovation Hub",
        url: "https://dxvalley.com/innovationhub",
      },
      {
        label: "GitHub",
        url: "https://github.com/AbdulsemedM/Cooperatives-Management-system",
      },
    ],
  },
  {
    id: "michu-affiliate",
    title: "Michu Lending Affiliate App",
    company: "cbo",
    companyLabel: "Cooperative Bank of Oromia",
    description:
      "Flutter mobile app with a rewards engine for loan referrals and real-time points redemption. Live on Android and iOS.",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    links: [],
  },
  {
    id: "vsla",
    title: "VSLA Mobile App",
    company: "cbo",
    companyLabel: "Cooperative Bank of Oromia",
    description:
      "Empowers rural communities with structured savings, loan access, and financial literacy. Member ledger, meetings, and secure loan applications.",
    tags: ["Flutter", "Dart", "Firebase", "Spring Boot", "React"],
    links: [
      {
        label: "Innovation Hub",
        url: "https://dxvalley.com/innovationhub",
      },
      {
        label: "GitHub",
        url: "https://github.com/AbdulsemedM/Saving-Agency",
      },
    ],
  },
  {
    id: "michu-mizan",
    title: "Michu-Mizan",
    company: "cbo",
    companyLabel: "Cooperative Bank of Oromia",
    description:
      "Interest-free, Sharia-compliant financing solutions for Micro, Small, and Medium Enterprises (MSMEs) to support ethical business growth.",
    tags: ["Flutter", "Dart", "Firebase", "Stripe"],
    links: [
      { label: "Website", url: "https://michumizan.com/en" },
      {
        label: "GitHub",
        url: "https://github.com/AbdulsemedM/Is-Fin",
      },
    ],
  },
  {
    id: "commercepal",
    title: "CommercePal",
    company: "hudhud",
    companyLabel: "HudHud Corporation PLC",
    description:
      "Full-featured B2B and B2C e-commerce app with 50K+ downloads on Google Play.",
    tags: ["Flutter", "Firebase", "Stripe", "Bloc"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.commercepal.commercepal",
      },
      {
        label: "GitHub",
        url: "https://github.com/AbdulsemedM/Com-Cus",
      },
    ],
  },
  {
    id: "hudhud-express",
    title: "HudHud Express",
    company: "hudhud",
    companyLabel: "HudHud Corporation PLC",
    description:
      "Smart logistics and courier management app. Efficiently manage shipments, track deliveries, scan barcodes, and update order statuses in real time.",
    tags: ["Flutter", "Firebase", "Socket.io", "Stripe"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.hudhud.courier",
      },
      {
        label: "GitHub",
        url: "https://github.com/AbdulsemedM/Courier-App",
      },
    ],
  },
  {
    id: "abaymart",
    title: "AbayMart",
    company: "hudhud",
    companyLabel: "HudHud Corporation PLC",
    description:
      "Customer shopping app with Telebirr payments, order tracking, and in-app chat.",
    tags: ["Flutter", "Firebase", "Telebirr", "Node.js"],
    links: [
      { label: "Website", url: "https://abbaymart.com" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.abaymart.user",
      },
    ],
  },
  {
    id: "abaystock",
    title: "AbayStock",
    company: "other",
    companyLabel: "AbayStock",
    description:
      "Multi-vendor inventory platform with live SKU visibility across warehouses, role-based access, barcode workflows, and purchase-to-fulfillment stock tracking.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Inventory"],
    links: [{ label: "Visit Site", url: "https://abbaystock.com/" }],
  },
  {
    id: "hudhud-delivery",
    title: "Hudhud Delivery",
    company: "hudhud",
    companyLabel: "HudHud Corporation PLC",
    description:
      "On-demand food and parcel delivery app that connects customers with nearby verified drivers, real-time tracking, and affordable 24/7 service.",
    tags: ["Flutter", "Firebase", "Maps", "Real-time"],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/hudhud-delivery/id1588025471",
      },
    ],
  },
  {
    id: "hudhud-delivery-driver",
    title: "Hudhud Delivery Driver",
    company: "hudhud",
    companyLabel: "HudHud Corporation PLC",
    description:
      "Driver-side companion app for accepting delivery jobs, navigating to customers, and managing food and parcel orders in real time.",
    tags: ["Flutter", "Firebase", "Maps", "Real-time"],
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/hudhud-delivery-driver/id1588025482",
      },
    ],
  },
  {
    id: "tina-driver",
    title: "Tina Driver",
    company: "other",
    companyLabel: "Tina Mart",
    description:
      "Official in-house delivery app for Tina Mart drivers to manage assigned orders, routing, and delivery status updates in real time.",
    tags: ["Flutter", "Firebase", "GitHub Actions"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.tina.driver",
      },
    ],
  },
  {
    id: "iseey",
    title: "ISEEY",
    company: "other",
    companyLabel: "ISEEY",
    description:
      "Social discovery app for connecting with people in clubs, bars, and restaurants using location-based check-ins and in-app chat.",
    tags: ["Flutter"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.iseey.de",
      },
      { label: "Website", url: "https://iseey.app/" },
    ],
  },
];

export const companyGroups: { id: CompanyId; label: string }[] = [
  { id: "cbo", label: "Cooperative Bank of Oromia" },
  { id: "hudhud", label: "HudHud Corporation PLC" },
  { id: "other", label: "Other Projects" },
];
