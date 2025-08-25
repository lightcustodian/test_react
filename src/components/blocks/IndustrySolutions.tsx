import React, { useState } from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { cn } from '../../utils/cn';

interface SolutionFeature {
  name: string;
  description: string;
  icon: string;
  benefit: string;
}

interface IndustrySolution {
  industry: string;
  icon: string;
  color: string;
  description: string;
  challenges: string[];
  solutions: SolutionFeature[];
  caseStudy: {
    customer: string;
    challenge: string;
    solution: string;
    results: string[];
  };
  compliance: string[];
  technologies: string[];
}

interface IndustrySolutionsProps {
  title?: string;
  subtitle?: string;
  solutions?: IndustrySolution[];
  variant?: 'default' | 'tabbed' | 'cards-only';
  className?: string;
}

const defaultSolutions: IndustrySolution[] = [
  {
    industry: "Education",
    icon: "fas fa-graduation-cap",
    color: "blue",
    description: "Comprehensive VDI and infrastructure solutions designed specifically for educational institutions",
    challenges: [
      "Limited IT budgets and staffing",
      "FERPA compliance requirements",
      "1:1 device program support",
      "Remote learning capabilities",
      "Aging computer lab infrastructure"
    ],
    solutions: [
      {
        name: "Student Virtual Desktops",
        description: "Centrally managed virtual desktops accessible from any device",
        icon: "fas fa-desktop",
        benefit: "Enables BYOD and 1:1 programs while maintaining security"
      },
      {
        name: "AR-EON Integration",
        description: "Direct connection to Arkansas Educational Network",
        icon: "fas fa-network-wired",
        benefit: "Ultra-low latency and high-speed connectivity"
      },
      {
        name: "Lab Virtualization",
        description: "Transform physical computer labs into virtual environments",
        icon: "fas fa-flask",
        benefit: "Reduce hardware costs by 60% while improving flexibility"
      },
      {
        name: "Administrative Systems",
        description: "Secure hosting for SIS, LMS, and administrative applications",
        icon: "fas fa-shield-alt",
        benefit: "FERPA-compliant infrastructure with audit trails"
      }
    ],
    caseStudy: {
      customer: "Arkansas State University",
      challenge: "Needed to provide 25,000+ students with reliable access to specialized software and applications",
      solution: "Deployed comprehensive VDI solution with AR-EON integration and FERPA-compliant infrastructure",
      results: [
        "25,000+ virtual desktops deployed",
        "99.9% uptime achieved",
        "50% reduction in IT support tickets",
        "Full FERPA compliance maintained"
      ]
    },
    compliance: ["FERPA", "COPPA", "Arkansas Data Protection"],
    technologies: ["VMware Horizon", "Dell Infrastructure", "AR-EON Network"]
  },
  {
    industry: "Healthcare",
    icon: "fas fa-hospital",
    color: "red",
    description: "HIPAA-compliant infrastructure solutions for healthcare organizations and medical practices",
    challenges: [
      "HIPAA compliance complexity",
      "Legacy system integration",
      "EHR performance requirements",
      "Remote clinician access",
      "Cybersecurity threats"
    ],
    solutions: [
      {
        name: "HIPAA-Compliant VDI",
        description: "Secure virtual desktops for clinical and administrative staff",
        icon: "fas fa-user-md",
        benefit: "Full HIPAA compliance with BAA and audit trails"
      },
      {
        name: "EHR Hosting",
        description: "High-performance hosting for electronic health records",
        icon: "fas fa-file-medical",
        benefit: "Optimized performance for critical healthcare applications"
      },
      {
        name: "Telemedicine Support",
        description: "Infrastructure for telehealth and remote patient care",
        icon: "fas fa-video",
        benefit: "Enable remote care delivery with secure connectivity"
      },
      {
        name: "Medical Imaging",
        description: "High-performance infrastructure for PACS and imaging",
        icon: "fas fa-x-ray",
        benefit: "Fast access to large medical images and diagnostic tools"
      }
    ],
    caseStudy: {
      customer: "United Healthcare",
      challenge: "Required enterprise-scale HIPAA-compliant infrastructure for sensitive healthcare data processing",
      solution: "Implemented private cloud with advanced security controls and comprehensive BAAs",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security incidents to date",
        "40% improvement in application performance",
        "24/7 monitoring and support"
      ]
    },
    compliance: ["HIPAA", "HITECH", "Arkansas Medical Privacy"],
    technologies: ["Citrix Cloud", "Dell PowerEdge", "NSX Security"]
  },
  {
    industry: "Manufacturing",
    icon: "fas fa-industry",
    color: "gray",
    description: "Industrial-grade infrastructure supporting manufacturing operations and engineering workflows",
    challenges: [
      "CAD/CAM application performance",
      "Industrial IoT integration",
      "Supply chain connectivity",
      "Remote engineering access",
      "Legacy system modernization"
    ],
    solutions: [
      {
        name: "Engineering Workstations",
        description: "High-performance virtual workstations for CAD and engineering",
        icon: "fas fa-drafting-compass",
        benefit: "GPU-accelerated performance rivaling physical workstations"
      },
      {
        name: "IoT Data Platform",
        description: "Secure platform for industrial IoT data collection and analysis",
        icon: "fas fa-wifi",
        benefit: "Real-time monitoring and predictive maintenance capabilities"
      },
      {
        name: "Supply Chain Integration",
        description: "B2B connectivity for supply chain and logistics systems",
        icon: "fas fa-truck",
        benefit: "Seamless integration with partners and suppliers"
      },
      {
        name: "Manufacturing Execution",
        description: "MES and ERP system hosting with high availability",
        icon: "fas fa-cogs",
        benefit: "99.9% uptime for critical manufacturing operations"
      }
    ],
    caseStudy: {
      customer: "Integrated Project Services",
      challenge: "Engineering firm needed high-performance CAD access across multiple office locations",
      solution: "Deployed GPU-enabled virtual workstations with centralized file storage and collaboration tools",
      results: [
        "30% improvement in CAD performance",
        "Seamless multi-location collaboration",
        "50% reduction in IT infrastructure costs",
        "Enhanced data security and backup"
      ]
    },
    compliance: ["ISO 9001", "ITAR", "Arkansas Industrial Safety"],
    technologies: ["NVIDIA Grid", "VMware vSphere", "High-Performance Storage"]
  },
  {
    industry: "Government",
    icon: "fas fa-landmark",
    color: "green",
    description: "Secure, compliant infrastructure solutions for government agencies and public sector organizations",
    challenges: [
      "Strict security requirements",
      "Public records management",
      "Budget constraints",
      "Citizen service delivery",
      "Legacy system integration"
    ],
    solutions: [
      {
        name: "Secure Government Cloud",
        description: "FedRAMP-equivalent security controls for government workloads",
        icon: "fas fa-cloud-upload-alt",
        benefit: "Meets stringent government security requirements"
      },
      {
        name: "Public Records System",
        description: "Secure document management and public records access",
        icon: "fas fa-folder-open",
        benefit: "Transparent access while maintaining security and compliance"
      },
      {
        name: "Citizen Portal",
        description: "Self-service portals for citizen interactions and services",
        icon: "fas fa-users",
        benefit: "Improved citizen satisfaction and operational efficiency"
      },
      {
        name: "Emergency Services",
        description: "Critical infrastructure for emergency response and public safety",
        icon: "fas fa-ambulance",
        benefit: "Reliable, always-available emergency response systems"
      }
    ],
    caseStudy: {
      customer: "Tuscaloosa Housing Authority",
      challenge: "Municipal agency needed secure infrastructure supporting public housing administration and compliance",
      solution: "Implemented dedicated government cloud with enhanced security controls and compliance monitoring",
      results: [
        "Full regulatory compliance achieved",
        "40% improvement in citizen service delivery",
        "Enhanced data security and audit capabilities",
        "Significant cost savings vs. traditional IT"
      ]
    },
    compliance: ["FedRAMP", "FISMA", "Arkansas Government Data Protection"],
    technologies: ["Government Cloud", "Dell Secure Infrastructure", "Advanced Monitoring"]
  }
];

const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({
  title = "Industry-Specific Solutions",
  subtitle = "Tailored infrastructure solutions designed for the unique needs and compliance requirements of your industry",
  solutions = defaultSolutions,
  variant = 'default',
  className = ''
}) => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  if (variant === 'cards-only') {
    return (
      <section className={cn('py-12 bg-gray-50', className)}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <Heading level={3} variant="primary" className="mb-4">
              {title}
            </Heading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name={solution.icon} className={`text-${solution.color}-600 mb-4`} size="large" />
                <Heading level={5} variant="primary" className="mb-2">
                  {solution.industry}
                </Heading>
                <Text variant="small" className="text-gray-600">
                  {solution.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'tabbed') {
    const activeSolution = solutions[activeIndustry];
    
    return (
      <section className={cn('py-20 bg-white', className)}>
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

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution, index) => (
              <button
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={cn(
                  'flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300',
                  activeIndustry === index
                    ? `bg-${solution.color}-600 text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                <Icon name={solution.icon} />
                <Text className="font-semibold">{solution.industry}</Text>
              </button>
            ))}
          </div>

          {/* Active Industry Content */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Solutions */}
              <div>
                <Heading level={4} variant="primary" className="mb-6">
                  {activeSolution.industry} Solutions
                </Heading>
                <div className="space-y-4">
                  {activeSolution.solutions.map((sol, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Icon name={sol.icon} className={`text-${activeSolution.color}-600 mt-1`} />
                        <div>
                          <Heading level={6} variant="primary" className="mb-2">
                            {sol.name}
                          </Heading>
                          <Text variant="small" className="text-gray-700 mb-2">
                            {sol.description}
                          </Text>
                          <Badge variant="success" size="small">
                            {sol.benefit}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div>
                <Heading level={4} variant="primary" className="mb-6">
                  Success Story: {activeSolution.caseStudy.customer}
                </Heading>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="mb-4">
                    <Text className="font-semibold text-red-700 mb-2">Challenge:</Text>
                    <Text variant="small" className="text-gray-700">
                      {activeSolution.caseStudy.challenge}
                    </Text>
                  </div>
                  
                  <div className="mb-4">
                    <Text className="font-semibold text-blue-700 mb-2">Solution:</Text>
                    <Text variant="small" className="text-gray-700">
                      {activeSolution.caseStudy.solution}
                    </Text>
                  </div>
                  
                  <div>
                    <Text className="font-semibold text-green-700 mb-2">Results:</Text>
                    <div className="space-y-1">
                      {activeSolution.caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Icon name="fas fa-check-circle" color="secondary" size="small" />
                          <Text variant="small" className="text-gray-700">{result}</Text>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Compliance & Tech */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Text className="font-semibold mb-2">Compliance:</Text>
                    <div className="flex flex-wrap gap-2">
                      {activeSolution.compliance.map((comp, index) => (
                        <Badge key={index} variant="primary" size="small">
                          {comp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Text className="font-semibold mb-2">Technologies:</Text>
                    <div className="flex flex-wrap gap-2">
                      {activeSolution.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" size="small">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default variant - industry grid
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

        {/* Industry Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r from-${solution.color}-500 to-${solution.color}-600 text-white p-6`}>
                <div className="flex items-center gap-4 mb-4">
                  <Icon name={solution.icon} size="large" />
                  <Heading level={3} variant="white">
                    {solution.industry}
                  </Heading>
                </div>
                <Text className="text-white/90">
                  {solution.description}
                </Text>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Key Solutions */}
                <div className="mb-6">
                  <Heading level={5} variant="primary" className="mb-4">
                    Key Solutions
                  </Heading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {solution.solutions.slice(0, 4).map((sol, solIndex) => (
                      <div key={solIndex} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <Icon name={sol.icon} className={`text-${solution.color}-600`} size="small" />
                        <Text variant="small" className="font-medium">{sol.name}</Text>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Preview */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="fas fa-star" color="secondary" size="small" />
                    <Text className="font-semibold">{solution.caseStudy.customer}</Text>
                  </div>
                  <Text variant="small" className="text-gray-700">
                    {solution.caseStudy.challenge}
                  </Text>
                </div>

                {/* Compliance & Technologies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Text className="font-semibold mb-2 text-xs uppercase tracking-wider text-gray-500">
                      Compliance
                    </Text>
                    <div className="flex flex-wrap gap-1">
                      {solution.compliance.slice(0, 2).map((comp, compIndex) => (
                        <Badge key={compIndex} variant="success" size="small">
                          {comp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Text className="font-semibold mb-2 text-xs uppercase tracking-wider text-gray-500">
                      Technologies
                    </Text>
                    <div className="flex flex-wrap gap-1">
                      {solution.technologies.slice(0, 2).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="primary" size="small">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <Heading level={4} variant="primary" className="mb-4">
              Don't See Your Industry?
            </Heading>
            <Text className="mb-6">
              We work with organizations across many industries. Contact us to discuss your specific requirements.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Discuss Your Industry
              </button>
              <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                View All Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
export { IndustrySolutions };