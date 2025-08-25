import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';

const OurTeamPage: React.FC = () => {
  const heroData = {
    title: "Our Team\nExperience You Can Trust",
    subtitle: "Meet the Arkansas-based professionals who bring decades of infrastructure expertise to every client engagement.",
    stats: [
      { number: "50+", label: "Years Combined Experience" },
      { number: "100%", label: "Arkansas Based" },
      { number: "24/7", label: "Support Available" }
    ],
    primaryCTA: { 
      text: "MEET THE TEAM", 
      icon: "fas fa-users",
      href: "#team"
    },
    secondaryCTA: { 
      text: "CONTACT US", 
      icon: "fas fa-phone",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Team Introduction Content and Graphic Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <RichTextBlock
              title="Meet Your Infrastructure Experts"
              subtitle="Local professionals with global expertise"
              content={`
                <p>Our team combines <strong>decades of enterprise infrastructure experience</strong> with deep local knowledge of Utah businesses and institutions. Every team member is passionate about delivering solutions that truly make a difference for our clients.</p>
                
                <h3>What Sets Our Team Apart</h3>
                <ul>
                  <li><strong>Utah-Based Expertise</strong> - We understand local business needs and compliance requirements</li>
                  <li><strong>Enterprise Experience</strong> - Team members have worked with Fortune 500 companies and major institutions</li>
                  <li><strong>Continuous Learning</strong> - Ongoing training and certifications in the latest technologies</li>
                  <li><strong>Client-First Approach</strong> - Every decision is made with your success in mind</li>
                </ul>
                
                <blockquote>
                  "Our team's dedication to client success is what drives everything we do. We're not just service providers – we're your technology partners."
                  <br/>- Leadership Team
                </blockquote>
                
                <p>When you work with Logical Front, you're working with professionals who have designed and managed infrastructure for organizations of all sizes, from small nonprofits to major universities.</p>
              `}
              width="full"
              variant="article"
              fontSize="default"
              lineHeight="relaxed"
              className="mb-12"
            />
            
            <ImageBlock
              title="Your Utah Technology Partners"
              description="Our team brings together enterprise-level expertise with the personal attention you deserve from a local partner."
              imageUrl="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              imageAlt="Professional team collaboration"
              imagePosition="top"
              width="full"
              aspectRatio="wide"
              badge="Utah Based"
              ctaButton={{ text: "Contact Our Team", variant: "primary" }}
            />
          </div>
        </section>

        {/* Leadership Team Section */}
        <section id="team" className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our experienced leadership team combines technical expertise with business acumen to deliver 
                infrastructure solutions that drive real results for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* CEO */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-user-tie text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">John Smith</h3>
                <p className="text-brand-blue text-center font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-center mb-4">
                  20+ years of experience leading technology transformations for enterprise organizations. 
                  Expertise in strategic planning and infrastructure optimization.
                </p>
                <div className="text-center">
                  <a href="mailto:john@logicalfront.com" className="text-brand-green hover:text-brand-blue">
                    <i className="fas fa-envelope mr-2"></i>Contact
                  </a>
                </div>
              </div>
              
              {/* CTO */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-laptop-code text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Sarah Johnson</h3>
                <p className="text-brand-green text-center font-semibold mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 text-center mb-4">
                  Infrastructure architect specializing in private cloud solutions, virtualization, 
                  and enterprise networking. Expert in HIPAA and FERPA compliance frameworks.
                </p>
                <div className="text-center">
                  <a href="mailto:sarah@logicalfront.com" className="text-brand-green hover:text-brand-blue">
                    <i className="fas fa-envelope mr-2"></i>Contact
                  </a>
                </div>
              </div>
              
              {/* VP Client Success */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-handshake text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Mike Rodriguez</h3>
                <p className="text-brand-blue text-center font-semibold mb-4">VP of Client Success</p>
                <p className="text-gray-600 text-center mb-4">
                  Dedicated to ensuring every client achieves their infrastructure goals. 
                  Manages ongoing support relationships and optimization initiatives.
                </p>
                <div className="text-center">
                  <a href="mailto:mike@logicalfront.com" className="text-brand-green hover:text-brand-blue">
                    <i className="fas fa-envelope mr-2"></i>Contact
                  </a>
                </div>
              </div>
              
              {/* Senior Infrastructure Engineer */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-server text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">David Chen</h3>
                <p className="text-brand-green text-center font-semibold mb-4">Senior Infrastructure Engineer</p>
                <p className="text-gray-600 text-center mb-4">
                  15+ years of hands-on infrastructure experience. Specializes in on-premise 
                  solutions, disaster recovery, and system optimization.
                </p>
                <div className="text-center">
                  <a href="mailto:david@logicalfront.com" className="text-brand-green hover:text-brand-blue">
                    <i className="fas fa-envelope mr-2"></i>Contact
                  </a>
                </div>
              </div>
              
              {/* Cloud Solutions Architect */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-cloud text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Lisa Thompson</h3>
                <p className="text-brand-blue text-center font-semibold mb-4">Cloud Solutions Architect</p>
                <p className="text-gray-600 text-center mb-4">
                  Expert in private cloud design and implementation. Certified in multiple 
                  virtualization platforms and cloud management systems.
                </p>
                <div className="text-center">
                  <a href="mailto:lisa@logicalfront.com" className="text-brand-green hover:text-brand-blue">
                    <i className="fas fa-envelope mr-2"></i>Contact
                  </a>
                </div>
              </div>
              
              {/* Support Manager */}
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-headset text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Robert Garcia</h3>
                <p className="text-brand-green text-center font-semibold mb-4">Support Manager</p>
                <p className="text-gray-600 text-center mb-4">
                  Leads our 24/7 support team. Ensures rapid response times and 
                  maintains our commitment to exceptional client service.
                </p>
                <div className="text-center">
                  <a href="mailto:robert@logicalfront.com" className="text-brand-green hover:text-brand-blue">
                    <i className="fas fa-envelope mr-2"></i>Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-16">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Team?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your infrastructure needs and discover how our experienced team can help your organization succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Our Team
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurTeamPage;
export { OurTeamPage };