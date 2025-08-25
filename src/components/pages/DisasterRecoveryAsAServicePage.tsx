import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const DisasterRecoveryAsAServicePage: React.FC = () => {
  const heroData = {
    title: "Disaster Recovery as a Service\nBusiness Continuity Assurance",
    subtitle: "Comprehensive disaster recovery solutions that minimize downtime and data loss with automated failover and rapid recovery capabilities.",
    stats: [
      { number: "<1 Hour", label: "Recovery Time" },
      { number: "99.99%", label: "Data Recovery" },
      { number: "24/7", label: "Monitoring" }
    ],
    primaryCTA: { 
      text: "PROTECT NOW", 
      icon: "fas fa-undo",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "DR ASSESSMENT", 
      icon: "fas fa-clipboard-check",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
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
              Disaster Recovery Service Components
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
                  <i className="fas fa-file-contract" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  DR Planning & Strategy
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Comprehensive disaster recovery planning with customized strategies tailored to your business requirements and RTO/RPO objectives.
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
                  <i className="fas fa-copy" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Data Replication
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Real-time and near real-time data replication to secure recovery sites with configurable synchronization intervals.
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
                  <i className="fas fa-play-circle" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Automated Failover
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Intelligent automated failover systems that activate recovery procedures when disasters are detected, minimizing manual intervention.
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
                  <i className="fas fa-vials" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Regular DR Testing
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Scheduled disaster recovery testing and validation to ensure procedures work correctly and meet recovery time objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Disaster Recovery Benefits
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Protect your business with enterprise-grade disaster recovery that ensures rapid recovery and minimal data loss
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-stopwatch" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Rapid Recovery</h3>
                <p style={{opacity: 0.9}}>Sub-hour recovery times minimize impact</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-chart-line" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Business Continuity</h3>
                <p style={{opacity: 0.9}}>Keep operations running during disasters</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-check-double" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Proven Solutions</h3>
                <p style={{opacity: 0.9}}>Tested and validated recovery procedures</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-hands-helping" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Expert Support</h3>
                <p style={{opacity: 0.9}}>24/7 DR specialists ready to help</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default DisasterRecoveryAsAServicePage;
export { DisasterRecoveryAsAServicePage };