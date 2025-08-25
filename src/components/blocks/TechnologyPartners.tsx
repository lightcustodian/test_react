import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { cn } from '../../utils/cn';

interface Partner {
  name: string;
  logo?: string;
  tier: 'premier' | 'gold' | 'silver' | 'certified';
  specializations: string[];
  certifications: string[];
  relationship: string;
  icon: string;
  description: string;
  benefits: string[];
}

interface TechnologyPartnersProps {
  title?: string;
  subtitle?: string;
  partners?: Partner[];
  variant?: 'default' | 'showcase' | 'compact';
  className?: string;
}

const defaultPartners: Partner[] = [
  {
    name: "Dell Technologies",
    tier: "premier",
    specializations: ["VDI Infrastructure", "HCI Solutions", "Storage Systems"],
    certifications: ["Dell Partner Direct", "VxRail Specialist", "PowerEdge Certified"],
    relationship: "Premier Partner since 2010",
    icon: "fas fa-server",
    description: "Premier Dell partner providing enterprise-grade hardware infrastructure for VDI and private cloud deployments",
    benefits: [
      "Direct access to Dell engineering support",
      "Priority allocation on high-demand products",
      "Exclusive pricing for Arkansas customers",
      "Co-marketing and solution development"
    ]
  },
  {
    name: "Microsoft",
    tier: "gold",
    specializations: ["Azure Integration", "Windows Virtual Desktop", "Office 365"],
    certifications: ["Gold Cloud Platform", "Azure Expert MSP", "WVD Specialist"],
    relationship: "Gold Partner with Azure Expert MSP designation",
    icon: "fab fa-microsoft",
    description: "Microsoft Gold Partner specializing in hybrid cloud solutions and Windows Virtual Desktop implementations",
    benefits: [
      "Azure Expert MSP designation and benefits",
      "Direct Microsoft support escalation path",
      "Hybrid cloud architecture expertise",
      "Office 365 integration and optimization"
    ]
  },
  {
    name: "VMware",
    tier: "premier",
    specializations: ["Horizon VDI", "vSphere Infrastructure", "NSX Networking"],
    certifications: ["Premier Partner", "Master Services Competency", "Horizon Specialist"],
    relationship: "Premier Partner with Master Services Competency",
    icon: "fas fa-cloud",
    description: "VMware Premier Partner with deep expertise in Horizon VDI and virtualization infrastructure",
    benefits: [
      "Master Services Competency recognition",
      "Advanced technical training and certifications",
      "Joint go-to-market opportunities",
      "Enterprise solution architecture support"
    ]
  },
  {
    name: "Citrix",
    tier: "gold",
    specializations: ["Virtual Apps & Desktops", "Cloud Services", "Security"],
    certifications: ["Gold Solution Advisor", "CCP-V Certified", "Cloud Specialist"],
    relationship: "Gold Solution Advisor with cloud specialization",
    icon: "fas fa-desktop",
    description: "Citrix Gold partner providing virtual application and desktop solutions with cloud integration",
    benefits: [
      "Gold-level technical support and training",
      "Cloud services specialization benefits",
      "Joint customer engagement opportunities",
      "Advanced solution design resources"
    ]
  }
];

const tierInfo = {
  premier: { 
    label: "Premier Partner", 
    color: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
    icon: "fas fa-crown"
  },
  gold: { 
    label: "Gold Partner", 
    color: "bg-gradient-to-r from-yellow-300 to-yellow-500 text-white",
    icon: "fas fa-medal"
  },
  silver: { 
    label: "Silver Partner", 
    color: "bg-gradient-to-r from-gray-300 to-gray-500 text-white",
    icon: "fas fa-award"
  },
  certified: { 
    label: "Certified Partner", 
    color: "bg-gradient-to-r from-blue-400 to-blue-600 text-white",
    icon: "fas fa-certificate"
  }
};

const TechnologyPartners: React.FC<TechnologyPartnersProps> = ({
  title = "Technology Partnerships",
  subtitle = "Certified partnerships with industry leaders ensure you receive enterprise-grade solutions with guaranteed support and expertise",
  partners = defaultPartners,
  variant = 'default',
  className = ''
}) => {
  if (variant === 'compact') {
    return (
      <section className={cn('py-12 bg-gray-50', className)}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Heading level={3} variant="primary" className="mb-4">
              {title}
            </Heading>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg shadow">
                <Icon name={partner.icon} className="text-brand-blue" />
                <Text className="font-semibold text-gray-700">{partner.name}</Text>
                <Badge variant="success" size="small">
                  {tierInfo[partner.tier].label}
                </Badge>
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

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                      <Icon name={partner.icon} color="primary" size="large" />
                    </div>
                    <div>
                      <Heading level={4} variant="primary" className="mb-2">
                        {partner.name}
                      </Heading>
                      <Text variant="small" className="text-gray-600">
                        {partner.relationship}
                      </Text>
                    </div>
                  </div>
                  
                  <div className={cn(
                    "px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2",
                    tierInfo[partner.tier].color
                  )}>
                    <Icon name={tierInfo[partner.tier].icon} size="small" />
                    {tierInfo[partner.tier].label}
                  </div>
                </div>

                <Text className="text-gray-700">
                  {partner.description}
                </Text>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Specializations */}
                <div className="mb-6">
                  <Text className="font-semibold mb-3">Specializations:</Text>
                  <div className="flex flex-wrap gap-2">
                    {partner.specializations.map((spec, specIndex) => (
                      <Badge key={specIndex} variant="primary" size="small">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <Text className="font-semibold mb-3">Certifications:</Text>
                  <div className="space-y-2">
                    {partner.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="flex items-center gap-2">
                        <Icon name="fas fa-certificate" color="secondary" size="small" />
                        <Text variant="small" className="text-gray-700">{cert}</Text>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <Text className="font-semibold mb-3">Customer Benefits:</Text>
                  <div className="space-y-2">
                    {partner.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start gap-2">
                        <Icon name="fas fa-check-circle" color="secondary" size="small" className="mt-0.5" />
                        <Text variant="small" className="text-gray-700">{benefit}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Value Proposition */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl text-white p-8">
          <div className="text-center mb-8">
            <Heading level={3} variant="white" className="mb-4">
              Why Our Partnerships Matter
            </Heading>
            <Text className="text-white/90 max-w-2xl mx-auto">
              Our certified partnerships ensure you receive the best technology, support, and value for your infrastructure investment
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon name="fas fa-handshake" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-2">
                Direct Vendor Support
              </Heading>
              <Text variant="small" className="text-white/90">
                Escalation paths and direct access to vendor engineering teams
              </Text>
            </div>
            
            <div className="text-center">
              <Icon name="fas fa-graduation-cap" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-2">
                Continuous Training
              </Heading>
              <Text variant="small" className="text-white/90">
                Latest certifications and training on emerging technologies
              </Text>
            </div>
            
            <div className="text-center">
              <Icon name="fas fa-dollar-sign" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-2">
                Best Pricing
              </Heading>
              <Text variant="small" className="text-white/90">
                Partner-exclusive pricing and incentives passed to customers
              </Text>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <Icon name="fas fa-calendar" />
              <Text variant="small">15+ Years Combined Partnership Experience</Text>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="fas fa-award" />
              <Text variant="small">Multiple Premier & Gold Certifications</Text>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="fas fa-users" />
              <Text variant="small">Joint Customer Success Teams</Text>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <Heading level={4} variant="primary" className="mb-4">
              Ready to Leverage Our Partner Network?
            </Heading>
            <Text className="mb-6">
              Discover how our technology partnerships can benefit your infrastructure project
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Explore Partnership Benefits
              </button>
              <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                View Solution Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPartners;
export { TechnologyPartners };