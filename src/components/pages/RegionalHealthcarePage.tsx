import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';
import { ServiceGrid } from '../blocks/ServiceGrid';

const RegionalHealthcarePage: React.FC = () => {
  const heroData = {
    title: "Healthcare IT Infrastructure\nThat Heals",
    subtitle: "HIPAA-compliant, secure, and reliable infrastructure solutions designed specifically for regional healthcare providers, hospitals, and medical practices.",
    stats: [
      { number: "99.9%", label: "Uptime SLA" },
      { number: "100%", label: "HIPAA Compliant" },
      { number: "24/7", label: "Healthcare Support" }
    ],
    primaryCTA: { 
      text: "SCHEDULE HEALTHCARE CONSULTATION", 
      icon: "fas fa-calendar-check",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "VIEW UAMS SUCCESS", 
      icon: "fas fa-hospital",
      href: "/case-study-uams"
    },
    backgroundImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Healthcare Content and Graphic Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <RichTextBlock
              title="HIPAA-Compliant Infrastructure for Healthcare Excellence"
              subtitle="Secure, reliable, and compliant solutions for patient care"
              content={`
                <p>Regional healthcare providers face unique challenges in delivering quality patient care while maintaining strict compliance with healthcare regulations. Our <strong>HIPAA-compliant infrastructure solutions</strong> are designed specifically for hospitals, medical practices, and healthcare networks.</p>
                
                <h3>Healthcare-Focused Features</h3>
                <ul>
                  <li><strong>HIPAA Compliance</strong> - Built-in safeguards for patient data protection</li>
                  <li><strong>High Availability</strong> - 99.9% uptime SLA for critical healthcare systems</li>
                  <li><strong>Disaster Recovery</strong> - Comprehensive backup and recovery solutions</li>
                  <li><strong>24/7 Healthcare Support</strong> - Specialized support team with healthcare expertise</li>
                </ul>
                
                <blockquote>
                  "Our infrastructure supports over 20,000 medical staff and students at UAMS with 100% HIPAA compliance and exceptional reliability."
                  <br/>- Healthcare IT Director
                </blockquote>
                
                <p>From electronic health records to medical imaging systems, we provide the secure, scalable infrastructure that enables healthcare professionals to focus on what matters most – patient care.</p>
              `}
              width="full"
              variant="article"
              fontSize="default"
              lineHeight="relaxed"
              className="mb-12"
            />
            
            <ImageBlock
              title="Trusted by Healthcare Leaders"
              description="From small clinics to major medical centers, healthcare organizations across Utah trust our HIPAA-compliant infrastructure solutions."
              imageUrl="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
              imageAlt="Healthcare technology infrastructure"
              imagePosition="top"
              width="full"
              aspectRatio="wide"
              badge="HIPAA Compliant"
              ctaButton={{ text: "View UAMS Success", variant: "primary" }}
            />
          </div>
        </section>
        
        {/* Healthcare Specific Benefits Section - 2x2 Grid */}
        <ServiceGrid
          title="Healthcare-Grade Infrastructure"
          subtitle="HIPAA-compliant solutions designed for medical environments"
          items={[
            {
              title: "HIPAA Compliance",
              description: "Full HIPAA compliance with encrypted storage, secure data transmission, and comprehensive audit trails to protect patient health information.",
              icon: "fas fa-shield-virus"
            },
            {
              title: "Mission-Critical Reliability",
              description: "99.9% uptime SLA with redundant systems and failover protection to ensure your critical healthcare applications are always available.",
              icon: "fas fa-heartbeat"
            },
            {
              title: "EHR Integration",
              description: "Seamless integration with Epic, Cerner, AllScripts, and other Electronic Health Record systems with optimized performance.",
              icon: "fas fa-database"
            },
            {
              title: "Healthcare Expertise",
              description: "Our team understands healthcare workflows and regulatory requirements, providing specialized support for medical environments.",
              icon: "fas fa-user-md"
            }
          ]}
          columns={2}
          variant="featured"
        />
        
        {/* Healthcare Technology Stack */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Healthcare Technology Integration
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Supporting the full spectrum of healthcare technology systems and applications
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-file-medical-alt" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Electronic Health Records</h3>
                <p style={{opacity: 0.9}}>Epic, Cerner, AllScripts, NextGen</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-x-ray" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Medical Imaging</h3>
                <p style={{opacity: 0.9}}>PACS, DICOM, Radiology Systems</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-hospital-user" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Patient Management</h3>
                <p style={{opacity: 0.9}}>Scheduling, Billing, Registration</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-pills" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Pharmacy Systems</h3>
                <p style={{opacity: 0.9}}>e-Prescribing, Drug Interaction Checks</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default RegionalHealthcarePage;
export { RegionalHealthcarePage };