import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const SecondaryDatacenterServicesPage: React.FC = () => {
  const heroData = {
    title: "Secondary Datacenter Services\nRedundant Infrastructure",
    subtitle: "Geographic redundancy and failover capabilities that ensure business continuity with secondary datacenter infrastructure.",
    stats: [
      { number: "99.95%", label: "Availability" },
      { number: "<5 Min", label: "Failover Time" },
      { number: "Geographic", label: "Redundancy" }
    ],
    primaryCTA: { 
      text: "LEARN MORE", 
      icon: "fas fa-database",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "GET QUOTE", 
      icon: "fas fa-calculator",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
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
              Secondary Datacenter Capabilities
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
                  <i className="fas fa-sync-alt" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Real-time Replication
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Continuous data synchronization between primary and secondary datacenters with minimal latency.
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
                  <i className="fas fa-exchange-alt" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Automatic Failover
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Seamless automatic failover to secondary datacenter in case of primary site failure or maintenance.
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
                  <i className="fas fa-globe-americas" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Geographic Diversity
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Secondary datacenter located in a different geographic region to protect against regional disasters.
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
                  <i className="fas fa-balance-scale" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Load Balancing
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Intelligent load distribution between primary and secondary sites for optimal performance and resource utilization.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Why Secondary Datacenter Services Matter
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Ensure business continuity with geographically diverse infrastructure and automatic failover capabilities
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-shield-alt" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Business Continuity</h3>
                <p style={{opacity: 0.9}}>Uninterrupted operations during outages</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-clock" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Minimal Downtime</h3>
                <p style={{opacity: 0.9}}>Fast failover reduces service interruption</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-mountain" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Disaster Resilience</h3>
                <p style={{opacity: 0.9}}>Protection against regional disasters</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-cogs" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Automated Management</h3>
                <p style={{opacity: 0.9}}>Hands-off failover and recovery</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default SecondaryDatacenterServicesPage;
export { SecondaryDatacenterServicesPage };