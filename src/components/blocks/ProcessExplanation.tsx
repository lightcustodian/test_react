import React, { useState } from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { ProcessStep } from '../components/ProcessStep';
import { cn } from '../../utils/cn';

interface ProcessPhase {
  number: number;
  title: string;
  duration: string;
  description: string;
  icon: string;
  activities: string[];
  deliverables: string[];
  teamInvolved: string[];
  keyQuestions: string[];
  customerResponsibilities: string[];
}

interface ProcessExplanationProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'detailed' | 'interactive';
  className?: string;
}

const ProcessExplanation: React.FC<ProcessExplanationProps> = ({
  title = "The Logical Front Method",
  subtitle = "Our proven three-phase methodology ensures successful infrastructure transformation with predictable outcomes",
  variant = 'default',
  className = ''
}) => {
  const [activePhase, setActivePhase] = useState(0);

  const phases: ProcessPhase[] = [
    {
      number: 1,
      title: "Assess",
      duration: "1-2 Weeks",
      description: "Comprehensive evaluation of your current infrastructure, requirements, and objectives",
      icon: "fas fa-search",
      activities: [
        "Current infrastructure inventory and analysis",
        "Performance benchmarking and bottleneck identification",
        "Security and compliance requirement review",
        "User experience and workflow analysis",
        "Cost analysis and budget planning",
        "Stakeholder interviews and requirement gathering"
      ],
      deliverables: [
        "Current State Assessment Report",
        "Gap Analysis and Recommendations",
        "Compliance and Security Review",
        "Performance Baseline Metrics",
        "Cost-Benefit Analysis",
        "Project Scope and Timeline"
      ],
      teamInvolved: [
        "Senior Infrastructure Architect",
        "Security and Compliance Specialist", 
        "Performance Analysis Engineer",
        "Project Manager"
      ],
      keyQuestions: [
        "What are your current pain points and challenges?",
        "What are your performance and scalability requirements?",
        "What compliance and security standards must be met?",
        "What is your budget and timeline for the project?",
        "Who are your key stakeholders and decision makers?"
      ],
      customerResponsibilities: [
        "Provide access to current infrastructure for assessment",
        "Participate in stakeholder interviews and workshops",
        "Share current documentation and configuration details",
        "Identify key users for workflow analysis",
        "Review and approve assessment findings"
      ]
    },
    {
      number: 2,
      title: "Plan",
      duration: "2-3 Weeks", 
      description: "Detailed solution design and implementation planning based on assessment findings",
      icon: "fas fa-drafting-compass",
      activities: [
        "Solution architecture design and validation",
        "Technology selection and vendor coordination",
        "Implementation timeline and milestone planning",
        "Risk assessment and mitigation planning",
        "Testing and validation strategy development",
        "Training and change management planning"
      ],
      deliverables: [
        "Detailed Solution Architecture",
        "Implementation Project Plan",
        "Technology Specifications",
        "Risk Management Plan",
        "Testing and Validation Plan",
        "Training and Support Plan"
      ],
      teamInvolved: [
        "Solutions Architect",
        "Project Manager",
        "Technical Specialists",
        "Change Management Consultant"
      ],
      keyQuestions: [
        "How will the solution integrate with existing systems?",
        "What is the optimal migration strategy and timeline?",
        "What training and support will users need?",
        "How will we minimize disruption during implementation?",
        "What are the success criteria and testing requirements?"
      ],
      customerResponsibilities: [
        "Review and approve solution architecture",
        "Participate in planning workshops and reviews",
        "Coordinate with internal teams and stakeholders", 
        "Approve project timeline and resource allocation",
        "Identify change management requirements"
      ]
    },
    {
      number: 3,
      title: "Execute",
      duration: "4-12 Weeks",
      description: "Phased implementation with continuous testing, monitoring, and optimization",
      icon: "fas fa-rocket",
      activities: [
        "Infrastructure procurement and setup",
        "Phased deployment and migration",
        "Continuous testing and quality assurance",
        "User training and change management",
        "Performance monitoring and optimization",
        "Go-live support and stabilization"
      ],
      deliverables: [
        "Fully Deployed Infrastructure",
        "Migrated Applications and Data",
        "Completed User Training",
        "Performance and Security Validation",
        "Documentation and Runbooks",
        "Ongoing Support and Maintenance Plan"
      ],
      teamInvolved: [
        "Implementation Engineers",
        "Migration Specialists",
        "QA and Testing Team",
        "Training Specialists",
        "Support Team"
      ],
      keyQuestions: [
        "How will we ensure zero data loss during migration?",
        "What is the rollback plan if issues occur?",
        "How will users be trained on the new system?",
        "What ongoing support and maintenance is included?",
        "How will success be measured and validated?"
      ],
      customerResponsibilities: [
        "Coordinate user schedules for training sessions",
        "Participate in testing and validation activities",
        "Communicate changes to end users",
        "Provide feedback during implementation",
        "Sign off on milestones and deliverables"
      ]
    }
  ];

  const processHighlights = [
    {
      icon: "fas fa-shield-alt",
      title: "Zero Data Loss Guarantee",
      description: "Our proven migration processes ensure 100% data integrity"
    },
    {
      icon: "fas fa-clock",
      title: "Predictable Timeline",
      description: "Fixed milestones and deliverables with transparent progress tracking"
    },
    {
      icon: "fas fa-handshake",
      title: "Continuous Communication",
      description: "Regular updates and stakeholder involvement throughout the process"
    },
    {
      icon: "fas fa-users",
      title: "Dedicated Team",
      description: "Same team from assessment through ongoing support"
    }
  ];

  if (variant === 'interactive') {
    const activePhaseData = phases[activePhase];
    
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

          {/* Phase Navigation */}
          <div className="flex justify-center gap-4 mb-12">
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={cn(
                  'flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300',
                  activePhase === index
                    ? 'bg-brand-blue text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                <div className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                  activePhase === index ? 'bg-white text-brand-blue' : 'bg-brand-blue text-white'
                )}>
                  {phase.number}
                </div>
                <div className="text-left">
                  <Text className="font-semibold">{phase.title}</Text>
                  <Text variant="small" className={activePhase === index ? 'text-white/80' : 'text-gray-500'}>
                    {phase.duration}
                  </Text>
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Content */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-brand-blue/10 to-brand-green/10 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-xl flex items-center justify-center">
                  <Icon name={activePhaseData.icon} size="large" />
                </div>
                <div>
                  <Heading level={3} variant="primary">
                    Phase {activePhaseData.number}: {activePhaseData.title}
                  </Heading>
                  <Text className="text-gray-600">
                    Duration: {activePhaseData.duration}
                  </Text>
                </div>
              </div>
              <Text className="text-lg">
                {activePhaseData.description}
              </Text>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Activities & Deliverables */}
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Heading level={5} variant="primary" className="mb-4">
                    Key Activities
                  </Heading>
                  <div className="space-y-2">
                    {activePhaseData.activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name="fas fa-check-circle" color="secondary" size="small" className="mt-0.5" />
                        <Text variant="small">{activity}</Text>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Heading level={5} variant="primary" className="mb-4">
                    Deliverables
                  </Heading>
                  <div className="space-y-2">
                    {activePhaseData.deliverables.map((deliverable, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name="fas fa-file-alt" color="primary" size="small" className="mt-0.5" />
                        <Text variant="small">{deliverable}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Team & Customer Responsibilities */}
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Heading level={5} variant="primary" className="mb-4">
                    Team Involved
                  </Heading>
                  <div className="space-y-2">
                    {activePhaseData.teamInvolved.map((member, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Icon name="fas fa-user" color="secondary" size="small" />
                        <Text variant="small">{member}</Text>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <Heading level={5} variant="primary" className="mb-4">
                    Your Responsibilities
                  </Heading>
                  <div className="space-y-2">
                    {activePhaseData.customerResponsibilities.map((responsibility, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Icon name="fas fa-handshake" color="primary" size="small" className="mt-0.5" />
                        <Text variant="small">{responsibility}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
          <Heading level={2} variant="primary" className="mb-6">
            {title}
          </Heading>
          <Text variant="lead" className="max-w-3xl mx-auto">
            {subtitle}
          </Text>
        </div>

        {/* Process Overview */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center gap-8">
            {phases.map((phase, index) => (
              <React.Fragment key={index}>
                <ProcessStep
                  number={phase.number}
                  title={phase.title}
                  description={phase.description}
                  timeframe={phase.duration}
                  icon={phase.icon}
                  isActive={false}
                />
                {index < phases.length - 1 && (
                  <Icon name="fas fa-arrow-right" color="secondary" size="large" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Detailed Phases */}
        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Phase Info */}
                <div className={cn(
                  'order-1',
                  index % 2 === 1 && 'lg:order-2'
                )}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-brand-blue text-white rounded-xl flex items-center justify-center">
                      <Icon name={phase.icon} size="large" />
                    </div>
                    <div>
                      <Badge variant="primary" className="mb-2">
                        Phase {phase.number}
                      </Badge>
                      <Heading level={3} variant="primary">
                        {phase.title}
                      </Heading>
                      <Text className="text-gray-600">
                        {phase.duration}
                      </Text>
                    </div>
                  </div>
                  
                  <Text className="text-lg mb-6">
                    {phase.description}
                  </Text>

                  {variant === 'detailed' && (
                    <div className="space-y-4">
                      <div>
                        <Text className="font-semibold mb-2">Key Questions We Address:</Text>
                        <div className="space-y-2">
                          {phase.keyQuestions.slice(0, 3).map((question, qIndex) => (
                            <div key={qIndex} className="flex items-start gap-2">
                              <Icon name="fas fa-question-circle" color="primary" size="small" className="mt-0.5" />
                              <Text variant="small" className="text-gray-700">{question}</Text>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phase Activities */}
                <div className={cn(
                  'order-2',
                  index % 2 === 1 && 'lg:order-1'
                )}>
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <Heading level={5} variant="primary" className="mb-6">
                      What We Do
                    </Heading>
                    
                    <div className="space-y-4 mb-8">
                      {phase.activities.slice(0, 4).map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-start gap-3">
                          <Icon name="fas fa-check-circle" color="secondary" size="small" className="mt-0.5" />
                          <Text variant="small" className="text-gray-700">{activity}</Text>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-6">
                      <Text className="font-semibold mb-3">Key Deliverables:</Text>
                      <div className="grid grid-cols-1 gap-2">
                        {phase.deliverables.slice(0, 3).map((deliverable, delIndex) => (
                          <div key={delIndex} className="flex items-center gap-2">
                            <Icon name="fas fa-file-alt" color="primary" size="small" />
                            <Text variant="small" className="text-gray-700">{deliverable}</Text>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Highlights */}
        <div className="mt-20">
          <Heading level={3} variant="primary" className="text-center mb-12">
            Why Our Process Works
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processHighlights.map((highlight, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={highlight.icon} color="secondary" size="large" />
                </div>
                <Heading level={5} variant="primary" className="mb-3">
                  {highlight.title}
                </Heading>
                <Text variant="small" className="text-gray-600">
                  {highlight.description}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl text-white p-8">
          <div className="text-center mb-8">
            <Heading level={3} variant="white" className="mb-4">
              Proven Track Record
            </Heading>
            <Text className="text-white/90 max-w-2xl mx-auto">
              Our methodology has delivered consistent success across hundreds of infrastructure projects
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <Heading level={2} variant="white" className="mb-2">
                98%
              </Heading>
              <Text variant="small" className="text-white/90">
                On-Time Delivery Rate
              </Text>
            </div>
            <div>
              <Heading level={2} variant="white" className="mb-2">
                Zero
              </Heading>
              <Text variant="small" className="text-white/90">
                Data Loss Incidents
              </Text>
            </div>
            <div>
              <Heading level={2} variant="white" className="mb-2">
                99.9%
              </Heading>
              <Text variant="small" className="text-white/90">
                Customer Satisfaction
              </Text>
            </div>
            <div>
              <Heading level={2} variant="white" className="mb-2">
                600K+
              </Heading>
              <Text variant="small" className="text-white/90">
                Successful Deployments
              </Text>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <Heading level={4} variant="primary" className="mb-4">
              Ready to Start Your Transformation?
            </Heading>
            <Text className="mb-8">
              Let's begin with a no-obligation assessment to understand your current infrastructure and objectives.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-green transition-colors duration-300 font-semibold">
                Start Your Assessment
              </button>
              <button className="px-8 py-3 border-2 border-brand-blue text-brand-blue rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 font-semibold">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessExplanation;
export { ProcessExplanation };