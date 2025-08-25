import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';
import { QuickStats } from '../blocks/QuickStats';

const AboutUsPageFixed: React.FC = () => {
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
        
        {/* Content and Graphic Blocks Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <RichTextBlock
                title="Infrastructure Solutions That Put You in Control"
                subtitle="Empowering organizations since 2009"
                content={`
                  <p>At Logical Front, we believe that technology infrastructure should <strong>empower your organization</strong>, not constrain it. Since our founding, we've been dedicated to providing enterprise-grade solutions that give you complete control over your technology environment.</p>
                  
                  <h3>Our Approach</h3>
                  <p>We understand that every organization is unique, which is why we don't believe in one-size-fits-all solutions. Our team works closely with you to understand your specific needs and challenges, then designs and implements infrastructure solutions that align perfectly with your goals.</p>
                  
                  <blockquote>
                    "Logical Front has been instrumental in transforming our infrastructure. Their expertise and dedication to our success is unmatched."
                    <br/>- IT Director, Fortune 500 Company
                  </blockquote>
                  
                  <p>Whether you're looking for <em>private cloud infrastructure</em>, <em>on-premise solutions</em>, or <em>hybrid environments</em>, we deliver the expertise and support you need to achieve your goals while reducing costs and complexity.</p>
                `}
                width="half"
                variant="article"
                fontSize="default"
                lineHeight="relaxed"
              />
              
              <ImageBlock
                title="Your Trusted Infrastructure Partner"
                description="From small businesses to large enterprises, we've helped hundreds of organizations transform their technology infrastructure."
                imageUrl="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                imageAlt="Team collaboration"
                imagePosition="right"
                width="half"
                aspectRatio="landscape"
                badge="Since 2009"
                ctaButton={{ text: "View Our Success Stories", variant: "primary" }}
              />
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-blue mb-4">Our Impact</h2>
              <p className="text-xl text-gray-600">Numbers that demonstrate our commitment to excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-calendar text-2xl text-white"></i>
                </div>
                <div className="text-3xl font-bold text-brand-blue mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-building text-2xl text-white"></i>
                </div>
                <div className="text-3xl font-bold text-brand-blue mb-2">500+</div>
                <div className="text-gray-600">Organizations Served</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-2xl text-white"></i>
                </div>
                <div className="text-3xl font-bold text-brand-blue mb-2">99.9%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-clock text-2xl text-white"></i>
                </div>
                <div className="text-3xl font-bold text-brand-blue mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-white"></i>
                </div>
                <div className="text-3xl font-bold text-brand-blue mb-2">600K+</div>
                <div className="text-gray-600">End Users Daily</div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl text-white"></i>
                </div>
                <div className="text-3xl font-bold text-brand-blue mb-2">100%</div>
                <div className="text-gray-600">Compliance Success</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-gradient-to-br from-brand-green to-brand-blue text-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl">These fundamental principles guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <i className="fas fa-handshake text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">Trust & Integrity</h3>
                <p className="text-white/90">We build lasting relationships through honest communication and reliable delivery.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <i className="fas fa-lightbulb text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                <p className="text-white/90">We continuously evolve our solutions to meet tomorrow's challenges today.</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-5 backdrop-blur-sm">
                  <i className="fas fa-users text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold mb-3">Client Success</h3>
                <p className="text-white/90">Your success is our success. We're committed to delivering exceptional value.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600">Meet the experienced professionals who lead Logical Front's mission</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-user text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">John Smith</h3>
                <p className="text-brand-green text-center font-semibold mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 text-center">20+ years of experience leading technology transformations for enterprise organizations across multiple industries.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-user text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Sarah Johnson</h3>
                <p className="text-brand-blue text-center font-semibold mb-4">Chief Technology Officer</p>
                <p className="text-gray-600 text-center">Infrastructure architect with expertise in private cloud, virtualization, and enterprise networking solutions.</p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-user text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Mike Rodriguez</h3>
                <p className="text-brand-green text-center font-semibold mb-4">VP of Client Success</p>
                <p className="text-gray-600 text-center">Dedicated to ensuring every client achieves their infrastructure goals with ongoing support and optimization.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUsPageFixed;
export { AboutUsPageFixed };