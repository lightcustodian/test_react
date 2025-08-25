import React from 'react';
import { MetricDisplay } from '../items/MetricDisplay';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { cn } from '../../utils/cn';

interface ArkansasAdvantageStatsProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact' | 'detailed';
  className?: string;
}

const ArkansasAdvantageStats: React.FC<ArkansasAdvantageStatsProps> = ({
  title = "The Arkansas Advantage",
  subtitle = "Unique benefits available only to Arkansas organizations through our AR-EON network access and local expertise",
  variant = 'default',
  className = ''
}) => {
  const arkansasMetrics = [
    {
      value: "<50ms",
      label: "AR-EON Latency",
      icon: "fas fa-network-wired",
      description: "Lightning-fast connectivity through Arkansas Educational Network unavailable from national providers"
    },
    {
      value: "33%",
      label: "Cost Savings",
      icon: "fas fa-dollar-sign",
      description: "Typical savings vs AWS/Azure public cloud with predictable monthly pricing"
    },
    {
      value: "24/7",
      label: "Local Support",
      icon: "fas fa-headset",
      description: "Arkansas-based technical team, not offshore call centers or ticket systems"
    },
    {
      value: "100%",
      label: "In-State Data",
      icon: "fas fa-shield-alt",
      description: "Data remains within Arkansas borders for compliance and governance requirements"
    }
  ];

  const additionalBenefits = [
    {
      icon: "fas fa-university",
      title: "Educational Network Access",
      description: "Direct connection to AR-EON provides unmatched performance for Arkansas schools and universities"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Regional Expertise",
      description: "Deep understanding of Arkansas regulatory environment and local business needs"
    },
    {
      icon: "fas fa-handshake",
      title: "Partner Relationships",
      description: "Established relationships with Arkansas state agencies and educational institutions"
    },
    {
      icon: "fas fa-clock",
      title: "Same-Day Response",
      description: "Local team enables rapid on-site response for critical infrastructure issues"
    }
  ];

  return (
    <section className={cn('py-16', className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="fas fa-star" color="secondary" size="large" />
            <Heading level={2} variant="primary">
              {title}
            </Heading>
            <Icon name="fas fa-star" color="secondary" size="large" />
          </div>
          <Text variant="lead" className="max-w-3xl mx-auto">
            {subtitle}
          </Text>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {arkansasMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MetricDisplay
                {...metric}
                variant={variant === 'compact' ? 'compact' : 'default'}
                animateOnView={true}
              />
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        {variant !== 'compact' && (
          <div className="bg-gradient-to-r from-brand-blue/5 to-brand-green/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Heading level={3} variant="primary" className="mb-4">
                Why Arkansas Organizations Choose Logical Front
              </Heading>
              <Text className="max-w-2xl mx-auto">
                Beyond cost savings, we provide unique advantages that national providers simply cannot match
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                    <Icon name={benefit.icon} color="secondary" />
                  </div>
                  <div>
                    <Heading level={5} variant="primary" className="mb-2">
                      {benefit.title}
                    </Heading>
                    <Text variant="small">{benefit.description}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <Heading level={4} variant="primary" className="mb-4">
              Ready to Experience the Arkansas Advantage?
            </Heading>
            <Text className="mb-6">
              Schedule a consultation to learn how our unique regional benefits can transform your infrastructure
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Schedule Consultation
              </button>
              <button className="px-6 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                Learn About AR-EON
              </button>
            </div>
          </div>
        </div>

        {/* Arkansas Pride Footer */}
        <div className="text-center mt-8">
          <Text variant="small" className="text-gray-600 flex items-center justify-center gap-2">
            <Icon name="fas fa-heart" className="text-red-500" />
            Proudly serving Arkansas organizations since 2010
            <Icon name="fas fa-heart" className="text-red-500" />
          </Text>
        </div>
      </div>
    </section>
  );
};

export default ArkansasAdvantageStats;
export { ArkansasAdvantageStats };