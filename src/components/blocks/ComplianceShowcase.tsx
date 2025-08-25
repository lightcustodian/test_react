import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { ComplianceBadge } from '../items/ComplianceBadge';
import { cn } from '../../utils/cn';

interface ComplianceFramework {
  name: string;
  acronym: string;
  description: string;
  icon: string;
  industry: string[];
  requirements: string[];
  ourApproach: string[];
  certificationLevel: 'certified' | 'compliant' | 'designed-for';
  validatedBy?: string;
}

interface ComplianceShowcaseProps {
  title?: string;
  subtitle?: string;
  frameworks?: ComplianceFramework[];
  variant?: 'default' | 'detailed' | 'badges-only';
  className?: string;
}

const defaultFrameworks: ComplianceFramework[] = [
  {
    name: "Family Educational Rights and Privacy Act",
    acronym: "FERPA",
    description: "Federal law protecting student educational records and directory information privacy",
    icon: "fas fa-graduation-cap",
    industry: ["Education", "K-12 Schools", "Universities"],
    requirements: [
      "Consent required for disclosure of educational records",
      "Students have right to inspect and review records",
      "Secure storage and transmission of student data",
      "Audit trails for all data access and modifications"
    ],
    ourApproach: [
      "Arkansas-based data residency ensuring no out-of-state transfers",
      "Role-based access controls with detailed audit logging",
      "Encrypted storage and transmission of all educational records",
      "Staff training on FERPA requirements and best practices"
    ],
    certificationLevel: "compliant",
    validatedBy: "Third-party compliance audit"
  },
  {
    name: "Health Insurance Portability and Accountability Act",
    acronym: "HIPAA",
    description: "Federal law establishing privacy and security standards for protected health information",
    icon: "fas fa-hospital",
    industry: ["Healthcare", "Medical Practices", "Insurance"],
    requirements: [
      "Administrative, physical, and technical safeguards",
      "Business Associate Agreements (BAAs) required",
      "Risk assessments and security incident procedures",
      "Employee training and access management"
    ],
    ourApproach: [
      "Comprehensive BAAs with all healthcare customers",
      "Physical and logical access controls with biometric authentication",
      "End-to-end encryption for PHI at rest and in transit",
      "24/7 security monitoring and incident response team"
    ],
    certificationLevel: "certified",
    validatedBy: "HITRUST certification pending"
  },
  {
    name: "Arkansas Personal Information Protection Act",
    acronym: "APIPA",
    description: "Arkansas state law governing personal information protection and breach notification",
    icon: "fas fa-shield-alt",
    industry: ["All Arkansas Organizations", "Government", "Private Sector"],
    requirements: [
      "Reasonable security measures for personal information",
      "Breach notification within 45 days",
      "Data disposal requirements",
      "Consumer rights and notification procedures"
    ],
    ourApproach: [
      "Arkansas-specific compliance expertise and consulting",
      "Automated breach detection and notification systems",
      "Secure data destruction with certificates of destruction",
      "Regular compliance reviews and updates"
    ],
    certificationLevel: "compliant",
    validatedBy: "Arkansas Attorney General guidance"
  },
  {
    name: "Government Cloud Security Requirements",
    acronym: "GCSR",
    description: "Arkansas state government security standards for cloud service providers",
    icon: "fas fa-landmark",
    industry: ["State Government", "Local Government", "Municipalities"],
    requirements: [
      "FedRAMP-equivalent security controls",
      "Arkansas residency for administrative access",
      "Segregated government networks",
      "Incident reporting to state CISO"
    ],
    ourApproach: [
      "Dedicated government cloud infrastructure",
      "Arkansas-based security operations center",
      "Air-gapped networks for sensitive government data",
      "Direct reporting channels to state cybersecurity office"
    ],
    certificationLevel: "designed-for",
    validatedBy: "Arkansas Department of Information Systems"
  }
];

const certificationLevels = {
  "certified": {
    label: "Fully Certified",
    color: "success",
    icon: "fas fa-certificate",
    description: "Formal certification achieved"
  },
  "compliant": {
    label: "Compliant",
    color: "primary", 
    icon: "fas fa-check-shield",
    description: "Meets all requirements"
  },
  "designed-for": {
    label: "Designed For",
    color: "warning",
    icon: "fas fa-drafting-compass",
    description: "Architected to meet standards"
  }
};

const ComplianceShowcase: React.FC<ComplianceShowcaseProps> = ({
  title = "Compliance & Security Frameworks",
  subtitle = "Built-in compliance for education, healthcare, and government organizations with Arkansas-specific expertise",
  frameworks = defaultFrameworks,
  variant = 'default',
  className = ''
}) => {
  if (variant === 'badges-only') {
    return (
      <section className={cn('py-12 bg-gray-50', className)}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Heading level={3} variant="primary" className="mb-4">
              {title}
            </Heading>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {frameworks.map((framework, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow">
                <ComplianceBadge 
                  framework={framework.acronym}
                  level={framework.certificationLevel}
                  size="small"
                />
                <div>
                  <Text className="font-semibold text-gray-700">{framework.acronym}</Text>
                  <Text variant="small" className="text-gray-500">{framework.industry[0]}</Text>
                </div>
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

        {/* Compliance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {frameworks.map((framework, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center">
                      <Icon name={framework.icon} color="primary" size="large" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Heading level={4} variant="primary">
                          {framework.acronym}
                        </Heading>
                        <ComplianceBadge 
                          framework={framework.acronym}
                          level={framework.certificationLevel}
                          size="small"
                        />
                      </div>
                      <Text variant="small" className="text-gray-600">
                        {framework.name}
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Industries */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {framework.industry.map((industry, industryIndex) => (
                    <Badge key={industryIndex} variant="secondary" size="small">
                      {industry}
                    </Badge>
                  ))}
                </div>

                <Text className="text-gray-700">
                  {framework.description}
                </Text>
              </div>

              {/* Content */}
              <div className="p-6">
                {variant === 'detailed' && (
                  <>
                    {/* Requirements */}
                    <div className="mb-6">
                      <Text className="font-semibold mb-3 text-red-700">Key Requirements:</Text>
                      <div className="space-y-2">
                        {framework.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start gap-2">
                            <Icon name="fas fa-exclamation-triangle" className="text-red-500 mt-0.5" size="small" />
                            <Text variant="small" className="text-gray-700">{req}</Text>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Our Approach */}
                <div className="mb-6">
                  <Text className="font-semibold mb-3 text-brand-green">Our Compliance Approach:</Text>
                  <div className="space-y-2">
                    {framework.ourApproach.map((approach, approachIndex) => (
                      <div key={approachIndex} className="flex items-start gap-2">
                        <Icon name="fas fa-check-circle" color="secondary" size="small" className="mt-0.5" />
                        <Text variant="small" className="text-gray-700">{approach}</Text>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Validation */}
                {framework.validatedBy && (
                  <div className="p-3 bg-brand-green/10 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon name="fas fa-certificate" color="secondary" size="small" />
                      <Text variant="small" className="font-semibold text-brand-green">
                        Validation Status
                      </Text>
                    </div>
                    <Text variant="small" className="text-gray-700">
                      {framework.validatedBy}
                    </Text>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Benefits */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl text-white p-8 mb-12">
          <div className="text-center mb-8">
            <Heading level={3} variant="white" className="mb-4">
              Why Compliance Matters
            </Heading>
            <Text className="text-white/90 max-w-2xl mx-auto">
              Our compliance-first approach protects your organization from risk while enabling growth
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon name="fas fa-shield-alt" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-2">
                Risk Mitigation
              </Heading>
              <Text variant="small" className="text-white/90">
                Reduce legal, financial, and reputational risks through proper compliance
              </Text>
            </div>
            
            <div className="text-center">
              <Icon name="fas fa-handshake" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-2">
                Trust Building
              </Heading>
              <Text variant="small" className="text-white/90">
                Demonstrate commitment to data protection and regulatory compliance
              </Text>
            </div>
            
            <div className="text-center">
              <Icon name="fas fa-rocket" size="large" className="text-white mb-4" />
              <Heading level={5} variant="white" className="mb-2">
                Growth Enablement
              </Heading>
              <Text variant="small" className="text-white/90">
                Win more business with built-in compliance and security frameworks
              </Text>
            </div>
          </div>
        </div>

        {/* Arkansas Compliance Advantage */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="fas fa-map-marker-alt" color="secondary" size="large" />
              <Heading level={3} variant="primary">
                The Arkansas Compliance Advantage
              </Heading>
            </div>
            <Text className="max-w-2xl mx-auto">
              Unique benefits available only through Arkansas-based infrastructure providers
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <Icon name="fas fa-home" color="primary" size="large" className="mb-3" />
              <Heading level={5} variant="primary" className="mb-2">
                Data Residency
              </Heading>
              <Text variant="small" className="text-gray-600">
                All data remains within Arkansas borders for sovereignty and compliance
              </Text>
            </div>

            <div className="text-center p-4">
              <Icon name="fas fa-users" color="primary" size="large" className="mb-3" />
              <Heading level={5} variant="primary" className="mb-2">
                Local Expertise
              </Heading>
              <Text variant="small" className="text-gray-600">
                Deep understanding of Arkansas regulations and requirements
              </Text>
            </div>

            <div className="text-center p-4">
              <Icon name="fas fa-phone" color="primary" size="large" className="mb-3" />
              <Heading level={5} variant="primary" className="mb-2">
                Direct Access
              </Heading>
              <Text variant="small" className="text-gray-600">
                Immediate access to compliance officers and security team
              </Text>
            </div>

            <div className="text-center p-4">
              <Icon name="fas fa-clock" color="primary" size="large" className="mb-3" />
              <Heading level={5} variant="primary" className="mb-2">
                Rapid Response
              </Heading>
              <Text variant="small" className="text-gray-600">
                Same-day incident response and compliance consultation
              </Text>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <Heading level={4} variant="primary" className="mb-4">
              Need Help with Compliance Requirements?
            </Heading>
            <Text className="mb-6">
              Schedule a consultation with our compliance experts to discuss your specific requirements
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Schedule Compliance Review
              </button>
              <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                Download Compliance Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceShowcase;
export { ComplianceShowcase };