import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import GeometricBackground from "@/components/ui/GeometricBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Geometric Background */}
      <GeometricBackground />
      
      {/* Spotlight Background */}
      <div className="spotlight absolute inset-0" />
      
      {/* Noise Overlay */}
      <div className="noise-overlay absolute inset-0 opacity-50" />

      {/* Content Container */}
      <div className="container-wide relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20">
        <div className="max-w-6xl">
          {/* Intro Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="text-meta text-muted-foreground">
              Art Director & Brand Designer
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-hero mb-6"
          >
            Crafting
            <br />
            <span className="text-gradient">Visual Stories</span>
            <br />
            That Resonate
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="max-w-xl text-body-lg text-muted-foreground"
          >
            I help ambitious brands stand out through strategic design,
            distinctive visual identities, and memorable digital experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/work"
              className="magnetic-btn group flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:shadow-glow"
              data-cursor="hover"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="magnetic-btn group flex items-center gap-3 rounded-full border border-border px-8 py-4 text-base font-medium transition-all hover:border-foreground hover:bg-foreground hover:text-background"
              data-cursor="hover"
            >
              Get in Touch
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-meta text-muted-foreground">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
