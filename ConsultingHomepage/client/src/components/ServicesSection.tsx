import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Server, Network, Cog } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Secure Cloud Infrastructure",
    description: "Complete cloud optimization with risk mitigation and cost management. Secure your data while reducing overhead.",
    features: ["Multi-cloud strategy", "Security compliance", "Disaster recovery", "Automated monitoring"],
    color: "green"
  },
  {
    icon: Server,
    title: "On-Premise Hardware & Support",
    description: "Complete hardware infrastructure and professional integration. Ongoing tech support and maintenance included.",
    features: ["Enterprise hardware", "Professional installation", "24/7 tech support", "Maintenance & upgrades"],
    color: "blue"
  },
  {
    icon: Network,
    title: "Network Asset Integration",
    description: "Seamless integration with current network infrastructure. Optimize performance and eliminate bottlenecks.",
    features: ["Network optimization", "Legacy system integration", "Performance monitoring", "Scalable architecture"],
    color: "purple"
  },
  {
    icon: Cog,
    title: "AI Automation Platform",
    description: "Intelligent automation solutions that adapt to your workflow. Reduce manual processes and improve efficiency.",
    features: ["Process automation", "AI-driven insights", "Workflow optimization", "Real-time analytics"],
    color: "orange"
  }
];

const colorClasses = {
  green: "bg-green-100 text-green-600",
  blue: "bg-blue-100 text-blue-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-orange-100 text-orange-600"
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="services-title">
            Enterprise Infrastructure Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive infrastructure services designed to scale with your business needs and deliver measurable results.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full hover:shadow-xl transition-all duration-300" data-testid={`service-card-${index}`}>
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-4" data-testid={`service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} data-testid={`service-feature-${index}-${featureIndex}`}>
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
