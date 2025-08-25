import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { cn } from '../../utils/cn';

interface ComparisonPoint {
  icon: string;
  title: string;
  description: string;
}

interface CompetitorComparison {
  category: string;
  competitor: string;
  competitorIcon: string;
  ourAdvantages: ComparisonPoint[];
}

interface ValuePropsComparisonProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const ValuePropsComparison: React.FC<ValuePropsComparisonProps> = ({
  title = "Why Choose Logical Front",
  subtitle = "See how we compare to other infrastructure providers across the key factors that matter most",
  className = ''
}) => {
  const comparisons: CompetitorComparison[] = [
    {
      category: "vs. Public Cloud Providers",
      competitor: "AWS / Azure / Google Cloud",
      competitorIcon: "fas fa-cloud",
      ourAdvantages: [
        {
          icon: "fas fa-dollar-sign",
          title: "33% Cost Savings",
          description: "Predictable monthly pricing with no surprise bills or egress charges"
        },
        {
          icon: "fas fa-shield-alt",
          title: "Complete Control",
          description: "No vendor lock-in, maintain full control over your infrastructure and data"
        },
        {
          icon: "fas fa-headset",
          title: "Local Support",
          description: "Arkansas-based support team, not overseas call centers or ticket systems"
        },
        {
          icon: "fas fa-network-wired",
          title: "AR-EON Access",
          description: "Direct access to Arkansas Educational Network for superior performance"
        }
      ]
    },
    {
      category: "vs. National VARs",
      competitor: "CDW / SHI / Insight",
      competitorIcon: "fas fa-building",
      ourAdvantages: [
        {
          icon: "fas fa-users",
          title: "Same Team Continuity",
          description: "The engineer who designs your solution provides ongoing support"
        },
        {
          icon: "fas fa-map-marker-alt",
          title: "Regional Expertise",
          description: "Deep understanding of Arkansas regulations and local business needs"
        },
        {
          icon: "fas fa-cogs",
          title: "Custom Solutions",
          description: "Tailored approaches, not cookie-cutter products from a catalog"
        },
        {
          icon: "fas fa-clock",
          title: "Rapid Response",
          description: "Local team enables same-day on-site support when needed"
        }
      ]
    },
    {
      category: "vs. Regional Competitors",
      competitor: "Other Regional Providers",
      competitorIcon: "fas fa-store",
      ourAdvantages: [
        {
          icon: "fas fa-chart-line",
          title: "Proven Scale",
          description: "600,000+ virtual desktops deployed, enterprise-grade experience"
        },
        {
          icon: "fas fa-layer-group",
          title: "Full Spectrum",
          description: "Complete portfolio: hardware, private cloud, and Azure integration"
        },
        {
          icon: "fas fa-graduation-cap",
          title: "Education Expertise",
          description: "Deep specialization in educational and healthcare compliance"
        },
        {
          icon: "fas fa-robot",
          title: "AI Innovation",
          description: "Leading-edge AI/automation platforms for competitive advantage"
        }
      ]
    }
  ];

  return (
    <section className={cn('py-16 bg-gradient-to-b from-white to-gray-50', className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading level={2} variant="primary" className="mb-6">
            {title}
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            {subtitle}
          </Text>
        </div>

        {/* Comparisons */}
        <div className="space-y-12">
          {comparisons.map((comparison, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-brand-blue to-brand-green text-white p-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center gap-3">
                    <Icon name="fas fa-trophy" size="large" />
                    <Text className="text-white font-semibold text-lg">Logical Front</Text>
                  </div>
                  
                  <div className="text-white/70 text-2xl">VS</div>
                  
                  <div className="flex items-center gap-3">
                    <Icon name={comparison.competitorIcon} size="large" />
                    <Text className="text-white/90 font-medium">{comparison.competitor}</Text>
                  </div>
                </div>
                
                <div className="text-center mt-2">
                  <Text variant="small" className="text-white/80">
                    {comparison.category}
                  </Text>
                </div>
              </div>

              {/* Advantages Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {comparison.ourAdvantages.map((advantage, advIndex) => (
                    <div 
                      key={advIndex} 
                      className="group hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-center p-4 rounded-xl bg-brand-green/5 hover:bg-brand-green/10 transition-colors duration-300">
                        <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-green/20 transition-colors duration-300">
                          <Icon 
                            name={advantage.icon} 
                            color="secondary" 
                            size="large"
                          />
                        </div>
                        
                        <Heading level={5} variant="primary" className="mb-3">
                          {advantage.title}
                        </Heading>
                        
                        <Text variant="small" className="text-gray-600">
                          {advantage.description}
                        </Text>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-brand-blue to-brand-green"></div>
            </div>
          ))}
        </div>

        {/* Summary CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <Heading level={3} variant="primary" className="mb-4">
              Experience the Logical Front Difference
            </Heading>
            <Text className="mb-6">
              Don't just take our word for it. Schedule a consultation to see how we compare on your specific requirements.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Schedule Comparison Call
              </button>
              <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                View Case Studies
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Icon name="fas fa-award" />
              <Text variant="small">600K+ Virtual Desktops Deployed</Text>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="fas fa-university" />
              <Text variant="small">Trusted by Arkansas State University</Text>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="fas fa-hospital" />
              <Text variant="small">United Healthcare Partner</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropsComparison;
export { ValuePropsComparison };