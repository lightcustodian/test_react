import { motion } from "framer-motion";
import { Shield, DollarSign, Headphones, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Proven Reliability",
    description: "99.9% uptime SLA with enterprise-grade infrastructure monitoring and automatic failover systems.",
    color: "green"
  },
  {
    icon: DollarSign,
    title: "Cost Predictability",
    description: "Transparent pricing with no hidden fees. Predictable monthly costs that scale with your business growth.",
    color: "blue"
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "24/7 support from certified infrastructure specialists with average response time under 15 minutes.",
    color: "purple"
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Infrastructure that grows with your business. Seamless scaling from startup to enterprise level.",
    color: "orange"
  }
];

const colorClasses = {
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600", 
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600"
};

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="benefits-title">
            Why Enterprise Leaders Choose Logical Front
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven methodology and commitment to excellence delivers consistent results for enterprise clients.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`benefit-item-${index}`}
              >
                <div className={`w-20 h-20 ${colorClasses[benefit.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
