import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const PrimaryDatacenterServicesPage: React.FC = () => {
  const heroData = {
    title: "Primary Datacenter Services\nCore Infrastructure Solutions",
    subtitle: "Comprehensive datacenter services providing reliable, scalable, and secure infrastructure as the foundation of your business operations.",
    stats: [
      { number: "99.99%", label: "Uptime Guarantee" },
      { number: "24/7", label: "Monitoring" },
      { number: "Enterprise", label: "Grade Security" }
    ],
    primaryCTA: { 
      text: "GET STARTED", 
      icon: "fas fa-server",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "VIEW PRICING", 
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
        
        {/* Service Overview */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              Primary Datacenter Services
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
                  Compute Resources
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  High-performance virtual machines and dedicated servers with flexible resource allocation and instant scaling capabilities.
                </p>
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
                  <i className="fas fa-database" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Storage Solutions
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Enterprise-grade storage with SSD performance, automated tiering, and data deduplication for optimal efficiency.
                </p>
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
                  Network Infrastructure
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Redundant network connectivity with load balancing, firewalls, and advanced security monitoring.
                </p>
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
                  Security & Compliance
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Multi-layered security with encryption, access controls, compliance monitoring, and regular security audits.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Why Choose Our Primary Datacenter Services
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Experience enterprise-grade infrastructure with the reliability and performance your business demands
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-rocket" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>High Performance</h3>
                <p style={{opacity: 0.9}}>Latest generation hardware for optimal performance</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-expand-arrows-alt" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Scalability</h3>
                <p style={{opacity: 0.9}}>Scale resources up or down as needed</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-check-circle" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Reliability</h3>
                <p style={{opacity: 0.9}}>99.99% uptime with redundant systems</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-headset" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>24/7 Support</h3>
                <p style={{opacity: 0.9}}>Round-the-clock expert technical support</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrimaryDatacenterServicesPage;
export { PrimaryDatacenterServicesPage };