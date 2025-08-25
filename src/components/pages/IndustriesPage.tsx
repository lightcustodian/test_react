import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';
import { ServiceGrid } from '../blocks/ServiceGrid';

const IndustriesPage: React.FC = () => {
  const heroData = {
    title: "Industries We Serve\nTailored Infrastructure Solutions",
    subtitle: "Specialized IT infrastructure solutions designed for the unique needs of your industry, with proven success across education, healthcare, manufacturing, and more.",
    stats: [
      { number: "50+", label: "Industries Served" },
      { number: "100%", label: "Compliance Focused" },
      { number: "33%", label: "Cost Reduction" }
    ],
    primaryCTA: { 
      text: "Explore Your Industry", 
      icon: "fas fa-industry",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "View Case Studies", 
      icon: "fas fa-chart-line",
      href: "/case-studies"
    },
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Industry Overview Section with Content Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <RichTextBlock
              title="Industry-Specific Solutions"
              subtitle="Tailored infrastructure for your unique needs"
              content={`
                <p>Every industry has its own unique challenges and requirements when it comes to technology infrastructure. That's why we've developed <strong>specialized solutions</strong> that address the specific needs of each sector we serve.</p>
                
                <h3>Our Industry Expertise</h3>
                <p>With over 15 years of experience serving diverse industries, we understand the critical requirements that drive your success:</p>
                <ul>
                  <li><strong>Compliance Requirements</strong> - HIPAA, FERPA, and industry-specific regulations</li>
                  <li><strong>Security Standards</strong> - Enhanced protection for sensitive data</li>
                  <li><strong>Performance Needs</strong> - Optimized for your workloads</li>
                  <li><strong>Budget Constraints</strong> - Cost-effective solutions that deliver value</li>
                </ul>
                
                <p>Our team of experts works closely with you to understand your industry's unique challenges and design infrastructure solutions that not only meet today's needs but scale for tomorrow's growth.</p>
              `}
              width="full"
              variant="article"
              fontSize="default"
              lineHeight="relaxed"
              className="mb-12 mx-auto"
            />
            
            <ImageBlock
              title="Proven Success Across Industries"
              description="From education to healthcare, manufacturing to government, we've helped organizations across every sector modernize their infrastructure."
              imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=600&fit=crop"
              imageAlt="Industry solutions"
              imagePosition="top"
              width="full"
              aspectRatio="wide"
              badge="50+ Industries"
            />
          </div>
        </section>

        {/* Industries Grid Section */}
        <ServiceGrid
          title="Industries We Serve"
          subtitle="Tailored solutions for every sector"
          items={[
            {
              title: "Higher Education",
              description: "FERPA-compliant infrastructure solutions for universities and colleges with specialized compliance requirements.",
              icon: "fas fa-graduation-cap",
              link: { text: "Learn More", href: "/higher-education" }
            },
            {
              title: "K-12 Education",
              description: "Secure, scalable solutions designed for school districts with budget-conscious infrastructure needs.",
              icon: "fas fa-school",
              link: { text: "Learn More", href: "/k-12" }
            },
            {
              title: "Healthcare",
              description: "HIPAA-compliant infrastructure with enhanced security for patient data and critical healthcare systems.",
              icon: "fas fa-hospital",
              link: { text: "Learn More", href: "/healthcare" }
            },
            {
              title: "Manufacturing",
              description: "High-performance infrastructure supporting IoT, automation, and real-time production systems.",
              icon: "fas fa-industry",
              link: { text: "Learn More", href: "/industries" }
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

export default IndustriesPage;
export { IndustriesPage };