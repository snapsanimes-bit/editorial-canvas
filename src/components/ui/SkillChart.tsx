import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  name: string;
  level: number;
  color?: string;
}

interface SkillChartProps {
  skills: Skill[];
  variant?: "radial" | "bar" | "dots";
}

const RadialProgress = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (skill.level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-28 w-28">
        {/* Background circle */}
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="6"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : {}}
            transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span
            className="font-display text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            {skill.level}%
          </motion.span>
        </div>
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        />
      </div>
      <span className="text-sm font-medium text-muted-foreground">{skill.name}</span>
    </motion.div>
  );
};

const BarProgress = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="space-y-2"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Glow trail */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 blur-sm"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
};

const DotsProgress = ({ skill, index }: { skill: Skill; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const totalDots = 10;
  const filledDots = Math.round((skill.level / 100) * totalDots);

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="w-32 text-sm font-medium">{skill.name}</span>
      <div className="flex gap-1.5">
        {Array.from({ length: totalDots }).map((_, i) => (
          <motion.div
            key={i}
            className={`h-3 w-3 rounded-full ${
              i < filledDots
                ? "bg-gradient-to-br from-primary to-accent shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
                : "bg-muted"
            }`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              duration: 0.3,
              delay: 0.3 + index * 0.1 + i * 0.05,
              type: "spring",
              stiffness: 300,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SkillChart = ({ skills, variant = "radial" }: SkillChartProps) => {
  if (variant === "radial") {
    return (
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <RadialProgress key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    );
  }

  if (variant === "bar") {
    return (
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <BarProgress key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <DotsProgress key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  );
};

export default SkillChart;
