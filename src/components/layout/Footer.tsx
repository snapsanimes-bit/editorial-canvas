import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "Dribbble", href: "#", icon: Dribbble },
  ],
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-background">
      {/* Main Footer */}
      <div className="container-wide section-padding-sm">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="font-display text-2xl font-semibold tracking-tight"
              data-cursor="hover"
            >
              Marcus<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 max-w-md text-muted-foreground">
              Art Director & Brand Designer crafting distinctive visual identities
              and digital experiences for forward-thinking brands.
            </p>
            <a
              href="mailto:hello@marcus.design"
              className="mt-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
              data-cursor="hover"
            >
              <Mail className="h-4 w-4" />
              hello@marcus.design
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-meta mb-4 text-muted-foreground">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-1 text-foreground/80 transition-colors hover:text-foreground"
                    data-cursor="hover"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-meta mb-4 text-muted-foreground">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-foreground/80 transition-colors hover:text-foreground"
                    data-cursor="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-12" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Marcus. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Available for projects
            </span>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center font-display text-[20vw] font-bold leading-none"
        >
          MARCUS
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
