import React from 'react';
import { FooterColumn } from '../components/FooterColumn';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';

const Footer: React.FC = () => {
  const solutionsLinks = [
    { label: 'Private Cloud Infrastructure', href: '/solutions' },
    { label: 'On-Premise Solutions', href: '/solutions' },
    { label: 'Microsoft Azure Integration', href: '/solutions' },
    { label: 'AI/Automation Platforms', href: '/solutions' }
  ];

  const industriesLinks = [
    { label: 'Higher Education', href: '/higher-education' },
    { label: 'K-12 School Districts', href: '/industries' },
    { label: 'Regional Healthcare', href: '/industries' },
    { label: 'Manufacturing', href: '/industries' }
  ];

  const companyLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: '/blog' }
  ];

  return (
    <footer className="bg-gray-800 text-white py-16">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <style>{`
        .footer-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 2.5rem;
          grid-template-columns: 1fr;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
      
      <div className="container mx-auto px-6">
        <div className="footer-grid">
          
          {/* Company Info */}
          <div className="text-left lg:col-span-1">
            <div className="flex items-center mb-5">
              <img 
                src="/logo.png" 
                alt="Logical Front" 
                className="max-h-16 mr-3"
              />
            </div>
            <Text variant="white" className="mb-5 text-gray-300">
              Infrastructure Solutions That Put You in Control
            </Text>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="fas fa-phone" color="secondary" />
                <Text variant="white" className="text-gray-200">(801) 203-3141</Text>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="fas fa-envelope" color="secondary" />
                <Text variant="white" className="text-gray-200">info@logicalfront.com</Text>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="fas fa-map-marker-alt" color="secondary" className="mt-1" />
                <div>
                  <Text variant="white" className="text-gray-200">9690 S 300 W, C15</Text>
                  <Text variant="white" className="text-gray-200">Sandy, UT 84070</Text>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <FooterColumn title="Solutions" links={solutionsLinks} />

          {/* Industries */}
          <FooterColumn title="Industries" links={industriesLinks} />

          {/* Company */}
          <FooterColumn title="Company" links={companyLinks} />
          
          {/* Social Media - New 5th Column */}
          <div className="text-left">
            <Text variant="white" className="text-white font-semibold mb-4 text-lg">
              Connect With Us
            </Text>
            <div className="flex flex-col space-y-3">
              <a 
                href="https://www.linkedin.com/company/494109" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-green transition-colors duration-300"
              >
                <Icon name="fab fa-linkedin" size="medium" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com/LogicalFront" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-green transition-colors duration-300"
              >
                <Icon name="fab fa-twitter" size="medium" />
                <span>Twitter</span>
              </a>
              <a 
                href="https://www.facebook.com/TheLogicalFront/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-brand-green transition-colors duration-300"
              >
                <Icon name="fab fa-facebook" size="medium" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text variant="white" className="text-gray-400 mb-4 md:mb-0">
              © 2024 Logical Front. All rights reserved.
            </Text>
            <div className="flex items-center gap-6">
              <Text variant="white" className="text-gray-400 text-sm">
                Privacy Policy
              </Text>
              <Text variant="white" className="text-gray-400 text-sm">
                Terms of Service
              </Text>
              <Text variant="white" className="text-gray-400 text-sm">
                Security
              </Text>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export { Footer };