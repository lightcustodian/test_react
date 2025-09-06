import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, Cloud, Server, Shield, Bot, GraduationCap, Factory, School, Building2, Heart, Database, HardDrive, Monitor, LifeBuoy, Camera, Wrench, Laptop, Lock, Network, ShieldCheck, CloudCog, Cpu, Archive, Globe, BarChart3, BrainCircuit, TestTube, BookOpen, Settings } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  // Handle smooth scrolling with offset for fixed navigation
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Close all dropdowns
    setIsSolutionsOpen(false);
    setIsIndustriesOpen(false);
    setIsMenuOpen(false);
    
    // Check if we need to navigate to a different page
    const currentPath = window.location.pathname;
    const targetPath = e.currentTarget.getAttribute('href')?.split('#')[0];
    
    if (targetPath && targetPath !== currentPath) {
      // Navigate to the target page first
      window.location.href = e.currentTarget.getAttribute('href') || '';
      return;
    }
    
    // If we're on the correct page, scroll to the target
    const element = document.getElementById(targetId);
    if (element) {
      // Add visual feedback - highlight the target element
      element.style.transition = 'box-shadow 0.3s ease';
      element.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.5)';
      
      const navHeight = 80; // Height of fixed navigation
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Remove highlight after scroll animation completes
      setTimeout(() => {
        element.style.boxShadow = '';
      }, 1500);
    }
  };

  // Handle main navigation link clicks
  const handleMainNavClick = () => {
    setIsSolutionsOpen(false);
    setIsIndustriesOpen(false);
    setIsMenuOpen(false);
  };

  // Handle scrolling when page loads with hash
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const navHeight = 80;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    // Handle initial load
    handleHashScroll();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
                <h1 className="text-2xl font-bold text-primary" data-testid="logo">
                  Logical Front
                </h1>
              </a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="/"
              onClick={handleMainNavClick}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </a>
            <div className="relative group">
              <div className="flex items-center">
                <a href="/solutions" onClick={handleMainNavClick} className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-solutions">
                  Solutions
                </a>
                <DropdownMenu open={isSolutionsOpen} onOpenChange={setIsSolutionsOpen}>
                  <DropdownMenuTrigger className="ml-1 p-1 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-0 focus:border-0" data-testid="nav-solutions-dropdown">
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-96 p-6 max-h-[500px] overflow-y-auto custom-scrollbar">
                 <div className="space-y-6">
                   {/* Private Cloud Column */}
                   <div className="space-y-2">
                     <div className="flex items-center gap-3 mb-4 p-3 bg-blue-50 rounded-xl">
                       <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                         <Cloud className="h-4 w-4" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-primary text-base">Private Cloud</h3>
                         <p className="text-xs text-blue-600">Enterprise cloud infrastructure</p>
                       </div>
                     </div>
                     <div className="space-y-2 ml-4">
                       <DropdownMenuItem asChild>
                         <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50 hover:border-l-2 hover:border-l-blue-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-primary-datacenter">
                           <Database className="h-4 w-4 text-blue-500" />
                           Primary Datacenter Services
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50 hover:border-l-2 hover:border-l-blue-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-backup-service">
                           <Archive className="h-4 w-4 text-blue-500" />
                           Backup as a Service
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50 hover:border-l-2 hover:border-l-blue-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-secondary-datacenter">
                           <Server className="h-4 w-4 text-blue-500" />
                           Secondary Datacenter Services
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50 hover:border-l-2 hover:border-l-blue-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-disaster-recovery">
                           <LifeBuoy className="h-4 w-4 text-blue-500" />
                           Disaster Recovery as a Service
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50 hover:border-l-2 hover:border-l-blue-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-desktop-service">
                           <Monitor className="h-4 w-4 text-blue-500" />
                           Desktop as a Service
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-blue-50 hover:border-l-2 hover:border-l-blue-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-video-surveillance">
                           <Camera className="h-4 w-4 text-blue-500" />
                           Video Surveillance Storage
                         </a>
                       </DropdownMenuItem>
                     </div>
                   </div>

                   {/* On-Premise Solutions Section */}
                   <div className="space-y-2">
                     <div className="flex items-center gap-3 mb-4 p-3 bg-green-50 rounded-xl">
                       <div className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                         <Server className="h-4 w-4" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-primary text-base">On-Premise Solutions</h3>
                         <p className="text-xs text-green-600">Local infrastructure management</p>
                       </div>
                     </div>
                     <div className="space-y-2 ml-4">
                       <DropdownMenuItem asChild>
                         <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-green-50 rounded-lg transition-colors" data-testid="solutions-datacenter-modernization">
                           <Wrench className="h-4 w-4 text-green-500" />
                           Data Center Modernization
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-green-50 rounded-lg transition-colors" data-testid="solutions-servers-storage">
                           <HardDrive className="h-4 w-4 text-green-500" />
                           Servers and Storage
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-green-50 rounded-lg transition-colors" data-testid="solutions-virtual-desktops">
                           <Laptop className="h-4 w-4 text-green-500" />
                           Virtual Desktops
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-green-50 rounded-lg transition-colors" data-testid="solutions-data-protection">
                           <Lock className="h-4 w-4 text-green-500" />
                           Data Protection
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-green-50 rounded-lg transition-colors" data-testid="solutions-networking">
                           <Network className="h-4 w-4 text-green-500" />
                           Networking
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="flex items-center gap-3 p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-green-50 rounded-lg transition-colors" data-testid="solutions-security">
                           <ShieldCheck className="h-4 w-4 text-green-500" />
                           Security
                         </a>
                       </DropdownMenuItem>
                     </div>
                   

                   {/* Microsoft Azure Section */}
                   <div className="space-y-2">
                     <div className="flex items-center gap-3 mb-4 p-3 bg-purple-50 rounded-xl">
                       <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                         <Shield className="h-4 w-4" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-primary text-base">Microsoft Azure</h3>
                         <p className="text-xs text-purple-600">Cloud platform services</p>
                       </div>
                     </div>
                     <div className="space-y-2 ml-4">
                       <DropdownMenuItem asChild>
                         <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-purple-50 hover:border-l-2 hover:border-l-purple-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-azure-platform">
                           <CloudCog className="h-4 w-4 text-purple-500" />
                           Azure Cloud Platform
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-purple-50 hover:border-l-2 hover:border-l-purple-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-azure-vms">
                           <Cpu className="h-4 w-4 text-purple-500" />
                           Azure Virtual Machines
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-purple-50 hover:border-l-2 hover:border-l-purple-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-azure-sql">
                           <Database className="h-4 w-4 text-purple-500" />
                           Azure SQL Database
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-purple-50 hover:border-l-2 hover:border-l-purple-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-azure-security">
                           <Shield className="h-4 w-4 text-purple-500" />
                           Azure Security Center
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-purple-50 hover:border-l-2 hover:border-l-purple-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-azure-networking">
                           <Globe className="h-4 w-4 text-purple-500" />
                           Azure Networking
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-purple-50 hover:border-l-2 hover:border-l-purple-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-azure-analytics">
                           <BarChart3 className="h-4 w-4 text-purple-500" />
                           Azure Analytics
                         </a>
                       </DropdownMenuItem>
                     </div>
                   </div>

                   {/* AI/Automation Platform Section */}
                   <div className="space-y-2">
                     <div className="flex items-center gap-3 mb-4 p-3 bg-orange-50 rounded-xl">
                       <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                         <Bot className="h-4 w-4" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-primary text-base">AI/Automation Platform</h3>
                         <p className="text-xs text-orange-600">Intelligent automation solutions</p>
                       </div>
                     </div>
                     <div className="space-y-2 ml-4">
                       <DropdownMenuItem asChild>
                         <a href="/solutions#ai-automation-platform" onClick={(e) => handleSmoothScroll(e, 'ai-automation-platform')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-orange-50 hover:border-l-2 hover:border-l-orange-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-ai-infrastructure">
                           <BrainCircuit className="h-4 w-4 text-orange-500" />
                           AI Infrastructure as a Service
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#ai-automation-platform" onClick={(e) => handleSmoothScroll(e, 'ai-automation-platform')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-orange-50 hover:border-l-2 hover:border-l-orange-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-ai-testing">
                           <TestTube className="h-4 w-4 text-orange-500" />
                           AI Testing Environments
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#ai-automation-platform" onClick={(e) => handleSmoothScroll(e, 'ai-automation-platform')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-orange-50 hover:border-l-2 hover:border-l-orange-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-educational-ai">
                           <BookOpen className="h-4 w-4 text-orange-500" />
                           Educational AI Platform
                         </a>
                       </DropdownMenuItem>
                       <DropdownMenuItem asChild>
                         <a href="/solutions#ai-automation-platform" onClick={(e) => handleSmoothScroll(e, 'ai-automation-platform')} className="flex items-center gap-3 p-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-orange-50 hover:border-l-2 hover:border-l-orange-500 rounded-md transition-all duration-200 pl-3" data-testid="solutions-ai-operations">
                           <Settings className="h-4 w-4 text-orange-500" />
                           AI Operations Center
                         </a>
                       </DropdownMenuItem>
                     </div>
                   </div>
                 </div>
               </div>
               </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className="relative group">
              <div className="flex items-center">
                <a href="/industries" onClick={handleMainNavClick} className="text-muted-foreground hover:text-primary transition-colors" data-testid="nav-industries">
                  Industries
                </a>
                <DropdownMenu open={isIndustriesOpen} onOpenChange={setIsIndustriesOpen}>
                  <DropdownMenuTrigger className="ml-1 p-1 text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-0 focus:border-0" data-testid="nav-industries-dropdown">
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64 p-2">
                <DropdownMenuItem asChild>
                  <a href="/industries#higher-education" onClick={(e) => handleSmoothScroll(e, 'higher-education')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors" data-testid="industries-higher-education">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Higher Education</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/industries#manufacturing" onClick={(e) => handleSmoothScroll(e, 'manufacturing')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors" data-testid="industries-manufacturing">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Factory className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Manufacturing</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/industries#k12-schools" onClick={(e) => handleSmoothScroll(e, 'k12-schools')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors" data-testid="industries-k12">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <School className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">K-12 School Districts</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/industries#business-services" onClick={(e) => handleSmoothScroll(e, 'business-services')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors" data-testid="industries-business">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Business</div>
                    </div>
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/industries#healthcare" onClick={(e) => handleSmoothScroll(e, 'healthcare')} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors" data-testid="industries-healthcare">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Regional Healthcare</div>
                    </div>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-get-started"
            >
              Get Started
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white py-4">
            <div className="space-y-4">
              <div className="space-y-3">
                <a 
                  href="/"
                  onClick={handleMainNavClick}
                  className="block text-lg font-semibold text-foreground hover:text-primary transition-colors pb-2 border-b border-border/50"
                  data-testid="mobile-nav-home"
                >
                  Home
                </a>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                  <a 
                    href="/solutions"
                    onClick={handleMainNavClick}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    data-testid="mobile-nav-solutions"
                  >
                    Solutions
                  </a>
                </div>
                <div className="space-y-4">
                  {/* Private Cloud Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Cloud className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Private Cloud</span>
                    </div>
                    <div className="pl-8 space-y-1">
                      <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-primary-datacenter">
                        Primary Datacenter Services
                      </a>
                      <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-backup-service">
                        Backup as a Service
                      </a>
                      <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-secondary-datacenter">
                        Secondary Datacenter Services
                      </a>
                      <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-disaster-recovery">
                        Disaster Recovery as a Service
                      </a>
                      <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-desktop-service">
                        Desktop as a Service
                      </a>
                      <a href="/solutions#private-cloud" onClick={(e) => handleSmoothScroll(e, 'private-cloud')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-video-surveillance">
                        Video Surveillance Storage
                      </a>
                    </div>
                  </div>

                  {/* On-Premise Solutions Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                        <Server className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm font-medium text-foreground">On-Premise Solutions</span>
                    </div>
                    <div className="pl-8 space-y-1">
                      <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-datacenter-modernization">
                        Data Center Modernization
                      </a>
                      <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-servers-storage">
                        Servers and Storage
                      </a>
                      <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-virtual-desktops">
                        Virtual Desktops
                      </a>
                      <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-data-protection">
                        Data Protection
                      </a>
                      <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-networking">
                        Networking
                      </a>
                      <a href="/solutions#on-premise-solutions" onClick={(e) => handleSmoothScroll(e, 'on-premise-solutions')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-security">
                        Security
                      </a>
                    </div>
                  </div>

                  {/* Microsoft Azure Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Shield className="h-3 w-3 text-purple-600" />
                      </div>
                      <span className="text-sm font-medium text-foreground">Microsoft Azure</span>
                    </div>
                    <div className="pl-8 space-y-1">
                      <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-azure-platform">
                        Azure Cloud Platform
                      </a>
                      <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-azure-vms">
                        Azure Virtual Machines
                      </a>
                      <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-azure-sql">
                        Azure SQL Database
                      </a>
                      <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-azure-security">
                        Azure Security Center
                      </a>
                      <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-azure-networking">
                        Azure Networking
                      </a>
                      <a href="/solutions#microsoft-azure" onClick={(e) => handleSmoothScroll(e, 'microsoft-azure')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-azure-analytics">
                        Azure Analytics
                      </a>
                    </div>
                  </div>

                  {/* AI/Automation Platform Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Bot className="h-3 w-3 text-orange-600" />
                      </div>
                      <span className="text-sm font-medium text-foreground">AI/Automation Platform</span>
                    </div>
                    <div className="pl-8 space-y-1">
                      <a href="/solutions#ai-automation-platform" onClick={(e) => handleSmoothScroll(e, 'ai-automation-platform')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-ai-infrastructure">
                        AI Infrastructure as a Service
                      </a>
                      <a href="/solutions#ai-automation-platform" onClick={(e) => handleSmoothScroll(e, 'ai-automation-platform')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-ai-testing">
                        AI Testing Environments
                      </a>
                      <a href="/solutions#ai-automation-platform" onClick={(e) => handleSmoothScroll(e, 'ai-automation-platform')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-educational-ai">
                        Educational AI Platform
                      </a>
                      <a href="/solutions#ai-automation-platform" onClick={(e) => handleSmoothScroll(e, 'ai-automation-platform')} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1" data-testid="mobile-solutions-ai-operations">
                        AI Operations Center
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-border/50">
                  <a 
                    href="/industries"
                    onClick={handleMainNavClick}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    data-testid="mobile-nav-industries"
                  >
                    Industries
                  </a>
                </div>
                <div className="space-y-3">
                  <a href="/industries#higher-education" onClick={(e) => handleSmoothScroll(e, 'higher-education')} className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-primary hover:bg-green-50 rounded-lg transition-colors" data-testid="mobile-industries-higher-education">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <GraduationCap className="h-3 w-3 text-green-600" />
                    </div>
                    Higher Education
                  </a>
                  <a href="/industries#manufacturing" onClick={(e) => handleSmoothScroll(e, 'manufacturing')} className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-primary hover:bg-green-50 rounded-lg transition-colors" data-testid="mobile-industries-manufacturing">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <Factory className="h-3 w-3 text-green-600" />
                    </div>
                    Manufacturing
                  </a>
                  <a href="/industries#k12-schools" onClick={(e) => handleSmoothScroll(e, 'k12-schools')} className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-primary hover:bg-green-50 rounded-lg transition-colors" data-testid="mobile-industries-k12">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <School className="h-3 w-3 text-green-600" />
                    </div>
                    K-12 School Districts
                  </a>
                  <a href="/industries#business-services" onClick={(e) => handleSmoothScroll(e, 'business-services')} className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-primary hover:bg-green-50 rounded-lg transition-colors" data-testid="mobile-industries-business">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-3 w-3 text-green-600" />
                    </div>
                    Business Services
                  </a>
                  <a href="/industries#healthcare" onClick={(e) => handleSmoothScroll(e, 'healthcare')} className="flex items-center gap-3 p-2 text-sm text-muted-foreground hover:text-primary hover:bg-green-50 rounded-lg transition-colors" data-testid="mobile-industries-healthcare">
                    <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                      <Heart className="h-3 w-3 text-green-600" />
                    </div>
                    Regional Healthcare
                  </a>
                </div>
              </div>

              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid="mobile-button-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}