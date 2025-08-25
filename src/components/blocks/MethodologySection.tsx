import React from 'react';
import { ProcessStep } from '../components/ProcessStep';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Divider } from '../items/Divider';
import { cn } from '../../utils/cn';

interface MethodologyData {
  title?: string;
  subtitle?: string;
  steps: Array<{
    number: number;
    title: string;
    description: string;
    icon: string;
    benefits: string[];
    timeframe: string;
  }>;
}

interface MethodologySectionProps {
  data?: MethodologyData;
  variant?: 'default' | 'horizontal' | 'detailed';
  className?: string;
}

const defaultMethodologyData: MethodologyData = {
  title: "The Logical Front Method",
  subtitle: "Our proven three-step approach transforms your infrastructure challenges into competitive advantages",
  steps: [
    {
      number: 1,
      title: "Assess",
      icon: "fas fa-search",
      description: "Comprehensive evaluation of your current infrastructure, compliance requirements, and business objectives",
      benefits: [
        "Current state analysis and documentation",
        "Compliance gap assessment (FERPA, HIPAA)",
        "Cost baseline establishment",
        "Risk and opportunity identification"
      ],
      timeframe: "1-2 weeks"
    },
    {
      number: 2,
      title: "Plan",
      icon: "fas fa-drafting-compass",
      description: "Strategic roadmap development with timeline, budget, and risk mitigation strategies",
      benefits: [
        "Detailed implementation roadmap",
        "Budget certainty with no surprises",
        "Risk mitigation planning",
        "Stakeholder communication strategy"
      ],
      timeframe: "2-3 weeks"
    },
    {
      number: 3,
      title: "Execute",
      icon: "fas fa-rocket",
      description: "Seamless implementation with 24/7 Arkansas-based support and ongoing optimization",
      benefits: [
        "White-glove implementation process",
        "Local Arkansas support team",
        "Continuous monitoring and optimization",
        "Comprehensive knowledge transfer"
      ],
      timeframe: "4-12 weeks"
    }
  ]
};

const MethodologySection: React.FC<MethodologySectionProps> = ({
  data = defaultMethodologyData,
  variant = 'default',
  className = ''
}) => {
  const containerClasses = {
    default: 'py-20 bg-gradient-to-b from-white to-gray-50',
    horizontal: 'py-16 bg-white',
    detailed: 'py-24 bg-gradient-to-r from-brand-blue/5 to-brand-green/5'
  };

  return (
    <section className={cn(containerClasses[variant], className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Heading level={2} variant="gradient" className="mb-6">
            {data.title}
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto mb-8">
            {data.subtitle}
          </Text>
          <Divider variant="thick" color="primary" className="max-w-24 mx-auto" />
        </div>

        {/* Steps */}
        {variant === 'horizontal' ? (
          <div className="space-y-8">
            {data.steps.map((step, index) => (
              <ProcessStep
                key={step.number}
                {...step}
                variant="horizontal"
                className="hover:scale-[1.02] transition-transform duration-300"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.steps.map((step, index) => (
              <div key={step.number} className="relative">
                <ProcessStep
                  {...step}
                  variant={variant}
                  className="h-full hover:scale-105 transition-transform duration-300"
                />
                
                {/* Arrow connector for desktop */}
                {index < data.steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-brand-green"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-brand-green border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Text className="mb-6">
            Ready to transform your infrastructure with our proven methodology?
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
              Start Your Assessment
            </button>
            <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
export { MethodologySection };