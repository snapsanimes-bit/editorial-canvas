import { motion } from "framer-motion";
import { testimonials } from "@/data/projects";
import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-secondary/20">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-meta mb-4 block text-muted-foreground">
            Kind Words
          </span>
          <h2 className="text-section">What Clients Say</h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30"
            >
              {/* Quote Icon */}
              <Quote className="mb-6 h-8 w-8 text-primary/40" />

              {/* Quote */}
              <p className="font-accent text-lg italic leading-relaxed text-foreground/90">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-bl from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
