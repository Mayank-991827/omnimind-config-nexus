import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Github,
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { companyConfig } from '@/config/company';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 mt-24 border-t border-border/30 bg-gradient-dark">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-neural" />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="neural-line absolute opacity-20"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0, 0.3, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.8,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-neural rounded-xl flex items-center justify-center shadow-glow-cyan">
                <Sparkles className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-2xl font-heading font-bold text-primary">
                {companyConfig.name}
              </span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              {companyConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:shadow-glow-cyan hover:scale-110 transition-all"
                onClick={() => window.open(companyConfig.social.linkedin, '_blank')}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:shadow-glow-purple hover:scale-110 transition-all"
                onClick={() => window.open(companyConfig.social.instagram, '_blank')}
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:shadow-glow-pink hover:scale-110 transition-all"
                onClick={() => window.open(companyConfig.social.twitter, '_blank')}
              >
                <Twitter className="w-5 h-5" />
              </Button>
              {companyConfig.social.github && (
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:shadow-glow-cyan hover:scale-110 transition-all"
                  onClick={() => window.open(companyConfig.social.github, '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              )}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-heading font-semibold">Services</h3>
            <div className="space-y-3">
              {companyConfig.services.map((service) => (
                <a
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="block text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {service.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-heading font-semibold">Company</h3>
            <div className="space-y-3">
              <a href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="/careers" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </a>
              <a href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </a>
              <a href="/press" className="block text-muted-foreground hover:text-primary transition-colors">
                Press
              </a>
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-heading font-semibold">Contact</h3>
            <div className="space-y-4">
              <a 
                href={`mailto:${companyConfig.contact.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {companyConfig.contact.email}
              </a>
              <a 
                href={`tel:${companyConfig.contact.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {companyConfig.contact.phone}
              </a>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button variant="hero" size="sm" className="w-full group">
                Book a Demo
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-border/30" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            © {currentYear} {companyConfig.name}. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/security" className="text-muted-foreground hover:text-primary transition-colors">
              Security
            </a>
          </div>

          {/* Back to Top */}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={scrollToTop}
            className="hover:shadow-glow-cyan group"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </motion.div>
      </div>
    </footer>
  );
}