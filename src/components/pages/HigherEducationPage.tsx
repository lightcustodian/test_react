import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { SolutionsSection } from '../blocks/SolutionsSection';
import { ValuePropsSection } from '../blocks/ValuePropsSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';
import { Card } from '../components/Card';
import { IconCircle } from '../items/IconCircle';
import { Button } from '../items/Button';

const HigherEducationPage: React.FC = () => {
  const heroData = {
    title: "Higher Education IT Solutions\nThat Scale",
    subtitle: "Get enterprise-grade performance with FERPA compliance at 33% less cost than public cloud. Trusted by universities serving 600K+ students nationwide with Arkansas AR-EON network advantage.",
    stats: [
      { number: "20K+", label: "Students at UAMS" },
      { number: "100%", label: "FERPA Compliant" },
      { number: "24/7", label: "Expert Support" }
    ],
    primaryCTA: { text: "Schedule Higher Ed Consultation", icon: "fas fa-calendar-check" },
    secondaryCTA: { text: "View UAMS Success Story", icon: "fas fa-info-circle" },
    backgroundImage: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  const valueProps = {
    title: "Why Choose Logical Front",
    subtitle: "The advantages that set us apart from other infrastructure providers",
    values: [
      {
        title: "Lower Total Cost",
        description: "Save 33% vs public cloud with transparent, predictable pricing",
        icon: "fas fa-dollar-sign"
      },
      {
        title: "No Vendor Lock-In",
        description: "Maintain complete control of your infrastructure",
        icon: "fas fa-unlock"
      },
      {
        title: "Arkansas Support",
        description: "Local team with regional expertise and 24/7 availability",
        icon: "fas fa-headset"
      },
      {
        title: "Scalable Growth",
        description: "Infrastructure that grows seamlessly with your organization",
        icon: "fas fa-chart-line"
      }
    ]
  };

  const solutions = {
    title: "Proven Infrastructure Solutions",
    subtitle: "Enterprise-grade solutions with guaranteed performance and cost savings",
    services: [
      {
        title: "Private Cloud Infrastructure",
        description: "Enterprise-grade private cloud with 99.9% uptime SLA and Arkansas AR-EON advantage.",
        icon: "fas fa-cloud",
        features: [
          "99.9% uptime SLA with penalties",
          "Arkansas AR-EON network advantage",
          "24/7 monitoring and support",
          "Disaster recovery included"
        ]
      },
      {
        title: "On-Premise Hardware & Support",
        description: "Modern on-premise infrastructure with enterprise hardware and full lifecycle support.",
        icon: "fas fa-server",
        features: [
          "Enterprise-grade hardware",
          "Full lifecycle support",
          "Seamless cloud integration",
          "Predictable costs"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Content and Graphic Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <RichTextBlock
              title="Empowering Higher Education Through Technology"
              subtitle="Trusted by universities serving 600K+ students"
              content={`
                <p>Higher education institutions face unique challenges that require <strong>specialized infrastructure solutions</strong>. From managing seasonal traffic spikes during enrollment to ensuring FERPA compliance for student data, your infrastructure needs are complex and critical.</p>
                
                <h3>Why Universities Choose Logical Front</h3>
                <ul>
                  <li><strong>FERPA-First Design</strong> - Built from the ground up for educational compliance</li>
                  <li><strong>AR-EON Network Access</strong> - Direct connection to Arkansas Educational Network</li>
                  <li><strong>Predictable Budgeting</strong> - No surprise costs, perfect for state funding cycles</li>
                  <li><strong>24/7 Academic Support</strong> - Local team understands university operations</li>
                </ul>
                
                <blockquote>
                  "Logical Front's infrastructure has been instrumental in supporting our 20,000+ students and medical staff with 100% FERPA compliance and exceptional reliability."
                  <br/>- UAMS IT Director
                </blockquote>
                
                <p>Whether you're modernizing legacy systems, expanding virtual desktop infrastructure, or building new digital learning platforms, we have the expertise and solutions to support your institution's growth.</p>
              `}
              width="full"
              variant="article"
              fontSize="default"
              lineHeight="relaxed"
              className="mb-12"
            />
            
            <ImageBlock
              title="Proven Success in Higher Education"
              description="From community colleges to research universities, we've helped institutions across Arkansas modernize their infrastructure while maintaining compliance and reducing costs."
              imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              imageAlt="University campus"
              imagePosition="top"
              width="full"
              aspectRatio="wide"
              badge="600K+ Students Served"
              ctaButton={{ text: "View UAMS Case Study", variant: "primary" }}
            />
          </div>
        </section>
        
        <SolutionsSection {...solutions} />
        <ValuePropsSection {...valueProps} />
        
        {/* About Section - Transforming Higher Education */}
        <section style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e8f3ff 100%)', padding: '8rem 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2.5rem', fontWeight: 700, color: '#1a202c', marginBottom: '1rem'}}>
                Transforming Higher Education IT Infrastructure Across Arkansas
              </h2>
              <p style={{fontSize: '1.2rem', color: '#4a5568', lineHeight: 1.6}}>
                Learn how Logical Front delivers enterprise-grade solutions designed specifically for universities and colleges
              </p>
            </div>
            <div style={{maxWidth: '1200px', margin: '3rem auto 0', background: 'white', padding: '4rem', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '1.1rem', color: '#2d3748', lineHeight: 1.8, textAlign: 'justify', columns: 2, columnGap: '3rem', columnRule: '1px solid #e2e8f0'}}>
                For over a decade, Logical Front has been the trusted infrastructure partner for universities across Arkansas and beyond, 
                delivering specialized solutions that address the unique challenges facing higher education institutions today. From the University of 
                Arkansas for Medical Sciences serving over 20,000 students and medical staff to Arkansas State University Mid-South and Henderson State 
                University, we understand that higher education has specific needs that traditional cloud providers simply cannot address effectively. 
                State funding constraints, FERPA compliance requirements, seasonal usage patterns, and the need for predictable costs require solutions 
                that go far beyond what generic cloud platforms can offer.
                <br /><br />
                Our approach is built around the unique compliance requirements of each institution we serve. Our FERPA-first infrastructure design 
                means that student data privacy isn't an afterthought—it's the foundation of everything we build. Combined with our deep understanding 
                of how universities operate, from residence halls to research labs, we provide the reliable, scalable infrastructure that 
                administrators need to serve their students effectively. The Arkansas AR-EON network advantage means your data stays in-state, 
                reducing latency while ensuring compliance with state data residency requirements. When you work with Logical Front, you're not just 
                getting infrastructure—you're getting a partner who understands higher education.
              </div>
            </div>
          </div>
        </section>

        {/* FERPA & COPPA Compliance Section */}
        <section style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e8f3ff 100%)', padding: '6rem 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
              <h2 style={{fontSize: '2.5rem', fontWeight: 700, color: '#1a202c', marginBottom: '1rem'}}>
                FERPA & COPPA Compliant Solutions
              </h2>
              <p style={{fontSize: '1.2rem', color: '#4a5568', lineHeight: 1.6}}>
                Our infrastructure meets all educational privacy requirements while enabling the flexibility and performance you need.
              </p>
            </div>
            
            <div style={{display: 'block', maxWidth: '900px', margin: '0 auto'}}>
              <div style={{marginBottom: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #125EAD', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem'}}>
                  <i className="fas fa-user-graduate" style={{color: '#125EAD', fontSize: '1.2rem'}}></i>
                  <h3 style={{margin: 0, color: '#125EAD', fontSize: '1rem', fontWeight: 700}}>FERPA COMPLIANCE</h3>
                </div>
                <p style={{margin: 0, color: '#4a5568', lineHeight: 1.6}}>
                  Complete student privacy protection with audit trails, access controls, and data residency guarantees that exceed federal requirements.
                </p>
              </div>
              
              <div style={{marginBottom: '1.5rem', background: 'white', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #4BB74E', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem'}}>
                  <i className="fas fa-child" style={{color: '#4BB74E', fontSize: '1.2rem'}}></i>
                  <h3 style={{margin: 0, color: '#4BB74E', fontSize: '1rem', fontWeight: 700}}>COPPA PROTECTION</h3>
                </div>
                <p style={{margin: 0, color: '#4a5568', lineHeight: 1.6}}>
                  Enhanced protections for users under 13 with parental consent management and restricted data collection protocols.
                </p>
              </div>
              
              <div style={{background: 'white', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid #125EAD', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem'}}>
                  <i className="fas fa-shield-alt" style={{color: '#125EAD', fontSize: '1.2rem'}}></i>
                  <h3 style={{margin: 0, color: '#125EAD', fontSize: '1rem', fontWeight: 700}}>CONTINUOUS MONITORING</h3>
                </div>
                <p style={{margin: 0, color: '#4a5568', lineHeight: 1.6}}>
                  24/7 compliance monitoring with automated alerts and reporting to ensure ongoing adherence to all educational privacy regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default HigherEducationPage;
export { HigherEducationPage };