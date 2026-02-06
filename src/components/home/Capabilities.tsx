import { motion } from "framer-motion";
import { Palette, Monitor, Play, Type, LayoutGrid } from "lucide-react";

const capabilities = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Strategic brand development from concept to execution, including logo design, visual systems, and comprehensive brand guidelines.",
    stats: "50+ brands",
  },
  {
    icon: Monitor,
    title: "Web & Digital Design",
    description:
      "Custom website design and digital experiences with a focus on user experience, interaction design, and visual impact.",
    stats: "120+ projects",
  },
  {
    icon: Play,
    title: "Motion & Interaction",
    description:
      "Bringing brands to life through motion graphics, UI animations, title sequences, and interactive experiences.",
    stats: "30+ animations",
  },
  {
    icon: Type,
    title: "Typography",
    description:
      "Custom type design, font pairing, and typographic systems that give brands a distinctive voice.",
    stats: "15+ typefaces",
  },
  {
    icon: LayoutGrid,
    title: "Visual Systems",
    description:
      "Scalable design systems and component libraries that ensure consistency across all brand touchpoints.",
    stats: "25+ systems",
  },
];

const Capabilities = () => {
  return (
    <section className="section-padding relative">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-meta mb-4 block text-primary">
            What I Do
          </span>
          <h2 className="text-section mx-auto max-w-2xl">
            Capabilities & Services
          </h2>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              data-cursor="hover"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.15) 0%, transparent 60%)`,
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <capability.icon className="h-6 w-6" />
                {/* Icon glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl bg-primary/20 blur-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                />
              </motion.div>

              {/* Content */}
              <h3 className="relative mb-3 font-display text-xl font-semibold">
                {capability.title}
              </h3>
              <p className="relative text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>

              {/* Stats badge */}
              <motion.div
                className="relative mt-4 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {capability.stats}
              </motion.div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Corner accent */}
              <motion.div
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
