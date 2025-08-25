import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Divider } from '../items/Divider';

// Content Display Blocks
import { ImageBlock } from '../blocks/ImageBlock';
import { TextBlock } from '../blocks/TextBlock';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { QuickStats } from '../blocks/QuickStats';
import { FeatureList } from '../blocks/FeatureList';
import { ContactCard } from '../blocks/ContactCard';
import { NewsUpdate } from '../blocks/NewsUpdate';

import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';

const ContentBlocksShowcase: React.FC = () => {
  // Sample data for demonstrations
  const sampleStats = [
    { value: "600K+", label: "Users Served", icon: "fas fa-users" },
    { value: "99.9%", label: "Uptime SLA", icon: "fas fa-check-circle" },
    { value: "33%", label: "Cost Savings", icon: "fas fa-dollar-sign" },
    { value: "24/7", label: "Support", icon: "fas fa-headset" }
  ];

  const sampleFeatures = [
    {
      title: "Private Cloud Infrastructure",
      description: "Enterprise-grade private cloud solutions with complete control and security",
      icon: "fas fa-cloud",
      available: true
    },
    {
      title: "AR-EON Network Access",
      description: "Direct connection to Arkansas Educational Network for superior performance",
      icon: "fas fa-network-wired",
      badge: "Arkansas Only",
      available: true
    },
    {
      title: "24/7 Local Support",
      description: "Arkansas-based technical team providing immediate assistance",
      icon: "fas fa-headset",
      available: true,
      highlight: true
    },
    {
      title: "HIPAA/FERPA Compliance",
      description: "Built-in compliance frameworks for education and healthcare",
      icon: "fas fa-shield-alt",
      available: true
    }
  ];

  const sampleContact = [
    { type: 'phone' as const, label: 'Main Office', value: '(501) 555-1234', href: 'tel:+15015551234' },
    { type: 'email' as const, label: 'Sales Team', value: 'sales@logicalfront.com', href: 'mailto:sales@logicalfront.com' },
    { type: 'address' as const, label: 'Location', value: 'Little Rock, Arkansas' },
    { type: 'hours' as const, label: 'Business Hours', value: 'Mon-Fri 8AM-6PM CST' }
  ];

  const sampleNews = [
    {
      title: "New Arkansas Data Center Expansion",
      summary: "We're expanding our Arkansas facilities to serve growing demand from educational institutions.",
      date: "2024-01-15",
      category: "Infrastructure",
      urgent: false
    },
    {
      title: "FERPA Compliance Update",
      summary: "Enhanced security measures now in place to meet latest educational privacy requirements.",
      date: "2024-01-10",
      category: "Compliance"
    },
    {
      title: "Cost Savings Calculator Available",
      summary: "New interactive tool helps organizations estimate potential savings with private cloud migration.",
      date: "2024-01-05",
      category: "Tools"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MegaNavigation />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-green text-white">
        <div className="container mx-auto px-6 text-center">
          <Heading level={1} variant="white" className="mb-6">
            Content Display Blocks Showcase
          </Heading>
          <Text className="text-xl text-white/90 max-w-3xl mx-auto">
            Essential content blocks for displaying images, text, stats, features, and other content 
            in both half-width and full-width layouts.
          </Text>
        </div>
      </section>

      {/* Image Blocks Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="primary" className="mb-4">
              Image Display Blocks
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Versatile image blocks with multiple layouts and variants for showcasing visual content
            </Text>
          </div>

          {/* Half-Width Image Blocks */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-8 text-center">
              Half-Width Image Blocks
            </Heading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ImageBlock
                title="Image Left Layout"
                subtitle="Side-by-side content and image"
                description="Perfect for showcasing products, services, or features with supporting content."
                imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
                imageAlt="Data center servers"
                imagePosition="left"
                width="half"
                aspectRatio="landscape"
                ctaButton={{ text: "Learn More", variant: "primary" }}
              />
              
              <ImageBlock
                title="Image Right Layout"
                subtitle="Content first, then image"
                description="Alternative layout with content on the left and image on the right side."
                imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                imageAlt="Technology infrastructure"
                imagePosition="right"
                width="half"
                badge="Featured"
                ctaButton={{ text: "View Details", variant: "secondary" }}
              />
            </div>
          </div>

          {/* Full-Width Image Blocks */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-8 text-center">
              Full-Width Image Blocks
            </Heading>
            
            <div className="space-y-8">
              <ImageBlock
                title="Hero Style with Background"
                subtitle="Dramatic full-width presentation"
                description="Perfect for hero sections, announcements, or feature highlights with text overlay on background image."
                imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&auto=format"
                imageAlt="Technology infrastructure"
                imagePosition="background"
                width="full"
                variant="hero"
                overlay={true}
                overlayOpacity="medium"
                badge="Arkansas Advantage"
                ctaButton={{ text: "Discover Benefits", variant: "primary" }}
              />
              
              <ImageBlock
                title="Side-by-Side Full Width"
                subtitle="Content and image in full-width layout"
                description="Ideal for detailed feature explanations, case studies, or product showcases where you need more space for both content and visuals."
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                imageAlt="Business analytics"
                imagePosition="left"
                width="full"
                aspectRatio="landscape"
                ctaButton={{ text: "See Case Study", variant: "primary" }}
              />
            </div>
          </div>
        </div>
      </section>

      <Divider className="my-0" />

      {/* Text Blocks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="primary" className="mb-4">
              Text Display Blocks
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Flexible text blocks for content, announcements, quotes, and feature descriptions
            </Text>
          </div>

          {/* Half-Width Text Blocks */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-8 text-center">
              Half-Width Text Blocks
            </Heading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TextBlock
                title="Standard Content Block"
                subtitle="Clean, professional text display"
                content="This is a standard text block perfect for explanations, descriptions, and general content. It supports various formatting options and action buttons."
                width="half"
                variant="default"
                icon="fas fa-info-circle"
                ctaButton={{ text: "Read More", variant: "primary" }}
              />
              
              <TextBlock
                title="Quote Block"
                content="Logical Front delivered exceptional results. Their Arkansas-based team understood our unique requirements and provided solutions that exceeded expectations."
                width="half"
                variant="quote"
                quote={{
                  author: "John Smith",
                  title: "IT Director",
                  company: "Arkansas State University"
                }}
              />
            </div>
          </div>

          {/* Full-Width Text Blocks */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-8 text-center">
              Full-Width Text Blocks
            </Heading>
            
            <div className="space-y-8">
              <TextBlock
                title="Announcement Block"
                subtitle="Important updates and news"
                content="Stay informed about the latest developments, new services, and important announcements from Logical Front. This full-width announcement block ensures maximum visibility for critical information."
                width="full"
                variant="announcement"
                badge="Latest News"
                icon="fas fa-bullhorn"
                ctaButton={{ text: "View All News", variant: "primary" }}
                secondaryButton={{ text: "Subscribe", variant: "secondary" }}
              />
              
              <TextBlock
                title="Why Choose Arkansas-Based Infrastructure?"
                subtitle="Local advantages that national providers can't match"
                content="When you choose Logical Front, you're not just getting infrastructure services - you're getting a competitive advantage. Our Arkansas-based approach provides unique benefits that large national providers simply cannot offer. From direct AR-EON network access to local expertise, discover why hundreds of organizations across the region trust us with their critical infrastructure needs."
                width="full"
                variant="default"
                backgroundColor="white"
                textAlign="left"
                bulletPoints={[
                  "Direct connection to AR-EON (Arkansas Educational Network) for superior performance",
                  "33% average cost savings compared to AWS, Azure, and Google Cloud",
                  "HIPAA and FERPA compliant infrastructure designed for healthcare and education",
                  "24/7 local technical support team - same engineers who designed your solution",
                  "Arkansas data residency guarantee - your data never leaves the state",
                  "Established relationships with state agencies and educational institutions"
                ]}
                ctaButton={{ text: "Calculate Your Savings", variant: "primary" }}
                secondaryButton={{ text: "Schedule Consultation", variant: "secondary" }}
              />
            </div>
          </div>
        </div>
      </section>

      <Divider className="my-0" />

      {/* Rich Text Blocks Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="primary" className="mb-4">
              Rich Text Display Blocks
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Advanced rich text blocks with full formatting support for articles, documentation, and editorial content
            </Text>
          </div>

          {/* Half-Width Rich Text Blocks */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-8 text-center">
              Half-Width Rich Text Blocks
            </Heading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RichTextBlock
                title="Article Style Content"
                subtitle="Professional article formatting"
                content={`
                  <h2>The Future of Cloud Infrastructure</h2>
                  <p>Cloud infrastructure is evolving rapidly, with new technologies and approaches emerging constantly. <strong>Private cloud solutions</strong> are becoming increasingly popular as organizations seek greater control over their data and infrastructure.</p>
                  
                  <h3>Key Benefits</h3>
                  <ul>
                    <li>Complete control over your infrastructure</li>
                    <li>Enhanced security and compliance</li>
                    <li>Predictable costs and performance</li>
                    <li>Local support and expertise</li>
                  </ul>
                  
                  <blockquote>
                    "The shift to private cloud has transformed how we manage our IT infrastructure. The control and security benefits are unmatched."
                  </blockquote>
                  
                  <p>Organizations across Arkansas are discovering that <em>local private cloud solutions</em> offer advantages that national providers simply cannot match. From direct network access to personalized support, the benefits are clear.</p>
                  
                  <h3>Getting Started</h3>
                  <p>Making the transition to private cloud doesn't have to be complex. With the right partner and approach, you can modernize your infrastructure while maintaining complete control.</p>
                `}
                width="half"
                variant="article"
                dropcap={true}
                fontSize="default"
                lineHeight="relaxed"
                showMetadata={true}
                author={{
                  name: "Sarah Johnson",
                  title: "Cloud Architect"
                }}
                publishedDate="2024-01-15"
                readingTime="5 min read"
                category="Infrastructure"
                tags={["Cloud", "Private Cloud", "Arkansas", "Technology"]}
              />
              
              <RichTextBlock
                title="Documentation Example"
                subtitle="Technical documentation with code"
                content={`
                  <h2>API Configuration Guide</h2>
                  <p>This guide covers the essential steps for configuring your private cloud API endpoints.</p>
                  
                  <h3>Prerequisites</h3>
                  <ul>
                    <li>Valid API credentials</li>
                    <li>Network access to the endpoint</li>
                    <li>Appropriate permissions</li>
                  </ul>
                  
                  <h3>Configuration Steps</h3>
                  <ol>
                    <li>Generate your API key from the dashboard</li>
                    <li>Configure your environment variables</li>
                    <li>Test the connection</li>
                  </ol>
                  
                  <h3>Example Code</h3>
                  <pre><code>// Initialize the API client
const client = new CloudClient({
  endpoint: 'https://api.logicalfront.com',
  apiKey: process.env.API_KEY,
  region: 'arkansas'
});

// Test the connection
await client.testConnection();</code></pre>
                  
                  <p><strong>Note:</strong> Always store sensitive credentials in environment variables, never in your source code.</p>
                  
                  <h3>Troubleshooting</h3>
                  <p>If you encounter issues, check the following:</p>
                  <ul>
                    <li>Verify your API key is valid</li>
                    <li>Check network connectivity</li>
                    <li>Review the error logs</li>
                  </ul>
                `}
                width="half"
                variant="documentation"
                fontSize="small"
                lineHeight="normal"
              />
            </div>
          </div>

          {/* Full-Width Rich Text Block */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-8 text-center">
              Full-Width Rich Text Block
            </Heading>
            
            <RichTextBlock
              title="Comprehensive Cloud Migration Strategy"
              subtitle="A complete guide to planning and executing your cloud migration"
              content={`
                <h2>Executive Summary</h2>
                <p>Cloud migration is a critical step in modernizing your IT infrastructure. This comprehensive guide provides a strategic framework for planning and executing a successful migration to private cloud infrastructure.</p>
                
                <h2>Understanding the Migration Journey</h2>
                <p>Every organization's cloud migration journey is unique, but successful migrations share common characteristics: <strong>thorough planning</strong>, <em>careful execution</em>, and <strong>continuous optimization</strong>.</p>
                
                <h3>Phase 1: Assessment and Planning</h3>
                <p>The foundation of any successful migration begins with a comprehensive assessment of your current infrastructure:</p>
                <ul>
                  <li><strong>Inventory existing applications and workloads</strong> - Document all systems, dependencies, and integration points</li>
                  <li><strong>Evaluate migration readiness</strong> - Assess technical debt, compliance requirements, and business criticality</li>
                  <li><strong>Define success metrics</strong> - Establish clear KPIs for performance, cost, and user satisfaction</li>
                  <li><strong>Create migration roadmap</strong> - Develop a phased approach with realistic timelines</li>
                </ul>
                
                <blockquote>
                  "A well-planned migration is already half successful. The time invested in planning pays dividends during execution." - Cloud Migration Best Practices
                </blockquote>
                
                <h3>Phase 2: Proof of Concept</h3>
                <p>Before committing to a full migration, validate your approach with a proof of concept:</p>
                <ol>
                  <li>Select a representative workload for pilot migration</li>
                  <li>Test migration tools and processes</li>
                  <li>Validate performance and functionality</li>
                  <li>Document lessons learned and refine approach</li>
                </ol>
                
                <h3>Phase 3: Migration Execution</h3>
                <p>With planning complete and approach validated, execute the migration in waves:</p>
                
                <table>
                  <thead>
                    <tr>
                      <th>Wave</th>
                      <th>Workload Type</th>
                      <th>Timeline</th>
                      <th>Risk Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Wave 1</td>
                      <td>Development/Test</td>
                      <td>Weeks 1-2</td>
                      <td>Low</td>
                    </tr>
                    <tr>
                      <td>Wave 2</td>
                      <td>Non-critical Production</td>
                      <td>Weeks 3-4</td>
                      <td>Medium</td>
                    </tr>
                    <tr>
                      <td>Wave 3</td>
                      <td>Critical Production</td>
                      <td>Weeks 5-8</td>
                      <td>High</td>
                    </tr>
                  </tbody>
                </table>
                
                <h3>Phase 4: Optimization and Governance</h3>
                <p>Post-migration optimization ensures you realize the full benefits of your cloud investment:</p>
                <ul>
                  <li><strong>Performance tuning</strong> - Right-size resources based on actual usage patterns</li>
                  <li><strong>Cost optimization</strong> - Implement cost controls and monitoring</li>
                  <li><strong>Security hardening</strong> - Apply security best practices and compliance frameworks</li>
                  <li><strong>Operational excellence</strong> - Establish monitoring, alerting, and incident response procedures</li>
                </ul>
                
                <hr />
                
                <h2>Conclusion</h2>
                <p>Successful cloud migration requires careful planning, methodical execution, and continuous optimization. By following this strategic framework and partnering with experienced providers like Logical Front, organizations can modernize their infrastructure while minimizing risk and maximizing value.</p>
                
                <p><strong>Ready to begin your cloud migration journey?</strong> Contact our team to discuss how we can help you achieve your infrastructure modernization goals.</p>
              `}
              width="full"
              variant="editorial"
              dropcap={true}
              fontSize="large"
              lineHeight="relaxed"
              showMetadata={true}
              author={{
                name: "Michael Chen",
                title: "Chief Technology Officer"
              }}
              publishedDate="2024-01-20"
              readingTime="12 min read"
              category="Strategy"
              tags={["Cloud Migration", "Strategy", "Best Practices", "Infrastructure", "Planning"]}
            />
          </div>
        </div>
      </section>

      <Divider className="my-0" />

      {/* Half-Width Utility Blocks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="primary" className="mb-4">
              Half-Width Utility Blocks
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Specialized blocks for stats, features, contact info, and updates
            </Text>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Stats */}
            <QuickStats
              title="Performance Metrics"
              subtitle="Key performance indicators"
              stats={sampleStats}
              layout="grid"
              variant="cards"
              backgroundColor="white"
            />

            {/* Feature List */}
            <FeatureList
              title="Core Capabilities"
              subtitle="What makes us different"
              features={sampleFeatures}
              variant="detailed"
              showStatus={true}
              ctaButton={{ text: "View All Features" }}
            />

            {/* Contact Card */}
            <ContactCard
              title="Get In Touch"
              subtitle="Ready to discuss your infrastructure needs?"
              contactMethods={sampleContact}
              variant="default"
              ctaButton={{ text: "Schedule Consultation", variant: "primary" }}
            />

            {/* News Updates */}
            <NewsUpdate
              title="Latest Updates"
              subtitle="Stay informed about our progress"
              items={sampleNews}
              variant="default"
              showDates={true}
              maxItems={3}
              viewAllButton={{ text: "View All News" }}
            />
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Heading level={2} variant="primary" className="mb-4">
              Usage Examples
            </Heading>
            <Text variant="lead" className="max-w-3xl mx-auto">
              How to implement these content blocks in your pages
            </Text>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 text-white">
            <Text className="font-mono text-sm text-green-400 mb-4">
              // Import the blocks you need
            </Text>
            <Text className="font-mono text-sm text-white mb-4">
              import &#123; ImageBlock, TextBlock, QuickStats &#125; from '../blocks';
            </Text>
            
            <Text className="font-mono text-sm text-green-400 mb-4">
              // Use in your components
            </Text>
            <Text className="font-mono text-sm text-white">
              &lt;ImageBlock<br/>
              &nbsp;&nbsp;title="Your Title"<br/>
              &nbsp;&nbsp;imageUrl="/your-image.jpg"<br/>
              &nbsp;&nbsp;imageAlt="Description"<br/>
              &nbsp;&nbsp;width="half" // or "full"<br/>
              &nbsp;&nbsp;imagePosition="left" // "right", "top", "bottom", "background"<br/>
              &nbsp;&nbsp;variant="default" // "hero", "feature", etc.<br/>
              /&gt;
            </Text>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContentBlocksShowcase;
export { ContentBlocksShowcase };