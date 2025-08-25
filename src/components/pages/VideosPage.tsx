import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';

const VideosPage: React.FC = () => {
  const heroData = {
    title: "Infrastructure Success\nStories in Video",
    subtitle: "Watch real clients and partners share their experiences with Logical Front's infrastructure solutions and the results they've achieved.",
    stats: [
      { number: "20+", label: "Client Stories" },
      { number: "500K+", label: "Users Impacted" },
      { number: "$400K", label: "Saved by Venoco" }
    ],
    primaryCTA: { 
      text: "WATCH TESTIMONIALS", 
      icon: "fas fa-play",
      href: "#testimonials"
    },
    secondaryCTA: { 
      text: "CASE STUDIES", 
      icon: "fas fa-chart-line",
      href: "/case-studies"
    },
    backgroundImage: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Video Introduction Content and Graphic Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <RichTextBlock
                title="Real Stories from Real Clients"
                subtitle="Success stories backed by measurable results"
                content={`
                  <p>Our video library showcases <strong>authentic testimonials and success stories</strong> from clients who have transformed their infrastructure with Logical Front. Every video demonstrates real results and measurable impact.</p>
                  
                  <h3>Featured Video Content</h3>
                  <ul>
                    <li><strong>Client Testimonials</strong> - Hear directly from satisfied customers across industries</li>
                    <li><strong>Partner Endorsements</strong> - VMware and Dell partners share their experiences</li>
                    <li><strong>Case Study Highlights</strong> - Deep dives into successful implementations</li>
                    <li><strong>Educational Content</strong> - Technical insights and best practices</li>
                  </ul>
                  
                  <blockquote>
                    "Logical Front has done a great job of penetrating their specialties in the market with VDI and VSAN focus."
                    <br/>- Matt Mologne, VMware
                  </blockquote>
                  
                  <p>From small school districts to major institutions, watch how organizations across Arkansas and beyond have achieved their infrastructure goals with our proven solutions.</p>
                `}
                width="half"
                variant="article"
                fontSize="default"
                lineHeight="relaxed"
              />
              
              <ImageBlock
                title="Proven Results Across Industries"
                description="From education to enterprise, our clients share their transformation stories and the impact on their organizations."
                imageUrl="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop"
                imageAlt="Video testimonials and success stories"
                imagePosition="right"
                width="half"
                aspectRatio="landscape"
                badge="20+ Success Stories"
                ctaButton={{ text: "Watch All Videos", variant: "primary" }}
              />
            </div>
          </div>
        </section>

        {/* Partner Testimonials Section */}
        <section id="testimonials" className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-4">Partner Testimonials</h2>
              <p className="text-xl text-gray-600">Leading technology vendors share their experiences working with Logical Front</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* VMware Testimonial */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-48 relative bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-70"></div>
                  <div className="bg-white bg-opacity-20 rounded-full p-6 relative z-10">
                    <i className="fas fa-play text-4xl text-white"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">VMware Partnership Excellence</h3>
                  <blockquote className="text-gray-600 mb-4 italic">
                    "Logical Front has done a great job of penetrating their specialties in the market with VDI and VSAN focus."
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Matt Mologne</p>
                      <p className="text-sm text-gray-500">VMware</p>
                    </div>
                    <button className="bg-brand-green text-white px-4 py-2 rounded hover:bg-brand-blue transition-colors">
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>

              {/* Dell Partnership */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-48 relative bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-blue opacity-70"></div>
                  <div className="bg-white bg-opacity-20 rounded-full p-6 relative z-10">
                    <i className="fas fa-play text-4xl text-white"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Dell Technology Partnership</h3>
                  <blockquote className="text-gray-600 mb-4 italic">
                    "When the customer needs an expert or specific knowledge we work with a VAR such as Logical Front."
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Shane Nichols</p>
                      <p className="text-sm text-gray-500">Dell Technologies</p>
                    </div>
                    <button className="bg-brand-green text-white px-4 py-2 rounded hover:bg-brand-blue transition-colors">
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>

              {/* VMware Support */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-48 relative bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-70"></div>
                  <div className="bg-white bg-opacity-20 rounded-full p-6 relative z-10">
                    <i className="fas fa-play text-4xl text-white"></i>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Support Excellence</h3>
                  <blockquote className="text-gray-600 mb-4 italic">
                    "VMware uses systems integrators such as Logical Front to provide needed technical support."
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Ryan Suitt</p>
                      <p className="text-sm text-gray-500">VMware</p>
                    </div>
                    <button className="bg-brand-green text-white px-4 py-2 rounded hover:bg-brand-blue transition-colors">
                      Watch Video
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Success Stories */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-4">Client Success Stories</h2>
              <p className="text-xl text-gray-600">Watch how organizations achieved their infrastructure goals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Aurora Public Schools */}
              <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-64 relative bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-blue opacity-70"></div>
                  <div className="bg-white bg-opacity-20 rounded-full p-8 relative z-10">
                    <i className="fas fa-play text-5xl text-white"></i>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">Education</span>
                    <span className="text-gray-500 text-sm">VDI Implementation</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Aurora Public Schools VDI Success</h3>
                  <p className="text-gray-600 mb-4">
                    Learn how Aurora Public Schools implemented a comprehensive VDI solution that improved student access to technology while reducing IT management overhead.
                  </p>
                  <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green transition-colors w-full">
                    Watch Full Case Study
                  </button>
                </div>
              </div>

              {/* Glen Rose ISD */}
              <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-64 relative bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-70"></div>
                  <div className="bg-white bg-opacity-20 rounded-full p-8 relative z-10">
                    <i className="fas fa-play text-5xl text-white"></i>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">K-12</span>
                    <span className="text-gray-500 text-sm">Cost Reduction</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Glen Rose ISD: 33% Cost Savings</h3>
                  <p className="text-gray-600 mb-4">
                    Discover how Glen Rose Independent School District achieved 33% cost reduction while scaling their infrastructure to support growing student enrollment.
                  </p>
                  <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green transition-colors w-full">
                    Watch Full Case Study
                  </button>
                </div>
              </div>

              {/* Integrated Project Services */}
              <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-64 relative bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-blue opacity-70"></div>
                  <div className="bg-white bg-opacity-20 rounded-full p-8 relative z-10">
                    <i className="fas fa-play text-5xl text-white"></i>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">Enterprise</span>
                    <span className="text-gray-500 text-sm">Custom VDI</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom VDI Solution for IPS</h3>
                  <p className="text-gray-600 mb-4">
                    See how Integrated Project Services implemented a custom VDI solution tailored to their specific workflow requirements and security needs.
                  </p>
                  <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green transition-colors w-full">
                    Watch Full Case Study
                  </button>
                </div>
              </div>

              {/* Pearland ISD */}
              <div className="bg-gray-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-64 relative bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-70"></div>
                  <div className="bg-white bg-opacity-20 rounded-full p-8 relative z-10">
                    <i className="fas fa-play text-5xl text-white"></i>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">K-12</span>
                    <span className="text-gray-500 text-sm">Technology Deployment</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Pearland ISD Technology Transformation</h3>
                  <p className="text-gray-600 mb-4">
                    Watch how Pearland Independent School District successfully deployed enterprise technology solutions to enhance educational outcomes.
                  </p>
                  <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-green transition-colors w-full">
                    Watch Full Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-16">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Success Story?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your infrastructure needs and discover how we can help your organization achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-brand-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brand-blue transition-colors"
              >
                View All Case Studies
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default VideosPage;
export { VideosPage };