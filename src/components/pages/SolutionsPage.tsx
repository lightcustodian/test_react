import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';
import { ServiceGrid } from '../blocks/ServiceGrid';

const SolutionsPage: React.FC = () => {
  const heroData = {
    title: "Infrastructure Solutions\nThat Scale With You",
    subtitle: "Comprehensive infrastructure solutions from private cloud to on-premise systems, designed to give you complete control and predictable costs.",
    stats: [
      { number: "99.9%", label: "Uptime Guarantee" },
      { number: "33%", label: "Cost Savings" },
      { number: "100%", label: "No Vendor Lock-in" }
    ],
    primaryCTA: { 
      text: "Explore Solutions", 
      icon: "fas fa-cogs",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "See ROI Calculator", 
      icon: "fas fa-calculator",
      href: "/#calculator"
    },
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Solutions Overview Section with Content Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
              <RichTextBlock
                title="Infrastructure Solutions Built for You"
                content={`
                  <p>At Logical Front, we don't believe in one-size-fits-all solutions. Your infrastructure should be as unique as your organization, which is why we offer <strong>four distinct solution categories</strong> that can be mixed, matched, and customized to meet your exact needs.</p>
                  
                  <h3>Why Choose Logical Front?</h3>
                  <ul>
                    <li><strong>No Vendor Lock-in</strong> - Your data, your infrastructure, your choice</li>
                    <li><strong>Predictable Costs</strong> - No surprise bills or hidden fees</li>
                    <li><strong>Local Expertise</strong> - Utah-based team that understands your needs</li>
                    <li><strong>Enterprise-Grade</strong> - Same quality as AWS/Azure at 33% less cost</li>
                  </ul>
                  
                  <p>Whether you need a fully managed private cloud, on-premise hardware, Azure integration, or AI-powered automation, we have the expertise and solutions to make it happen.</p>
                `}
                width="half"
                variant="article"
                fontSize="default"
                lineHeight="relaxed"
              />
              
              <ImageBlock
                title="Complete Infrastructure Control"
                description="Take control of your infrastructure with solutions designed for flexibility, security, and cost-effectiveness."
                imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
                imageAlt="Data center infrastructure"
                imagePosition="right"
                width="half"
                aspectRatio="landscape"
                badge="No Lock-in"
                ctaButton={{ text: "Calculate Savings", variant: "primary" }}
              />
            </div>
            
            <ImageBlock
              title="Enterprise-Grade Infrastructure Solutions"
              description="From cloud infrastructure to AI automation, we deliver scalable solutions that grow with your business needs."
              imageUrl="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              imageAlt="Technology infrastructure solutions"
              imagePosition="top"
              width="full"
              aspectRatio="wide"
              badge="4 Solution Categories"
            />
          </div>
        </section>

        {/* Solution Categories Grid Section */}
        <ServiceGrid
          title="Our Solution Categories"
          subtitle="Four distinct solution paths that can be mixed, matched, and customized to meet your exact needs"
          items={[
            {
              title: "Private Cloud",
              description: "Enterprise-grade private cloud infrastructure with 99.9% uptime SLA and Utah-based data center advantage.",
              icon: "fas fa-cloud",
              link: { text: "Explore Private Cloud", href: "/private-cloud" }
            },
            {
              title: "On-Premise Solutions",
              description: "Complete on-premise infrastructure with professional installation, configuration, and ongoing support.",
              icon: "fas fa-building",
              link: { text: "Explore On-Premise", href: "/on-premise" }
            },
            {
              title: "Microsoft Azure",
              description: "Seamless Azure integration for hybrid cloud environments with enterprise-grade security.",
              icon: "fas fa-cloud-upload-alt",
              link: { text: "Explore Azure", href: "/microsoft-azure" }
            },
            {
              title: "AI/Automation",
              description: "Advanced automation and AI solutions to streamline operations and reduce manual overhead.",
              icon: "fas fa-robot",
              link: { text: "Explore AI/Automation", href: "/ai-automation" }
            }
          ]}
          columns={2}
          variant="featured"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default SolutionsPage;
export { SolutionsPage };