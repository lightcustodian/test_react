import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';
import { QuickStats } from '../blocks/QuickStats';
import { ContactCard } from '../blocks/ContactCard';

const AboutUsPage: React.FC = () => {
  const heroData = {
    title: "About Logical Front\nYour Infrastructure Partner",
    subtitle: "For over a decade, we've been helping organizations transform their technology infrastructure with solutions that put them in control.",
    stats: [
      { number: "15+", label: "Years of Experience" },
      { number: "500+", label: "Organizations Served" },
      { number: "99.9%", label: "Customer Satisfaction" }
    ],
    primaryCTA: { 
      text: "OUR MISSION", 
      icon: "fas fa-bullseye",
      href: "/mission-statement"
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
        
        {/* Company Overview Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <RichTextBlock
                title="Infrastructure Solutions That Put You in Control"
                content={`<p>At Logical Front, we believe that technology infrastructure should <strong>empower your organization</strong>, not constrain it. Since our founding, we've been dedicated to providing enterprise-grade solutions that give you complete control over your technology environment.</p><p>Whether you're looking for <em>private cloud infrastructure</em>, <em>on-premise solutions</em>, or <em>hybrid environments</em>, we deliver the expertise and support you need to achieve your goals while reducing costs and complexity.</p>`}
                variant="article"
                fontSize="large"
                lineHeight="relaxed"
                className="w-full"
              />
              <ImageBlock
                imageUrl="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                imageAlt="Team collaboration"
                width="full"
                variant="feature"
                imagePosition="right"
              />
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <RichTextBlock
                title="By the Numbers"
                content={`<p>Our track record speaks for itself. Over the years, we've built a reputation for delivering <strong>reliable infrastructure solutions</strong> that help organizations achieve their technology goals.</p><p>From small businesses to large enterprises, we've helped hundreds of organizations transform their technology infrastructure with solutions that put them in control.</p>`}
                variant="article"
                className="w-full"
              />
              <QuickStats
                title="Our Impact"
                stats={[
                  { number: "15+", label: "Years Experience", icon: "fas fa-calendar" },
                  { number: "500+", label: "Organizations Served", icon: "fas fa-building" },
                  { number: "99.9%", label: "Customer Satisfaction", icon: "fas fa-star" },
                  { number: "24/7", label: "Support Available", icon: "fas fa-clock" }
                ]}
                variant="grid"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gradient-to-br from-brand-green to-brand-blue text-white py-20">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <RichTextBlock
              title="Our Core Values"
              content={`<p>These fundamental principles guide everything we do and shape how we serve our clients.</p>`}
              variant="article"
              className="mx-auto mb-12 bg-transparent shadow-none border-none text-white [&_.rich-text-content]:text-white [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white [&_p]:text-white"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <i className="fas fa-handshake text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Partnership</h3>
                <p className="opacity-90 leading-relaxed">
                  We work alongside your team as trusted partners, not just vendors, to achieve your technology goals.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <i className="fas fa-star text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
                <p className="opacity-90 leading-relaxed">
                  We deliver superior solutions backed by industry-leading expertise and unwavering commitment to quality.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <i className="fas fa-lightbulb text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                <p className="opacity-90 leading-relaxed">
                  We stay ahead of technology trends to provide cutting-edge solutions that prepare you for the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <RichTextBlock
                title="Leadership Team"
                content={`<p>Meet the experienced professionals who lead Logical Front's mission to deliver infrastructure solutions that put you in control.</p>`}
                variant="article"
                className="mx-auto"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ContactCard
                name="John Smith"
                title="Chief Executive Officer"
                description="20+ years of experience leading technology transformations for enterprise organizations across multiple industries."
                icon="fas fa-user"
                backgroundColor="green"
              />
              
              <ContactCard
                name="Sarah Johnson"
                title="Chief Technology Officer"
                description="Infrastructure architect with expertise in private cloud, virtualization, and enterprise networking solutions."
                icon="fas fa-user"
                backgroundColor="blue"
              />
              
              <ContactCard
                name="Mike Rodriguez"
                title="VP of Client Success"
                description="Dedicated to ensuring every client achieves their infrastructure goals with ongoing support and optimization."
                icon="fas fa-user"
                backgroundColor="green"
              />
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUsPage;
export { AboutUsPage };