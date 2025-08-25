import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const BusinessPage: React.FC = () => {
  const heroData = {
    title: "Business Solutions\nEmpowering Your Organization",
    subtitle: "Comprehensive IT infrastructure solutions designed to help businesses of all sizes optimize operations, enhance security, and drive growth through technology.",
    stats: [
      { number: "500+", label: "Business Clients" },
      { number: "99.9%", label: "Uptime Guarantee" },
      { number: "24/7", label: "Support Coverage" }
    ],
    primaryCTA: { 
      text: "EXPLORE SOLUTIONS", 
      icon: "fas fa-briefcase",
      href: "/solutions"
    },
    secondaryCTA: { 
      text: "GET CONSULTATION", 
      icon: "fas fa-calendar-check",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Business Solutions Overview */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              Business IT Solutions
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
                  <i className="fas fa-cloud" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Cloud Infrastructure
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Scalable cloud solutions that grow with your business, from private cloud to hybrid deployments.
                </p>
                <a href="/private-cloud" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  Cybersecurity
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Comprehensive security solutions to protect your business from modern cyber threats and ensure compliance.
                </p>
                <a href="/it-security" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-cogs" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Managed Services
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Proactive IT management and support services that keep your business running smoothly 24/7.
                </p>
                <a href="/contact" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-database" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Data Management
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Secure data storage, backup, and recovery solutions that protect your most valuable business assets.
                </p>
                <a href="/data-protection" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Business Benefits */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Why Choose Our Business Solutions
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Transform your business operations with our comprehensive IT infrastructure and support services
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-dollar-sign" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Cost Reduction</h3>
                <p style={{opacity: 0.9}}>Lower IT costs while improving performance</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-chart-line" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Business Growth</h3>
                <p style={{opacity: 0.9}}>Scalable solutions that grow with your business</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-headset" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>24/7 Support</h3>
                <p style={{opacity: 0.9}}>Round-the-clock technical support</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-lock" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Enhanced Security</h3>
                <p style={{opacity: 0.9}}>Enterprise-grade security protection</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessPage;
export { BusinessPage };