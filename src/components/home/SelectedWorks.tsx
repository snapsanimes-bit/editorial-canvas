import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const SelectedWorks = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="text-meta mb-4 block text-muted-foreground">
              Selected Works
            </span>
            <h2 className="text-section">
              Featured
              <br />
              Projects
            </h2>
          </div>
          <Link
            to="/work"
            className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            data-cursor="hover"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="project-card group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-secondary"
                data-cursor="text"
                data-cursor-text="View"
              >
                {/* Project Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="font-display text-6xl font-bold opacity-20 md:text-8xl"
                    style={{ color: `hsl(${project.color})` }}
                  >
                    {project.title}
                  </span>
                </motion.div>

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-0">
                    {/* Category Badge */}
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="badge-editorial mb-3 inline-block"
                    >
                      {project.category}
                    </motion.span>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-semibold md:text-3xl">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 max-w-md text-sm text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/50 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 md:right-8 md:top-8">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
