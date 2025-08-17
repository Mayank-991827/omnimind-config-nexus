import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Zap, Target, ArrowRight } from 'lucide-react';
import { companyConfig } from '@/config/company';

const features = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and compliance standards.',
    color: 'cyan',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized algorithms delivering real-time results with minimal latency.',
    color: 'purple',
  },
  {
    icon: Target,
    title: 'Precision Accuracy',
    description: '99.9% accuracy rates across all our AI models and services.',
    color: 'pink',
  },
];

const colorMap = {
  cyan: 'text-primary',
  purple: 'text-accent',
  pink: 'text-accent-pink',
};

export default function About() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-neural opacity-20" />
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="neural-line absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                About {companyConfig.name}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Pioneering the</span>
                <br />
                <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                  AI Revolution
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're at the forefront of artificial intelligence innovation, creating solutions 
                that don't just process data—they understand, adapt, and evolve. Our mission is 
                to make advanced AI accessible to businesses of all sizes.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-card to-secondary flex items-center justify-center border border-border/50">
                    <feature.icon className={`w-6 h-6 ${colorMap[feature.color as keyof typeof colorMap]}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="cosmic" size="lg" className="group">
              Learn Our Story
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative w-full h-96 rounded-2xl overflow-hidden glass backdrop-blur-md border border-primary/20">
              {/* Animated Background Grid */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" className="text-primary/30" />
                </svg>
              </div>

              {/* Floating Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative w-32 h-32"
                >
                  {/* Center Core */}
                  <div className="absolute inset-0 bg-gradient-neural rounded-full shadow-glow-cyan" />
                  
                  {/* Orbiting Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-accent rounded-full shadow-glow-purple"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: '0 0',
                      }}
                      animate={{
                        rotate: -360,
                        x: Math.cos((i * Math.PI * 2) / 6) * 60,
                        y: Math.sin((i * Math.PI * 2) / 6) * 60,
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex justify-between items-center p-4 glass backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-center">
                    <div className="text-lg font-heading font-bold text-primary">500ms</div>
                    <div className="text-xs text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-heading font-bold text-accent">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-heading font-bold text-accent-pink">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}