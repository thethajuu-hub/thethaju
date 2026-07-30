export interface Project {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  year: string;
  category: string;
  technologies: string[];
  features: string[];
  process: string[];
  coverGradient: string;
}

export const projects: Project[] = [
  {
    id: "the-ai-ecom",
    index: "01",
    title: "The AI Ecom",
    tagline: "An AI-native storefront built for conversion",
    description:
      "A full e-commerce experience where AI-assisted merchandising, fast checkout flows, and a calm visual language work together to keep the focus on the product, not the interface.",
    url: "https://the-ai-ecom.vercel.app/",
    year: "2025",
    category: "E-commerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    features: [
      "AI-assisted product discovery and recommendations",
      "Streamlined one-page checkout",
      "Responsive product gallery with device-aware previews",
      "Performance-first image and route loading",
    ],
    process: [
      "Mapped the buying journey before touching a single screen",
      "Prototyped layout rhythm in low-fidelity, then layered in motion",
      "Built component-first in Next.js for a maintainable storefront",
      "Tuned Core Web Vitals through iterative profiling",
    ],
    coverGradient: "from-[#141414] via-[#0A0A0A] to-black",
  },
  {
    id: "nova-buds",
    index: "02",
    title: "NOVA Buds",
    tagline: "A product page that behaves like a product",
    description:
      "A landing page for a wireless earbuds line, built around a real-time 3D model viewer so visitors can rotate and inspect the product the way they would in a store.",
    url: "https://novabud.vercel.app/",
    year: "2025",
    category: "Product Landing Page",
    technologies: ["Next.js", "React Three Fiber", "Three.js", "Tailwind CSS"],
    features: [
      "Interactive 360° 3D model viewer of the earbuds",
      "Scroll-triggered feature reveals",
      "Mobile-optimized 3D fallback experience",
      "Studio-style lighting and materials",
    ],
    process: [
      "Sourced and optimized a lightweight 3D asset for the web",
      "Built the viewer first, then designed the page around it",
      "Layered scroll storytelling on top of the product core",
      "Benchmarked 3D performance across devices",
    ],
    coverGradient: "from-[#12100A] via-[#0A0A0A] to-black",
  },
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  { title: "Digital Experience Design", description: "Interfaces designed around how people actually read, feel, and decide." },
  { title: "Premium Website Development", description: "Full builds engineered around typography, spacing, and motion — not templates." },
  { title: "AI-Powered Web Experiences", description: "AI-assisted workflows that speed up build time without cutting quality." },
  { title: "Landing Pages", description: "Single-purpose pages engineered around one conversion goal." },
  { title: "Business Websites", description: "Corporate sites built to signal credibility from the first scroll." },
  { title: "Interactive Web Experiences", description: "Motion and 3D used with restraint — to support the story, not distract from it." },
];

export interface TechCategory {
  label: string;
  items: string[];
}

export const technologies: TechCategory[] = [
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { label: "Animation", items: ["Framer Motion", "GSAP", "Lenis"] },
  { label: "3D", items: ["Three.js", "React Three Fiber"] },
  { label: "Tools", items: ["Git", "GitHub", "Vercel", "OpenAI", "Claude AI"] },
];

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  { index: "01", title: "Discovery", description: "Understanding the business, the audience, and what the site actually needs to do." },
  { index: "02", title: "Strategy", description: "Defining sitemap, content structure, and technical approach before design starts." },
  { index: "03", title: "Design", description: "Establishing type, color, and layout systems specific to the brand." },
  { index: "04", title: "Development", description: "Building component-first in Next.js and TypeScript for a maintainable codebase." },
  { index: "05", title: "Launch", description: "Shipping to Vercel with a clean, versioned GitHub history, and staying on for support." },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  display?: string;
}

export const stats: Stat[] = [
  { value: 12, suffix: "+", label: "Projects Built" },
  { value: 20, suffix: "+", label: "Technologies Used" },
  { value: 10, suffix: "+", label: "Websites Created" },
  { value: 0, suffix: "", label: "Continuous Learning", display: "24/7" },
];

export const social = {
  email: "thethajuu@gmail.com",
  github: "https://github.com/thethajuu-hub",
  instagram: "https://www.instagram.com/thethajuu",
  x: "https://x.com/thethajuu",
  location: "Dubai, United Arab Emirates",
};

export const brand = {
  role: "Digital Experience Designer & Developer",
  availability: "Available For Freelance Projects",
  statement: "Crafting premium digital experiences through design, motion and modern web technologies.",
};

export const workingTogether = [
  {
    q: "How long does a typical project take?",
    a: "[Add your real answer — e.g. typical timeline for a landing page vs. a full build]",
  },
  {
    q: "Do I own the code and design after launch?",
    a: "[Add your real answer — your actual ownership/licensing terms]",
  },
  {
    q: "What happens after launch?",
    a: "[Add your real answer — what support or updates you offer post-launch]",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Selected Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "What I Do", href: "#what-i-do" },
  { label: "Process", href: "#process" },
  { label: "Let's Connect", href: "#connect" },
];
