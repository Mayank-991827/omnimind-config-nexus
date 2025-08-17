import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Mic, Users, Brain, ArrowRight, ExternalLink } from 'lucide-react';
import { companyConfig } from '@/config/company';

const iconMap = {
  eye: Eye,
  mic: Mic,
  users: Users,
  brain: Brain,
};

const colorMap = {
  cyan: {
    gradient: 'bg-gradient-to-br from-primary/20 to-primary/5',
    border: 'border-primary/30',
    glow: 'shadow-glow-cyan',
    button: 'glow' as const,
  },
  purple: {
    gradient: 'bg-gradient-to-br from-accent/20 to-accent/5',
    border: 'border-accent/30',
    glow: 'shadow-glow-purple',
    button: 'glowPurple' as const,
  },
  pink: {
    gradient: 'bg-gradient-to-br from-accent-pink/20 to-accent-pink/5',
    border: 'border-accent-pink/30',
    glow: 'shadow-glow-pink',
    button: 'glowPink' as const,
  },
};

export default function Services() {
  return (
    <section className="py-24 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-flow opacity-10" />
      
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
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            <span className="text-foreground">AI Solutions</span>
            <br />
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              That Transform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive suite of AI services designed to revolutionize 
            your business operations and unlock new possibilities.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {companyConfig.services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const colors = colorMap[service.color];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="hover-tilt"
              >
                <Card className={`
                  h-full glass backdrop-blur-md 
                  ${colors.border} hover:${colors.glow}
                  transition-all duration-500 hover:scale-[1.02]
                  group cursor-pointer
                `}>
                  <CardHeader className="space-y-4">
                    <div className={`
                      w-16 h-16 rounded-2xl ${colors.gradient} 
                      flex items-center justify-center
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    
                    <div>
                      <CardTitle className="text-2xl font-heading group-hover:text-primary transition-colors">
                        {service.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button 
                        variant={colors.button} 
                        size="sm" 
                        className="flex-1 group"
                        onClick={() => window.open(`/services/${service.id}`, '_blank')}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(service.backendUrl, '_blank')}
                        className="border-border/50 hover:border-primary/50"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass backdrop-blur-md border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a personalized demo and see how our AI solutions can revolutionize your operations.
            </p>
            <Button variant="hero" size="lg" className="group">
              Schedule Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}