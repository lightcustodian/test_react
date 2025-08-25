import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const MicrosoftAzurePage: React.FC = () => {
  const heroData = {
    title: "Microsoft Azure Integration\nHybrid Cloud Excellence",
    subtitle: "Seamless Azure integration for hybrid cloud environments with enterprise-grade security, compliance frameworks, and expert Azure administration.",
    stats: [
      { number: "100%", label: "Azure Certified" },
      { number: "24/7", label: "Azure Support" },
      { number: "99.9%", label: "Hybrid Uptime" }
    ],
    primaryCTA: { 
      text: "EXPLORE AZURE SOLUTIONS", 
      icon: "fas fa-cloud-upload-alt",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "AZURE CONSULTATION", 
      icon: "fas fa-calendar-check",
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
        
        {/* Azure Services */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              Microsoft Azure Integration Services
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
                  <i className="fas fa-users" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Azure Active Directory
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Seamless integration with Azure AD for unified identity management, single sign-on, and multi-factor authentication across your hybrid environment.
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
                  <i className="fas fa-cloud-download-alt" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Hybrid Cloud Setup
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Expert design and implementation of hybrid cloud architectures connecting your on-premise infrastructure with Azure services.
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
                  <i className="fas fa-shield-alt" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Enterprise Security
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Advanced security features including Azure Security Center, conditional access, and threat protection for your hybrid environment.
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
                  <i className="fas fa-clipboard-check" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Compliance Frameworks
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Support for HIPAA, FERPA, SOC 2, and other compliance requirements through Azure's comprehensive compliance offerings.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Azure Benefits */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Azure Integration Benefits
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Leverage the power of Microsoft Azure while maintaining control of your on-premise infrastructure
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-chart-line" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Scalability</h3>
                <p style={{opacity: 0.9}}>Scale resources up or down based on demand</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-dollar-sign" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Cost Optimization</h3>
                <p style={{opacity: 0.9}}>Pay only for what you use with Azure's flexible pricing</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-sync-alt" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Backup & Recovery</h3>
                <p style={{opacity: 0.9}}>Azure-based backup and disaster recovery solutions</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-cogs" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Automation</h3>
                <p style={{opacity: 0.9}}>Automated management and monitoring tools</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default MicrosoftAzurePage;
export { MicrosoftAzurePage };