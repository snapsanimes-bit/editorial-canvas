import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { projects, categories } from "@/data/projects";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="spotlight absolute inset-0" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-meta mb-4 block text-muted-foreground">
              Work
            </span>
            <h1 className="text-display max-w-3xl">
              A curated selection of
              <br />
              <span className="text-gradient">creative work</span>
            </h1>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                data-cursor="hover"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Project Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Link
                    to={`/work/${project.slug}`}
                    className="project-card group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-secondary"
                    data-cursor="text"
                    data-cursor-text="View"
                  >
                    {/* Background Gradient */}
                    <div
                      className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                      style={{
                        background: `linear-gradient(135deg, hsl(${project.color} / 0.3) 0%, hsl(${project.color} / 0.1) 100%)`,
                      }}
                    />

                    {/* Project Title Background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-display text-5xl font-bold opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-30 md:text-7xl"
                        style={{ color: `hsl(${project.color})` }}
                      >
                        {project.title}
                      </span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      {/* Top Row */}
                      <div className="flex items-start justify-between">
                        <span className="badge-editorial">{project.category}</span>
                        <span className="text-sm text-muted-foreground">
                          {project.year}
                        </span>
                      </div>

                      {/* Bottom Row */}
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="font-display text-xl font-semibold md:text-2xl">
                            {project.title}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            {project.shortDescription}
                          </p>
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/50 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
