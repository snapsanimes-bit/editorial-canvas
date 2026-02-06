import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Sparkles, Award, Trophy } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { experience, education, skills, tools, clients, awards, stats } from "@/data/projects";
import GeometricBackground from "@/components/ui/GeometricBackground";
import SkillChart from "@/components/ui/SkillChart";
import AnimatedTimeline from "@/components/ui/AnimatedTimeline";

// Combine experience and education for timeline
const timelineItems = [...experience, ...education].sort((a, b) => {
  const yearA = parseInt(a.period.split(" - ")[0]);
  const yearB = parseInt(b.period.split(" - ")[0]);
  return yearB - yearA;
});

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <GeometricBackground />
        <div className="spotlight absolute inset-0" />
        <div className="container-wide relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-primary/20 to-accent/10">
                <div className="flex h-full items-center justify-center">
                  <motion.span
                    className="font-display text-[10rem] font-bold text-primary/30"
                    animate={{
                      textShadow: [
                        "0 0 20px hsl(var(--primary) / 0.3)",
                        "0 0 60px hsl(var(--primary) / 0.5)",
                        "0 0 20px hsl(var(--primary) / 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    M
                  </motion.span>
                </div>
              </div>
              {/* Decorative Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 flex h-40 w-40 items-center justify-center rounded-full border border-primary/50 bg-primary shadow-lg shadow-primary/30"
              >
                <div className="text-center text-primary-foreground">
                  <motion.span
                    className="font-display text-4xl font-bold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    10+
                  </motion.span>
                  <span className="block text-xs uppercase tracking-wider opacity-80">
                    Years
                  </span>
                </div>
                {/* Glow ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-meta mb-4 flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4" />
                About Me
              </span>
              <h1 className="text-display mb-6">
                Marcus
                <br />
                <span className="text-gradient">Anderson</span>
              </h1>
              <p className="text-body-lg text-muted-foreground">
                Art Director & Brand Designer based in New York, with over a decade
                of experience crafting distinctive visual identities for
                forward-thinking brands.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-meta mb-4 block text-primary">
              My Story
            </span>
            <div className="space-y-6">
              <p className="text-body text-foreground/90">
                My journey in design began over a decade ago, driven by an
                insatiable curiosity about how visual communication shapes our
                understanding of the world. What started as a fascination with
                typography and layout has evolved into a comprehensive practice
                spanning brand identity, digital design, and creative direction.
              </p>
              <p className="text-body text-foreground/90">
                I've had the privilege of working with some of the world's most
                innovative companies—from tech giants to emerging startups—helping
                them articulate their vision through thoughtful, impactful design.
                Each project is an opportunity to push boundaries while staying
                true to the core principles of clarity, purpose, and emotional
                resonance.
              </p>
              <p className="text-body text-foreground/90">
                Today, I lead creative projects that bridge strategy and
                aesthetics, always seeking that perfect balance between bold
                innovation and timeless elegance. My approach is collaborative,
                detail-oriented, and deeply invested in understanding the unique
                challenges each brand faces.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-meta mb-4 block text-primary">
              Design Philosophy
            </span>
            <p className="text-quote mx-auto max-w-4xl">
              "Great design isn't just about aesthetics—it's about creating
              meaningful connections between brands and their audiences through
              every visual touchpoint."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-meta mb-4 block text-primary">
              Skills & Expertise
            </span>
            <h2 className="text-section">Core Competencies</h2>
          </motion.div>

          <SkillChart skills={skills} variant="radial" />

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="mb-8 text-center font-display text-2xl font-semibold">
              Tools & Software
            </h3>
            <div className="mx-auto max-w-2xl">
              <SkillChart skills={tools} variant="bar" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-meta mb-4 block text-primary">
              Experience
            </span>
            <h2 className="text-section">Career Timeline</h2>
          </motion.div>

          <AnimatedTimeline items={timelineItems} />
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-meta mb-4 flex items-center justify-center gap-2 text-primary">
              <Trophy className="h-4 w-4" />
              Recognition
            </span>
            <h2 className="text-section">Awards & Honors</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">{award.year}</span>
                </div>
                <h3 className="font-display text-lg font-semibold">{award.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{award.project}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding-sm border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
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
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding relative overflow-hidden bg-secondary/30">
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/5 to-transparent" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-meta mb-4 block text-primary">
              Clients & Collaborations
            </span>
            <h2 className="text-section">
              Brands I've Worked With
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center justify-center py-4"
              >
                <span className="font-display text-2xl font-semibold text-muted-foreground/50 transition-all duration-300 group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary)/0.5)]">
                  {client}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section mb-6">Let's Work Together</h2>
            <p className="mx-auto mb-10 max-w-xl text-body text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="magnetic-btn group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                data-cursor="hover"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                className="magnetic-btn group inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-base font-medium transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                data-cursor="hover"
              >
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
