"use client"

import React, { useState } from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Button } from '../items/Button';
import { cn } from '../../utils/cn';

interface CostSavingsCalculatorProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const CostSavingsCalculator: React.FC<CostSavingsCalculatorProps> = ({
  title = "Calculate Your Infrastructure Savings",
  subtitle = "See how much you could save by switching from public cloud to Logical Front's private cloud solutions",
  className = ''
}) => {
  const [monthlySpend, setMonthlySpend] = useState(10000);
  const [provider, setProvider] = useState<'aws' | 'azure' | 'gcp'>('aws');
  
  // Calculate savings (33% typical savings)
  const logicalFrontCost = Math.round(monthlySpend * 0.67);
  const monthlySavings = monthlySpend - logicalFrontCost;
  const annualSavings = monthlySavings * 12;
  const savingsPercentage = Math.round((monthlySavings / monthlySpend) * 100);
  
  const providers = [
    { id: 'aws', name: 'Amazon AWS', icon: 'fab fa-aws' },
    { id: 'azure', name: 'Microsoft Azure', icon: 'fab fa-microsoft' },
    { id: 'gcp', name: 'Google Cloud', icon: 'fab fa-google' }
  ];

  return (
    <section className={cn('py-16 bg-gradient-to-br from-brand-blue/5 to-brand-green/5', className)}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Heading level={2} variant="primary" className="mb-4">
              {title}
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              {subtitle}
            </Text>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Input */}
              <div>
                <Heading level={4} variant="primary" className="mb-6">
                  Current Cloud Setup
                </Heading>
                
                {/* Provider Selection */}
                <div className="mb-6">
                  <Text className="font-semibold mb-3">Current Provider:</Text>
                  <div className="grid grid-cols-3 gap-3">
                    {providers.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setProvider(p.id as any)}
                        className={cn(
                          'p-3 rounded-lg border-2 transition-all duration-300 text-center',
                          provider === p.id 
                            ? 'border-brand-green bg-brand-green/10' 
                            : 'border-gray-200 hover:border-brand-blue'
                        )}
                      >
                        <Icon name={p.icon} className="mb-2" />
                        <Text variant="small" className="font-medium">{p.name}</Text>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Spend Slider */}
                <div className="mb-6">
                  <Text className="font-semibold mb-3">Monthly Cloud Spend:</Text>
                  <div className="relative">
                    <input
                      type="range"
                      min="1000"
                      max="100000"
                      step="1000"
                      value={monthlySpend}
                      onChange={(e) => setMonthlySpend(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>$1K</span>
                      <span>$100K</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <Heading level={3} variant="primary">
                      ${monthlySpend.toLocaleString()}/month
                    </Heading>
                  </div>
                </div>

                {/* Additional Features */}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <Text variant="small" className="text-gray-600">
                    <Icon name="fas fa-info-circle" className="mr-2" />
                    Calculation includes typical infrastructure, storage, and data transfer costs
                  </Text>
                </div>
              </div>

              {/* Results */}
              <div>
                <Heading level={4} variant="primary" className="mb-6">
                  Your Potential Savings
                </Heading>

                {/* Cost Comparison */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                    <div>
                      <Text className="font-semibold text-red-700">Current {providers.find(p => p.id === provider)?.name} Cost</Text>
                      <Text variant="small" className="text-red-600">Per month</Text>
                    </div>
                    <Heading level={4} className="text-red-700 mb-0">
                      ${monthlySpend.toLocaleString()}
                    </Heading>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border-l-4 border-brand-green">
                    <div>
                      <Text className="font-semibold text-brand-green">Logical Front Cost</Text>
                      <Text variant="small" className="text-green-600">Per month</Text>
                    </div>
                    <Heading level={4} className="text-brand-green mb-0">
                      ${logicalFrontCost.toLocaleString()}
                    </Heading>
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="text-center p-6 bg-gradient-to-r from-brand-blue to-brand-green rounded-xl text-white mb-6">
                  <Text variant="small" className="text-white/90 mb-2">You could save</Text>
                  <Heading level={2} variant="white" className="mb-2">
                    ${annualSavings.toLocaleString()}
                  </Heading>
                  <Text className="text-white/90">per year ({savingsPercentage}% savings)</Text>
                </div>

                {/* Benefits */}
                <div className="space-y-3 mb-6">
                  {[
                    'Predictable monthly pricing',
                    'No data egress charges',
                    'Arkansas-based support team',
                    'Enterprise-grade performance'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Icon name="fas fa-check-circle" color="secondary" />
                      <Text variant="small">{benefit}</Text>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3">
                  <Button variant="primary" size="large" className="w-full">
                    Get Custom Pricing Quote
                  </Button>
                  <Button variant="secondary" className="w-full">
                    Schedule Infrastructure Assessment
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-8">
            <Text variant="small" className="text-gray-600">
              * Savings estimates based on typical customer migrations. Actual savings may vary based on specific requirements and usage patterns.
            </Text>
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4BB74E;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #4BB74E;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default CostSavingsCalculator;
export { CostSavingsCalculator };