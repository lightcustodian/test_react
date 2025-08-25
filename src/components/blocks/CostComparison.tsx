"use client"

import React, { useState } from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { cn } from '../../utils/cn';

interface CostBreakdown {
  category: string;
  logicalFront: number;
  aws: number;
  azure: number;
  traditional: number;
  icon: string;
}

interface CostScenario {
  name: string;
  description: string;
  monthlyUsers: number;
  workloadType: string;
}

interface CostComparisonProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'detailed' | 'interactive';
  className?: string;
}

const CostComparison: React.FC<CostComparisonProps> = ({
  title = "Real Cost Comparison",
  subtitle = "See actual cost differences between Logical Front and other infrastructure providers across common scenarios",
  variant = 'default',
  className = ''
}) => {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const scenarios: CostScenario[] = [
    {
      name: "Small School District",
      description: "K-12 district with 500 students and 50 staff members",
      monthlyUsers: 250,
      workloadType: "Educational VDI"
    },
    {
      name: "Mid-Size University",
      description: "University with 5,000 students and 500 faculty/staff",
      monthlyUsers: 2500,
      workloadType: "Academic Computing"
    },
    {
      name: "Healthcare Practice", 
      description: "Medical practice with 100 users accessing EHR systems",
      monthlyUsers: 100,
      workloadType: "HIPAA-Compliant VDI"
    },
    {
      name: "Manufacturing Company",
      description: "Engineering firm with 200 CAD/design workstations",
      monthlyUsers: 200,
      workloadType: "High-Performance Workstations"
    }
  ];

  const getCurrentCostBreakdown = (): CostBreakdown[] => {
    const multiplier = scenarios[selectedScenario].monthlyUsers / 100;
    
    return [
      {
        category: "Virtual Desktop Infrastructure",
        logicalFront: Math.round(3500 * multiplier),
        aws: Math.round(5200 * multiplier),
        azure: Math.round(4800 * multiplier),
        traditional: Math.round(6000 * multiplier),
        icon: "fas fa-desktop"
      },
      {
        category: "Storage & Backup",
        logicalFront: Math.round(800 * multiplier),
        aws: Math.round(1400 * multiplier),
        azure: Math.round(1200 * multiplier),
        traditional: Math.round(1600 * multiplier),
        icon: "fas fa-database"
      },
      {
        category: "Network & Data Transfer",
        logicalFront: 0, // Included in base cost
        aws: Math.round(600 * multiplier),
        azure: Math.round(500 * multiplier),
        traditional: Math.round(300 * multiplier),
        icon: "fas fa-network-wired"
      },
      {
        category: "Security & Compliance",
        logicalFront: Math.round(400 * multiplier),
        aws: Math.round(800 * multiplier),
        azure: Math.round(700 * multiplier),
        traditional: Math.round(1200 * multiplier),
        icon: "fas fa-shield-alt"
      },
      {
        category: "Support & Management",
        logicalFront: Math.round(300 * multiplier),
        aws: Math.round(900 * multiplier),
        azure: Math.round(800 * multiplier),
        traditional: Math.round(1500 * multiplier),
        icon: "fas fa-headset"
      }
    ];
  };

  const costBreakdown = getCurrentCostBreakdown();
  
  const totals = {
    logicalFront: costBreakdown.reduce((sum, item) => sum + item.logicalFront, 0),
    aws: costBreakdown.reduce((sum, item) => sum + item.aws, 0),
    azure: costBreakdown.reduce((sum, item) => sum + item.azure, 0),
    traditional: costBreakdown.reduce((sum, item) => sum + item.traditional, 0)
  };

  const savings = {
    vsAws: totals.aws - totals.logicalFront,
    vsAzure: totals.azure - totals.logicalFront,
    vsTraditional: totals.traditional - totals.logicalFront
  };

  const providers = [
    {
      name: "Logical Front",
      key: "logicalFront" as keyof typeof totals,
      color: "bg-brand-green",
      textColor: "text-white",
      isOurs: true
    },
    {
      name: "Amazon AWS",
      key: "aws" as keyof typeof totals,
      color: "bg-orange-500",
      textColor: "text-white",
      isOurs: false
    },
    {
      name: "Microsoft Azure",
      key: "azure" as keyof typeof totals,
      color: "bg-blue-500",
      textColor: "text-white",
      isOurs: false
    },
    {
      name: "Traditional On-Premise",
      key: "traditional" as keyof typeof totals,
      color: "bg-gray-500",
      textColor: "text-white",
      isOurs: false
    }
  ];

  const maxTotal = Math.max(...Object.values(totals));

  if (variant === 'interactive') {
    return (
      <section className={cn('py-20 bg-gradient-to-b from-gray-50 to-white', className)}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <Heading level={2} variant="primary" className="mb-6">
              {title}
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              {subtitle}
            </Text>
          </div>

          {/* Scenario Selection */}
          <div className="mb-12">
            <Heading level={4} variant="primary" className="text-center mb-6">
              Choose Your Scenario
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {scenarios.map((scenario, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedScenario(index)}
                  className={cn(
                    'p-4 rounded-lg border-2 text-left transition-all duration-300',
                    selectedScenario === index
                      ? 'border-brand-green bg-brand-green/10'
                      : 'border-gray-200 hover:border-brand-blue'
                  )}
                >
                  <Text className="font-semibold mb-2">{scenario.name}</Text>
                  <Text variant="small" className="text-gray-600 mb-2">
                    {scenario.description}
                  </Text>
                  <Badge variant="secondary" size="small">
                    {scenario.monthlyUsers} users
                  </Badge>
                </button>
              ))}
            </div>
          </div>

          {/* Cost Comparison Chart */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <Heading level={4} variant="primary" className="mb-8 text-center">
                Monthly Cost Comparison: {scenarios[selectedScenario].name}
              </Heading>

              {/* Bar Chart */}
              <div className="space-y-6 mb-8">
                {providers.map((provider) => {
                  const cost = totals[provider.key];
                  const width = (cost / maxTotal) * 100;
                  
                  return (
                    <div key={provider.name} className="flex items-center gap-4">
                      <div className="w-32 text-right">
                        <Text className="font-semibold">{provider.name}</Text>
                      </div>
                      <div className="flex-1 relative">
                        <div className="h-12 bg-gray-200 rounded-lg overflow-hidden">
                          <div 
                            className={cn('h-full flex items-center justify-end pr-4 transition-all duration-1000', provider.color)}
                            style={{ width: `${width}%` }}
                          >
                            <Text className={cn('font-bold', provider.textColor)}>
                              ${cost.toLocaleString()}
                            </Text>
                          </div>
                        </div>
                        {provider.isOurs && (
                          <Badge variant="success" className="absolute -top-2 -right-2">
                            Best Value
                          </Badge>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Savings Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-brand-green/10 rounded-lg">
                <div className="text-center">
                  <Text className="font-semibold text-orange-700">vs. Amazon AWS</Text>
                  <Heading level={4} className="text-orange-700">
                    ${savings.vsAws.toLocaleString()}/mo
                  </Heading>
                  <Text variant="small" className="text-gray-600">
                    ${(savings.vsAws * 12).toLocaleString()}/year saved
                  </Text>
                </div>
                <div className="text-center">
                  <Text className="font-semibold text-blue-700">vs. Microsoft Azure</Text>
                  <Heading level={4} className="text-blue-700">
                    ${savings.vsAzure.toLocaleString()}/mo
                  </Heading>
                  <Text variant="small" className="text-gray-600">
                    ${(savings.vsAzure * 12).toLocaleString()}/year saved
                  </Text>
                </div>
                <div className="text-center">
                  <Text className="font-semibold text-gray-700">vs. Traditional On-Premise</Text>
                  <Heading level={4} className="text-gray-700">
                    ${savings.vsTraditional.toLocaleString()}/mo
                  </Heading>
                  <Text variant="small" className="text-gray-600">
                    ${(savings.vsTraditional * 12).toLocaleString()}/year saved
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('py-20 bg-white', className)}>
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

        {/* Cost Comparison Visual */}
        <div className="max-w-6xl mx-auto">
          {/* Scenario Info */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-brand-blue/10 rounded-lg">
              <Icon name="fas fa-calculator" color="primary" />
              <div className="text-left">
                <Text className="font-semibold">{scenarios[selectedScenario].name}</Text>
                <Text variant="small" className="text-gray-600">
                  {scenarios[selectedScenario].description}
                </Text>
              </div>
            </div>
          </div>

          {/* Provider Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {providers.map((provider) => {
              const cost = totals[provider.key];
              const savings = provider.isOurs ? 0 : cost - totals.logicalFront;
              const savingsPercent = provider.isOurs ? 0 : Math.round((savings / cost) * 100);
              
              return (
                <div 
                  key={provider.name}
                  className={cn(
                    'relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl',
                    provider.isOurs ? 'ring-4 ring-brand-green transform scale-105' : ''
                  )}
                >
                  <div className={cn('p-6 text-center', provider.color)}>
                    <Text className={cn('font-semibold mb-2', provider.textColor)}>
                      {provider.name}
                    </Text>
                    <Heading level={2} className={cn('mb-2', provider.textColor)}>
                      ${cost.toLocaleString()}
                    </Heading>
                    <Text variant="small" className={cn(provider.textColor, 'opacity-90')}>
                      per month
                    </Text>
                    
                    {provider.isOurs && (
                      <Badge variant="success" className="absolute top-2 right-2">
                        <Icon name="fas fa-crown" size="small" className="mr-1" />
                        Best Value
                      </Badge>
                    )}
                  </div>
                  
                  <div className="p-4 bg-white">
                    {provider.isOurs ? (
                      <div className="text-center">
                        <Icon name="fas fa-check-circle" color="secondary" className="mb-2" />
                        <Text variant="small" className="font-semibold text-brand-green">
                          Optimal Choice
                        </Text>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Text variant="small" className="text-red-600 font-semibold">
                          ${savings.toLocaleString()} more
                        </Text>
                        <Text variant="small" className="text-gray-600">
                          ({savingsPercent}% higher cost)
                        </Text>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Cost Breakdown */}
          {variant === 'detailed' && (
            <div className="bg-gray-50 rounded-xl p-8 mb-12">
              <Heading level={4} variant="primary" className="mb-6 text-center">
                Detailed Cost Breakdown
              </Heading>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-3 px-4">Cost Category</th>
                      <th className="text-center py-3 px-4">Logical Front</th>
                      <th className="text-center py-3 px-4">AWS</th>
                      <th className="text-center py-3 px-4">Azure</th>
                      <th className="text-center py-3 px-4">Traditional</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costBreakdown.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Icon name={item.icon} size="small" />
                            <Text>{item.category}</Text>
                          </div>
                        </td>
                        <td className="text-center py-3 px-4 font-semibold text-brand-green">
                          ${item.logicalFront.toLocaleString()}
                        </td>
                        <td className="text-center py-3 px-4">
                          ${item.aws.toLocaleString()}
                        </td>
                        <td className="text-center py-3 px-4">
                          ${item.azure.toLocaleString()}
                        </td>
                        <td className="text-center py-3 px-4">
                          ${item.traditional.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t-2 border-gray-400 font-bold">
                      <td className="py-3 px-4">Total Monthly Cost</td>
                      <td className="text-center py-3 px-4 text-brand-green">
                        ${totals.logicalFront.toLocaleString()}
                      </td>
                      <td className="text-center py-3 px-4">
                        ${totals.aws.toLocaleString()}
                      </td>
                      <td className="text-center py-3 px-4">
                        ${totals.azure.toLocaleString()}
                      </td>
                      <td className="text-center py-3 px-4">
                        ${totals.traditional.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Savings Highlight */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl text-white p-8 text-center">
            <Heading level={3} variant="white" className="mb-4">
              Your Potential Annual Savings
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Heading level={2} variant="white" className="mb-2">
                  ${(savings.vsAws * 12).toLocaleString()}
                </Heading>
                <Text className="text-white/90">vs. Amazon AWS</Text>
              </div>
              <div>
                <Heading level={2} variant="white" className="mb-2">
                  ${(savings.vsAzure * 12).toLocaleString()}
                </Heading>
                <Text className="text-white/90">vs. Microsoft Azure</Text>
              </div>
              <div>
                <Heading level={2} variant="white" className="mb-2">
                  ${(savings.vsTraditional * 12).toLocaleString()}
                </Heading>
                <Text className="text-white/90">vs. Traditional IT</Text>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Heading level={4} variant="primary" className="text-center mb-8">
            What's Included in Logical Front Pricing
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "24/7 Arkansas-based support",
              "All data transfer and egress",
              "Security and compliance monitoring",
              "Backup and disaster recovery",
              "Performance monitoring and optimization",
              "Software licensing and updates",
              "On-site support when needed",
              "Dedicated account management"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Icon name="fas fa-check-circle" color="secondary" />
                <Text>{feature}</Text>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <Heading level={4} variant="primary" className="mb-4">
              Get Your Custom Cost Analysis
            </Heading>
            <Text className="mb-8">
              Every organization is unique. Get a detailed cost comparison based on your specific requirements.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Request Custom Quote
              </button>
              <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                Download Cost Calculator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;
export { CostComparison };