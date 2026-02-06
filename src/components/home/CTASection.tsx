import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import GeometricBackground from "@/components/ui/GeometricBackground";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Geometric Background */}
      <GeometricBackground />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}
          <motion.span
            className="text-meta mb-6 flex items-center justify-center gap-2 text-primary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="h-4 w-4" />
            Let's Create Together
            <Sparkles className="h-4 w-4" />
          </motion.span>

          {/* Main Heading */}
          <h2 className="text-display mb-6">
            Have a project
            <br />
            <span className="text-gradient">in mind?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-xl text-body-lg text-muted-foreground">
            I'm always excited to work on new challenges. Let's discuss how we
            can bring your vision to life.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="magnetic-btn group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:shadow-primary/40"
              data-cursor="hover"
            >
              Start a Conversation
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Availability Status */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-lg shadow-primary/50"></span>
            </span>
            Currently available for new projects
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-12"
          >
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "10+", label: "Years Experience" },
              { value: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="font-display text-4xl font-bold text-primary md:text-5xl"
                  animate={{
                    textShadow: [
                      "0 0 10px hsl(var(--primary) / 0.3)",
                      "0 0 30px hsl(var(--primary) / 0.5)",
                      "0 0 10px hsl(var(--primary) / 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.value}
                </motion.span>
                <span className="mt-2 block text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
