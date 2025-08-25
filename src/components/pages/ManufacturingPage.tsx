import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const ManufacturingPage: React.FC = () => {
  const heroData = {
    title: "Manufacturing IT Solutions\nThat Drive Production",
    subtitle: "Robust, scalable infrastructure solutions designed for manufacturing environments with industrial-grade reliability, security, and performance to support your operations.",
    stats: [
      { number: "$400K", label: "Annual Savings" },
      { number: "99.9%", label: "Uptime SLA" },
      { number: "24/7", label: "Industrial Support" }
    ],
    primaryCTA: { 
      text: "SCHEDULE MANUFACTURING CONSULTATION", 
      icon: "fas fa-calendar-check",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "VIEW VENOCO SUCCESS", 
      icon: "fas fa-industry",
      href: "/case-study-venoco"
    },
    backgroundImage: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Manufacturing Specific Benefits Section */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              Industrial-Strength IT Infrastructure
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
                  <i className="fas fa-cogs" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Process Automation
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Integrate with SCADA systems, PLCs, and manufacturing execution systems (MES) for seamless production workflow automation.
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
                  Cybersecurity
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Industrial cybersecurity solutions protecting against threats to operational technology (OT) and information technology (IT) environments.
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
                  <i className="fas fa-chart-line" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Production Analytics
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Real-time production monitoring and analytics to optimize efficiency, reduce downtime, and improve overall equipment effectiveness (OEE).
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
                  <i className="fas fa-sync-alt" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Supply Chain Integration
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Connect with suppliers, distributors, and logistics partners through secure EDI and API integrations for streamlined operations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Manufacturing Technology Stack */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Manufacturing Technology Integration
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Supporting the complete manufacturing technology ecosystem
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-sitemap" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>ERP Systems</h3>
                <p style={{opacity: 0.9}}>SAP, Oracle, Microsoft Dynamics, NetSuite</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-microchip" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Industrial Control</h3>
                <p style={{opacity: 0.9}}>SCADA, PLC, HMI, DCS Systems</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-warehouse" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Warehouse Management</h3>
                <p style={{opacity: 0.9}}>WMS, Inventory, RFID Tracking</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-robot" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>IoT & Industry 4.0</h3>
                <p style={{opacity: 0.9}}>Sensor Networks, Predictive Maintenance</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ManufacturingPage;
export { ManufacturingPage };