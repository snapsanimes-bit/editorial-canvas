import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { testimonials } from "@/data/projects";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

const TestimonialCard = ({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
      >
        {/* Animated glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          style={{
            background: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 60%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Quote Icon with glow */}
        <div className="relative mb-6">
          <Quote className="h-8 w-8 text-primary" />
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
            animate={{ opacity: isHovered ? 0.8 : 0.3, scale: isHovered ? 1.5 : 1 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Stars */}
        <div className="mb-4 flex gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
              viewport={{ once: true }}
            >
              <Star className="h-4 w-4 fill-primary text-primary" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <p className="relative font-accent text-lg italic leading-relaxed text-foreground/90">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="relative mt-6 border-t border-border pt-6">
          <div className="flex items-center gap-4">
            {/* Avatar placeholder */}
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 font-display text-lg font-bold text-primary"
              animate={{
                boxShadow: isHovered
                  ? "0 0 20px hsl(var(--primary) / 0.4)"
                  : "0 0 0px hsl(var(--primary) / 0)",
              }}
              transition={{ duration: 0.3 }}
            >
              {testimonial.author.charAt(0)}
            </motion.div>
            <div>
              <p className="font-medium">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Corner */}
        <motion.div
          className="absolute right-0 top-0 h-24 w-24 rounded-bl-3xl bg-gradient-to-bl from-primary/20 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
        />

        {/* Border glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/30"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-meta mb-4 block text-primary">
            Kind Words
          </span>
          <h2 className="text-section">What Clients Say</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
