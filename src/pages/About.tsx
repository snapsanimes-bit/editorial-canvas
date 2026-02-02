import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { experience, skills, tools, clients } from "@/data/projects";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
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
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10">
                <div className="flex h-full items-center justify-center">
                  <span className="font-display text-[10rem] font-bold text-primary/20">
                    M
                  </span>
                </div>
              </div>
              {/* Decorative Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 flex h-40 w-40 items-center justify-center rounded-full bg-primary shadow-glow"
              >
                <div className="text-center text-primary-foreground">
                  <span className="font-display text-4xl font-bold">10+</span>
                  <span className="block text-xs uppercase tracking-wider opacity-80">
                    Years
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-meta mb-4 block text-muted-foreground">
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
            <span className="text-meta mb-4 block text-muted-foreground">
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
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-meta mb-4 block text-muted-foreground">
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

      {/* Skills & Tools */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-meta mb-6 block text-muted-foreground">
                Skills & Expertise
              </span>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-meta mb-6 block text-muted-foreground">
                Tools & Software
              </span>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="rounded-full bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding border-t border-border">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-meta mb-4 block text-muted-foreground">
              Experience
            </span>
            <h2 className="text-section">Career Timeline</h2>
          </motion.div>

          <div className="space-y-0">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group grid gap-4 border-t border-border py-8 md:grid-cols-4 md:gap-8"
              >
                <div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-2">
                  <h3 className="font-display text-xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-primary">{exp.company}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-meta mb-4 block text-muted-foreground">
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
                className="flex items-center justify-center py-4"
              >
                <span className="font-display text-2xl font-semibold text-muted-foreground/50 transition-colors hover:text-foreground">
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
                className="magnetic-btn group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:shadow-glow"
                data-cursor="hover"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                className="magnetic-btn group inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-base font-medium transition-all hover:border-foreground hover:bg-foreground hover:text-background"
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
