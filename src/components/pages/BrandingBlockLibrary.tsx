import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../items/Button';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Card } from '../components/Card';
import { ContactForm } from '../blocks/ContactForm';
import { HeroSection } from '../blocks/HeroSection';
import { SolutionsSection } from '../blocks/SolutionsSection';
import { ValuePropsSection } from '../blocks/ValuePropsSection';
import { TestimonialSection } from '../blocks/TestimonialSection';
import { IconCircle } from '../items/IconCircle';

const BrandingBlockLibrary: React.FC = () => {
  const blockTypes = [
    {
      title: 'Hero Sections',
      description: 'Full-width hero sections with background images and call-to-action buttons',
      component: 'HeroSection',
      variants: ['Standard', 'With Stats', 'Video Background'],
      isImplemented: true
    },
    {
      title: 'Solution Blocks',
      description: 'Service and solution presentation blocks with icons and feature lists',
      component: 'SolutionsSection',
      variants: ['Grid Layout', 'List Layout', 'Carousel'],
      isImplemented: true
    },
    {
      title: 'Contact Forms',
      description: 'Complete contact forms with validation, industry dropdowns, and success states',
      component: 'ContactForm',
      variants: ['Standard Form', 'Compact Form', 'Multi-step Form'],
      isImplemented: true,
      isNew: true
    },
    {
      title: 'Value Proposition Blocks',
      description: 'Key value propositions with icons and descriptions',
      component: 'ValuePropsSection',
      variants: ['Grid', 'Horizontal', 'Vertical Stack'],
      isImplemented: true
    },
    {
      title: 'Testimonial Sections',
      description: 'Customer testimonials and case study showcases',
      component: 'TestimonialSection',
      variants: ['Single Quote', 'Multiple Cards', 'Slider'],
      isImplemented: true
    },
    {
      title: 'Feature Grids',
      description: 'Product and service feature showcases with icons and descriptions',
      component: 'FeatureGrid',
      variants: ['Icon Grid', 'Image Left', 'Image Right'],
      isImplemented: false
    },
    {
      title: 'Statistics Bars',
      description: 'Key metrics and statistics displays with animated counters',
      component: 'StatsBar',
      variants: ['Horizontal Bar', 'Card Grid', 'Centered Display'],
      isImplemented: false
    },
    {
      title: 'Call-to-Action Sections',
      description: 'Action-oriented sections with buttons and compelling messaging',
      component: 'CTASection',
      variants: ['Centered', 'Split', 'Gradient Background'],
      isImplemented: false
    }
  ];

  const handleContactSubmit = (data: any) => {
    console.log('Demo contact form submitted:', data);
  };

  const demoHeroData = {
    title: "Sample Hero Section",
    subtitle: "This is an example of our HeroSection component with stats and call-to-action buttons.",
    stats: [
      { number: "99%", label: "Uptime" },
      { number: "24/7", label: "Support" },
      { number: "100+", label: "Clients" }
    ],
    primaryCTA: { text: "Get Started", icon: "fas fa-rocket" },
    secondaryCTA: { text: "Learn More", icon: "fas fa-info-circle" },
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  };

  const demoServices = {
    title: "Our Services",
    subtitle: "Comprehensive solutions for your business needs",
    services: [
      {
        title: "Cloud Infrastructure",
        description: "Scalable cloud solutions for modern businesses",
        icon: "fas fa-cloud",
        features: ["99.9% uptime", "24/7 support", "Auto-scaling"]
      },
      {
        title: "Security Services",
        description: "Advanced security measures to protect your data",
        icon: "fas fa-shield-alt",
        features: ["Encryption", "Monitoring", "Compliance"]
      }
    ]
  };

  const demoValueProps = {
    title: "Why Choose Us",
    subtitle: "The benefits that set us apart",
    values: [
      {
        title: "Reliability",
        description: "Consistent, dependable service",
        icon: "fas fa-check-circle",
        color: "text-brand-green"
      },
      {
        title: "Innovation",
        description: "Cutting-edge technology solutions",
        icon: "fas fa-lightbulb",
        color: "text-brand-blue"
      }
    ]
  };

  const demoTestimonials = {
    title: "Client Success Stories",
    subtitle: "What our clients say about working with us",
    testimonials: [
      {
        quote: "Outstanding service and support. They exceeded our expectations.",
        author: "John Smith",
        company: "Tech Corp",
        role: "CTO"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/branding" className="text-white hover:text-gray-200 transition-colors">
              <Button variant="secondary" icon="fas fa-arrow-left" size="small">
                Back to Design System
              </Button>
            </Link>
          </div>
          <Heading level={1} variant="white" className="mb-4">Block Library</Heading>
          <Text variant="lead" className="text-white/90">
            Pre-built content sections (organisms) for rapid page assembly and consistent layouts
          </Text>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 space-y-16">
        
        {/* Block Overview */}
        <section>
          <Heading level={2} variant="primary" className="mb-8">Available Blocks (Organisms)</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blockTypes.map((block, index) => (
              <Card key={index} variant="elevated" className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <IconCircle 
                    icon="fas fa-cube" 
                    variant={block.isImplemented ? "primary" : "secondary"}
                    className="flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Heading level={4} variant="primary" className="mb-0">
                        {block.title}
                      </Heading>
                      {block.isNew && (
                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          NEW
                        </span>
                      )}
                    </div>
                    <Text variant="small" className="text-gray-500">
                      {block.component}
                    </Text>
                  </div>
                </div>
                
                <Text className="mb-6">{block.description}</Text>
                
                <div className="mb-6">
                  <Text variant="small" className="font-semibold text-gray-800 mb-3">
                    Available Variants:
                  </Text>
                  <ul className="space-y-1">
                    {block.variants.map((variant, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-brand-green rounded-full"></span>
                        <Text variant="small">{variant}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  {block.isImplemented ? (
                    <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                      <i className="fas fa-check-circle"></i>
                      <Text variant="small" className="text-green-600">Implemented</Text>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-gray-500">
                      <i className="fas fa-clock"></i>
                      <Text variant="small" className="text-gray-500">Coming Soon</Text>
                    </span>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Examples Section */}
        <section>
          <Heading level={2} variant="primary" className="mb-8">Live Component Examples</Heading>
          <Text variant="lead" className="mb-12">
            Interactive demonstrations of implemented block components
          </Text>

          {/* Contact Form Example */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                NEW
              </span>
              <Heading level={3} variant="primary" className="mb-0">ContactForm Component</Heading>
            </div>
            <Text className="mb-8">
              Complete contact form with validation, industry selection, and success states. 
              This replaces 200+ lines of inline form code with a reusable component.
            </Text>
            <div className="bg-white rounded-xl shadow-lg p-1">
              <ContactForm 
                title="Example Contact Form"
                description="This is a live example of our ContactForm component with full validation."
                onSubmit={handleContactSubmit}
              />
            </div>
          </div>

          {/* Hero Section Example */}
          <div className="mb-20">
            <Heading level={3} variant="primary" className="mb-6">HeroSection Component</Heading>
            <Text className="mb-8">
              Full-width hero sections with background images, statistics, and call-to-action buttons.
            </Text>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="scale-75 origin-top-left w-[133%] h-[400px] overflow-hidden">
                <HeroSection {...demoHeroData} className="py-16" />
              </div>
            </div>
          </div>

          {/* Solutions Section Example */}
          <div className="mb-20">
            <Heading level={3} variant="primary" className="mb-6">SolutionsSection Component</Heading>
            <Text className="mb-8">
              Service and solution presentation blocks with icons and feature lists.
            </Text>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <SolutionsSection {...demoServices} />
            </div>
          </div>

          {/* Value Props Section Example */}
          <div className="mb-20">
            <Heading level={3} variant="primary" className="mb-6">ValuePropsSection Component</Heading>
            <Text className="mb-8">
              Key value propositions with icons and descriptions in various layouts.
            </Text>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ValuePropsSection {...demoValueProps} />
            </div>
          </div>

          {/* Testimonial Section Example */}
          <div className="mb-20">
            <Heading level={3} variant="primary" className="mb-6">TestimonialSection Component</Heading>
            <Text className="mb-8">
              Customer testimonials and case study showcases with various display options.
            </Text>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <TestimonialSection {...demoTestimonials} />
            </div>
          </div>
        </section>

        {/* Implementation Guidelines */}
        <section>
          <Heading level={2} variant="primary" className="mb-8">Implementation Guidelines</Heading>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Heading level={4} variant="primary" className="mb-4">Using Blocks</Heading>
                <div className="space-y-3">
                  <Text variant="small">• Import blocks from the blocks directory</Text>
                  <Text variant="small">• Pass data objects to configure content</Text>
                  <Text variant="small">• Combine blocks to build complete pages</Text>
                  <Text variant="small">• Use PageTemplate for consistent layouts</Text>
                </div>
              </div>
              <div>
                <Heading level={4} variant="primary" className="mb-4">Code Example</Heading>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm">
                  <Text variant="small" className="whitespace-pre font-mono">
{`import { ContactForm } from '../blocks/ContactForm';

const handleSubmit = (data) => {
  // Handle form submission
};

<ContactForm 
  title="Get in Touch"
  onSubmit={handleSubmit}
/>`}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandingBlockLibrary;
export { BrandingBlockLibrary };