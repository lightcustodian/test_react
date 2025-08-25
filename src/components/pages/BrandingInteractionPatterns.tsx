import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../items/Button';
import { Card } from '../components/Card';
import { IconCircle } from '../items/IconCircle';

const BrandingInteractionPatterns: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string>('buttons');

  const interactionPatterns = [
    {
      id: 'buttons',
      title: 'Button Interactions',
      description: 'Hover effects, loading states, and feedback patterns for buttons',
      examples: ['Primary Button', 'Secondary Button', 'Large Button', 'Small Button']
    },
    {
      id: 'cards',
      title: 'Card Hover Effects',
      description: 'Elevation changes, shadow transitions, and content reveals',
      examples: ['Elevated Card', 'Feature Card', 'Value Card']
    },
    {
      id: 'navigation',
      title: 'Navigation Patterns',
      description: 'Dropdown animations, menu transitions, and active states',
      examples: ['Mega Dropdown', 'Mobile Menu', 'Breadcrumbs']
    },
    {
      id: 'forms',
      title: 'Form Interactions',
      description: 'Input focus states, validation feedback, and submission flows',
      examples: ['Input Focus', 'Validation States', 'Form Submission']
    }
  ];

  const animationPrinciples = [
    {
      title: 'Duration',
      description: 'Quick transitions (200-300ms) for immediate feedback',
      icon: 'fas fa-clock'
    },
    {
      title: 'Easing',
      description: 'Natural motion curves using ease-in-out timing functions',
      icon: 'fas fa-wave-square'
    },
    {
      title: 'Purpose',
      description: 'Every animation serves a functional purpose, not decoration',
      icon: 'fas fa-bullseye'
    },
    {
      title: 'Accessibility',
      description: 'Respect user preferences for reduced motion',
      icon: 'fas fa-universal-access'
    }
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
          <h1 className="text-5xl font-bold mb-4">Interaction Patterns</h1>
          <p className="text-xl opacity-90">
            User interaction behaviors, animations, and micro-interaction standards
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Interactive Demo Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-8">Interactive Patterns</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Pattern Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold mb-4">Pattern Categories</h3>
                <nav className="space-y-2">
                  {interactionPatterns.map((pattern) => (
                    <button
                      key={pattern.id}
                      onClick={() => setActiveDemo(pattern.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        activeDemo === pattern.id 
                          ? 'bg-brand-blue text-white' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {pattern.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Demo Area */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-8">
                {activeDemo === 'buttons' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Button Interactions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4">Button Variants</h4>
                        <div className="space-y-4">
                          <Button variant="primary" icon="fas fa-rocket">Primary Button</Button>
                          <Button variant="secondary" icon="fas fa-star">Secondary Button</Button>
                          <Button variant="primary" size="large" icon="fas fa-check">Large Primary</Button>
                          <Button variant="primary" size="small" icon="fas fa-heart">Small Primary</Button>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Hover Effects</h4>
                        <p className="text-gray-600 text-sm mb-4">
                          Buttons include subtle hover animations with color transitions, 
                          shadow effects, and scale transforms for tactile feedback.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-2">
                          <li>• 300ms transition duration</li>
                          <li>• Color and shadow changes</li>
                          <li>• Slight scale transform (1.02x)</li>
                          <li>• Focus states for accessibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'cards' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Card Hover Effects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card variant="elevated">
                        <IconCircle icon="fas fa-shield-alt" variant="trust" className="mb-4" />
                        <h4 className="text-lg font-bold mb-2">Elevated Card</h4>
                        <p className="text-gray-600 text-sm">Hover to see elevation effect</p>
                      </Card>
                      <Card variant="feature">
                        <IconCircle icon="fas fa-star" variant="expertise" className="mb-4" />
                        <h4 className="text-lg font-bold mb-2">Feature Card</h4>
                        <p className="text-gray-600 text-sm">Interactive hover animations</p>
                      </Card>
                      <Card variant="value">
                        <IconCircle icon="fas fa-rocket" variant="innovation" className="mb-4" />
                        <h4 className="text-lg font-bold mb-2">Value Card</h4>
                        <p className="text-gray-600 text-sm">Smooth transitions</p>
                      </Card>
                    </div>
                  </div>
                )}

                {activeDemo === 'navigation' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Navigation Patterns</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4">Mega Dropdown Animation</h4>
                        <p className="text-gray-600 mb-4">
                          Navigation dropdowns use opacity and transform transitions for smooth reveals.
                        </p>
                        <div className="bg-gray-100 rounded-lg p-4">
                          <code className="text-sm">
                            opacity: 0 → 1<br/>
                            transform: translateY(-12px) → translateY(0)<br/>
                            transition: all 300ms ease-out
                          </code>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4">Mobile Menu Transition</h4>
                        <p className="text-gray-600 mb-4">
                          Hamburger menu transforms with backdrop blur and slide animations.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'forms' && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Form Interactions</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4">Input Focus States</h4>
                        <div className="space-y-4">
                          <input 
                            type="text" 
                            placeholder="Focus me for border animation"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-blue focus:outline-none transition-colors duration-200"
                          />
                          <input 
                            type="email" 
                            placeholder="Email with brand styling"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-brand-green focus:outline-none transition-colors duration-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Animation Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-brand-blue mb-8">Animation Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animationPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <IconCircle icon={principle.icon} variant="innovation" />
                </div>
                <h3 className="font-bold text-lg mb-3">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CSS Guidelines */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-brand-blue mb-8">Implementation Guidelines</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">CSS Transitions</h3>
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <code className="text-sm">
                  {`/* Standard transition */
transition: all 300ms ease-out;

/* Hover effects */
:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}`}
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <div className="bg-gray-100 rounded-lg p-4">
                <code className="text-sm">
                  {`/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
                </code>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandingInteractionPatterns;
export { BrandingInteractionPatterns };