import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Rocket } from "lucide-react";

interface TimelineItem {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  type?: "work" | "education" | "award" | "milestone";
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

const iconMap = {
  work: Briefcase,
  education: GraduationCap,
  award: Award,
  milestone: Rocket,
};

const TimelineCard = ({ item, index, isLast }: { item: TimelineItem; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = iconMap[item.type || "work"];
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8">
      {/* Left content (even items) */}
      <motion.div
        className={`${isEven ? "md:text-right" : "md:order-3"} hidden md:block`}
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {isEven && (
          <div className="group relative rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="text-meta text-primary">{item.period}</span>
            <h3 className="mt-2 font-display text-xl font-semibold">{item.role}</h3>
            <p className="mt-1 text-primary/80">{item.company}</p>
            <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
          </div>
        )}
      </motion.div>

      {/* Center line and icon */}
      <div className="relative flex flex-col items-center">
        {/* Line above */}
        {index !== 0 && (
          <motion.div
            className="h-full w-px bg-gradient-to-b from-primary/50 to-primary"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4 }}
            style={{ transformOrigin: "top" }}
          />
        )}
        
        {/* Icon */}
        <motion.div
          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/20"
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
        >
          <Icon className="h-5 w-5 text-primary" />
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
          />
        </motion.div>

        {/* Line below */}
        {!isLast && (
          <motion.div
            className="h-24 w-px bg-gradient-to-b from-primary to-primary/30"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ transformOrigin: "top" }}
          />
        )}
      </div>

      {/* Right content (odd items) or mobile content */}
      <motion.div
        className={`${!isEven ? "md:text-left" : "md:order-1 md:invisible"} flex-1`}
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="group relative rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="text-meta text-primary">{item.period}</span>
          <h3 className="mt-2 font-display text-xl font-semibold">{item.role}</h3>
          <p className="mt-1 text-primary/80">{item.company}</p>
          <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const AnimatedTimeline = ({ items }: AnimatedTimelineProps) => {
  return (
    <div className="relative">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>
      
      <div className="space-y-0">
        {items.map((item, index) => (
          <TimelineCard
            key={item.id}
            item={item}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedTimeline;
