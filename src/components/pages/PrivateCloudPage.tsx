import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const PrivateCloudPage: React.FC = () => {
  const heroData = {
    title: "Private Cloud Infrastructure\nYour Cloud, Your Control",
    subtitle: "Enterprise-grade private cloud solutions with 99.9% uptime SLA, Arkansas AR-EON advantage, and complete control over your infrastructure environment.",
    stats: [
      { number: "99.9%", label: "Uptime SLA" },
      { number: "33%", label: "Cost Savings" },
      { number: "24/7", label: "Monitoring" }
    ],
    primaryCTA: { 
      text: "EXPLORE PRIVATE CLOUD", 
      icon: "fas fa-cloud",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "VIEW SUCCESS STORIES", 
      icon: "fas fa-chart-line",
      href: "/case-studies"
    },
    backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Private Cloud Services */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              Comprehensive Private Cloud Services
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px'}}>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#4BB74E', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px'
                }}>
                  <i className="fas fa-server" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Primary Datacenter Services
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  High-performance compute, storage, and networking resources with enterprise-grade hardware and redundant infrastructure.
                </p>
                <a href="/primary-datacenter-services" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Learn More →
                </a>
              </div>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #125EAD'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#125EAD', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px'
                }}>
                  <i className="fas fa-shield" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Backup as a Service
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Automated, secure backup solutions with configurable retention policies and rapid recovery capabilities.
                </p>
                <a href="/backup-as-a-service" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Learn More →
                </a>
              </div>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#4BB74E', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px'
                }}>
                  <i className="fas fa-undo" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Disaster Recovery as a Service
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Complete disaster recovery solutions with tested failover procedures and guaranteed recovery time objectives.
                </p>
                <a href="/disaster-recovery-as-a-service" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Learn More →
                </a>
              </div>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #125EAD'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#125EAD', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px'
                }}>
                  <i className="fas fa-desktop" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Desktop as a Service
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Virtual desktop infrastructure (VDI) solutions for secure, scalable, and centrally managed user environments.
                </p>
                <a href="/desktop-as-a-service" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Learn More →
                </a>
              </div>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#4BB74E', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px'
                }}>
                  <i className="fas fa-database" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Secondary Datacenter Services
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Geographically distributed secondary datacenter for high availability and disaster recovery scenarios.
                </p>
                <a href="/secondary-datacenter-services" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Learn More →
                </a>
              </div>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #125EAD'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#125EAD', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '20px'
                }}>
                  <i className="fas fa-video" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Video Surveillance Storage
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Scalable storage solutions for security camera systems with long-term retention and quick retrieval capabilities.
                </p>
                <a href="/video-surveillance-storage" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Learn More →
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

export default PrivateCloudPage;
export { PrivateCloudPage };