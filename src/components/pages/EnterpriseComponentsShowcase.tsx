import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Divider } from '../items/Divider';

// Phase 1 Enterprise Components
import { MethodologySection } from '../blocks/MethodologySection';
import { CostSavingsCalculator } from '../blocks/CostSavingsCalculator';
import { ArkansasAdvantageStats } from '../blocks/ArkansasAdvantageStats';
import { ValuePropsComparison } from '../blocks/ValuePropsComparison';

// Phase 2 Enterprise Components
import { ChallengeSolutionPairs } from '../blocks/ChallengeSolutionPairs';
import { CustomerShowcase } from '../blocks/CustomerShowcase';
import { TechnologyPartners } from '../blocks/TechnologyPartners';
import { ComplianceShowcase } from '../blocks/ComplianceShowcase';

// Phase 3 Enterprise Components
import { IndustrySolutions } from '../blocks/IndustrySolutions';
import { ArkansasAdvantage } from '../blocks/ArkansasAdvantage';
import { ProcessExplanation } from '../blocks/ProcessExplanation';
import { CostComparison } from '../blocks/CostComparison';

import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';

const EnterpriseComponentsShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <MegaNavigation />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green text-white">
        <div className="container mx-auto px-6 text-center">
          <Heading level={1} variant="white" className="mb-6">
            Enterprise Components Showcase
          </Heading>
          <Text className="text-xl text-white/90 max-w-3xl mx-auto">
            Demonstrating all 12 new enterprise-grade components designed to transform 
            Logical Front from VDI specialist to comprehensive infrastructure solutions provider.
          </Text>
        </div>
      </section>

      {/* Phase 1 Components */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="primary" className="mb-4">
              Phase 1: Foundational Enterprise Components
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Core components establishing enterprise positioning and value proposition
            </Text>
          </div>
        </div>
      </section>

      {/* 1. Methodology Section */}
      <div className="border-l-4 border-brand-blue pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          1. MethodologySection
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Showcases "The Logical Front Method" (Assess → Plan → Execute) with interactive process steps
        </Text>
      </div>
      <MethodologySection />
      <Divider className="my-16" />

      {/* 2. Cost Savings Calculator */}
      <div className="border-l-4 border-brand-blue pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          2. CostSavingsCalculator
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Interactive calculator demonstrating 33% cost savings vs public cloud providers
        </Text>
      </div>
      <CostSavingsCalculator />
      <Divider className="my-16" />

      {/* 3. Arkansas Advantage Stats */}
      <div className="border-l-4 border-brand-blue pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          3. ArkansasAdvantageStats
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Metrics highlighting unique benefits of Arkansas-based infrastructure providers
        </Text>
      </div>
      <ArkansasAdvantageStats />
      <Divider className="my-16" />

      {/* 4. Value Props Comparison */}
      <div className="border-l-4 border-brand-blue pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          4. ValuePropsComparison
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Side-by-side comparison vs competitors (AWS, Azure, National VARs, Regional providers)
        </Text>
      </div>
      <ValuePropsComparison />
      <Divider className="my-16" />

      {/* Phase 2 Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="primary" className="mb-4">
              Phase 2: Customer & Partner Showcase Components
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Components demonstrating credibility through customers, partners, and problem-solving
            </Text>
          </div>
        </div>
      </section>

      {/* 5. Challenge Solution Pairs */}
      <div className="border-l-4 border-brand-green pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          5. ChallengeSolutionPairs
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Problem/solution format showing common infrastructure challenges and Logical Front solutions
        </Text>
      </div>
      <ChallengeSolutionPairs />
      <Divider className="my-16" />

      {/* 6. Customer Showcase */}
      <div className="border-l-4 border-brand-green pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          6. CustomerShowcase
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Real customer testimonials and success stories across multiple industries
        </Text>
      </div>
      <CustomerShowcase />
      <Divider className="my-16" />

      {/* 7. Technology Partners */}
      <div className="border-l-4 border-brand-green pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          7. TechnologyPartners
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Dell, Microsoft, VMware partnerships with certification badges and tier indicators
        </Text>
      </div>
      <TechnologyPartners />
      <Divider className="my-16" />

      {/* 8. Compliance Showcase */}
      <div className="border-l-4 border-brand-green pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          8. ComplianceShowcase
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          FERPA, HIPAA, Arkansas-specific compliance frameworks with certification details
        </Text>
      </div>
      <ComplianceShowcase />
      <Divider className="my-16" />

      {/* Phase 3 Header */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="primary" className="mb-4">
              Phase 3: Industry & Process Deep-Dive Components
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Comprehensive components for industry-specific solutions and detailed process explanation
            </Text>
          </div>
        </div>
      </section>

      {/* 9. Industry Solutions */}
      <div className="border-l-4 border-purple-500 pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          9. IndustrySolutions
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Industry-specific solutions for Education, Healthcare, Manufacturing, and Government
        </Text>
      </div>
      <IndustrySolutions />
      <Divider className="my-16" />

      {/* 10. Arkansas Advantage (Full-width) */}
      <div className="border-l-4 border-purple-500 pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          10. ArkansasAdvantage (Full-Width)
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Comprehensive showcase of Arkansas-specific benefits in detailed, full-width format
        </Text>
      </div>
      <ArkansasAdvantage />
      <Divider className="my-16" />

      {/* 11. Process Explanation */}
      <div className="border-l-4 border-purple-500 pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          11. ProcessExplanation
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Detailed breakdown of "The Logical Front Method" with step-by-step process explanation
        </Text>
      </div>
      <ProcessExplanation />
      <Divider className="my-16" />

      {/* 12. Cost Comparison */}
      <div className="border-l-4 border-purple-500 pl-8 mb-8">
        <Heading level={3} variant="primary" className="mb-2">
          12. CostComparison (Graphic Block)
        </Heading>
        <Text variant="small" className="text-gray-600 mb-4">
          Visual cost comparison charts showing savings vs AWS, Azure, and traditional IT
        </Text>
      </div>
      <CostComparison />
      <Divider className="my-16" />

      {/* Summary Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green text-white">
        <div className="container mx-auto px-6 text-center">
          <Heading level={2} variant="white" className="mb-6">
            Enterprise Transformation Complete
          </Heading>
          <Text className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
            All 12 enterprise components have been successfully implemented to support Logical Front's 
            transformation from VDI specialist to comprehensive infrastructure solutions provider. 
            These components emphasize Arkansas advantages, 33% cost savings, and enterprise-grade capabilities.
          </Text>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12</div>
              <Text className="text-white/90">Enterprise Components</Text>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <Text className="text-white/90">Implementation Phases</Text>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <Text className="text-white/90">Arkansas Advantage</Text>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterpriseComponentsShowcase;
export { EnterpriseComponentsShowcase };