"use client"

import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { SolutionsSection } from '../blocks/SolutionsSection';
import { TestimonialSection } from '../blocks/TestimonialSection';
import { ValuePropsSection } from '../blocks/ValuePropsSection';
import { Button } from '../items/Button';

const HomePage: React.FC = () => {
  const heroData = {
    title: "Tailored Infrastructure Solutions\nThat Put You in Control",
    subtitle: "Get enterprise-grade performance at 33% less cost than public cloud with predictable pricing and zero vendor lock-in.",
    stats: [
      { number: "50%", label: "Cost Savings vs Cloud" },
      { number: "600K+", label: "Users Supported" },
      { number: "99.9%", label: "Uptime SLA" }
    ],
    primaryCTA: { 
      text: "CALCULATE YOUR CLOUD SAVINGS", 
      icon: "fas fa-calculator",
      href: "/#calculator"
    },
    secondaryCTA: { 
      text: "LEARN MORE", 
      icon: "fas fa-info-circle",
      href: "/solutions"
    },
    backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  const solutions = {
    title: "Enterprise Infrastructure Solutions",
    subtitle: "Comprehensive solutions tailored to your organization's unique needs",
    services: [
      {
        title: "Private Cloud Infrastructure",
        description: "Enterprise-grade private cloud with 99.9% uptime SLA and Arkansas AR-EON advantage.",
        icon: "fas fa-cloud",
        features: [
          "99.9% uptime SLA with penalties",
          "Arkansas AR-EON network advantage",
          "24/7 monitoring and support",
          "Disaster recovery included"
        ]
      },
      {
        title: "On-Premise Hardware & Support",
        description: "Complete on-premise infrastructure with professional installation, configuration, and ongoing support.",
        icon: "fas fa-server",
        features: [
          "Custom hardware solutions",
          "Professional installation",
          "24/7 monitoring & support",
          "Maintenance & upgrades"
        ]
      },
      {
        title: "Microsoft Azure Integrations",
        description: "Seamless Azure integration for hybrid cloud environments with enterprise-grade security and compliance.",
        icon: "fas fa-cloud-upload-alt",
        features: [
          "Azure AD integration",
          "Hybrid cloud setup",
          "Enterprise security",
          "Compliance frameworks"
        ]
      },
      {
        title: "AI/Automation Platforms",
        description: "Advanced automation and AI solutions to streamline operations and reduce manual overhead.",
        icon: "fas fa-robot",
        features: [
          "Process automation",
          "AI-powered insights",
          "Workflow optimization",
          "Cost reduction"
        ]
      }
    ]
  };

  const testimonials = {
    title: "Real Results from Real Customers",
    subtitle: "Join hundreds of organizations that have transformed their infrastructure with Logical Front",
    testimonials: [
      {
        organization: "UAMS Healthcare",
        quote: "Logical Front's VDI solution supports our 20,000+ users with remarkable performance and reliability.",
        author: "IT Director",
        role: ""
      },
      {
        organization: "Glen Rose ISD",
        quote: "Cost-effective infrastructure that scales with our growing student population.",
        author: "Technology Coordinator",
        role: ""
      },
      {
        organization: "Regional Hospital",
        quote: "HIPAA-compliant infrastructure with 99.9% uptime for our critical healthcare applications.",
        author: "CIO",
        role: ""
      }
    ]
  };

  const valueProps = {
    title: "Why Enterprise Leaders Choose Logical Front",
    values: [
      {
        title: "Proven Reliability",
        description: "99.9% uptime SLA with proactive monitoring and rapid response times.",
        icon: "fas fa-shield-alt"
      },
      {
        title: "Cost Predictability",
        description: "Transparent pricing with no hidden fees or surprise charges.",
        icon: "fas fa-dollar-sign"
      },
      {
        title: "Expert Support",
        description: "24/7 access to infrastructure experts who know your environment.",
        icon: "fas fa-headset"
      },
      {
        title: "Scalable Solutions",
        description: "Infrastructure that grows seamlessly with your organization.",
        icon: "fas fa-chart-line"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        <SolutionsSection {...solutions} />
        <TestimonialSection {...testimonials} />
        <ValuePropsSection {...valueProps} />
        
        {/* ROI Calculator Section */}
        <section id="calculator" style={{background: '#125EAD', color: 'white', padding: '80px 0', textAlign: 'center'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700}}>Calculate Your Infrastructure Savings</h2>
            <p style={{fontSize: '1.2rem', marginBottom: '40px'}}>See how much you could save by switching to Logical Front's infrastructure solutions</p>
            <div style={{maxWidth: '600px', margin: '0 auto', background: 'rgba(255,255,255,0.1)', padding: '40px', borderRadius: '12px', backdropFilter: 'blur(10px)'}}>
              <div style={{marginBottom: '25px', textAlign: 'left'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 500}}>Industry</label>
                <select id="industry" style={{width: '100%', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '16px', color: '#333', backgroundColor: 'white'}}>
                  <option value="">Select your industry</option>
                  <option value="education">Higher Education</option>
                  <option value="k12">K-12 Schools</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="government">Government</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div style={{marginBottom: '25px', textAlign: 'left'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 500}}>Current Monthly IT Budget</label>
                <input type="number" id="budget" placeholder="Enter your monthly budget" style={{width: '100%', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '16px', color: '#333', backgroundColor: 'white'}} />
              </div>
              <div style={{marginBottom: '25px', textAlign: 'left'}}>
                <label style={{display: 'block', marginBottom: '8px', fontWeight: 500}}>Number of Users</label>
                <input type="number" id="users" placeholder="Enter number of users" style={{width: '100%', padding: '12px', border: 'none', borderRadius: '6px', fontSize: '16px', color: '#333', backgroundColor: 'white'}} />
              </div>
              <div 
                onClick={() => {
                  const industry = (document.getElementById('industry') as HTMLSelectElement)?.value;
                  const budget = parseFloat((document.getElementById('budget') as HTMLInputElement)?.value);
                  const users = parseFloat((document.getElementById('users') as HTMLInputElement)?.value);
                  
                  if (!budget || !users) {
                    alert('Please fill in all fields');
                    return;
                  }
                  
                  let savingsRate = 0.33;
                  if (industry === 'education') savingsRate = 0.35;
                  if (industry === 'government') savingsRate = 0.30;
                  
                  const monthlySavings = Math.round(budget * savingsRate);
                  const annualSavings = monthlySavings * 12;
                  
                  const monthlyEl = document.getElementById('monthly-savings');
                  const annualEl = document.getElementById('annual-savings');
                  const resultsEl = document.getElementById('roi-results');
                  
                  if (monthlyEl) monthlyEl.textContent = '$' + monthlySavings.toLocaleString();
                  if (annualEl) annualEl.textContent = '$' + annualSavings.toLocaleString();
                  if (resultsEl) resultsEl.style.display = 'block';
                }} 
                style={{display: 'inline-block'}}
              >
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  className="transition-button" 
                  style={{
                    padding: '1rem 2.5rem', 
                    fontSize: '1.1rem',
                    background: 'linear-gradient(135deg, #4BB74E 0%, #4BB74E 50%, #125EAD 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 600,
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }} 
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)'; 
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(18, 94, 173, 0.3)';
                  }} 
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  Calculate My Savings
                </a>
              </div>
              
              <div id="roi-results" style={{marginTop: '30px', padding: '25px', background: 'rgba(255,255,255,0.2)', borderRadius: '8px', display: 'none'}}>
                <h3>Your Potential Savings</h3>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                  <div>
                    <h4>Monthly Savings</h4>
                    <div id="monthly-savings" style={{fontSize: '2rem', fontWeight: 'bold', color: '#4BB74E'}}>$0</div>
                  </div>
                  <div>
                    <h4>Annual Savings</h4>
                    <div id="annual-savings" style={{fontSize: '2rem', fontWeight: 'bold', color: '#4BB74E'}}>$0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Our Customers Say Section */}
        <section style={{background: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#125EAD', fontWeight: 700}}>What Our Customers Say</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px'}}>
              
              <div 
                className="hover-card" 
                style={{
                  background: 'white', 
                  color: '#333', 
                  padding: '40px', 
                  borderRadius: '12px', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                  transition: 'all 0.3s ease', 
                  cursor: 'pointer'
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                  const circle = e.currentTarget.querySelector('.avatar-circle') as HTMLElement;
                  if (circle) circle.style.backgroundColor = '#125EAD';
                }} 
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  const circle = e.currentTarget.querySelector('.avatar-circle') as HTMLElement;
                  if (circle) circle.style.backgroundColor = '#4BB74E';
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                  <div 
                    className="avatar-circle" 
                    style={{
                      width: '60px', 
                      height: '60px', 
                      backgroundColor: '#4BB74E', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginRight: '20px', 
                      transition: 'background-color 0.3s ease',
                      cursor: 'pointer'
                    }} 
                  >
                    <i className="fas fa-user" style={{color: 'white', fontSize: '24px'}}></i>
                  </div>
                  <div>
                    <strong style={{fontSize: '1.1rem'}}>Sarah Johnson</strong><br />
                    <small style={{color: '#666'}}>CTO, Education District</small>
                  </div>
                </div>
                <p style={{fontStyle: 'italic', color: '#555', fontSize: '1.05rem', lineHeight: 1.6}}>
                  "The infrastructure transformation has exceeded our expectations. Performance improved dramatically while costs decreased by 35%."
                </p>
              </div>
              
              <div 
                className="hover-card" 
                style={{
                  background: 'white', 
                  color: '#333', 
                  padding: '40px', 
                  borderRadius: '12px', 
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
                  transition: 'all 0.3s ease', 
                  cursor: 'pointer'
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
                  const circle = e.currentTarget.querySelector('.avatar-circle') as HTMLElement;
                  if (circle) circle.style.backgroundColor = '#125EAD';
                }} 
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  const circle = e.currentTarget.querySelector('.avatar-circle') as HTMLElement;
                  if (circle) circle.style.backgroundColor = '#4BB74E';
                }}
              >
                <div style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                  <div 
                    className="avatar-circle" 
                    style={{
                      width: '60px', 
                      height: '60px', 
                      backgroundColor: '#4BB74E', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      marginRight: '20px', 
                      transition: 'background-color 0.3s ease',
                      cursor: 'pointer'
                    }} 
                  >
                    <i className="fas fa-user" style={{color: 'white', fontSize: '24px'}}></i>
                  </div>
                  <div>
                    <strong style={{fontSize: '1.1rem'}}>Mike Rodriguez</strong><br />
                    <small style={{color: '#666'}}>IT Director, Healthcare</small>
                  </div>
                </div>
                <p style={{fontStyle: 'italic', color: '#555', fontSize: '1.05rem', lineHeight: 1.6}}>
                  "Logical Front's expertise in HIPAA compliance gave us confidence. Our new infrastructure is both secure and efficient."
                </p>
              </div>
              
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
export { HomePage };