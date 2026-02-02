import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { services } from "@/data/projects";

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="spotlight absolute inset-0" />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-meta mb-4 block text-muted-foreground">
              Services
            </span>
            <h1 className="text-display mb-6">
              Design services
              <br />
              <span className="text-gradient">tailored to you</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">
              From brand strategy to digital execution, I offer comprehensive
              design services that help brands communicate with clarity and
              impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 md:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  {/* Service Title & Description */}
                  <div className="lg:col-span-2">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="text-meta text-muted-foreground">
                        0{index + 1}
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-body text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Deliverables */}
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                      {service.deliverables.map((deliverable) => (
                        <div
                          key={deliverable}
                          className="flex items-center gap-2 text-sm"
                        >
                          <Check className="h-4 w-4 text-primary" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & CTA */}
                  <div className="flex flex-col justify-between lg:items-end lg:text-right">
                    <div>
                      <span className="text-meta text-muted-foreground">
                        Typical Timeline
                      </span>
                      <p className="mt-1 font-display text-xl font-semibold">
                        {service.timeline}
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="magnetic-btn group/btn mt-6 inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                      data-cursor="hover"
                    >
                      Start a Project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="text-meta mb-4 block text-muted-foreground">
              How I Work
            </span>
            <h2 className="text-section">My Process</h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Deep dive into your brand, goals, audience, and competitive landscape to establish a solid foundation.",
              },
              {
                step: "02",
                title: "Strategy",
                description:
                  "Develop a clear creative direction and strategic framework that aligns with your business objectives.",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "Create, iterate, and refine visual solutions through a collaborative process with regular feedback.",
              },
              {
                step: "04",
                title: "Deliver",
                description:
                  "Finalize all deliverables with comprehensive documentation and support for implementation.",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="font-display text-6xl font-bold text-primary/20">
                  {phase.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-section mb-6">Ready to Get Started?</h2>
            <p className="mx-auto mb-10 max-w-xl text-body text-muted-foreground">
              Every great project starts with a conversation. Let's discuss your
              vision and explore how we can bring it to life.
            </p>
            <Link
              to="/contact"
              className="magnetic-btn group inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-medium text-primary-foreground transition-all hover:shadow-glow"
              data-cursor="hover"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
