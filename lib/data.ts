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
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  { title: "Premium Business Websites", description: "Corporate sites built to signal credibility from the first scroll." },
  { title: "Landing Pages", description: "Single-purpose pages engineered around one conversion goal." },
  { title: "Ecommerce Websites", description: "Storefronts where the product stays the hero, not the UI." },
  { title: "AI Integration", description: "AI-assisted workflows and features layered in where they genuinely help — not for their own sake." },
  { title: "Frontend Development", description: "Clean, component-first builds in React and Next.js that are easy to maintain and extend." },
  { title: "Performance Optimization", description: "Faster loads, cleaner code, better Core Web Vitals — measured, not assumed." },
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
    title: "Discovery & Strategy",
    description: "Before a single pixel moves, I get inside the business — goals, audience, competitors, constraints. The strategy is the foundation everything else stands on.",
  },
  {
    index: "02",
    title: "Experience Design",
    description: "Layouts, flows, and interfaces take shape here — not decoration, but decisions. Every screen earns its place before it's allowed to exist.",
  },
  {
    index: "03",
    title: "AI-Assisted Development",
    description: "Design becomes a living product — scalable, responsive, built to last. AI clears the repetitive work so precision goes where it matters most.",
  },
  {
    index: "04",
    title: "Optimization & Quality",
    description: "Every interaction gets refined, every device gets checked, every millisecond gets questioned. This is where good becomes exceptional.",
  },
  {
    index: "05",
    title: "Launch & Growth",
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
  personalName: "Mhd Thaju",
  role: "AI Web Developer & Digital Experience Builder",
  availability: "Available For Freelance Projects",
  statement: "I help startups, businesses, and founders build fast, scalable, and visually impressive websites using AI-assisted workflows and modern technologies.",
};

// FAQ answers below are drafted, professional starting copy — review and
// adjust the specifics (timelines, redesign scope, support terms) to match
// how you actually work before publishing.
export const faq = [
  {
    q: "How does the project process work?",
    a: "Every project starts with discovery and strategy, moves through design and AI-assisted development, then optimization and launch — the same five-step process outlined above, tailored to the scope of your project.",
  },
  {
    q: "How long does a project usually take?",
    a: "Timelines vary with scope — a focused landing page moves faster than a full business or ecommerce build. I'll give you a clear estimate after our first discovery conversation.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes. Redesigns start with an audit of what's working and what isn't, so the rebuild improves on a real foundation rather than starting from a blank page.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes — I stay available after launch for fixes, updates, and iteration as your site and business evolve.",
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
