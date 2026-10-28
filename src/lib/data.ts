export const site = {
  name: "CP Razal Nazim",
  fullName: "CP Razal Nazim",
  role: "Full Stack Developer(MERN)",
  location: "India",
  email: "cprazalnazim@gmail.com",
  phone: "+971 542154717",
  github: "https://github.com/razalcp",
  linkedin: "https://www.linkedin.com/in/cp-razal-nazim-748b3b117",
  oldPortfolio: "https://cp-razal-nazim-ouo7izg.gamma.site/",
  resumeUrl: "/resume.pdf",
} as const;

export const hero = {
  eyebrow: "Full Stack Developer — MERN",
  headline: ["Building software", "that ships to production."],
  statement:
    "I'm a full-stack developer with 2 years experience in working with React, Next.js, Node.js and NestJS. At Dignizant Technologies I build production web applications — from enterprise stock and billing systems to insurance software used in collaboration with an international client.",
  stackLine: "React · Next.js · Node.js · NestJS · Prisma · SQL · MongoDB",
} as const;

export const about = {
  paragraphs: [
    "I'm a self-taught full-stack developer focused on the MERN ecosystem — React, Next.js, Node.js, NestJS and both SQL and NoSQL databases. Since March 2026 I've been developing production-ready web applications at Dignizant Technologies, where I build and maintain features with Next.js, NestJS, Prisma and SQL.",
    "Before transitioning into software, I spent years working across engineering and client-facing roles — as a Project Engineer on telecom rollouts for Nokia, at Accenture, and internationally with ADNOC in Abu Dhabi. That background shapes how I build software today: with clear communication, attention to operational detail, and a focus on real business outcomes rather than just code.",
    "My work spans enterprise POS systems, insurance applications, e-commerce platforms and real-time booking systems — including deploying cloud-native solutions on AWS (EC2, S3) and collaborating directly with clients across time zones.",
  ],
  // facts: [
  //   { label: "Currently", value: "MERN Stack Developer @ Dignizant Technologies" },
  //   { label: "Based in", value: "India" },
  //   { label: "Education", value: "B.E. Electronics & Communication, Coorg Institute of Technology" },
  //   { label: "Training", value: "MERN Stack Developer Training, Brototype" },
  //   { label: "Cloud", value: "AWS EC2 · AWS S3 · Vercel" },
  // ],
  facts: [
    { label: "CURRENT STATUS", value: "Open to Opportunities" },
    { label: "BASED IN", value: "Dubai, United Arab Emirates" },
    { label: "VISA STATUS", value: "UAE Visit Visa" },
    { label: "Training", value: "MERN Stack Developer Training, Brototype" },
    { label: "Education", value: "B.E. Electronics & Communication, Coorg Institute of Technology" },
    { label: "TECHNOLOGIES & CLOUD", value: "React.js · Node.js · Next.js · AWS EC2 · AWS S3" },
  ],
} as const;

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { title: "Frontend", skills: ["React.js", "Next.js", "HTML", "CSS"] },
  { title: "Backend", skills: ["Node.js", "NestJS", "Express.js", "REST APIs"] },
  { title: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL"] },
  { title: "Languages", skills: ["JavaScript", "EJS"] },
  { title: "Cloud & Deployment", skills: ["AWS EC2", "AWS S3"] },
  { title: "Tools & Workflow", skills: ["Git", "GitHub", "Postman", "Prisma", "Figma", "Cloudinary"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "MERN Stack Developer",
    company: "Dignizant Technologies LLP",
    period: "Mar 2026 — Aug 2026",
    current: true,
    summary:
      "Developing production-ready web applications for company projects, including enterprise POS software and insurance-domain applications.",
    points: [
      "Contributing to the development of production-ready web applications used in real business operations.",
      "Developing and maintaining application features with Next.js, NestJS, Prisma and SQL.",
      "Collaborating with the development team on scalable solutions while following established coding standards and best practices.",
      "Working directly with a Europe-based client on Subtraid Insurance, a live production application.",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "SQL"],
  },
  {
    role: "MERN Stack Intern",
    company: "Brototype",
    period: "Aug 2024 — Mar 2026",
    summary:
      "Intensive full-stack training program building industry-level applications under professional mentorship.",
    points: [
      "Built two industry-level full-stack applications: an e-commerce platform and a real-time doctor appointment system.",
      "Developed projects under the guidance and code reviews of experienced industry professionals.",
      "Followed practical software development workflows and best practices that mirror real-world standards.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

export const earlierCareer = {
  title: "Earlier career",
  description:
    "Before moving into software development, I built a foundation across engineering and business roles:",
  roles: [
    "Project Engineer — Integrity Tele-networks (for Nokia), Bangalore · 2019–2020",
    "C-store Sales Attendant — ADNOC, Abu Dhabi · 2021–2023",
    "Sales & Marketing Specialist — Nissan Automotive, Wayanad · 2018",
    "Business Development Officer — Alzon Solutions, Calicut · 2017–2018",
    "BMS Engineer — Accenture in India · 2016–2017",
  ],
};

export type Project = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights?: string[];
  stack: string[];
  link?: { href: string; label: string };
  badges?: string[];
};

export const professionalProjects: Project[] = [
  {
    name: "Akshar POS",
    category: "Enterprise Software · Point of Sale",
    tagline: "Stock management & billing system for business operations.",
    description:
      "A complete point-of-sale platform covering inventory/stock management, billing and day-to-day business workflows. Built as production-oriented enterprise software, spanning both frontend and backend with integrated API and database layers.",
    highlights: [
      "Inventory & stock management workflows",
      "Billing and business operations tooling",
      "Frontend, backend and database integration",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "SQL"],
    link: {
      href: "https://www.aksharpos.com/",
      label: "Live Demo",
    },
    badges: ["Production", "Built at Dignizant Technologies"],
  },
  {
    name: "Subtraid Insurance",
    category: "Insurance Domain · Web Application",
    tagline: "Insurance application in production, developed with a Europe-based client.",
    description:
      "A live insurance-domain application maintained and improved for real business requirements. Developed through regular direct communication with a Europe-based client — translating requirements into features while keeping a production system stable.",
    highlights: [
      "Live application serving real business users",
      "Regular communication with an international client",
      "Ongoing maintenance and feature development",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "SQL"],
    link: {
      href: "https://insurance.subtraid.com/sign-in?redirect_url=https%3A%2F%2Finsurance.subtraid.com%2F",
      label: "Live Demo",
    },
    badges: ["In Production", "International Client"],
  },
];

export const personalProjects: Project[] = [
  {
    name: "Home Care",
    category: "Real-Time Platform · Doctor Appointments",
    tagline: "Real-time doctor appointment system with payments and chat.",
    description:
      "A full-stack appointment platform with slot booking, Stripe payment integration and real-time chat over Socket.IO. Frontend deployed on Vercel for fast global delivery; backend services run on AWS EC2.",
    highlights: [
      "Slot booking with Stripe payments",
      "Real-time chat via Socket.IO",
      "Vercel frontend + AWS EC2 backend deployment",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Socket.IO"],
    link: {
      href: "https://home-care-frontend-five.vercel.app",
      label: "Live Demo",
    },
    badges: ["Deployed", "Full-Stack"],
  },
  {
    name: "Shoe Factory",
    category: "E-Commerce · Full-Stack MERN",
    tagline: "Online shopping platform with secure payments and email notifications.",
    description:
      "A full-stack e-commerce application built with Node.js, Express.js and MongoDB, featuring Razorpay payment integration for secure checkout and Nodemailer for transactional email notifications. Deployed to AWS EC2.",
    highlights: [
      "Razorpay payment gateway integration",
      "Nodemailer transactional emails",
      "Deployed to AWS EC2",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "EJS", "Razorpay"],
    link: {
      href: "https://shoe-factory-nine.vercel.app/",
      label: "Live Demo",
    },
    badges: ["E-Commerce", "Self-Built"],
  },
  {
    name: "Women's NET",
    category: "Cyber Complaint Portal · Collaborative",
    tagline: "Anonymous cybercrime reporting portal with admin case management.",
    description:
      "A collaborative project — a cyber complaint portal enabling anonymous reporting of cybercrime, backed by admin-level case management and role-based access control for secure portal operation.",
    highlights: [
      "Anonymous cybercrime reporting flow",
      "Admin case management dashboard",
      "Role-based access control",
    ],
    stack: ["JavaScript", "Express.js", "MongoDB", "EJS"],
    link: {
      href: "https://github.com/kiran6177/WomensNET",
      label: "View on GitHub",
    },
    badges: ["Collaboration"],
  },
];
