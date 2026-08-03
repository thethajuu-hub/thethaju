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
    title: "TheAIEcom",
    tagline: "An AI-native storefront built for conversion",
    description:
      "A premium AI-powered ecommerce learning platform designed to help entrepreneurs understand, launch, and scale modern online businesses. Built with a clean interface, structured learning experience, responsive design, and a strong focus on usability and performance.",
    url: "https://the-ai-ecom.vercel.app/",
    year: "2025",
    category: "AI Ecommerce Platform",
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
    title: "NovaBud",
    tagline: "A product page that behaves like a product",
    description:
      "A futuristic product showcase website built to demonstrate immersive storytelling, modern UI design, smooth interactions, and engaging user experiences. Designed to highlight premium products through elegant visuals and seamless animations.",
    url: "https://novabud.vercel.app/",
    year: "2025",
    category: "Premium Product Experience",
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
  {
    id: "al-baraa",
    index: "03",
    title: "Al Baraa Al Aliyah",
    tagline: "A trust-first corporate site for a PRO services company",
    description:
      "A production-ready corporate website for a Dubai-based documents clearing and PRO services company — covering company formation, visa services, VAT registration, and government documentation. Built to read as established and trustworthy from the first scroll, with a full services breakdown and a working contact pipeline for client inquiries.",
    url: "https://albaraaalaliyah.vercel.app/",
    year: "2026",
    category: "Corporate / PRO Services Website",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Full breakdown of 10+ government and business services",
      "Trust-building sections with client testimonials and stats",
      "Contact form routed directly to the business inbox",
      "SEO-optimized, mobile-first corporate layout",
    ],
    process: [
      "Translated a services-heavy business into a clear, scannable sitemap",
      "Prioritized credibility signals for a trust-sensitive PRO services audience",
      "Built entirely in Next.js and Tailwind for a fast, maintainable site",
      "Wired up a real contact pipeline so inquiries reach the business directly",
    ],
    coverGradient: "from-[#0f1210] via-[#0A0A0A] to-black",
  },
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  { title: "Premium Business Websites", description: "Corporate sites built to signal credibility from the first scroll." },
  { title: "Landing Pages", description: "Single-purpose pages engineered around one conversion goal." },
  { title: "Ecommerce Websites", description: "Storefronts where the product stays the hero, not the UI." },
  { title: "AI Integration", description: "AI-assisted workflows and features layered in where they genuinely help." },
  { title: "Frontend Development", description: "Clean, component-first builds in React and Next.js." },
  { title: "Performance Optimization", description: "Faster loads, cleaner code, better Core Web Vitals." },
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

export const processIntro = {
  title: "My Process",
  subtitle: "Five deliberate stages that turn an idea into a digital experience worth building a brand around.",
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description: "Before a single pixel moves, I get inside the business — goals, audience, competitors, constraints. The strategy is the foundation everything else stands on.",
  },
  {
    index: "02",
    title: "Design",
    description: "Layouts, flows, and interfaces take shape here — not decoration, but decisions. Every screen earns its place before it's allowed to exist.",
  },
  {
    index: "03",
    title: "AI-Powered Development",
    description: "Design becomes a living product — scalable, responsive, built to last. AI clears the repetitive work so precision goes where it matters most.",
  },
  {
    index: "04",
    title: "Testing",
    description: "Every interaction gets refined, every device gets checked, every millisecond gets questioned. This is where good becomes exceptional.",
  },
  {
    index: "05",
    title: "Launch",
    description: "The site ships polished and production-ready — with a technical foundation built to keep growing long after launch day.",
  },
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
  name: "THE THAJU",
  personalName: "Thajudheen",
  role: "Digital Designer & Developer",
  availability: "Available For Freelance Projects",
  statement: "I build fast, scalable websites for startups and founders using AI-assisted workflows.",
};

// Answers are drafted, professional starting copy — review and adjust the
// specifics (redesign scope, ecommerce approach, engagement process) to
// match how you actually work before publishing.
export const faq = [
  {
    q: "What services do you provide?",
    a: "Premium business websites, landing pages, ecommerce builds, and AI-integrated web experiences — end-to-end, from strategy through launch.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. Redesigns start with an audit of what's working and what isn't, so the rebuild improves on a real foundation rather than starting blank.",
  },
  {
    q: "Do you build ecommerce websites?",
    a: "Yes — storefronts built around usability and conversion, with the product kept as the hero rather than the interface around it.",
  },
  {
    q: "How do we start working together?",
    a: "Reach out through the contact form or email below with a short brief. I'll follow up with questions and a clear next step.",
  },
  {
    q: "What technologies do you use?",
    a: "Next.js, TypeScript, and Tailwind CSS at the core, with Framer Motion, GSAP, and Three.js layered in for motion and 3D where it earns its place.",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Let's Connect", href: "#connect" },
];
