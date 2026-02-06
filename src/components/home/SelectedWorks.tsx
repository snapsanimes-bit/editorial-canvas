import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import InteractiveProjectCard from "@/components/ui/InteractiveProjectCard";

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
            <span className="text-meta mb-4 block text-primary">
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
            className="group flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
            data-cursor="hover"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <InteractiveProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
