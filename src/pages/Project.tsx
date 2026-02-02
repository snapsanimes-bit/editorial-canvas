import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  if (!project) {
    return (
      <Layout>
        <div className="container-wide section-padding flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-display mb-4">Project Not Found</h1>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Work
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] overflow-hidden pt-32">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse 80% 50% at 50% 0%, hsl(${project.color} / 0.3) 0%, transparent 60%)`,
          }}
        />

        <div className="container-wide relative z-10">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              data-cursor="hover"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Work
            </Link>
          </motion.div>

          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8"
          >
            <span className="badge-editorial mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-hero">{project.title}</h1>
          </motion.div>

          {/* Meta Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <span className="text-meta text-muted-foreground">Client</span>
              <p className="mt-1 font-medium">{project.client}</p>
            </div>
            <div>
              <span className="text-meta text-muted-foreground">Role</span>
              <p className="mt-1 font-medium">{project.role}</p>
            </div>
            <div>
              <span className="text-meta text-muted-foreground">Year</span>
              <p className="mt-1 font-medium">{project.year}</p>
            </div>
            <div>
              <span className="text-meta text-muted-foreground">Tools</span>
              <p className="mt-1 font-medium">{project.tools.join(", ")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="container-wide py-12"
      >
        <div
          className="aspect-video overflow-hidden rounded-3xl"
          style={{
            background: `linear-gradient(135deg, hsl(${project.color} / 0.3) 0%, hsl(${project.color} / 0.1) 100%)`,
          }}
        >
          <div className="flex h-full items-center justify-center">
            <span
              className="font-display text-8xl font-bold opacity-30 md:text-[12rem]"
              style={{ color: `hsl(${project.color})` }}
            >
              {project.title}
            </span>
          </div>
        </div>
      </motion.section>

      {/* Challenge Section */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-meta mb-4 block text-muted-foreground">
              The Challenge
            </span>
            <p className="text-body-lg text-foreground/90">{project.challenge}</p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding-sm">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-meta mb-4 block text-muted-foreground">
              The Solution
            </span>
            <p className="text-body-lg text-foreground/90">{project.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-2xl ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className="aspect-video"
                  style={{
                    background: `linear-gradient(${135 + index * 45}deg, hsl(${project.color} / 0.2) 0%, hsl(${project.color} / 0.05) 100%)`,
                  }}
                >
                  <div className="flex h-full items-center justify-center">
                    <span className="text-muted-foreground">
                      Image {index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-meta mb-4 block text-muted-foreground">
              The Outcome
            </span>
            <p className="text-quote text-foreground/90">"{project.outcome}"</p>
          </motion.div>
        </div>
      </section>

      {/* Next/Prev Navigation */}
      <section className="border-t border-border">
        <div className="container-wide">
          <div className="grid md:grid-cols-2">
            {/* Previous Project */}
            <Link
              to={`/work/${prevProject.slug}`}
              className="group flex items-center gap-4 border-b border-border p-8 transition-colors hover:bg-secondary/30 md:border-b-0 md:border-r md:p-12"
              data-cursor="hover"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-2" />
              <div>
                <span className="text-meta text-muted-foreground">
                  Previous Project
                </span>
                <p className="mt-1 font-display text-xl font-semibold">
                  {prevProject.title}
                </p>
              </div>
            </Link>

            {/* Next Project */}
            <Link
              to={`/work/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 p-8 text-right transition-colors hover:bg-secondary/30 md:p-12"
              data-cursor="hover"
            >
              <div>
                <span className="text-meta text-muted-foreground">
                  Next Project
                </span>
                <p className="mt-1 font-display text-xl font-semibold">
                  {nextProject.title}
                </p>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Project;
