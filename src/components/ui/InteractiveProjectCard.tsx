import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Eye } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  shortDescription: string;
  color: string;
  image?: string;
  tags?: string[];
}

interface InteractiveProjectCardProps {
  project: Project;
  index: number;
}

const InteractiveProjectCard = ({ project, index }: InteractiveProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        <Link
          to={`/work/${project.slug}`}
          className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-card"
          data-cursor="text"
          data-cursor-text="View"
        >
          {/* Gradient background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, hsl(${project.color} / 0.2) 0%, hsl(${project.color} / 0.05) 100%)`,
            }}
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.3 }}
          />

          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle at center, hsl(${project.color}) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Floating title */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: "translateZ(30px)" }}
          >
            <motion.span
              className="select-none font-display text-5xl font-bold md:text-7xl"
              style={{ color: `hsl(${project.color})` }}
              animate={{
                opacity: isHovered ? 0.4 : 0.15,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              {project.title}
            </motion.span>
          </motion.div>

          {/* Shine effect */}
          <motion.div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `linear-gradient(105deg, transparent 40%, hsl(${project.color} / 0.1) 45%, hsl(${project.color} / 0.2) 50%, hsl(${project.color} / 0.1) 55%, transparent 60%)`,
              transform: "translateZ(40px)",
            }}
            animate={{
              x: isHovered ? ["0%", "100%"] : "-100%",
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />

          {/* Content overlay */}
          <div
            className="absolute inset-0 flex flex-col justify-between p-6"
            style={{ transform: "translateZ(50px)" }}
          >
            {/* Top row */}
            <div className="flex items-start justify-between">
              <motion.span
                className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm"
                animate={{ y: isHovered ? 0 : -5, opacity: isHovered ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {project.category}
              </motion.span>
              <motion.span
                className="text-sm text-muted-foreground"
                animate={{ y: isHovered ? 0 : -5, opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.3, delay: 0.05 }}
              >
                {project.year}
              </motion.span>
            </div>

            {/* Bottom row */}
            <div className="flex items-end justify-between">
              <div>
                <motion.h3
                  className="font-display text-xl font-semibold md:text-2xl"
                  animate={{ y: isHovered ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="mt-1 text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {project.shortDescription}
                </motion.p>
              </div>

              {/* Action button */}
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-primary/10 backdrop-blur-sm"
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  rotate: isHovered ? 0 : -180,
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              >
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </motion.div>
            </div>
          </div>

          {/* Hover glow */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              boxShadow: `inset 0 0 60px hsl(${project.color} / 0.1), 0 0 40px hsl(${project.color} / 0.1)`,
            }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Border glow on hover */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl border-2"
            style={{ borderColor: `hsl(${project.color} / 0.3)` }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </Link>

        {/* Quick view badge */}
        <motion.div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-lg"
          initial={{ opacity: 0, y: -10, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : -10,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <Eye className="h-3 w-3" />
          Quick View
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveProjectCard;
