import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';
import { Button } from '../items/Button';

const BrandingIndex: React.FC = () => {
  const brandingPages = [
    {
      title: 'Component Library',
      description: 'Individual UI components that power our design system',
      path: '/branding/component-library',
      icon: 'fas fa-cube'
    },
    {
      title: 'Block Library',
      description: 'Pre-built content sections for rapid page assembly',
      path: '/branding/block-library',
      icon: 'fas fa-th-large'
    },
    {
      title: 'Brand Guidelines',
      description: 'Visual identity, colors, typography, and usage rules',
      path: '/branding/brand-guidelines',
      icon: 'fas fa-palette'
    },
    {
      title: 'Interaction Patterns',
      description: 'User interaction behaviors and animation standards',
      path: '/branding/interaction-patterns',
      icon: 'fas fa-hand-pointer'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Logical Front Design System</h1>
          <p className="text-xl opacity-90 mb-8">
            Comprehensive design system for building consistent, beautiful, and functional interfaces
          </p>
          <Link to="/">
            <Button variant="secondary" icon="fas fa-arrow-left">
              Back to Main Site
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brandingPages.map((page, index) => (
            <Link key={index} to={page.path} className="no-underline">
              <Card variant="elevated" className="h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl text-brand-green">
                    <i className={page.icon}></i>
                  </div>
                  <h2 className="text-2xl font-bold text-brand-blue">{page.title}</h2>
                </div>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <div className="text-brand-green font-semibold flex items-center gap-2">
                  View Documentation
                  <i className="fas fa-arrow-right"></i>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Design System Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-green">15+</div>
              <div className="text-gray-600">Components</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green">8</div>
              <div className="text-gray-600">Block Types</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green">4</div>
              <div className="text-gray-600">Icon Variants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-green">100%</div>
              <div className="text-gray-600">Responsive</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingIndex;
export { BrandingIndex };