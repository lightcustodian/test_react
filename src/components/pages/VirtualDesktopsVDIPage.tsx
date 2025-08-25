import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const VirtualDesktopsVDIPage: React.FC = () => {
  const heroData = {
    title: "Virtual Desktops (VDI)\nOn-Premise Desktop Virtualization",
    subtitle: "Complete on-premise VDI solutions providing secure, centralized desktop management with local control and performance.",
    stats: [
      { number: "100%", label: "Local Control" },
      { number: "Zero Trust", label: "Security" },
      { number: "Any Device", label: "Access" }
    ],
    primaryCTA: { 
      text: "DEPLOY VDI", 
      icon: "fas fa-desktop",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "VIEW DEMO", 
      icon: "fas fa-play",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              On-Premise VDI Solutions
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px'}}>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <div style={{width: '80px', height: '80px', backgroundColor: '#4BB74E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <i className="fas fa-building" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>Local Infrastructure</h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Complete on-premise VDI infrastructure with hypervisor, connection brokers, and management tools in your datacenter.
                </p>
              </div>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #125EAD'}}>
                <div style={{width: '80px', height: '80px', backgroundColor: '#125EAD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <i className="fas fa-shield-alt" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>Data Sovereignty</h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Keep all data within your premises for compliance requirements and complete control over sensitive information.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>On-Premise VDI Benefits</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-lock" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Complete Control</h3>
                <p style={{opacity: 0.9}}>Full control over your virtual desktop environment</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default VirtualDesktopsVDIPage;
export { VirtualDesktopsVDIPage };