import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-spotlight opacity-50" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Label */}
          <span className="text-meta mb-6 block text-muted-foreground">
            Let's Create Together
          </span>

          {/* Main Heading */}
          <h2 className="text-display mb-6">
            Have a project
            <br />
            in mind?
          </h2>

          {/* Description */}
          <p className="mx-auto mb-10 max-w-xl text-body-lg text-muted-foreground">
            I'm always excited to work on new challenges. Let's discuss how we
            can bring your vision to life.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="magnetic-btn group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-medium text-primary-foreground transition-all hover:shadow-glow-lg"
            data-cursor="hover"
          >
            Start a Conversation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Availability Status */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Currently available for new projects
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
    </section>
  );
};

export default CTASection;
