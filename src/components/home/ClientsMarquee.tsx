import { motion } from "framer-motion";
import { clients } from "@/data/projects";

const ClientsMarquee = () => {
  return (
    <section className="section-padding-sm relative overflow-hidden border-y border-border/50">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <span className="text-meta text-muted-foreground">
          Trusted by Industry Leaders
        </span>
      </motion.div>

      {/* Marquee */}
      <div className="marquee">
        <div className="marquee-content">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex items-center justify-center px-8"
            >
              <span className="font-display text-3xl font-semibold text-muted-foreground/50 transition-colors hover:text-foreground md:text-4xl">
                {client}
              </span>
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-dup-${index}`}
              className="flex items-center justify-center px-8"
            >
              <span className="font-display text-3xl font-semibold text-muted-foreground/50 transition-colors hover:text-foreground md:text-4xl">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
};

export default ClientsMarquee;
