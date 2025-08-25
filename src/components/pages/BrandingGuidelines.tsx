import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../items/Button';
import { IconCircle } from '../items/IconCircle';

const BrandingGuidelines: React.FC = () => {
  const brandColors = [
    { name: 'Brand Blue', hex: '#125EAD', class: 'bg-brand-blue', usage: 'Primary brand color, headers, CTAs' },
    { name: 'Brand Green', hex: '#4BB74E', class: 'bg-brand-green', usage: 'Secondary brand color, accents, success states' },
    { name: 'Dark Blue', hex: '#0D3F7A', class: 'bg-brand-dark-blue', usage: 'Dark variant, hover states' },
    { name: 'Dark Green', hex: '#3A9B3E', class: 'bg-brand-dark-green', usage: 'Dark variant, hover states' },
    { name: 'Light Blue', hex: '#E6F2FF', class: 'bg-brand-light-blue', usage: 'Background tints, subtle highlights' },
    { name: 'Light Green', hex: '#E8F5E9', class: 'bg-brand-light-green', usage: 'Background tints, subtle highlights' }
  ];

  const typography = [
    { name: 'Display', size: '48px', weight: '800', usage: 'Hero titles, main headings' },
    { name: 'Heading 1', size: '36px', weight: '700', usage: 'Section titles' },
    { name: 'Heading 2', size: '24px', weight: '600', usage: 'Subsection titles' },
    { name: 'Heading 3', size: '20px', weight: '600', usage: 'Card titles, smaller headings' },
    { name: 'Body Large', size: '18px', weight: '400', usage: 'Lead paragraphs, important text' },
    { name: 'Body', size: '16px', weight: '400', usage: 'Regular body text' },
    { name: 'Small', size: '14px', weight: '400', usage: 'Captions, metadata' }
  ];

  const iconVariants = [
    { name: 'Trust', class: 'bg-blue-500', usage: 'Security, reliability features' },
    { name: 'Innovation', class: 'bg-green-500', usage: 'New technology, solutions' },
    { name: 'Expertise', class: 'bg-purple-500', usage: 'Knowledge, professional services' },
    { name: 'Support', class: 'bg-orange-500', usage: 'Customer service, help features' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/branding" className="text-white hover:text-gray-200 transition-colors">
              <Button variant="secondary" icon="fas fa-arrow-left" size="small">
                Back to Design System
              </Button>
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-4">Brand Guidelines</h1>
          <p className="text-xl opacity-90">
            Visual identity, colors, typography, and usage standards for consistent branding
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Brand Colors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-8">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandColors.map((color, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className={`${color.class} h-32`}></div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{color.name}</h3>
                  <p className="text-gray-600 mb-2 font-mono text-sm">{color.hex}</p>
                  <p className="text-sm text-gray-500">{color.usage}</p>
                  <div className="mt-4 space-y-2">
                    <code className="block text-xs bg-gray-100 p-2 rounded">
                      CSS: {color.class.replace('bg-', '')}
                    </code>
                    <code className="block text-xs bg-gray-100 p-2 rounded">
                      Tailwind: {color.class}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-8">Typography Scale</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            {typography.map((type, index) => (
              <div key={index} className="border-b border-gray-100 py-6 last:border-b-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{type.name}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Size: {type.size}</p>
                      <p>Weight: {type.weight}</p>
                      <p>Usage: {type.usage}</p>
                    </div>
                  </div>
                  <div>
                    <div 
                      className={`text-brand-blue`}
                      style={{ 
                        fontSize: type.size, 
                        fontWeight: type.weight,
                        lineHeight: '1.2'
                      }}
                    >
                      Sample Text
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Icon System */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-8">Icon System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {iconVariants.map((variant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <IconCircle 
                    icon="fas fa-star" 
                    variant={variant.name.toLowerCase() as any}
                  />
                </div>
                <h3 className="font-bold mb-2">{variant.name}</h3>
                <p className="text-sm text-gray-600">{variant.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-brand-blue mb-8">Usage Guidelines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">✓ Do</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Use brand colors for primary actions and navigation</li>
                <li>• Maintain consistent spacing and typography</li>
                <li>• Use icons to support and clarify content</li>
                <li>• Follow the established visual hierarchy</li>
                <li>• Test color combinations for accessibility</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">✗ Don't</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Modify brand colors or use off-brand colors</li>
                <li>• Mix different icon styles within the same context</li>
                <li>• Use more than 3 colors in a single component</li>
                <li>• Override the established typography scale</li>
                <li>• Place text on backgrounds with poor contrast</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandingGuidelines;
export { BrandingGuidelines };