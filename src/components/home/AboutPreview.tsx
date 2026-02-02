import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/30">
      <div className="container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10">
              <div className="flex h-full items-center justify-center">
                <span className="font-display text-8xl font-bold text-primary/20">M</span>
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow md:h-40 md:w-40"
            >
              <div className="text-center">
                <span className="font-display text-3xl font-bold md:text-4xl">10+</span>
                <span className="block text-xs uppercase tracking-wider opacity-80">
                  Years Exp.
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-meta mb-4 block text-muted-foreground">
              About Me
            </span>
            <h2 className="text-section mb-6">
              Designing with
              <br />
              Purpose & Passion
            </h2>
            <p className="text-body text-muted-foreground">
              I'm Marcus, a senior art director and brand designer based in New York.
              With over a decade of experience, I've helped brands like Google, Nike,
              and Spotify create visual identities that resonate with their audiences.
            </p>
            <p className="mt-4 text-body text-muted-foreground">
              My approach combines strategic thinking with creative intuition, always
              pushing boundaries while staying true to each brand's unique voice.
            </p>

            {/* Key Strengths */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Branding", "UI Design", "Motion", "Typography", "Art Direction"].map(
                (skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="rounded-full border border-border px-4 py-2 text-sm"
                  >
                    {skill}
                  </motion.span>
                )
              )}
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="group mt-10 inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
              data-cursor="hover"
            >
              Learn more about me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
