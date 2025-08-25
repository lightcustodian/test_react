import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const VideoSurveillanceStoragePage: React.FC = () => {
  const heroData = {
    title: "Video Surveillance Storage\nSecure Video Management",
    subtitle: "Scalable, secure storage solutions for video surveillance systems with intelligent archiving, retrieval, and compliance capabilities.",
    stats: [
      { number: "Petabyte", label: "Scale Storage" },
      { number: "30+ Days", label: "Retention" },
      { number: "AI-Powered", label: "Analytics" }
    ],
    primaryCTA: { 
      text: "GET STARTED", 
      icon: "fas fa-video",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "STORAGE CALCULATOR", 
      icon: "fas fa-calculator",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
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
              Video Surveillance Storage Solutions
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
                  <i className="fas fa-hdd" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Massive Storage Capacity
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Petabyte-scale storage infrastructure designed specifically for high-volume video data with optimal compression and archiving.
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
                  <i className="fas fa-search" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Intelligent Search & Retrieval
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  AI-powered video analytics with facial recognition, object detection, and smart search capabilities for rapid footage retrieval.
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
                  <i className="fas fa-balance-scale" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Compliance & Legal Support
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Automated retention policies, chain of custody tracking, and compliance reporting for legal and regulatory requirements.
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
                  <i className="fas fa-lock" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Secure Access Control
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Role-based access controls, encryption at rest and in transit, and audit trails for all video access and operations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Video Surveillance Storage Advantages
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Advanced video storage solutions that provide security, compliance, and intelligent analytics capabilities
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-expand" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Unlimited Scale</h3>
                <p style={{opacity: 0.9}}>Grow storage as surveillance needs expand</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-brain" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Smart Analytics</h3>
                <p style={{opacity: 0.9}}>AI-powered video intelligence and insights</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-gavel" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Legal Ready</h3>
                <p style={{opacity: 0.9}}>Compliant storage for legal proceedings</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-dollar-sign" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Cost Efficient</h3>
                <p style={{opacity: 0.9}}>Optimized storage costs with tiering</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default VideoSurveillanceStoragePage;
export { VideoSurveillanceStoragePage };