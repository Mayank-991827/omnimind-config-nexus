import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'TechNova Industries',
    content: 'OmniMind\'s AI solutions transformed our operations. The face detection system increased our security efficiency by 300% while reducing false positives to nearly zero.',
    rating: 5,
    avatar: '👩‍💻',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Operations Director',
    company: 'Global Manufacturing Corp',
    content: 'The worker count AI has revolutionized our workforce management. Real-time analytics and automated reporting saved us 40 hours per week in manual counting.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Lead',
    company: 'Innovation Labs',
    content: 'The LLM assistant is incredibly sophisticated. It handles complex research queries with nuanced understanding that rivals human analysts.',
    rating: 5,
    avatar: '👩‍🔬',
  },
  {
    name: 'Alex Kim',
    role: 'Customer Success Manager',
    company: 'ServiceFirst Solutions',
    content: 'Their voice agent seamlessly integrated with our customer service workflow. Customer satisfaction increased by 45% since implementation.',
    rating: 5,
    avatar: '👨‍💻',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 bg-gradient-neural opacity-10"
          style={{
            backgroundSize: '400% 400%',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-foreground">Trusted by</span>
            <br />
            <span className="bg-gradient-cosmic bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how organizations worldwide are transforming their operations with our AI solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hover-tilt"
            >
              <Card className="h-full glass backdrop-blur-md border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-cyan/20 group">
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start">
                    <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                    <div className="w-12 h-12 rounded-full bg-gradient-neural flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass backdrop-blur-md border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-6">
              Join 1000+ Companies Already Using OmniMind
            </h3>
            
            {/* Company Logos Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-60">
              {['TechCorp', 'InnovateLab', 'FutureAI', 'NextGen', 'SmartSys'].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center h-12 text-lg font-heading font-bold text-muted-foreground hover:text-primary transition-colors"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}