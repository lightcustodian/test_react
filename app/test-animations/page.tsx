"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView, useAnimation, useCycle } from 'framer-motion';
import { MegaNavigation } from '../../src/components/globals/MegaNavigation';
import { Footer } from '../../src/components/globals/Footer';

const brandColors = {
  blue: '#125EAD',
  green: '#4BB74E',
  darkBlue: '#0D3F7A',
  darkGreen: '#3A9B3E',
  lightBlue: '#E6F2FF',
  lightGreen: '#E8F5E9'
};

// Enhanced Loading Screen Component
const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  
  const messages = [
    "Initializing Infrastructure...",
    "Optimizing Performance...",
    "Securing Connections...",
    "Almost Ready..."
  ];

  useEffect(() => {
    const duration = 3000;
    const interval = 50;
    const increment = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    // Change messages
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(messageInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="loading-screen"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `linear-gradient(135deg, ${brandColors.darkBlue} 0%, ${brandColors.blue} 50%, ${brandColors.darkGreen} 100%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        color: 'white'
      }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Logo/Icon */}
      <motion.div
        animate={{
          rotateY: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          fontSize: '4rem',
          marginBottom: '2rem',
          background: `linear-gradient(45deg, ${brandColors.green}, white)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      >
        <i className="fas fa-cloud-upload-alt"></i>
      </motion.div>

      {/* Company Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textAlign: 'center'
        }}
      >
        Logical Front
      </motion.h1>

      {/* Animated Message */}
      <motion.p
        key={currentMessage}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        style={{
          fontSize: '1.2rem',
          marginBottom: '3rem',
          textAlign: 'center'
        }}
      >
        {messages[currentMessage]}
      </motion.p>

      {/* Progress Bar */}
      <div style={{
        width: '300px',
        height: '4px',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <motion.div
          style={{
            height: '100%',
            background: `linear-gradient(90deg, ${brandColors.green}, white)`,
            borderRadius: '2px'
          }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'easeOut' }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: brandColors.green,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
        />
      ))}
    </motion.div>
  );
};

// Animated Hero Section
const AnimatedHeroSection = () => {
  const controls = useAnimation();
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  return (
    <motion.section
      ref={heroRef}
      className="hero-section"
      style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${brandColors.darkBlue} 0%, ${brandColors.blue} 50%, rgba(75, 183, 78, 0.1) 100%)`,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            border: `2px solid ${brandColors.green}40`,
            borderRadius: '50%',
            left: `${20 + i * 15}%`,
            top: `${20 + i * 10}%`
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          style={{ textAlign: 'center', color: 'white' }}
        >
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: '4rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              background: `linear-gradient(45deg, white, ${brandColors.green})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Tailored Infrastructure Solutions
            <br />
            That Put You in Control
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '1.5rem',
              marginBottom: '3rem',
              opacity: 0.9
            }}
          >
            Get enterprise-grade performance at 33% less cost than public cloud with predictable pricing and zero vendor lock-in.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            {[
              { number: "50%", label: "Cost Savings vs Cloud" },
              { number: "600K+", label: "Users Supported" },
              { number: "99.9%", label: "Uptime SLA" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: brandColors.green }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1rem', opacity: 0.8 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                background: `linear-gradient(135deg, ${brandColors.green} 0%, ${brandColors.darkGreen} 100%)`,
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(75, 183, 78, 0.3)'
              }}
            >
              <i className="fas fa-calculator" style={{ marginRight: '0.5rem' }} />
              CALCULATE YOUR CLOUD SAVINGS
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                background: 'transparent',
                color: 'white',
                border: '2px solid white',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <i className="fas fa-info-circle" style={{ marginRight: '0.5rem' }} />
              LEARN MORE
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Animated Solutions Section
const AnimatedSolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      title: "Private Cloud Infrastructure",
      description: "Enterprise-grade private cloud with 99.9% uptime SLA and Arkansas AR-EON advantage.",
      icon: "fas fa-cloud",
      features: ["99.9% uptime SLA", "Arkansas AR-EON network", "24/7 monitoring", "Disaster recovery"]
    },
    {
      title: "On-Premise Hardware & Support",
      description: "Complete on-premise infrastructure with professional installation and ongoing support.",
      icon: "fas fa-server",
      features: ["Custom hardware", "Professional installation", "24/7 support", "Maintenance"]
    },
    {
      title: "Microsoft Azure Integrations",
      description: "Seamless Azure integration for hybrid cloud environments with enterprise security.",
      icon: "fas fa-cloud-upload-alt",
      features: ["Azure AD integration", "Hybrid cloud setup", "Enterprise security", "Compliance"]
    },
    {
      title: "AI/Automation Platforms",
      description: "Advanced automation and AI solutions to streamline operations and reduce overhead.",
      icon: "fas fa-robot",
      features: ["Process automation", "AI-powered insights", "Workflow optimization", "Cost reduction"]
    }
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: '100px 0',
        background: 'white'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: '3rem',
            color: brandColors.blue,
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Enterprise Infrastructure Solutions
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#666' }}>
            Comprehensive solutions tailored to your organization's unique needs
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
              style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                style={{
                  width: '60px',
                  height: '60px',
                  background: `linear-gradient(135deg, ${brandColors.blue}, ${brandColors.green})`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}
              >
                <i className={solution.icon} style={{ color: 'white', fontSize: '24px' }} />
              </motion.div>

              <h3 style={{
                fontSize: '1.5rem',
                color: brandColors.blue,
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>
                {solution.title}
              </h3>

              <p style={{
                color: '#666',
                lineHeight: 1.6,
                marginBottom: '1.5rem'
              }}>
                {solution.description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {solution.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (i * 0.05) }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '0.5rem',
                      color: '#555'
                    }}
                  >
                    <i className="fas fa-check" style={{
                      color: brandColors.green,
                      marginRight: '0.5rem',
                      fontSize: '12px'
                    }} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Animated Calculator Section
const AnimatedCalculatorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showResults, setShowResults] = useState(false);
  const [savings, setSavings] = useState({ monthly: 0, annual: 0 });

  const calculateSavings = () => {
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
    
    setSavings({ monthly: monthlySavings, annual: annualSavings });
    setShowResults(true);
  };

  return (
    <section
      ref={ref}
      style={{
        background: `linear-gradient(135deg, ${brandColors.blue} 0%, ${brandColors.darkBlue} 100%)`,
        color: 'white',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          border: `1px solid ${brandColors.green}40`,
          borderRadius: '50%',
          opacity: 0.3
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Calculate Your Infrastructure Savings
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
            See how much you could save by switching to Logical Front's solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            background: 'rgba(255,255,255,0.1)',
            padding: '3rem',
            borderRadius: '20px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Industry</label>
            <select
              id="industry"
              style={{
                width: '100%',
                padding: '1rem',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                color: '#333',
                backgroundColor: 'white'
              }}
            >
              <option value="">Select your industry</option>
              <option value="education">Higher Education</option>
              <option value="k12">K-12 Schools</option>
              <option value="healthcare">Healthcare</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="government">Government</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Current Monthly IT Budget</label>
            <input
              type="number"
              id="budget"
              placeholder="Enter your monthly budget"
              style={{
                width: '100%',
                padding: '1rem',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                color: '#333',
                backgroundColor: 'white'
              }}
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Number of Users</label>
            <input
              type="number"
              id="users"
              placeholder="Enter number of users"
              style={{
                width: '100%',
                padding: '1rem',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                color: '#333',
                backgroundColor: 'white'
              }}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={calculateSavings}
            style={{
              width: '100%',
              padding: '1rem 2rem',
              fontSize: '1.1rem',
              background: `linear-gradient(135deg, ${brandColors.green} 0%, ${brandColors.darkGreen} 100%)`,
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '2rem'
            }}
          >
            Calculate My Savings
          </motion.button>

          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '2rem',
                  borderRadius: '15px',
                  textAlign: 'center'
                }}
              >
                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Your Potential Savings</h3>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Monthly Savings</h4>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      style={{ fontSize: '2rem', fontWeight: 'bold', color: brandColors.green }}
                    >
                      ${savings.monthly.toLocaleString()}
                    </motion.div>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '0.5rem' }}>Annual Savings</h4>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      style={{ fontSize: '2rem', fontWeight: 'bold', color: brandColors.green }}
                    >
                      ${savings.annual.toLocaleString()}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

// Main Test Page Component
const TestAnimationsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollY } = useScroll();
  
  // Parallax effect for background
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <div className="min-h-screen">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MegaNavigation />
          
          {/* Parallax Background */}
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              height: '120vh',
              background: `linear-gradient(135deg, ${brandColors.lightBlue} 0%, rgba(255,255,255,0.5) 50%, ${brandColors.lightGreen} 100%)`,
              zIndex: -1,
              y: backgroundY
            }}
          />
          
          <AnimatedHeroSection />
          <AnimatedSolutionsSection />
          <AnimatedCalculatorSection />
          
          {/* Test Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: brandColors.green,
              color: 'white',
              padding: '10px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 'bold',
              zIndex: 1000,
              boxShadow: '0 4px 15px rgba(75, 183, 78, 0.3)'
            }}
          >
            🧪 Animation Test Page
          </motion.div>
          
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default TestAnimationsPage;