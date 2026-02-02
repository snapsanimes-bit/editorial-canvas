import { motion } from "framer-motion";
import { Palette, Monitor, Play, Type, LayoutGrid } from "lucide-react";

const capabilities = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Strategic brand development from concept to execution, including logo design, visual systems, and comprehensive brand guidelines.",
  },
  {
    icon: Monitor,
    title: "Web & Digital Design",
    description:
      "Custom website design and digital experiences with a focus on user experience, interaction design, and visual impact.",
  },
  {
    icon: Play,
    title: "Motion & Interaction",
    description:
      "Bringing brands to life through motion graphics, UI animations, title sequences, and interactive experiences.",
  },
  {
    icon: Type,
    title: "Typography",
    description:
      "Custom type design, font pairing, and typographic systems that give brands a distinctive voice.",
  },
  {
    icon: LayoutGrid,
    title: "Visual Systems",
    description:
      "Scalable design systems and component libraries that ensure consistency across all brand touchpoints.",
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
          <span className="text-meta mb-4 block text-muted-foreground">
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:bg-card/80"
              data-cursor="hover"
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <capability.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="mb-3 font-display text-xl font-semibold">
                {capability.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {capability.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
