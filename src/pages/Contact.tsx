import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/contact/ContactForm";

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "Dribbble", href: "#", icon: Dribbble },
];

const Contact = () => {
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
              Contact
            </span>
            <h1 className="text-display mb-6">
              Let's create
              <br />
              <span className="text-gradient">something great</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Have a project in mind? I'd love to hear about it. Fill out the form
              below or reach out directly—let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding-sm">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a
                        href="mailto:hello@marcus.design"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        hello@marcus.design
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">
                        New York, NY, USA
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Availability</h3>
                      <p className="flex items-center gap-2 text-muted-foreground">
                        <span className="relative flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        Available for new projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                  Connect with me
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                      data-cursor="hover"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="rounded-2xl bg-secondary/50 p-6">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> I
                  typically respond to inquiries within 24-48 hours. For urgent
                  matters, please mention it in your message.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
