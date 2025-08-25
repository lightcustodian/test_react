import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { MetricDisplay } from '../items/MetricDisplay';
import { cn } from '../../utils/cn';

interface Advantage {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  metrics?: {
    value: string;
    label: string;
  };
}

interface ArkansasAdvantageProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'detailed' | 'hero';
  className?: string;
}

const ArkansasAdvantage: React.FC<ArkansasAdvantageProps> = ({
  title = "Why Arkansas Organizations Choose Logical Front",
  subtitle = "Unique advantages available only through Arkansas-based infrastructure providers with deep local expertise",
  variant = 'default',
  className = ''
}) => {
  const advantages: Advantage[] = [
    {
      title: "Arkansas Educational Network (AR-EON) Access",
      description: "Direct connection to the state's premier educational network infrastructure",
      icon: "fas fa-network-wired",
      benefits: [
        "Sub-50ms latency to any AR-EON connected institution",
        "Dedicated high-speed bandwidth unavailable to commercial providers",
        "Priority traffic routing for educational applications",
        "Direct connectivity to state universities and school districts"
      ],
      metrics: {
        value: "<50ms",
        label: "AR-EON Latency"
      }
    },
    {
      title: "Arkansas Data Residency Guarantee",
      description: "All data remains within Arkansas borders for sovereignty and compliance",
      icon: "fas fa-shield-alt",
      benefits: [
        "Meet Arkansas state data residency requirements",
        "Comply with educational and healthcare privacy laws",
        "Avoid multi-state legal complications",
        "Support Arkansas economic development initiatives"
      ],
      metrics: {
        value: "100%",
        label: "In-State Data"
      }
    },
    {
      title: "Local Support & Response Team",
      description: "Arkansas-based technical team providing rapid response and local expertise",
      icon: "fas fa-headset",
      benefits: [
        "Same engineers who designed your solution provide support",
        "Direct phone access without call center routing",
        "Same-day on-site support when needed",
        "Understanding of Arkansas regulatory environment"
      ],
      metrics: {
        value: "24/7",
        label: "Local Support"
      }
    },
    {
      title: "State Government & Agency Relationships",
      description: "Established partnerships with Arkansas state agencies and institutions",
      icon: "fas fa-landmark",
      benefits: [
        "Pre-approved vendor status with state agencies",
        "Direct relationships with state CIO and cybersecurity offices",
        "Understanding of Arkansas procurement processes",
        "Collaboration on state technology initiatives"
      ]
    },
    {
      title: "Arkansas Economic Impact",
      description: "Investments that directly support Arkansas economic development",
      icon: "fas fa-chart-line",
      benefits: [
        "Local job creation and workforce development",
        "Arkansas tax revenue and economic multiplier effects",
        "Support for Arkansas technology sector growth",
        "Partnership with Arkansas universities for talent pipeline"
      ]
    },
    {
      title: "Regional Expertise & Understanding",
      description: "Deep knowledge of Arkansas business environment and regulatory landscape",
      icon: "fas fa-map-marker-alt",
      benefits: [
        "Understanding of Arkansas industry sectors and challenges",
        "Knowledge of state and local regulatory requirements",
        "Relationships with Arkansas business and education leaders",
        "Participation in Arkansas technology and business communities"
      ]
    }
  ];

  const stateMetrics = [
    {
      value: "600K+",
      label: "Virtual Desktops Deployed",
      icon: "fas fa-desktop",
      description: "Across Arkansas institutions"
    },
    {
      value: "15+",
      label: "Years in Arkansas",
      icon: "fas fa-calendar",
      description: "Serving local organizations"
    },
    {
      value: "99.9%",
      label: "Customer Satisfaction",
      icon: "fas fa-star",
      description: "Arkansas customer rating"
    },
    {
      value: "33%",
      label: "Typical Cost Savings",
      icon: "fas fa-dollar-sign",
      description: "vs. out-of-state alternatives"
    }
  ];

  const testimonials = [
    {
      quote: "The Arkansas advantage is real - having our infrastructure provider understand our state's unique requirements made all the difference.",
      author: "IT Director",
      organization: "Arkansas State University",
      location: "Jonesboro, AR"
    },
    {
      quote: "Local support means we get answers immediately, not after going through multiple call center transfers.",
      author: "Technology Coordinator", 
      organization: "Glen Rose ISD",
      location: "Texas (served from Arkansas)"
    },
    {
      quote: "Knowing our data stays in Arkansas gives us confidence in meeting our compliance requirements.",
      author: "Executive Director",
      organization: "Tuscaloosa Housing Authority",
      location: "Alabama (Arkansas-managed)"
    }
  ];

  if (variant === 'hero') {
    return (
      <section className={cn('py-32 bg-gradient-to-br from-brand-blue via-brand-blue to-brand-green text-white relative overflow-hidden', className)}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32">
            <Icon name="fas fa-star" size="large" />
          </div>
          <div className="absolute top-20 right-20 w-24 h-24">
            <Icon name="fas fa-home" size="large" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28">
            <Icon name="fas fa-heart" size="large" />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Icon name="fas fa-map-marker-alt" size="large" />
              <Heading level={1} variant="white" className="text-5xl">
                The Arkansas Advantage
              </Heading>
              <Icon name="fas fa-map-marker-alt" size="large" />
            </div>
            
            <Text className="text-xl text-white/90 mb-12 leading-relaxed">
              When you choose Arkansas-based infrastructure, you're not just getting technology – 
              you're getting a competitive advantage that out-of-state providers simply cannot match.
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {stateMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={metric.icon} size="large" />
                  </div>
                  <Heading level={2} variant="white" className="mb-2">
                    {metric.value}
                  </Heading>
                  <Text className="text-white/90 font-semibold mb-1">
                    {metric.label}
                  </Text>
                  <Text variant="small" className="text-white/70">
                    {metric.description}
                  </Text>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-brand-blue rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg">
                Discover Your Arkansas Advantage
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-brand-blue transition-all duration-300 font-semibold text-lg">
                Talk to Arkansas Experts
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('py-20 bg-gradient-to-b from-gray-50 to-white', className)}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Icon name="fas fa-star" color="secondary" size="large" />
            <Heading level={2} variant="primary">
              {title}
            </Heading>
            <Icon name="fas fa-star" color="secondary" size="large" />
          </div>
          <Text variant="lead" className="max-w-4xl mx-auto">
            {subtitle}
          </Text>
          
          {/* Arkansas Pride Badge */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <Badge variant="success" className="px-4 py-2">
              <Icon name="fas fa-heart" className="text-red-500 mr-2" />
              Proudly Arkansas-Based Since 2010
            </Badge>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stateMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg">
              <MetricDisplay
                {...metric}
                animateOnView={true}
              />
            </div>
          ))}
        </div>

        {/* Arkansas Advantages */}
        <div className="mb-16">
          <Heading level={3} variant="primary" className="text-center mb-12">
            Exclusive Arkansas Benefits
          </Heading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={advantage.icon} color="secondary" size="large" />
                  </div>
                  <div className="flex-1">
                    <Heading level={4} variant="primary" className="mb-3">
                      {advantage.title}
                    </Heading>
                    <Text className="text-gray-700">
                      {advantage.description}
                    </Text>
                  </div>
                  {advantage.metrics && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brand-green">
                        {advantage.metrics.value}
                      </div>
                      <Text variant="small" className="text-gray-600">
                        {advantage.metrics.label}
                      </Text>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  {advantage.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start gap-3">
                      <Icon name="fas fa-check-circle" color="secondary" size="small" className="mt-0.5" />
                      <Text variant="small" className="text-gray-700 flex-1">
                        {benefit}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mb-16">
          <Heading level={3} variant="primary" className="text-center mb-12">
            What Arkansas Customers Say
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-4">
                  <Icon name="fas fa-quote-left" color="secondary" size="large" />
                </div>
                
                <Text className="italic text-gray-700 mb-6">
                  "{testimonial.quote}"
                </Text>
                
                <div className="border-t pt-4">
                  <Text className="font-semibold text-brand-blue">
                    {testimonial.author}
                  </Text>
                  <Text variant="small" className="text-gray-600">
                    {testimonial.organization}
                  </Text>
                  <Text variant="small" className="text-gray-500">
                    {testimonial.location}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Arkansas Matters */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl text-white p-12">
          <div className="text-center mb-8">
            <Heading level={3} variant="white" className="mb-4">
              Why Arkansas Infrastructure Matters
            </Heading>
            <Text className="text-white/90 max-w-3xl mx-auto">
              Beyond technology benefits, choosing Arkansas infrastructure supports your state's economic growth and technology leadership
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="fas fa-users" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-3">
                Local Job Creation
              </Heading>
              <Text variant="small" className="text-white/90">
                Every Arkansas infrastructure investment creates local technology jobs and supports workforce development
              </Text>
            </div>
            
            <div className="text-center">
              <Icon name="fas fa-graduation-cap" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-3">
                Education Partnership
              </Heading>
              <Text variant="small" className="text-white/90">
                Direct collaboration with Arkansas universities creates pathways for student internships and careers
              </Text>
            </div>
            
            <div className="text-center">
              <Icon name="fas fa-rocket" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-3">
                Innovation Leadership
              </Heading>
              <Text variant="small" className="text-white/90">
                Keeping technology investments in Arkansas builds the state's reputation as an innovation leader
              </Text>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <Heading level={4} variant="primary" className="mb-4">
              Ready to Experience the Arkansas Advantage?
            </Heading>
            <Text className="mb-8">
              Join hundreds of Arkansas organizations who have discovered the competitive advantages 
              of keeping their infrastructure investments local.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Schedule Arkansas Advantage Consultation
              </button>
              <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                Compare Arkansas vs. Out-of-State
              </button>
            </div>
          </div>
        </div>

        {/* Arkansas Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <Icon name="fas fa-heart" className="text-red-500" />
            <Text variant="small">
              Serving Arkansas organizations with pride since 2010
            </Text>
            <Icon name="fas fa-heart" className="text-red-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArkansasAdvantage;
export { ArkansasAdvantage };