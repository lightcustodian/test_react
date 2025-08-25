import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';

const AIAutomationPage: React.FC = () => {
  const heroData = {
    title: "AI/Automation Platforms\nIntelligent Infrastructure",
    subtitle: "Advanced automation and AI solutions to streamline operations, reduce manual overhead, and unlock intelligent insights from your infrastructure and data.",
    stats: [
      { number: "75%", label: "Process Automation" },
      { number: "24/7", label: "AI Monitoring" },
      { number: "50%", label: "Operational Efficiency" }
    ],
    primaryCTA: { 
      text: "EXPLORE AI SOLUTIONS", 
      icon: "fas fa-robot",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "AI CONSULTATION", 
      icon: "fas fa-calendar-check",
      href: "/contact"
    },
    backgroundImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* AI/Automation Services */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>
              AI & Automation Solutions
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
                  AI Infrastructure as a Service
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Complete AI-ready infrastructure with GPU compute, machine learning platforms, and model deployment capabilities.
                </p>
                <a href="/ai-infrastructure-as-a-service" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-flask" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  AI Testing Environments
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Isolated testing environments for AI model development, training, and validation with secure data handling.
                </p>
                <a href="/ai-testing-environments" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-graduation-cap" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  Educational AI Platform
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  AI platforms designed for educational institutions with privacy controls, student data protection, and learning analytics.
                </p>
                <a href="/educational-ai-platform" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
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
                  <i className="fas fa-tachometer-alt" style={{color: 'white', fontSize: '2rem'}}></i>
                </div>
                <h3 style={{fontSize: '1.5rem', fontWeight: 600, marginBottom: '15px', color: '#125EAD'}}>
                  AI Operations Center
                </h3>
                <p style={{color: '#4a5568', lineHeight: 1.6, marginBottom: '20px'}}>
                  Centralized AI operations management with monitoring, model lifecycle management, and automated deployment pipelines.
                </p>
                <a href="/ai-operations-center" style={{color: '#4BB74E', textDecoration: 'none', fontWeight: 600}}>
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Benefits */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              AI & Automation Benefits
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Transform your operations with intelligent automation and AI-powered insights
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-brain" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Intelligent Insights</h3>
                <p style={{opacity: 0.9}}>Data-driven decision making with AI analytics</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-sync-alt" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Process Automation</h3>
                <p style={{opacity: 0.9}}>Reduce manual tasks and human error</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-chart-line" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Predictive Analytics</h3>
                <p style={{opacity: 0.9}}>Anticipate issues before they occur</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-dollar-sign" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Cost Optimization</h3>
                <p style={{opacity: 0.9}}>Optimize resource usage and reduce waste</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default AIAutomationPage;
export { AIAutomationPage };