import projectAurora from "@/assets/project-aurora.jpg";
import projectMono from "@/assets/project-mono.jpg";
import projectKinetic from "@/assets/project-kinetic.jpg";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  tools: string[];
  description: string;
  shortDescription: string;
  thumbnail: string;
  heroImage: string;
  images: string[];
  challenge: string;
  solution: string;
  outcome: string;
  featured: boolean;
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "aurora-brand-identity",
    title: "Aurora",
    category: "Branding",
    year: "2024",
    client: "Aurora Tech",
    role: "Brand Designer & Art Director",
    tools: ["Figma", "Illustrator", "After Effects"],
    description: "A complete brand identity system for a next-generation AI startup, featuring a dynamic visual language that evolves with user interaction.",
    shortDescription: "AI startup brand identity with dynamic visual systems",
    thumbnail: projectAurora,
    heroImage: projectAurora,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    challenge: "Create a brand identity that feels both cutting-edge and approachable, avoiding the cold, sterile aesthetics often associated with AI companies.",
    solution: "Developed a warm, organic visual system with flowing gradients and human-centric typography, balanced with precise geometric elements that suggest technological precision.",
    outcome: "The rebrand contributed to a 340% increase in brand recognition and helped secure $12M in Series A funding.",
    featured: true,
    color: "38 90% 55%",
  },
  {
    id: "2",
    slug: "mono-editorial",
    title: "Mono Editorial",
    category: "Web Design",
    year: "2024",
    client: "Mono Magazine",
    role: "Lead Designer",
    tools: ["Figma", "Webflow", "GSAP"],
    description: "An award-winning digital magazine experience with immersive storytelling, scroll-driven animations, and a revolutionary reading interface.",
    shortDescription: "Award-winning digital magazine experience",
    thumbnail: projectMono,
    heroImage: projectMono,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    challenge: "Reinvent the digital reading experience for a publication known for its bold editorial voice and experimental approach.",
    solution: "Created an interactive reading interface with dynamic typography, contextual imagery, and ambient sound design that responds to scroll position.",
    outcome: "Featured on Awwwards SOTD and increased average reading time by 280%.",
    featured: true,
    color: "0 0% 50%",
  },
  {
    id: "3",
    slug: "kinetic-type",
    title: "Kinetic Type",
    category: "Motion",
    year: "2023",
    client: "Type Conference",
    role: "Motion Designer",
    tools: ["After Effects", "Cinema 4D", "Figma"],
    description: "A series of kinetic typography explorations for an international typography conference, pushing the boundaries of motion and letterform.",
    shortDescription: "Experimental kinetic typography for Type Conference",
    thumbnail: projectKinetic,
    heroImage: projectKinetic,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    challenge: "Create visually striking motion pieces that celebrate typography while appealing to a diverse, international audience of type enthusiasts.",
    solution: "Developed a modular animation system where each letter becomes a character in a larger narrative, combining 2D and 3D techniques.",
    outcome: "The opening title sequence received a standing ovation and was shared over 50,000 times on social media.",
    featured: true,
    color: "280 80% 50%",
  },
  {
    id: "4",
    slug: "verdant-packaging",
    title: "Verdant",
    category: "Branding",
    year: "2023",
    client: "Verdant Botanicals",
    role: "Creative Director",
    tools: ["Illustrator", "Dimension", "Photoshop"],
    description: "Sustainable packaging design for a premium botanical skincare line, blending luxury aesthetics with eco-conscious materials.",
    shortDescription: "Sustainable luxury packaging for botanical skincare",
    thumbnail: "/placeholder.svg",
    heroImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    challenge: "Design packaging that feels premium and luxurious while using 100% sustainable, recyclable materials.",
    solution: "Created an embossed, textured design system using plant-based inks and recycled paper, with a tactile quality that elevates the unboxing experience.",
    outcome: "Product line sold out within 48 hours of launch. Packaging won a Dieline Award for sustainability.",
    featured: false,
    color: "150 60% 40%",
  },
  {
    id: "5",
    slug: "synthwave-posters",
    title: "Synthwave Series",
    category: "Posters",
    year: "2023",
    client: "Personal Project",
    role: "Designer & Illustrator",
    tools: ["Illustrator", "Photoshop", "Blender"],
    description: "A limited edition poster series exploring retrofuturism and synthwave aesthetics through bold gradients and neon typography.",
    shortDescription: "Limited edition retrofuturistic poster series",
    thumbnail: "/placeholder.svg",
    heroImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    challenge: "Create a cohesive series of posters that capture the essence of synthwave culture while bringing fresh visual perspectives.",
    solution: "Combined 3D rendering with hand-drawn elements, creating a unique hybrid style that bridges digital precision with organic imperfection.",
    outcome: "Limited edition of 200 prints sold out in 3 hours. Featured in Computer Arts Magazine.",
    featured: false,
    color: "320 80% 50%",
  },
  {
    id: "6",
    slug: "neural-app",
    title: "Neural",
    category: "Web Design",
    year: "2024",
    client: "Neural Health",
    role: "Product Designer",
    tools: ["Figma", "Framer", "Principle"],
    description: "A meditation and mental wellness app with an emphasis on calm, intuitive interfaces and personalized user journeys.",
    shortDescription: "Mental wellness app with personalized experiences",
    thumbnail: "/placeholder.svg",
    heroImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    challenge: "Design a mental wellness app that stands out in a crowded market while genuinely supporting user wellbeing.",
    solution: "Created an adaptive interface that responds to user mood and preferences, with generative visuals and ambient soundscapes.",
    outcome: "4.9 star rating on App Store with over 100,000 downloads in first month.",
    featured: true,
    color: "200 70% 50%",
  },
];

export const categories = [
  "All",
  "Branding",
  "Web Design",
  "Motion",
  "Posters",
  "Social Media",
];

export const clients = [
  "Google",
  "Spotify",
  "Nike",
  "Apple",
  "Airbnb",
  "Netflix",
  "Stripe",
  "Figma",
  "Adobe",
  "Microsoft",
];

export const services = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Strategic brand development from concept to execution. Logo design, visual systems, brand guidelines, and comprehensive identity packages.",
    deliverables: ["Logo & Wordmark", "Brand Guidelines", "Color Systems", "Typography", "Icon Library", "Brand Applications"],
    timeline: "4-8 weeks",
  },
  {
    id: "web-design",
    title: "Web & Digital Design",
    description: "Custom website design and digital experiences. From marketing sites to complex web applications, with a focus on user experience and visual impact.",
    deliverables: ["Website Design", "UI/UX Design", "Responsive Layouts", "Design Systems", "Prototyping", "Handoff Documentation"],
    timeline: "6-12 weeks",
  },
  {
    id: "motion",
    title: "Motion & Interaction",
    description: "Bring brands to life through motion. Title sequences, social content, UI animations, and interactive experiences.",
    deliverables: ["Motion Graphics", "Title Sequences", "UI Animations", "Social Content", "Video Editing", "Interactive Prototypes"],
    timeline: "2-6 weeks",
  },
  {
    id: "visual-systems",
    title: "Visual Systems",
    description: "Scalable design systems that grow with your brand. Component libraries, pattern libraries, and design tokens.",
    deliverables: ["Design Tokens", "Component Library", "Pattern Library", "Documentation", "Figma Libraries", "Code Handoff"],
    timeline: "8-16 weeks",
  },
  {
    id: "editorial",
    title: "Editorial & Print",
    description: "Publication design, editorial layouts, and print collateral. Books, magazines, reports, and marketing materials.",
    deliverables: ["Magazine Design", "Book Layout", "Annual Reports", "Marketing Collateral", "Packaging", "Environmental Design"],
    timeline: "4-10 weeks",
  },
];

export const testimonials = [
  {
    id: "1",
    quote: "Working with Marcus was transformative for our brand. He doesn't just design—he thinks strategically about every touchpoint.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Aurora Tech",
  },
  {
    id: "2",
    quote: "The attention to detail is extraordinary. Every pixel, every animation, every interaction feels intentional and premium.",
    author: "James Wright",
    role: "Creative Director",
    company: "Mono Magazine",
  },
  {
    id: "3",
    quote: "Marcus elevated our entire visual language. The work speaks for itself—it's been featured everywhere.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Verdant Botanicals",
  },
];

export const experience = [
  {
    id: "1",
    role: "Senior Art Director",
    company: "Studio Freight",
    period: "2022 - Present",
    description: "Leading brand and digital design projects for global clients.",
  },
  {
    id: "2",
    role: "Lead Designer",
    company: "Pentagram",
    period: "2019 - 2022",
    description: "Worked on award-winning brand identities and digital experiences.",
  },
  {
    id: "3",
    role: "Visual Designer",
    company: "Google",
    period: "2017 - 2019",
    description: "Designed interfaces and visual systems for Google products.",
  },
  {
    id: "4",
    role: "Junior Designer",
    company: "IDEO",
    period: "2015 - 2017",
    description: "Started career working on human-centered design projects.",
  },
];

export const skills = [
  "Brand Strategy",
  "Visual Identity",
  "Typography",
  "UI/UX Design",
  "Motion Design",
  "Art Direction",
  "Design Systems",
  "Creative Direction",
];

export const tools = [
  "Figma",
  "Adobe Creative Suite",
  "After Effects",
  "Cinema 4D",
  "Blender",
  "Webflow",
  "Framer",
  "GSAP",
];
