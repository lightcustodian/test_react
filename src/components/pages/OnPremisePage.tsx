import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const OnPremisePage: React.FC = () => {
  const heroData = {
    title: "On-Premise Solutions\nYour Infrastructure, Your Control",
    subtitle: "Complete on-premise infrastructure with professional installation, configuration, and ongoing support for organizations that need direct control over their technology environment.",
    stats: [
      { number: "100%", label: "Control & Ownership" },
      { number: "24/7", label: "Monitoring & Support" },
      { number: "99.9%", label: "Uptime SLA" }
    ],
    primaryCTA: { 
      text: "EXPLORE ON-PREMISE SOLUTIONS", 
      icon: "fas fa-server",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "SCHEDULE CONSULTATION", 
      icon: "fas fa-calendar-check",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* On-Premise Services */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              Complete On-Premise Solutions
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
                  <i className="fas fa-warehouse" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Data Center Modernization
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Transform aging infrastructure with modern, efficient data center solutions designed for current and future needs.
                </p>
                <a href="/data-center-modernization" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-server" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Servers and Storage
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Enterprise-grade servers and storage solutions tailored to your performance, capacity, and reliability requirements.
                </p>
                <a href="/servers-storage" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-desktop" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Virtual Desktops
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  On-premise VDI solutions providing secure, centrally managed desktop environments for your users.
                </p>
                <a href="/virtual-desktops-vdi" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-shield-alt" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Data Protection
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Comprehensive backup, recovery, and data protection solutions to safeguard your critical business information.
                </p>
                <a href="/data-protection" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-network-wired" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Networking
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  High-performance networking infrastructure including switches, routers, firewalls, and wireless solutions.
                </p>
                <a href="/networking" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-lock" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Security
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Multi-layered security solutions protecting your infrastructure, data, and users from evolving threats.
                </p>
                <a href="/it-security" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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

export default OnPremisePage;
export { OnPremisePage };