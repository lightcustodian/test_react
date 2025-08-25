import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';

const CaseStudiesPage: React.FC = () => {
  const heroData = {
    title: "Success Stories\nThat Speak for Themselves",
    subtitle: "Real results from real organizations that have transformed their infrastructure with Logical Front's proven solutions.",
    stats: [
      { number: "$400K", label: "Saved by Venoco" },
      { number: "50%", label: "Cost Reduction" },
      { number: "1/3", label: "Faster Implementation" }
    ],
    primaryCTA: { 
      text: "EXPLORE CASE STUDIES", 
      icon: "fas fa-book-open",
      href: "#studies"
    },
    secondaryCTA: { 
      text: "CONTACT US", 
      icon: "fas fa-phone",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Case Studies Introduction with Content Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
              <RichTextBlock
                title="Proven Results Across Industries"
                subtitle="Real organizations, real transformations"
                content={`
                  <p>Our case studies demonstrate the <strong>tangible value</strong> we deliver to organizations across education, government, healthcare, and commercial sectors. From K-12 school districts to energy companies, we've helped organizations modernize their infrastructure while dramatically reducing costs.</p>
                  
                  <h3>Common Success Patterns</h3>
                  <ul>
                    <li><strong>50% Average Cost Reduction</strong> - Proven savings compared to traditional solutions</li>
                    <li><strong>3x Faster Implementation</strong> - Projects completed in 1/3 expected time</li>
                    <li><strong>$400K+ Annual Savings</strong> - Documented cost savings for enterprise clients</li>
                    <li><strong>Educational Expertise</strong> - Specialized experience in K-12 and higher education</li>
                  </ul>
                  
                  <p>Each case study below represents a unique challenge and a customized solution, but they all share one thing in common: <em>dramatic improvements in performance, reliability, and cost-effectiveness</em>.</p>
                `}
                width="half"
                variant="article"
                fontSize="default"
                lineHeight="relaxed"
              />
              
              <ImageBlock
                title="Measurable Impact"
                description="Our clients consistently report significant improvements in performance, cost savings, and operational efficiency."
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                imageAlt="Success metrics dashboard"
                imagePosition="right"
                width="half"
                aspectRatio="landscape"
                badge="500+ Success Stories"
              />
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid Section */}
        <section id="studies" className="bg-gray-50 py-16">
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>Featured Case Studies</h2>
            
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'}}>
              <div style={{background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <h3 style={{color: '#125EAD', fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px'}}>
                  Venoco
                </h3>
                <div style={{marginBottom: '20px'}}>
                  <span style={{background: '#4BB74E', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500}}>
                    Energy • $400K Saved
                  </span>
                </div>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Data center consolidation project saved approximately $400,000 annually. IT Director David Arbaiza praised our "responsiveness and agility" in delivering custom infrastructure solutions.
                </p>
                <a href="/case-study-venoco" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Read Full Case Study →
                </a>
              </div>

              <div style={{background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <h3 style={{color: '#125EAD', fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px'}}>
                  Glen Rose ISD
                </h3>
                <div style={{marginBottom: '20px'}}>
                  <span style={{background: '#125EAD', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500}}>
                    K-12 Education • 50% Cost Reduction
                  </span>
                </div>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Implemented BYOD solution reducing costs by approximately 50%. "Having the right partner that knows what they're doing makes the difference," said Director of Technology Doug McClure.
                </p>
                <a href="/case-study-glen-rose-isd" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Read Full Case Study →
                </a>
              </div>

              <div style={{background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <h3 style={{color: '#125EAD', fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px'}}>
                  Pearland ISD
                </h3>
                <div style={{marginBottom: '20px'}}>
                  <span style={{background: '#125EAD', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500}}>
                    K-12 Education • 1/3 Time
                  </span>
                </div>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  VDI implementation completed in just 1/3 of expected time. Director of Technology Greg Bartay highlighted our ability to deliver rapid project completion without compromising quality.
                </p>
                <a href="/case-study-pearland-isd" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Read Full Case Study →
                </a>
              </div>

              <div style={{background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <h3 style={{color: '#125EAD', fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px'}}>
                  Aurora Public Schools
                </h3>
                <div style={{marginBottom: '20px'}}>
                  <span style={{background: '#4BB74E', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500}}>
                    K-12 Education • Hybrid Desktop
                  </span>
                </div>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Successfully deployed Dell Hybrid Desktop Solution. Technology Coordinator Robb Nachtigal praised our "experience in the educational field" and expertise in delivering complex infrastructure projects.
                </p>
                <a href="/case-study-aurora" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Read Full Case Study →
                </a>
              </div>

              <div style={{background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <h3 style={{color: '#125EAD', fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px'}}>
                  Crosby ISD
                </h3>
                <div style={{marginBottom: '20px'}}>
                  <span style={{background: '#125EAD', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500}}>
                    K-12 Education • Data Center Migration
                  </span>
                </div>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Complex data center migration completed seamlessly. "We could never have completed this project without Logical Front's expertise," said Amy Davis, Director of Technology Services.
                </p>
                <a href="/case-study-crosby-isd" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Read Full Case Study →
                </a>
              </div>

              <div style={{background: '#f8fafc', padding: '30px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <h3 style={{color: '#125EAD', fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px'}}>
                  Integrated Project Services (IPS)
                </h3>
                <div style={{marginBottom: '20px'}}>
                  <span style={{background: '#125EAD', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500}}>
                    Commercial • Custom VDI
                  </span>
                </div>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Custom VDI solution implemented quickly with tight time constraints. Our team's ability to deliver enterprise-grade solutions on aggressive timelines made the difference.
                </p>
                <a href="/case-study-ips" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Read Full Case Study →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
export { CaseStudiesPage };