import React, { useState } from 'react';

// Navigation Component
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg z-50 border-b border-white/10 transition-all duration-300">
      <nav className="flex justify-between items-center px-8 py-6 relative">
        {/* Logo */}
        <a href="/" className="flex items-center text-3xl font-extrabold text-green-500 z-50">
          <i className="fas fa-cloud mr-2"></i>
          LOGICAL FRONT
        </a>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col bg-none border-none cursor-pointer p-2 z-50"
          onClick={toggleMobileMenu}
        >
          <span className={`w-6 h-1 bg-blue-600 mb-1 transition-all duration-300 rounded ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-1 bg-blue-600 mb-1 transition-all duration-300 rounded ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-1 bg-blue-600 transition-all duration-300 rounded ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        
        {/* Navigation Menu */}
        <div className={`md:flex items-center gap-8 ${mobileMenuOpen ? 'fixed top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-xl flex-col justify-center' : 'hidden'}`}>
          <ul className="flex md:flex-row flex-col md:gap-0 gap-4 list-none m-0 items-center">
            {/* Industries Dropdown */}
            <li className="relative group">
              <a href="/industries" className="flex items-center gap-2 text-blue-600 no-underline font-medium text-lg px-3 py-4 transition-all duration-300 hover:text-green-500 hover:bg-green-500/10 rounded-lg">
                INDUSTRIES
                <i className="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
              </a>
              <ul className="absolute top-full left-0 bg-white rounded-xl shadow-lg opacity-0 invisible transform -translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 min-w-64 border border-gray-100 z-50">
                <li><a href="/higher-education" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Higher Education</a></li>
                <li><a href="/k12-schools" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">K-12 School Districts</a></li>
                <li><a href="/regional-healthcare" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Regional Healthcare</a></li>
                <li><a href="/manufacturing" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Manufacturing</a></li>
                <li><a href="/business" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Business</a></li>
              </ul>
            </li>
            
            {/* Solutions Dropdown */}
            <li className="relative group">
              <a href="/solutions" className="flex items-center gap-2 text-blue-600 no-underline font-medium text-lg px-3 py-4 transition-all duration-300 hover:text-green-500 hover:bg-green-500/10 rounded-lg">
                SOLUTIONS
                <i className="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
              </a>
              <ul className="absolute top-full left-0 bg-white rounded-xl shadow-lg opacity-0 invisible transform -translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 min-w-80 border border-gray-100 z-50">
                {/* Private Cloud Submenu */}
                <li className="relative group/sub">
                  <a href="/private-cloud" className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">
                    Private Cloud
                    <i className="fas fa-chevron-right text-xs transition-transform duration-300 group-hover/sub:translate-x-1"></i>
                  </a>
                  <ul className="absolute top-0 left-full bg-white rounded-xl shadow-lg opacity-0 invisible transform -translate-x-3 transition-all duration-300 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-3 min-w-72 border border-gray-100 z-50 ml-3">
                    <li><a href="/primary-datacenter-services" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Primary Datacenter Services</a></li>
                    <li><a href="/backup-as-a-service" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Backup as a Service</a></li>
                    <li><a href="/secondary-datacenter-services" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Secondary Datacenter Services</a></li>
                    <li><a href="/disaster-recovery-as-a-service" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Disaster Recovery as a Service</a></li>
                    <li><a href="/desktop-as-a-service" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Desktop as a Service</a></li>
                    <li><a href="/video-surveillance-storage" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Video Surveillance Storage</a></li>
                  </ul>
                </li>
                {/* On-Premise Submenu */}
                <li className="relative group/sub">
                  <a href="/on-premise" className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">
                    On-Premise Solutions
                    <i className="fas fa-chevron-right text-xs transition-transform duration-300 group-hover/sub:translate-x-1"></i>
                  </a>
                  <ul className="absolute top-0 left-full bg-white rounded-xl shadow-lg opacity-0 invisible transform -translate-x-3 transition-all duration-300 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-3 min-w-72 border border-gray-100 z-50 ml-3">
                    <li><a href="/data-center-modernization" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Data Center Modernization</a></li>
                    <li><a href="/servers-storage" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Servers and Storage</a></li>
                    <li><a href="/virtual-desktops-vdi" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Virtual Desktops</a></li>
                    <li><a href="/data-protection" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Data Protection</a></li>
                    <li><a href="/networking" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Networking</a></li>
                    <li><a href="/it-security" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Security</a></li>
                  </ul>
                </li>
                <li><a href="/microsoft-azure" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Microsoft Azure</a></li>
                {/* AI/Automation Submenu */}
                <li className="relative group/sub">
                  <a href="/ai-automation" className="flex items-center justify-between px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">
                    AI/Automation Platforms
                    <i className="fas fa-chevron-right text-xs transition-transform duration-300 group-hover/sub:translate-x-1"></i>
                  </a>
                  <ul className="absolute top-0 left-full bg-white rounded-xl shadow-lg opacity-0 invisible transform -translate-x-3 transition-all duration-300 group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:translate-x-3 min-w-72 border border-gray-100 z-50 ml-3">
                    <li><a href="/ai-infrastructure-as-a-service" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">AI Infrastructure as a Service</a></li>
                    <li><a href="/ai-testing-environments" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">AI Testing Environments</a></li>
                    <li><a href="/educational-ai-platform" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">Educational AI Platform</a></li>
                    <li><a href="/ai-operations-center" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300 text-sm">AI Operations Center</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            
            {/* Case Studies Dropdown */}
            <li className="relative group">
              <a href="/case-studies" className="flex items-center gap-2 text-blue-600 no-underline font-medium text-lg px-3 py-4 transition-all duration-300 hover:text-green-500 hover:bg-green-500/10 rounded-lg">
                CASE STUDIES
                <i className="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
              </a>
              <ul className="absolute top-full left-0 bg-white rounded-xl shadow-lg opacity-0 invisible transform -translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 min-w-80 border border-gray-100 z-50">
                <li><a href="/case-study-uams" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">University of Arkansas Medical Sciences (UAMS)</a></li>
                <li><a href="/case-study-asu-mid-south" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Arkansas State University Mid-South</a></li>
                <li><a href="/case-study-venoco" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Venoco ($400K savings)</a></li>
                <li><a href="/case-study-glen-rose-isd" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Glen Rose ISD (33% cost reduction)</a></li>
                <li><a href="/case-study-roger-williams-university" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Roger Williams University (GPU virtualization)</a></li>
                <li className="border-t border-gray-200 mt-2 pt-2">
                  <a href="/case-studies" className="block px-6 py-3 text-gray-900 font-semibold hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">See All Case Studies</a>
                </li>
              </ul>
            </li>
            
            {/* About Us Dropdown */}
            <li className="relative group mr-6">
              <a href="/about-us" className="flex items-center gap-2 text-blue-600 no-underline font-medium text-lg px-3 py-4 transition-all duration-300 hover:text-green-500 hover:bg-green-500/10 rounded-lg">
                ABOUT US
                <i className="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
              </a>
              <ul className="absolute top-full left-0 bg-white rounded-xl shadow-lg opacity-0 invisible transform -translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 min-w-64 border border-gray-100 z-50">
                <li><a href="/mission-statement" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Mission Statement</a></li>
                <li><a href="/values" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Core Values</a></li>
                <li><a href="/our-team" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Our Team</a></li>
                <li><a href="/blog" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Blog</a></li>
                <li><a href="/videos" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Videos</a></li>
                <li><a href="/contact" className="block px-6 py-3 text-gray-700 hover:bg-green-500/10 hover:text-green-500 rounded-lg m-1 transition-all duration-300">Contact</a></li>
              </ul>
            </li>
          </ul>
          
          {/* Search */}
          <div className="relative">
            <form className="flex items-center bg-blue-600/10 rounded-full px-4 py-2 transition-all duration-300 focus-within:bg-blue-600/15 focus-within:shadow-lg focus-within:shadow-green-500/20">
              <input 
                type="search" 
                className="bg-transparent border-none outline-none px-2 py-1 text-sm w-48 text-gray-700 placeholder-gray-400" 
                placeholder="Search..."
              />
              <button type="submit" className="text-blue-600 hover:text-green-500 transition-colors duration-300 p-1 rounded-full hover:bg-green-500/10">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

// Atoms - Basic building blocks
const Button = ({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-bold transition-all duration-300 cursor-pointer border-none text-center uppercase tracking-wide';
  
  const variants = {
    primary: 'text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 rounded-full',
    secondary: 'bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 hover:bg-white/20 hover:-translate-y-1 hover:scale-105 hover:border-white/50 rounded-full'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  const primaryStyle = variant === 'primary' ? {
    background: 'linear-gradient(135deg, #4BB74E 0%, #125EAD 100%)',
    boxShadow: '0 8px 30px rgba(75, 183, 78, 0.3)'
  } : {};
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={primaryStyle}
      {...props}
    >
      {icon && <i className={icon}></i>}
      {children}
    </button>
  );
};

const IconCircle = ({ 
  icon, 
  variant = 'trust',
  size = 'default',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all duration-300';
  
  const variants = {
    trust: 'text-white hover:-translate-y-1',
    expertise: 'text-white hover:-translate-y-1', 
    innovation: 'hover:-translate-y-1',
    growth: 'hover:-translate-y-1'
  };
  
  const sizes = {
    small: 'w-8 h-8 text-sm',
    default: 'w-12 h-12 text-lg',
    large: 'w-16 h-16 text-xl'
  };
  
  const getVariantStyle = () => {
    switch(variant) {
      case 'trust':
        return { backgroundColor: '#4BB74E' };
      case 'expertise':
        return { backgroundColor: '#125EAD' };
      case 'innovation':
        return { backgroundColor: '#4BB74E', color: '#125EAD' };
      case 'growth':
        return { backgroundColor: '#125EAD', color: '#4BB74E' };
      default:
        return { backgroundColor: '#4BB74E' };
    }
  };
  
  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={getVariantStyle()}
    >
      <i className={icon}></i>
    </div>
  );
};

// Molecules - Component combinations
const Card = ({ 
  variant = 'elevated',
  interactive = true,
  children,
  className = '',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl transition-all duration-300';
  
  const variants = {
    elevated: 'p-6 shadow-md',
    feature: 'p-6 border border-gray-200',
    value: 'p-6 bg-gradient-to-br from-blue-50 to-green-50 text-center',
    testimonial: 'p-8 bg-gray-50 relative'
  };
  
  const interactiveClasses = interactive 
    ? 'hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer' 
    : '';
  
  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const StatItem = ({ number, label, className = '' }) => (
  <div className={`text-center bg-black/20 backdrop-blur-md p-8 rounded-xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-black/30 min-w-64 max-w-64 ${className}`}>
    <div className="text-5xl font-black mb-3 tracking-tight" style={{ color: '#4BB74E' }}>{number}</div>
    <div className="text-sm text-white/80 uppercase tracking-widest font-medium leading-tight">{label}</div>
  </div>
);

// Organisms - Complex components
const HeroSection = ({ 
  title,
  subtitle,
  stats = [],
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  className = ''
}) => (
  <section 
    className={`relative py-32 text-center text-white overflow-hidden ${className}`}
    style={{
      backgroundImage: `linear-gradient(135deg, rgba(10, 15, 28, 0.85), rgba(18, 94, 173, 0.7)), url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}
  >
    {/* Animated overlay with stronger glow effect */}
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-600/15"></div>
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-green-400/5 to-transparent"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <h1 className="mb-12 leading-tight" 
          style={{
            fontSize: '4.5rem',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #4BB74E, #125EAD)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(75, 183, 78, 0.3)',
            animation: 'titleGlow 3s ease-in-out infinite alternate'
          }}>
        Higher Education IT Solutions<br />That Scale
      </h1>
      <p className="text-xl md:text-2xl mb-16 max-w-5xl mx-auto leading-relaxed text-white/95 font-light">
        {subtitle}
      </p>
      
      {stats.length > 0 && (
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatItem key={index} number={stat.number} label={stat.label} />
          ))}
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {primaryCTA && (
          <Button variant="primary" size="large" icon={primaryCTA.icon} className="min-w-80">
            {primaryCTA.text}
          </Button>
        )}
        {secondaryCTA && (
          <Button variant="secondary" size="large" icon={secondaryCTA.icon} className="min-w-72">
            {secondaryCTA.text}
          </Button>
        )}
      </div>
    </div>
  </section>
);

const ValuePropsSection = ({ 
  title,
  subtitle,
  values = [],
  className = ''
}) => (
  <section className={`py-16 bg-white ${className}`}>
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
        {subtitle}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((value, index) => (
          <Card key={index} variant="value" className="group">
            <IconCircle 
              icon={value.icon} 
              variant={value.iconVariant} 
              size="large"
              className="mb-4 mx-auto group-hover:scale-110"
            />
            <h3 className="text-xl font-bold text-blue-600 mb-2">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.description}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const SolutionsSection = ({ 
  title,
  subtitle,
  solutions = [],
  className = ''
}) => (
  <section className={`py-16 bg-gradient-to-br from-gray-50 to-blue-50 ${className}`}>
    <div className="container mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
        {subtitle}
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {solutions.map((solution, index) => (
          <Card key={index} variant="feature" className="group">
            <div className="flex items-center gap-4 mb-6">
              <IconCircle 
                icon={solution.icon} 
                variant="expertise"
                size="large"
                className="group-hover:scale-110"
              />
              <h3 className="text-2xl font-bold text-blue-600">{solution.title}</h3>
            </div>
            <p className="text-gray-600 mb-6">{solution.description}</p>
            {solution.features && (
              <ul className="space-y-2">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <i className="fas fa-check text-green-500"></i>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// Template - Full page layout
const HigherEducationPage = () => {
  const heroData = {
    title: "Higher Education IT Solutions That Scale",
    subtitle: "Get enterprise-grade performance with FERPA compliance at 33% less cost than public cloud. Trusted by universities serving 600K+ students nationwide with Arkansas AR-EON network advantage.",
    stats: [
      { number: "20K+", label: "Students at UAMS" },
      { number: "100%", label: "FERPA Compliant" },
      { number: "24/7", label: "Expert Support" }
    ],
    primaryCTA: { text: "Schedule Higher Ed Consultation", icon: "fas fa-calendar-check" },
    secondaryCTA: { text: "View UAMS Success Story", icon: "fas fa-info-circle" },
    backgroundImage: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=4000&q=80"
  };

  const valueProps = {
    title: "Why Choose Logical Front",
    subtitle: "The advantages that set us apart from other infrastructure providers",
    values: [
      {
        title: "Lower Total Cost",
        description: "Save 33% vs public cloud with transparent, predictable pricing",
        icon: "fas fa-dollar-sign",
        iconVariant: "trust"
      },
      {
        title: "No Vendor Lock-In",
        description: "Maintain complete control of your infrastructure",
        icon: "fas fa-unlock",
        iconVariant: "expertise"
      },
      {
        title: "Arkansas Support",
        description: "Local team with regional expertise and 24/7 availability",
        icon: "fas fa-headset",
        iconVariant: "innovation"
      },
      {
        title: "Scalable Growth",
        description: "Infrastructure that grows seamlessly with your organization",
        icon: "fas fa-chart-line",
        iconVariant: "growth"
      }
    ]
  };

  const solutions = {
    title: "Proven Infrastructure Solutions",
    subtitle: "Enterprise-grade solutions with guaranteed performance and cost savings",
    solutions: [
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
        description: "Modern on-premise infrastructure with enterprise hardware and full lifecycle support.",
        icon: "fas fa-server",
        features: [
          "Enterprise-grade hardware",
          "Full lifecycle support",
          "Seamless cloud integration",
          "Predictable costs"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Include Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <Navigation />
      
      {/* Add top margin to account for fixed header */}
      <div className="mt-20">
        <HeroSection {...heroData} />
        <SolutionsSection {...solutions} />
        <ValuePropsSection {...valueProps} />
        
        {/* Preview Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Component Library Preview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card variant="elevated">
                <IconCircle icon="fas fa-shield-alt" variant="trust" className="mb-4" />
                <h3 className="text-lg font-bold mb-2">Elevated Card</h3>
                <p className="text-gray-600 text-sm">Interactive card with shadow and hover effects</p>
              </Card>
              
              <Card variant="feature">
                <IconCircle icon="fas fa-star" variant="expertise" className="mb-4" />
                <h3 className="text-lg font-bold mb-2">Feature Card</h3>
                <p className="text-gray-600 text-sm">Perfect for showcasing features and services</p>
              </Card>
              
              <Card variant="value">
                <IconCircle icon="fas fa-rocket" variant="innovation" className="mb-4" />
                <h3 className="text-lg font-bold mb-2">Value Card</h3>
                <p className="text-gray-600 text-sm">Highlight key value propositions</p>
              </Card>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" icon="fas fa-play">Primary Button</Button>
              <Button variant="secondary" icon="fas fa-info">Secondary Button</Button>
              <Button variant="primary" size="large" icon="fas fa-rocket">Large Primary</Button>
              <Button variant="primary" size="small" icon="fas fa-check">Small Primary</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HigherEducationPage;