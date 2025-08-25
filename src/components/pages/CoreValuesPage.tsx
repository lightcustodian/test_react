import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const CoreValuesPage: React.FC = () => {
  const heroData = {
    title: "Our Core Values\nPrinciples That Guide Us",
    subtitle: "These five core values define who we are as a company and guide every decision we make in serving our clients, partners, and team members.",
    stats: [
      { number: "5", label: "Core Values" },
      { number: "100%", label: "Team Commitment" },
      { number: "15+", label: "Years of Excellence" }
    ],
    primaryCTA: { 
      text: "OUR MISSION", 
      icon: "fas fa-bullseye",
      href: "/mission-statement"
    },
    secondaryCTA: { 
      text: "JOIN OUR TEAM", 
      icon: "fas fa-users",
      href: "/our-team"
    },
    backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Core Values Section */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              Our Five Core Values
            </h2>
            <div style={{display: 'grid', gap: '50px'}}>
              
              {/* Excellence/Mastery */}
              <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: '30px', alignItems: 'start'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '100px', 
                    height: '100px', 
                    backgroundColor: '#4BB74E', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 15px',
                    fontSize: '2rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    1
                  </div>
                </div>
                <div>
                  <h3 style={{fontSize: '2rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                    Excellence/Mastery
                  </h3>
                  <div style={{fontSize: '1.1rem', marginBottom: '10px', color: '#4BB74E', fontStyle: 'italic'}}>
                    Personal/Company
                  </div>
                  <p style={{color: '#4a5568', lineHeight: 1.7, fontSize: '1.1rem'}}>
                    We are constantly improving as individuals and an organization. These improvements drive everything that we do and are. We train and seek innovative ways to solve problems for our clients and our own organization.
                  </p>
                </div>
              </div>
              
              {/* Relationships */}
              <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: '30px', alignItems: 'start'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '100px', 
                    height: '100px', 
                    backgroundColor: '#125EAD', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 15px',
                    fontSize: '2rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    2
                  </div>
                </div>
                <div>
                  <h3 style={{fontSize: '2rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                    Relationships
                  </h3>
                  <div style={{fontSize: '1.1rem', marginBottom: '10px', color: '#4BB74E', fontStyle: 'italic'}}>
                    Cooperative/Partnerships/Family
                  </div>
                  <p style={{color: '#4a5568', lineHeight: 1.7, fontSize: '1.1rem'}}>
                    Relationships are the core of who we are as a company. In all that we do, we seek to build better and stronger relationships with our own team, our clients, our partners, our families, and our communities. We seek cooperative relationships that create win-win synergies. We are centered on family. We treat our team, our clients, and our partners like family.
                  </p>
                </div>
              </div>
              
              {/* Accountability */}
              <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: '30px', alignItems: 'start'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '100px', 
                    height: '100px', 
                    backgroundColor: '#4BB74E', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 15px',
                    fontSize: '2rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    3
                  </div>
                </div>
                <div>
                  <h3 style={{fontSize: '2rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                    Accountability
                  </h3>
                  <div style={{fontSize: '1.1rem', marginBottom: '10px', color: '#4BB74E', fontStyle: 'italic'}}>
                    Integrity/Trust
                  </div>
                  <p style={{color: '#4a5568', lineHeight: 1.7, fontSize: '1.1rem'}}>
                    We are open and honest. Your best interests are our number one priority. What is measured improves, but what is measured and reported improves dramatically.
                  </p>
                </div>
              </div>
              
              {/* Humble Leadership */}
              <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: '30px', alignItems: 'start'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '100px', 
                    height: '100px', 
                    backgroundColor: '#125EAD', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 15px',
                    fontSize: '2rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    4
                  </div>
                </div>
                <div>
                  <h3 style={{fontSize: '2rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                    Humble Leadership
                  </h3>
                  <div style={{fontSize: '1.1rem', marginBottom: '10px', color: '#4BB74E', fontStyle: 'italic'}}>
                    Leading by Example
                  </div>
                  <p style={{color: '#4a5568', lineHeight: 1.7, fontSize: '1.1rem'}}>
                    We value humble leadership as the most powerful leadership model. The best leaders lead by example without boasting or fanfare. We seek to provide all members of our team an opportunity to lead in whatever capacity they are capable and interested and to increase that capacity as they grow in our organization.
                  </p>
                </div>
              </div>
              
              {/* Profit */}
              <div style={{display: 'grid', gridTemplateColumns: '120px 1fr', gap: '30px', alignItems: 'start'}}>
                <div style={{textAlign: 'center'}}>
                  <div style={{
                    width: '100px', 
                    height: '100px', 
                    backgroundColor: '#4BB74E', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 15px',
                    fontSize: '2rem',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    5
                  </div>
                </div>
                <div>
                  <h3 style={{fontSize: '2rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                    Profit
                  </h3>
                  <div style={{fontSize: '1.1rem', marginBottom: '10px', color: '#4BB74E', fontStyle: 'italic'}}>
                    Value Creation
                  </div>
                  <p style={{color: '#4a5568', lineHeight: 1.7, fontSize: '1.1rem'}}>
                    Profit is the marketplace's judgment on our ability to create value. It is how our company enhances the human health and happiness of our team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values in Action */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Values in Action
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              See how our core values translate into real benefits for our clients and team members
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-trophy" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Continuous Excellence</h3>
                <p style={{opacity: 0.9}}>Always improving our skills and solutions</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-handshake" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Family Partnerships</h3>
                <p style={{opacity: 0.9}}>Treating everyone like family</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-shield-alt" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Integrity First</h3>
                <p style={{opacity: 0.9}}>Open, honest, and trustworthy</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-users" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Empowering Leadership</h3>
                <p style={{opacity: 0.9}}>Growing leaders at every level</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default CoreValuesPage;
export { CoreValuesPage };