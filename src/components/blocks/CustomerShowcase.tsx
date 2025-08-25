import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { cn } from '../../utils/cn';

interface Customer {
  name: string;
  logo?: string;
  industry: 'education' | 'healthcare' | 'manufacturing' | 'government' | 'enterprise';
  metric?: string;
  location?: string;
  description: string;
  testimonial?: string;
  contactTitle?: string;
}

interface CustomerShowcaseProps {
  title?: string;
  subtitle?: string;
  customers?: Customer[];
  variant?: 'default' | 'testimonials' | 'logos-only';
  className?: string;
}

const defaultCustomers: Customer[] = [
  {
    name: "Arkansas State University",
    industry: "education",
    metric: "25,000+ students",
    location: "Arkansas",
    description: "Complete infrastructure transformation with AR-EON network integration providing campus-wide virtual desktop access",
    testimonial: "Logical Front delivered a VDI solution that transformed how our students and faculty access technology resources.",
    contactTitle: "IT Director"
  },
  {
    name: "United Healthcare",
    industry: "healthcare",
    metric: "Enterprise-scale",
    location: "Multi-state",
    description: "HIPAA-compliant private cloud infrastructure supporting sensitive healthcare data processing and analysis",
    testimonial: "Their expertise in healthcare compliance and security made our cloud migration seamless and worry-free.",
    contactTitle: "Chief Technology Officer"
  },
  {
    name: "Aurora Public Schools",
    industry: "education",
    metric: "12,000+ students",
    location: "Colorado",
    description: "District-wide virtual desktop deployment enabling 1:1 device programs and remote learning capabilities",
    testimonial: "The graphics performance and reliability exceeded our expectations. Students can run demanding applications seamlessly.",
    contactTitle: "Technology Director"
  },
  {
    name: "Glen Rose ISD",
    industry: "education",
    metric: "2,500+ students",
    location: "Texas",
    description: "Cost-effective VDI solution replacing aging computer labs with modern virtual desktop infrastructure",
    testimonial: "We achieved significant cost savings while providing students with better technology experiences.",
    contactTitle: "IT Coordinator"
  },
  {
    name: "Integrated Project Services",
    industry: "enterprise",
    metric: "Engineering firm",
    location: "Multi-location",
    description: "High-performance virtual desktops for CAD and engineering applications across multiple office locations",
    testimonial: "Our engineers can access demanding software from anywhere with performance that rivals local workstations.",
    contactTitle: "IT Manager"
  },
  {
    name: "Tuscaloosa Housing Authority",
    industry: "government",
    metric: "Municipal agency",
    location: "Alabama",
    description: "Secure government infrastructure supporting public housing administration and compliance reporting",
    testimonial: "Logical Front understood our unique government requirements and delivered a solution that exceeds expectations.",
    contactTitle: "Executive Director"
  }
];

const industryInfo = {
  education: { icon: "fas fa-graduation-cap", color: "text-blue-600", label: "Education" },
  healthcare: { icon: "fas fa-hospital", color: "text-red-600", label: "Healthcare" },
  manufacturing: { icon: "fas fa-industry", color: "text-gray-600", label: "Manufacturing" },
  government: { icon: "fas fa-landmark", color: "text-green-600", label: "Government" },
  enterprise: { icon: "fas fa-building", color: "text-purple-600", label: "Enterprise" }
};

const CustomerShowcase: React.FC<CustomerShowcaseProps> = ({
  title = "Trusted by Organizations Across Multiple Industries",
  subtitle = "From small school districts to enterprise healthcare systems, see how we've transformed infrastructure for diverse organizations",
  customers = defaultCustomers,
  variant = 'default',
  className = ''
}) => {
  const featuredCustomers = customers.slice(0, 6); // Show top 6 customers

  if (variant === 'logos-only') {
    return (
      <section className={cn('py-12 bg-gray-50', className)}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Heading level={3} variant="primary" className="mb-4">
              {title}
            </Heading>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {featuredCustomers.map((customer, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-2">
                <Icon name={industryInfo[customer.industry].icon} className={industryInfo[customer.industry].color} />
                <Text className="font-semibold text-gray-700">{customer.name}</Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={cn('py-20 bg-gradient-to-b from-white to-gray-50', className)}>
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

        {/* Customer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCustomers.map((customer, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <Heading level={4} variant="primary" className="mb-2">
                      {customer.name}
                    </Heading>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon 
                        name={industryInfo[customer.industry].icon} 
                        className={industryInfo[customer.industry].color} 
                      />
                      <Text variant="small" className="text-gray-600">
                        {industryInfo[customer.industry].label}
                      </Text>
                    </div>
                  </div>
                  
                  {customer.location === 'Arkansas' && (
                    <Badge variant="success" size="small">
                      Arkansas
                    </Badge>
                  )}
                </div>

                {customer.metric && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full">
                    <Icon name="fas fa-users" color="secondary" size="small" />
                    <Text variant="small" className="text-brand-green font-semibold">
                      {customer.metric}
                    </Text>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <Text className="mb-4 text-gray-700">
                  {customer.description}
                </Text>

                {variant === 'testimonials' && customer.testimonial && (
                  <div className="mt-4 p-4 bg-brand-blue/5 rounded-lg border-l-4 border-brand-blue">
                    <Text variant="small" className="italic text-gray-700 mb-2">
                      "{customer.testimonial}"
                    </Text>
                    {customer.contactTitle && (
                      <Text variant="small" className="text-brand-blue font-semibold">
                        — {customer.contactTitle}
                      </Text>
                    )}
                  </div>
                )}

                {/* Success Indicators */}
                <div className="mt-4 flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <Icon name="fas fa-check-circle" color="secondary" size="small" />
                    <Text variant="small" className="text-gray-600">Deployed</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="fas fa-star" className="text-yellow-500" size="small" />
                    <Text variant="small" className="text-gray-600">Success</Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="fas fa-handshake" color="primary" size="small" />
                    <Text variant="small" className="text-gray-600">Ongoing</Text>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl text-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <Heading level={3} variant="white" className="mb-2">
                600K+
              </Heading>
              <Text variant="small" className="text-white/90">
                Virtual Desktops Deployed
              </Text>
            </div>
            <div>
              <Heading level={3} variant="white" className="mb-2">
                15+
              </Heading>
              <Text variant="small" className="text-white/90">
                Years Experience
              </Text>
            </div>
            <div>
              <Heading level={3} variant="white" className="mb-2">
                99.9%
              </Heading>
              <Text variant="small" className="text-white/90">
                Customer Satisfaction
              </Text>
            </div>
            <div>
              <Heading level={3} variant="white" className="mb-2">
                24/7
              </Heading>
              <Text variant="small" className="text-white/90">
                Arkansas Support
              </Text>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Text className="mb-6">
            Ready to join these successful organizations?
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
              View Detailed Case Studies
            </button>
            <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
              Request References
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerShowcase;
export { CustomerShowcase };