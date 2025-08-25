import React from 'react';
import { ChallengeCard } from '../components/ChallengeCard';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { cn } from '../../utils/cn';

interface ChallengeSolution {
  challenge: {
    number: number;
    title: string;
    description: string;
    painPoints: string[];
    industry?: string;
  };
  solution: {
    title: string;
    description: string;
    benefits: string[];
    metrics?: string[];
  };
}

interface ChallengeSolutionPairsProps {
  title?: string;
  subtitle?: string;
  pairs?: ChallengeSolution[];
  _variant?: 'default' | 'industry-specific' | 'detailed';
  className?: string;
}

const defaultPairs: ChallengeSolution[] = [
  {
    challenge: {
      number: 1,
      title: "Unpredictable Cloud Costs",
      description: "Public cloud bills that fluctuate wildly month-to-month, making budget planning impossible",
      painPoints: [
        "Data egress charges that spike unexpectedly",
        "Complex pricing models with hidden fees",
        "Scaling costs that grow exponentially",
        "No control over vendor price increases"
      ],
      industry: "All Industries"
    },
    solution: {
      title: "Predictable Monthly Pricing",
      description: "Fixed monthly costs with transparent pricing and no surprise charges",
      benefits: [
        "Predictable monthly infrastructure costs",
        "No data egress or transfer fees",
        "Transparent pricing with no hidden charges",
        "33% cost savings vs. public cloud average"
      ],
      metrics: ["33% savings", "100% predictable pricing"]
    }
  },
  {
    challenge: {
      number: 2,
      title: "Vendor Lock-in Concerns",
      description: "Fear of being trapped with a single cloud provider with limited flexibility to change",
      painPoints: [
        "Proprietary technologies that lock you in",
        "Expensive data migration costs",
        "Limited negotiating power with large vendors",
        "Dependency on vendor roadmap decisions"
      ],
      industry: "Enterprise"
    },
    solution: {
      title: "Complete Infrastructure Control",
      description: "Maintain full control over your infrastructure with flexible deployment options",
      benefits: [
        "Choice of on-premise, private cloud, or hybrid",
        "Use standard technologies, not proprietary",
        "Easy migration between deployment models",
        "Negotiable terms with dedicated account team"
      ],
      metrics: ["100% vendor flexibility", "Zero lock-in"]
    }
  },
  {
    challenge: {
      number: 3,
      title: "Compliance Complexity",
      description: "Struggling to meet FERPA, HIPAA, and other regulatory requirements in public cloud",
      painPoints: [
        "Unclear data residency and sovereignty",
        "Complex shared responsibility models",
        "Audit trail and documentation gaps",
        "Regulatory changes requiring infrastructure updates"
      ],
      industry: "Education & Healthcare"
    },
    solution: {
      title: "Built-in Compliance Framework",
      description: "Infrastructure designed specifically for educational and healthcare compliance",
      benefits: [
        "Arkansas-based data residency guarantee",
        "FERPA and HIPAA compliance by design",
        "Complete audit trails and documentation",
        "Regulatory expertise and ongoing support"
      ],
      metrics: ["100% compliance", "Arkansas data residency"]
    }
  },
  {
    challenge: {
      number: 4,
      title: "Poor Support Experience",
      description: "Dealing with overseas call centers and endless ticket systems for critical infrastructure issues",
      painPoints: [
        "Long hold times and language barriers",
        "Ticket systems that don't understand urgency",
        "Escalation processes that take days",
        "No relationship with actual technical team"
      ],
      industry: "All Industries"
    },
    solution: {
      title: "Local Expert Team",
      description: "Arkansas-based team that designed your solution provides ongoing support",
      benefits: [
        "Same engineers who built your solution",
        "Direct phone access to technical team",
        "Same-day on-site support when needed",
        "Proactive monitoring and optimization"
      ],
      metrics: ["24/7 local support", "Same team continuity"]
    }
  }
];

const ChallengeSolutionPairs: React.FC<ChallengeSolutionPairsProps> = ({
  title = "Common Infrastructure Challenges We Solve",
  subtitle = "See how Logical Front addresses the most common problems organizations face with their current infrastructure providers",
  pairs = defaultPairs,
  _variant = 'default',
  className = ''
}) => {
  return (
    <section className={cn('py-16', className)}>
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

        {/* Challenge-Solution Pairs */}
        <div className="space-y-16">
          {pairs.map((pair, index) => (
            <div key={index} className="relative">
              {/* Connector Line for Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-white rounded-full p-4 shadow-lg border-4 border-brand-green">
                  <Icon name="fas fa-arrow-right" color="secondary" size="large" />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Challenge Side */}
                <div className="order-1">
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
                      <Icon name="fas fa-exclamation-triangle" size="small" />
                      CHALLENGE
                    </div>
                    {pair.challenge.industry && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm ml-2">
                        <Icon name="fas fa-tag" size="small" />
                        {pair.challenge.industry}
                      </div>
                    )}
                  </div>
                  
                  <ChallengeCard
                    number={pair.challenge.number}
                    title={pair.challenge.title}
                    description={pair.challenge.description}
                    painPoints={pair.challenge.painPoints}
                    variant="challenge"
                    className="h-full"
                  />
                </div>

                {/* Solution Side */}
                <div className="order-2">
                  <div className="mb-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      <Icon name="fas fa-check-circle" size="small" />
                      LOGICAL FRONT SOLUTION
                    </div>
                  </div>
                  
                  <ChallengeCard
                    title={pair.solution.title}
                    description={pair.solution.description}
                    painPoints={pair.solution.benefits}
                    variant="solution"
                    className="h-full"
                  />

                  {/* Metrics */}
                  {pair.solution.metrics && pair.solution.metrics.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {pair.solution.metrics.map((metric, metricIndex) => (
                        <div 
                          key={metricIndex}
                          className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green text-white rounded-full text-sm font-semibold"
                        >
                          <Icon name="fas fa-chart-line" size="small" />
                          {metric}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Arrow */}
              <div className="lg:hidden flex justify-center my-6">
                <div className="bg-brand-green text-white rounded-full p-3">
                  <Icon name="fas fa-arrow-down" size="large" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <Heading level={4} variant="primary" className="mb-4">
              Ready to Solve Your Infrastructure Challenges?
            </Heading>
            <Text className="mb-6">
              Schedule a free assessment to see how we can address your specific challenges
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Schedule Free Assessment
              </button>
              <button className="px-6 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolutionPairs;
export { ChallengeSolutionPairs };