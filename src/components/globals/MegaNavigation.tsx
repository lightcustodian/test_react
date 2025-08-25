"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import type { NavigationProps, MenuItem } from '../../types/components';
import { navigationMenu } from '../../config/navigation';
import { cn } from '../../utils/cn';
import '../../styles/mega-navigation.css';

const MegaNavigation: React.FC<NavigationProps> = ({ 
  menuItems = navigationMenu,
  className = '' 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const renderSolutionsDropdown = () => {
    const solutionsItem = menuItems.find(item => item.label === 'SOLUTIONS');
    if (!solutionsItem?.children) return null;

    return (
      <div className="mega-dropdown-content">
        <div className="grid grid-cols-4 gap-1 p-4 max-w-fit mx-auto">
          {/* Private Cloud Column */}
          <div className="space-y-2">
            <div className="mega-dropdown-header">
              <div className="mega-dropdown-box mega-dropdown-box-header">
                <div className="mega-icon-circle">
                  <i className="fas fa-cloud text-2xl"></i>
                </div>
                <div className="mega-box-content">
                  <h4 className="mega-box-title">Private Cloud</h4>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-server"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/primary-datacenter-services" className="mega-box-link">Primary Datacenter Services</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-shield"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/backup-as-a-service" className="mega-box-link">Backup as a Service</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-database"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/secondary-datacenter-services" className="mega-box-link">Secondary Datacenter Services</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-undo"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/disaster-recovery-as-a-service" className="mega-box-link">Disaster Recovery as a Service</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-desktop"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/desktop-as-a-service" className="mega-box-link">Desktop as a Service</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-video"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/video-surveillance-storage" className="mega-box-link">Video Surveillance Storage</Link>
                </div>
              </div>
            </div>
          </div>

          {/* On-Premise Column */}
          <div className="space-y-2">
            <div className="mega-dropdown-header">
              <div className="mega-dropdown-box mega-dropdown-box-header">
                <div className="mega-icon-circle">
                  <i className="fas fa-building text-2xl"></i>
                </div>
                <div className="mega-box-content">
                  <h4 className="mega-box-title">On-Premise Solutions</h4>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-warehouse"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/data-center-modernization" className="mega-box-link">Data Center Modernization</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-server"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/servers-storage" className="mega-box-link">Servers and Storage</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-desktop"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/virtual-desktops-vdi" className="mega-box-link">Virtual Desktops</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/data-protection" className="mega-box-link">Data Protection</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/networking" className="mega-box-link">Networking</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/it-security" className="mega-box-link">Security</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Azure Column */}
          <div className="space-y-2">
            <div className="mega-dropdown-header">
              <div className="mega-dropdown-box mega-dropdown-box-header">
                <div className="mega-icon-circle">
                  <i className="fas fa-cloud-upload-alt text-2xl"></i>
                </div>
                <div className="mega-box-content">
                  <h4 className="mega-box-title">Microsoft Azure</h4>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-cloud"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/microsoft-azure" className="mega-box-link">Azure Cloud Platform</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-server"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/microsoft-azure" className="mega-box-link">Azure Virtual Machines</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-database"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/microsoft-azure" className="mega-box-link">Azure SQL Database</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/microsoft-azure" className="mega-box-link">Azure Security Center</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/microsoft-azure" className="mega-box-link">Azure Networking</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/microsoft-azure" className="mega-box-link">Azure Analytics</Link>
                </div>
              </div>
            </div>
          </div>

          {/* AI Platforms Column */}
          <div className="space-y-2">
            <div className="mega-dropdown-header">
              <div className="mega-dropdown-box mega-dropdown-box-header">
                <div className="mega-icon-circle">
                  <i className="fas fa-robot text-2xl"></i>
                </div>
                <div className="mega-box-content">
                  <h4 className="mega-box-title">AI/Automation Platforms</h4>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/ai-infrastructure-as-a-service" className="mega-box-link">AI Infrastructure as a Service</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-flask"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/ai-testing-environments" className="mega-box-link">AI Testing Environments</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/educational-ai-platform" className="mega-box-link">Educational AI Platform</Link>
                </div>
              </div>
              <div className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className="fas fa-tachometer-alt"></i>
                </div>
                <div className="mega-box-content">
                  <Link href="/ai-operations-center" className="mega-box-link">AI Operations Center</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderTwoColumnDropdown = (items: MenuItem[]) => {
    const midpoint = Math.ceil(items.length / 2);
    const leftColumn = items.slice(0, midpoint);
    const rightColumn = items.slice(midpoint);

    return (
      <div className="mega-dropdown-content">
        <div className="grid grid-cols-2 gap-1 p-4 max-w-fit mx-auto">
          <div className="space-y-2">
            {leftColumn.map((item, index) => (
              <div key={index} className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className={getIconForMenuItem(item.label)}></i>
                </div>
                <div className="mega-box-content">
                  <Link href={item.href} className="mega-box-link">
                    {item.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {rightColumn.map((item, index) => (
              <div key={index} className="mega-dropdown-box">
                <div className="mega-icon-circle mega-icon-circle-sm">
                  <i className={getIconForMenuItem(item.label)}></i>
                </div>
                <div className="mega-box-content">
                  <Link href={item.href} className="mega-box-link">
                    {item.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const getIconForMenuItem = (label: string): string => {
    const iconMap: Record<string, string> = {
      'Higher Education': 'fas fa-university',
      'K-12 School Districts': 'fas fa-school',
      'Regional Healthcare': 'fas fa-hospital',
      'Manufacturing': 'fas fa-industry',
      'Business': 'fas fa-briefcase',
      'Venoco ($400K savings)': 'fas fa-oil-can',
      'Glen Rose ISD (50% cost reduction)': 'fas fa-school',
      'Pearland ISD (1/3 implementation time)': 'fas fa-rocket',
      'Aurora Public Schools': 'fas fa-school',
      'Crosby ISD': 'fas fa-school',
      'Integrated Project Services (IPS)': 'fas fa-briefcase',
      'See All Case Studies': 'fas fa-trophy',
      'Mission Statement': 'fas fa-bullseye',
      'Core Values': 'fas fa-heart',
      'Our Team': 'fas fa-users',
      'Blog': 'fas fa-blog',
      'Videos': 'fas fa-video',
      'Contact': 'fas fa-envelope'
    };
    return iconMap[label] || 'fas fa-circle';
  };

  const renderMenuItem = (item: MenuItem, index: number) => {
    const hasChildren = item.children && item.children.length > 0;
    
    return (
      <li key={index} className="relative group">
        <Link 
          href={item.href} 
          className="flex items-center gap-2 text-brand-blue no-underline font-medium text-lg px-3 py-4 transition-all duration-300 hover:text-brand-green hover:bg-brand-green/10 rounded-lg"
        >
          {item.label}
          {hasChildren && (
            <i className="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>
          )}
        </Link>
        
        {hasChildren && (
          <div className="mega-dropdown-wrapper opacity-0 invisible transform -translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 z-50">
            {item.label === 'SOLUTIONS' ? renderSolutionsDropdown() : renderTwoColumnDropdown(item.children || [])}
          </div>
        )}
      </li>
    );
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 bg-white z-50',
      'border-b border-gray-200 shadow-sm',
      className
    )}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <nav className="flex justify-between items-center px-5 relative" style={{height: '80px'}}>
        <Link href="/" className="flex items-center z-50">
          <img 
            src="/logo.png" 
            alt="Logical Front" 
            style={{maxHeight: '64px'}}
          />
        </Link>
        
        <button 
          className="md:hidden flex flex-col bg-none border-none cursor-pointer p-2 z-50 mobile-menu-btn"
          onClick={toggleMobileMenu}
        >
          <span className={cn(
            'w-6 h-1 bg-brand-blue mb-1 transition-all duration-300 rounded',
            mobileMenuOpen && 'rotate-45 translate-y-2'
          )}></span>
          <span className={cn(
            'w-6 h-1 bg-brand-blue mb-1 transition-all duration-300 rounded',
            mobileMenuOpen && 'opacity-0'
          )}></span>
          <span className={cn(
            'w-6 h-1 bg-brand-blue transition-all duration-300 rounded',
            mobileMenuOpen && '-rotate-45 -translate-y-2'
          )}></span>
        </button>
        
        {/* Desktop Navigation - centered between logo and search */}
        <div className={cn(
          'nav-desktop items-center justify-center flex-1',
          mobileMenuOpen 
            ? 'fixed top-0 left-0 w-full h-screen bg-white/98 backdrop-blur-xl flex flex-col justify-center' 
            : 'hidden'
        )}>
          <ul className="flex flex-row gap-4 list-none m-0 items-center">
            {menuItems.map((item, index) => renderMenuItem(item, index))}
          </ul>
        </div>
        
        {/* Search Box */}
        <div className="relative">
          <form className="flex items-center bg-brand-blue/10 rounded-full px-4 py-2 transition-all duration-300 focus-within:bg-brand-blue/15 focus-within:shadow-lg focus-within:shadow-brand-green/20">
            <input 
              type="search" 
              className="bg-transparent border-none outline-none px-2 py-1 text-sm w-48 text-gray-700 placeholder-gray-400" 
              placeholder="Search..."
            />
            <button type="submit" className="text-brand-blue hover:text-brand-green transition-colors duration-300 p-1 rounded-full hover:bg-brand-green/10">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </nav>

    </header>
  );
};

export default MegaNavigation;
export { MegaNavigation };