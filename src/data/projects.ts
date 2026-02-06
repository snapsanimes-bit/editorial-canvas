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
    images: [projectAurora, projectMono, projectKinetic],
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
    images: [projectMono, projectAurora, projectKinetic],
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
    images: [projectKinetic, projectAurora, projectMono],
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
    thumbnail: projectAurora,
    heroImage: projectAurora,
    images: [projectAurora, projectMono, projectKinetic],
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
    thumbnail: projectKinetic,
    heroImage: projectKinetic,
    images: [projectKinetic, projectMono, projectAurora],
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
    thumbnail: projectMono,
    heroImage: projectMono,
    images: [projectMono, projectAurora, projectKinetic],
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

// Major brand clients
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
    description: "Strategic brand development from concept to execution. Logo design, visual systems, brand guidelines, and comprehensive identity packages that position your brand for success.",
    deliverables: ["Logo & Wordmark", "Brand Guidelines", "Color Systems", "Typography", "Icon Library", "Brand Applications"],
    timeline: "4-8 weeks",
    price: "Starting at $15,000",
  },
  {
    id: "web-design",
    title: "Web & Digital Design",
    description: "Custom website design and digital experiences. From marketing sites to complex web applications, with a focus on user experience, conversion optimization, and visual impact.",
    deliverables: ["Website Design", "UI/UX Design", "Responsive Layouts", "Design Systems", "Prototyping", "Handoff Documentation"],
    timeline: "6-12 weeks",
    price: "Starting at $20,000",
  },
  {
    id: "motion",
    title: "Motion & Interaction",
    description: "Bring brands to life through motion. Title sequences, social content, UI animations, and interactive experiences that captivate and engage your audience.",
    deliverables: ["Motion Graphics", "Title Sequences", "UI Animations", "Social Content", "Video Editing", "Interactive Prototypes"],
    timeline: "2-6 weeks",
    price: "Starting at $8,000",
  },
  {
    id: "visual-systems",
    title: "Visual Systems",
    description: "Scalable design systems that grow with your brand. Component libraries, pattern libraries, and design tokens that ensure consistency across all touchpoints.",
    deliverables: ["Design Tokens", "Component Library", "Pattern Library", "Documentation", "Figma Libraries", "Code Handoff"],
    timeline: "8-16 weeks",
    price: "Starting at $25,000",
  },
  {
    id: "editorial",
    title: "Editorial & Print",
    description: "Publication design, editorial layouts, and print collateral. Books, magazines, reports, and marketing materials that make a lasting impression.",
    deliverables: ["Magazine Design", "Book Layout", "Annual Reports", "Marketing Collateral", "Packaging", "Environmental Design"],
    timeline: "4-10 weeks",
    price: "Starting at $12,000",
  },
];

export const testimonials = [
  {
    id: "1",
    quote: "Working with Marcus was transformative for our brand. He doesn't just design—he thinks strategically about every touchpoint. Our conversion rate increased 156% after the rebrand.",
    author: "Sarah Chen",
    role: "CEO",
    company: "Aurora Tech",
    avatar: "SC",
    rating: 5,
  },
  {
    id: "2",
    quote: "The attention to detail is extraordinary. Every pixel, every animation, every interaction feels intentional and premium. Marcus elevated our entire digital presence.",
    author: "James Wright",
    role: "Creative Director",
    company: "Mono Magazine",
    avatar: "JW",
    rating: 5,
  },
  {
    id: "3",
    quote: "Marcus elevated our entire visual language. The packaging design won industry awards and drove a 340% increase in shelf appeal. An absolute pleasure to work with.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "Verdant Botanicals",
    avatar: "ER",
    rating: 5,
  },
  {
    id: "4",
    quote: "I've worked with many designers, but Marcus brings a unique combination of strategic thinking and creative excellence. He truly understands how to make brands stand out.",
    author: "Michael Torres",
    role: "VP of Marketing",
    company: "Neural Health",
    avatar: "MT",
    rating: 5,
  },
  {
    id: "5",
    quote: "The motion design work Marcus created for our conference was phenomenal. The opening sequence got a standing ovation. Highly recommend for any creative project.",
    author: "Lisa Nakamura",
    role: "Conference Director",
    company: "Type Conference",
    avatar: "LN",
    rating: 5,
  },
];

export const experience = [
  {
    id: "1",
    role: "Senior Art Director",
    company: "Studio Freight",
    period: "2022 - Present",
    location: "New York, NY",
    description: "Leading brand and digital design projects for global Fortune 500 clients including Nike, Google, and Spotify. Managing a team of 5 designers.",
    achievements: ["Led rebrand for 3 Fortune 500 companies", "Increased team efficiency by 40%", "Won 12 industry awards"],
    type: "work" as const,
  },
  {
    id: "2",
    role: "Lead Designer",
    company: "Pentagram",
    period: "2019 - 2022",
    location: "New York, NY",
    description: "Worked on award-winning brand identities and digital experiences for clients including Mastercard, Citibank, and The New York Times.",
    achievements: ["D&AD Pencil for Mastercard rebrand", "Led 15+ major brand projects", "Mentored 8 junior designers"],
    type: "work" as const,
  },
  {
    id: "3",
    role: "Visual Designer",
    company: "Google",
    period: "2017 - 2019",
    location: "San Francisco, CA",
    description: "Designed interfaces and visual systems for Google products including Gmail, Google Calendar, and Material Design contributions.",
    achievements: ["Contributed to Material Design 2.0", "Shipped features to 1B+ users", "Patent holder for UI innovations"],
    type: "work" as const,
  },
  {
    id: "4",
    role: "Junior Designer",
    company: "IDEO",
    period: "2015 - 2017",
    location: "San Francisco, CA",
    description: "Started career working on human-centered design projects across healthcare, education, and consumer products sectors.",
    achievements: ["Core77 Design Award", "Published case study in Fast Company", "Developed design research methodology"],
    type: "work" as const,
  },
];

export const education = [
  {
    id: "edu-1",
    role: "MFA Visual Communication",
    company: "Rhode Island School of Design",
    period: "2013 - 2015",
    location: "Providence, RI",
    description: "Graduated with honors. Thesis on generative typography systems.",
    type: "education" as const,
  },
  {
    id: "edu-2",
    role: "BFA Graphic Design",
    company: "Parsons School of Design",
    period: "2009 - 2013",
    location: "New York, NY",
    description: "Dean's List. Focus on typography and interactive design.",
    type: "education" as const,
  },
];

export const skills = [
  { name: "Brand Strategy", level: 95 },
  { name: "Visual Identity", level: 92 },
  { name: "Typography", level: 94 },
  { name: "UI/UX Design", level: 90 },
  { name: "Motion Design", level: 85 },
  { name: "Art Direction", level: 93 },
  { name: "Design Systems", level: 88 },
  { name: "Creative Direction", level: 91 },
];

export const tools = [
  { name: "Figma", level: 98, icon: "figma" },
  { name: "Adobe Photoshop", level: 95, icon: "photoshop" },
  { name: "Adobe Illustrator", level: 94, icon: "illustrator" },
  { name: "After Effects", level: 88, icon: "aftereffects" },
  { name: "Cinema 4D", level: 75, icon: "cinema4d" },
  { name: "Blender", level: 70, icon: "blender" },
  { name: "Webflow", level: 85, icon: "webflow" },
  { name: "Framer", level: 82, icon: "framer" },
];

export const awards = [
  { year: "2024", title: "Awwwards Site of the Day", project: "Mono Editorial" },
  { year: "2024", title: "FWA of the Day", project: "Aurora Tech" },
  { year: "2023", title: "D&AD Pencil", project: "Kinetic Type" },
  { year: "2023", title: "Dieline Award", project: "Verdant Botanicals" },
  { year: "2023", title: "Communication Arts", project: "Neural App" },
  { year: "2022", title: "Red Dot Design Award", project: "Mastercard Rebrand" },
  { year: "2022", title: "Webby Award", project: "NYT Digital Edition" },
  { year: "2021", title: "Type Directors Club", project: "Type Conference Identity" },
];

export const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Happy Clients" },
  { value: "25+", label: "Awards Won" },
];

export const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/in/marcus-anderson", platform: "linkedin" },
  { name: "Twitter/X", href: "https://twitter.com/marcusdesigns", platform: "twitter" },
  { name: "Instagram", href: "https://instagram.com/marcus.designs", platform: "instagram" },
  { name: "Dribbble", href: "https://dribbble.com/marcus", platform: "dribbble" },
  { name: "Behance", href: "https://behance.net/marcus", platform: "behance" },
];

export const contactInfo = {
  email: "hello@marcus.design",
  phone: "+1 (212) 555-0147",
  location: "New York, NY, USA",
  timezone: "EST (UTC-5)",
  availability: "Available for new projects",
  responseTime: "Typically responds within 24-48 hours",
};

export const faq = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope. Brand identity projects typically take 4-8 weeks, while comprehensive website designs can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you work with startups?",
    answer: "Absolutely! I love working with startups at various stages. I offer flexible engagement models that can scale with your growth. Many of my most rewarding projects have been with early-stage companies.",
  },
  {
    question: "What's your pricing structure?",
    answer: "I offer project-based pricing tailored to each client's specific needs and scope. After our initial conversation, I'll provide a detailed proposal with transparent pricing. Retainer arrangements are also available for ongoing partnerships.",
  },
  {
    question: "Do you handle development as well?",
    answer: "While my primary focus is design, I collaborate with a trusted network of developers for implementation. I can also provide detailed specifications and work directly with your development team for seamless handoff.",
  },
  {
    question: "Can you work with remote clients?",
    answer: "Yes! I regularly work with clients worldwide. I use tools like Figma, Slack, and Zoom to ensure seamless collaboration regardless of timezone. I'm flexible with meeting times to accommodate different schedules.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We start with an in-depth conversation to understand your brand, goals, target audience, and competitive landscape. This forms the foundation of our creative strategy.",
    duration: "1-2 weeks",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Based on our discovery findings, I develop a comprehensive creative strategy and direction. This includes mood boards, initial concepts, and a clear roadmap.",
    duration: "1-2 weeks",
  },
  {
    step: "03",
    title: "Design",
    description: "This is where the magic happens. I create, iterate, and refine designs through a collaborative process with regular check-ins and feedback rounds.",
    duration: "2-6 weeks",
  },
  {
    step: "04",
    title: "Refine",
    description: "We fine-tune every detail together, ensuring the final deliverables exceed expectations and align perfectly with your vision.",
    duration: "1-2 weeks",
  },
  {
    step: "05",
    title: "Deliver",
    description: "I provide all final files, comprehensive documentation, and ongoing support to ensure successful implementation.",
    duration: "1 week",
  },
];