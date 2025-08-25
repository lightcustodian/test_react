import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const MissionStatementPage: React.FC = () => {
  const heroData = {
    title: "Our Mission\nDriving Value Through Innovation",
    subtitle: "We are committed to building strong, lasting relationships with our clients, partners, and employees, rooted in trust, integrity, and family values.",
    stats: [
      { number: "15+", label: "Years of Service" },
      { number: "500+", label: "Client Relationships" },
      { number: "100%", label: "Family Values" }
    ],
    primaryCTA: { 
      text: "OUR VALUES", 
      icon: "fas fa-heart",
      href: "/values"
    },
    secondaryCTA: { 
      text: "CONTACT US", 
      icon: "fas fa-phone",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Mission Statement Section */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', marginBottom: '60px'}}>
              <h2 style={{fontSize: '2.5rem', color: '#125EAD', fontWeight: 700, marginBottom: '2rem'}}>
                Our Mission Statement
              </h2>
              <div style={{
                background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)',
                padding: '40px',
                borderRadius: '12px',
                color: 'white',
                fontSize: '1.2rem',
                lineHeight: 1.8,
                textAlign: 'left',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <p style={{margin: 0}}>
                  We are committed to building strong, lasting relationships with our clients, partners, and employees, rooted in trust, integrity, and family values. We deliver personalized and innovative cloud, datacenter, and AI solutions, constantly evolving to meet the challenges of today and the opportunities of tomorrow. Our mission is to drive value, health, and happiness for both our team and our customers by delivering cutting-edge technology solutions that enhance human potential and create win-win synergies.
                </p>
              </div>
            </div>
            
            {/* Mission Pillars */}
            <h3 style={{fontSize: '2rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 600}}>
              How We Fulfill Our Mission
            </h3>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px'}}>
              
              <div style={{textAlign: 'center', padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '2px solid #e2e8f0'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#4BB74E', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px'
                }}>
                  <i className="fas fa-handshake" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h4 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Strong Relationships
                </h4>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Building lasting partnerships with clients, partners, and employees based on trust, integrity, and family values.
                </p>
              </div>
              
              <div style={{textAlign: 'center', padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '2px solid #e2e8f0'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#125EAD', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px'
                }}>
                  <i className="fas fa-lightbulb" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h4 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Innovative Solutions
                </h4>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Delivering personalized cloud, datacenter, and AI solutions that constantly evolve to meet emerging challenges.
                </p>
              </div>
              
              <div style={{textAlign: 'center', padding: '30px', background: '#f8fafc', borderRadius: '12px', border: '2px solid #e2e8f0'}}>
                <div style={{
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: '#4BB74E', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 20px'
                }}>
                  <i className="fas fa-users" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h4 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Human Potential
                </h4>
                <p style={{color: '#4a5568', lineHeight: 1.6}}>
                  Enhancing human potential by driving value, health, and happiness for our team and customers through technology.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0', textAlign: 'center'}}>
          <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Experience Our Mission in Action
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Ready to see how our mission-driven approach can transform your infrastructure? Let's build a lasting partnership together.
            </p>
            <div style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a 
                href="/values"
                style={{
                  padding: '16px 32px', 
                  fontSize: '1.1rem',
                  background: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  border: '2px solid white',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = '#125EAD';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.color = 'white';
                }}
              >
                <i className="fas fa-heart" style={{marginRight: '10px'}}></i>
                Our Core Values
              </a>
              <a 
                href="/contact"
                style={{
                  padding: '16px 32px', 
                  fontSize: '1.1rem',
                  background: 'white',
                  color: '#125EAD',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontWeight: 600,
                  border: '2px solid white',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.3)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <i className="fas fa-phone" style={{marginRight: '10px'}}></i>
                Contact Us Today
              </a>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default MissionStatementPage;
export { MissionStatementPage };