import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const ServersStoragePage: React.FC = () => {
  const heroData = {
    title: "Servers and Storage\nEnterprise Infrastructure",
    subtitle: "High-performance servers and storage solutions designed for enterprise workloads with scalability, reliability, and performance.",
    stats: [
      { number: "99.9%", label: "Uptime SLA" },
      { number: "NVMe", label: "SSD Performance" },
      { number: "24/7", label: "Support" }
    ],
    primaryCTA: { 
      text: "CONFIGURE NOW", 
      icon: "fas fa-server",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "GET QUOTE", 
      icon: "fas fa-calculator",
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
              Server and Storage Solutions
            </h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px'}}>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #4BB74E'}}>
                <div style={{width: '80px', height: '80px', backgroundColor: '#4BB74E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <i className="fas fa-server" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>Enterprise Servers</h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  High-performance rackmount and blade servers with latest Intel/AMD processors and enterprise-grade reliability.
                </p>
              </div>
              
              <div style={{background: '#f8fafc', padding: '40px', borderRadius: '12px', border: '2px solid #e2e8f0', borderTop: '4px solid #125EAD'}}>
                <div style={{width: '80px', height: '80px', backgroundColor: '#125EAD', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                  <i className="fas fa-database" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>Storage Arrays</h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  All-flash and hybrid storage arrays with advanced data services, deduplication, and high-availability features.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>Infrastructure Benefits</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-rocket" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>High Performance</h3>
                <p style={{opacity: 0.9}}>Optimized for demanding workloads</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServersStoragePage;
export { ServersStoragePage };