import React from 'react';
import { MegaNavigation } from '../globals/MegaNavigation';
import { Footer } from '../globals/Footer';
import { HeroSection } from '../blocks/HeroSection';
import { RichTextBlock } from '../blocks/RichTextBlock';
import { ImageBlock } from '../blocks/ImageBlock';
import { ServiceGrid } from '../blocks/ServiceGrid';

const K12SchoolsPage: React.FC = () => {
  const heroData = {
    title: "K-12 School District\nIT Solutions",
    subtitle: "Secure, scalable, and cost-effective infrastructure solutions designed specifically for K-12 education environments with FERPA compliance and student safety at the forefront.",
    stats: [
      { number: "33%", label: "Cost Reduction" },
      { number: "100%", label: "FERPA Compliant" },
      { number: "24/7", label: "Educational Support" }
    ],
    primaryCTA: { 
      text: "SCHEDULE K-12 CONSULTATION", 
      icon: "fas fa-calendar-check",
      href: "/contact"
    },
    secondaryCTA: { 
      text: "VIEW GLEN ROSE SUCCESS", 
      icon: "fas fa-graduation-cap",
      href: "/case-study-glen-rose-isd"
    },
    backgroundImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <MegaNavigation />
      
      <div>
        <HeroSection {...heroData} className="pt-20 pb-32" />
        
        {/* Content and Graphic Blocks */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
              <RichTextBlock
                title="K-12 Infrastructure That Works for Schools"
                subtitle="Designed with educators and students in mind"
                content={`
                  <p>School districts face unique infrastructure challenges that require <strong>specialized solutions</strong>. From supporting thousands of students and staff to managing tight budgets and ensuring student data privacy, your technology needs are both complex and critical.</p>
                  
                  <h3>Why School Districts Choose Logical Front</h3>
                  <ul>
                    <li><strong>FERPA-First Design</strong> - Student privacy and data protection built-in</li>
                    <li><strong>Budget-Conscious Solutions</strong> - 33% cost savings over public cloud</li>
                    <li><strong>Educational Expertise</strong> - Team understands K-12 operations</li>
                    <li><strong>Summer Scheduling</strong> - Maintenance during school breaks</li>
                  </ul>
                  
                  <blockquote>
                    "Logical Front helped us modernize our infrastructure while achieving 33% cost savings. Their understanding of K-12 needs made all the difference."
                    <br/>- Glen Rose ISD IT Director
                  </blockquote>
                  
                  <p>Whether you're implementing 1:1 device programs, upgrading network capacity, or enhancing security, we deliver solutions that work within your budget and timeline.</p>
                `}
                width="half"
                variant="article"
                fontSize="default"
                lineHeight="relaxed"
              />
              
              <ImageBlock
                title="Empowering Student Success"
                description="From elementary schools to high schools, we help districts create technology environments that enhance learning and engagement."
                imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                imageAlt="Students using technology in classroom"
                imagePosition="right"
                width="half"
                aspectRatio="landscape"
                badge="Trusted by Districts"
                ctaButton={{ text: "View Glen Rose Success", variant: "primary" }}
              />
            </div>
          </div>
        </section>
        
        {/* K-12 Specific Benefits Section - 2x2 Grid */}
        <ServiceGrid
          title="Built for K-12 Education"
          subtitle="Specialized infrastructure solutions designed for school districts"
          items={[
            {
              title: "Student Data Protection",
              description: "FERPA-compliant infrastructure with advanced security measures to protect sensitive student information and maintain privacy standards required by educational institutions.",
              icon: "fas fa-shield-alt"
            },
            {
              title: "1:1 Device Support",
              description: "Infrastructure designed to support 1:1 device programs with reliable network capacity, device management, and seamless integration with educational platforms.",
              icon: "fas fa-laptop"
            },
            {
              title: "Budget-Friendly Solutions",
              description: "Cost-effective infrastructure solutions that work within tight education budgets while delivering enterprise-grade performance and reliability.",
              icon: "fas fa-dollar-sign"
            },
            {
              title: "Summer Break Maintenance",
              description: "Strategic maintenance and upgrades scheduled during school breaks to minimize disruption to the educational environment.",
              icon: "fas fa-clock"
            }
          ]}
          columns={2}
          variant="featured"
        />
        
        {/* Educational Tools Integration */}
        <section style={{background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)', color: 'white', padding: '80px 0'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem'}}>
              Seamless Educational Technology Integration
            </h2>
            <p style={{fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9}}>
              Our infrastructure seamlessly integrates with the educational platforms and tools your school already uses
            </p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px'}}>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-graduation-cap" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Learning Management Systems</h3>
                <p style={{opacity: 0.9}}>Canvas, Google Classroom, Schoology</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-users" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Student Information Systems</h3>
                <p style={{opacity: 0.9}}>PowerSchool, Infinite Campus, Skyward</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-video" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Video Conferencing</h3>
                <p style={{opacity: 0.9}}>Zoom, Google Meet, Microsoft Teams</p>
              </div>
              <div style={{textAlign: 'center'}}>
                <i className="fas fa-shield-alt" style={{fontSize: '3rem', marginBottom: '20px'}}></i>
                <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '10px'}}>Content Filtering</h3>
                <p style={{opacity: 0.9}}>CIPA-compliant web filtering solutions</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default K12SchoolsPage;
export { K12SchoolsPage };