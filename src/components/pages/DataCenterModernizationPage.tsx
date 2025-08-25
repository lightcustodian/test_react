import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const DataCenterModernizationPage: React.FC = () => {
  const heroData = {
    title: "Data Center Modernization\nTransform Your Infrastructure",
    subtitle: "Comprehensive datacenter modernization services that upgrade your infrastructure with latest technologies, improved efficiency, and enhanced performance.",
    stats: [
      { number: "50%", label: "Energy Savings" },
      { number: "99.99%", label: "Uptime Target" },
      { number: "3x", label: "Performance Boost" }
    ],
    primaryCTA: { 
      text: "START ASSESSMENT", 
      icon: "fas fa-warehouse",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "VIEW SERVICES", 
      icon: "fas fa-list",
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
        
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              Data Center Modernization Services
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px'}}>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <div style={{width: '80px', height: '80px', backgroundColor: '#4BB74E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <i className="fas fa-microchip" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>Hardware Refresh</h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Latest generation servers, storage, and networking equipment for maximum performance and efficiency.
                </p>
              </div>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #125EAD'}}>
                <div style={{width: '80px', height: '80px', backgroundColor: '#125EAD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <i className="fas fa-leaf" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>Energy Efficiency</h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Green datacenter solutions with advanced cooling, power management, and sustainable technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>Modernization Benefits</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-bolt" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Enhanced Performance</h3>
                <p style={{opacity: 0.9}}>3x faster processing and response times</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-dollar-sign" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Cost Reduction</h3>
                <p style={{opacity: 0.9}}>Lower operational and energy costs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default DataCenterModernizationPage;
export { DataCenterModernizationPage };