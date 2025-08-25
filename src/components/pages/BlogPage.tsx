import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';

const BlogPage: React.FC = () => {
  const heroData = {
    title: "Infrastructure Insights\nFrom the Experts",
    subtitle: "Stay informed about the latest trends, best practices, and innovations in enterprise infrastructure and cloud solutions.",
    stats: [
      { number: "50+", label: "Articles Published" },
      { number: "15+", label: "Years of Insights" },
      { number: "24/7", label: "Expert Support" }
    ],
    primaryCTA: { 
      text: "BROWSE ARTICLES", 
      icon: "fas fa-book-open",
      href: "#articles"
    },
    secondaryCTA: { 
      text: "SUBSCRIBE", 
      icon: "fas fa-envelope",
      href: "#subscribe"
    },
    backgroundImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Blog Introduction Content and Graphic Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <RichTextBlock
              title="Expert Insights for Infrastructure Success"
              subtitle="Knowledge from real-world experience"
              content={`
                <p>Our blog shares <strong>practical insights and proven strategies</strong> from over 15 years of helping organizations transform their technology infrastructure. Every article is written by our team of experienced professionals who work with clients daily.</p>
                
                <h3>What You'll Find Here</h3>
                <ul>
                  <li><strong>Best Practices</strong> - Proven approaches from successful implementations</li>
                  <li><strong>Industry Trends</strong> - Analysis of emerging technologies and their impact</li>
                  <li><strong>Case Study Insights</strong> - Lessons learned from real client engagements</li>
                  <li><strong>Compliance Guidance</strong> - HIPAA, FERPA, and other regulatory requirements</li>
                </ul>
                
                <blockquote>
                  "Our blog isn't just theory – it's real insights from real implementations that have delivered measurable results for our clients."
                  <br/>- Logical Front Team
                </blockquote>
                
                <p>Whether you're planning a cloud migration, evaluating infrastructure options, or looking to optimize your current environment, our articles provide actionable guidance you can trust.</p>
              `}
              width="full"
              variant="article"
              fontSize="default"
              lineHeight="relaxed"
              className="mb-12"
            />
            
            <ImageBlock
              title="Knowledge Backed by Experience"
              description="Our insights come from real-world implementations across diverse industries and use cases."
              imageUrl="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              imageAlt="Technology insights and analysis"
              imagePosition="top"
              width="full"
              aspectRatio="wide"
              badge="Expert Content"
              ctaButton={{ text: "Read Latest Articles", variant: "primary" }}
            />
          </div>
        </section>

        {/* Latest Articles Section */}
        <section id="articles" className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-blue mb-4">Latest Articles</h2>
              <p className="text-xl text-gray-600">Fresh insights and practical guidance from our infrastructure experts</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">Cloud Strategy</span>
                    <span className="text-gray-500 text-sm">March 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5 Signs It's Time to Migrate from Public Cloud</h3>
                  <p className="text-gray-600 mb-4">Discover the key indicators that suggest your organization would benefit from private cloud infrastructure, including cost analysis and performance metrics.</p>
                  <a href="#" className="text-brand-green font-semibold hover:text-brand-blue">Read Article →</a>
                </div>
              </article>

              {/* Article 2 */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-blue opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">Compliance</span>
                    <span className="text-gray-500 text-sm">March 8, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">FERPA Compliance: A Complete Guide for Higher Education</h3>
                  <p className="text-gray-600 mb-4">Understanding FERPA requirements and how to design infrastructure that protects student data while enabling educational innovation.</p>
                  <a href="#" className="text-brand-green font-semibold hover:text-brand-blue">Read Article →</a>
                </div>
              </article>

              {/* Article 3 */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">Cost Optimization</span>
                    <span className="text-gray-500 text-sm">February 28, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">How We Helped Venoco Save $400K Annually</h3>
                  <p className="text-gray-600 mb-4">A detailed case study of infrastructure optimization that reduced costs by 33% while improving performance and reliability.</p>
                  <a href="#" className="text-brand-green font-semibold hover:text-brand-blue">Read Article →</a>
                </div>
              </article>

              {/* Article 4 */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-blue opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">Technology</span>
                    <span className="text-gray-500 text-sm">February 21, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Arkansas AR-EON Advantage Explained</h3>
                  <p className="text-gray-600 mb-4">Learn how direct connection to the Arkansas Educational Network provides performance and cost benefits for organizations across the state.</p>
                  <a href="#" className="text-brand-green font-semibold hover:text-brand-blue">Read Article →</a>
                </div>
              </article>

              {/* Article 5 */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-green opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-green text-white px-3 py-1 rounded-full text-sm font-medium">Security</span>
                    <span className="text-gray-500 text-sm">February 14, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">HIPAA Infrastructure: Beyond Basic Compliance</h3>
                  <p className="text-gray-600 mb-4">Advanced strategies for healthcare organizations to not just meet HIPAA requirements, but exceed them for maximum protection.</p>
                  <a href="#" className="text-brand-green font-semibold hover:text-brand-blue">Read Article →</a>
                </div>
              </article>

              {/* Article 6 */}
              <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 relative bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'}}>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-green to-brand-blue opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-sm font-medium">Best Practices</span>
                    <span className="text-gray-500 text-sm">February 7, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Disaster Recovery: Planning for the Unexpected</h3>
                  <p className="text-gray-600 mb-4">Essential components of a comprehensive disaster recovery strategy that protects your organization's critical data and operations.</p>
                  <a href="#" className="text-brand-green font-semibold hover:text-brand-blue">Read Article →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription Section */}
        <section id="subscribe" className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-16">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Expert Insights</h2>
            <p className="text-xl mb-8">
              Subscribe to our newsletter and receive the latest infrastructure insights, case studies, and best practices directly in your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                />
                <button className="bg-white text-brand-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-white/80 mt-4">
                No spam, unsubscribe at any time. Read our privacy policy.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
export { BlogPage };