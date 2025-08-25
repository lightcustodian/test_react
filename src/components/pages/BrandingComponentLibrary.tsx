import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../items/Button';
import { IconCircle } from '../items/IconCircle';
import { Input } from '../items/Input';
import { Label } from '../items/Label';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Select } from '../items/Select';
import { Textarea } from '../items/Textarea';
import { Badge } from '../items/Badge';
import { Divider } from '../items/Divider';
import { Icon } from '../items/Icon';
import { Spinner } from '../items/Spinner';
import { Card } from '../components/Card';
import { FormField } from '../components/FormField';
import { SearchBar } from '../components/SearchBar';
import { Alert } from '../components/Alert';
import { Modal } from '../components/Modal';
import { Tab } from '../components/Tab';
import { Accordion } from '../components/Accordion';

const BrandingComponentLibrary: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const tabContent = [
    { label: 'Overview', content: <Text>This is the overview tab content.</Text> },
    { label: 'Features', content: <Text>This is the features tab content.</Text> },
    { label: 'Pricing', content: <Text>This is the pricing tab content.</Text> }
  ];

  const accordionItems = [
    { title: 'What is included?', content: <Text>All components, documentation, and support.</Text> },
    { title: 'How do I get started?', content: <Text>Import the components and start building!</Text> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-blue to-brand-green text-white py-16 mb-16">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/branding" className="text-white hover:text-gray-200 transition-colors">
              <Button variant="secondary" icon="fas fa-arrow-left" size="small">
                Back to Design System
              </Button>
            </Link>
          </div>
          <Heading level={1} variant="white" className="mb-4">Component Library</Heading>
          <Text variant="lead" className="text-white/90">
            Complete showcase of all atomic design components in our system
          </Text>
        </div>
      </div>

      <div className="container mx-auto px-6 space-y-20">

        {/* ITEMS (ATOMS) SECTION */}
        <section>
          <Heading level={2} variant="primary" className="mb-8">Items (Atoms)</Heading>
          <Text variant="lead" className="mb-12">
            The smallest building blocks of our design system
          </Text>

          {/* Typography */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-6">Typography</Heading>
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <Text variant="small" className="text-gray-500 mb-4">HEADINGS</Text>
                  <div className="space-y-4">
                    <Heading level={1} className="mb-0">Heading 1</Heading>
                    <Heading level={2} className="mb-0">Heading 2</Heading>
                    <Heading level={3} className="mb-0">Heading 3</Heading>
                    <Heading level={4} className="mb-0">Heading 4</Heading>
                  </div>
                </div>
                <div>
                  <Text variant="small" className="text-gray-500 mb-4">TEXT VARIANTS</Text>
                  <div className="space-y-3">
                    <Text variant="lead">Lead text for introductions</Text>
                    <Text variant="default">Default body text</Text>
                    <Text variant="small">Small supporting text</Text>
                    <Text variant="muted">Muted text for captions</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Elements */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-6">Form Elements</Heading>
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <Label required>Text Input</Label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label>Select Dropdown</Label>
                    <Select options={[
                      { value: '', label: 'Choose an option' },
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' }
                    ]} />
                  </div>
                  <div>
                    <Label>Textarea</Label>
                    <Textarea placeholder="Enter your message..." />
                  </div>
                </div>
                <div className="space-y-6">
                  <Text variant="small" className="text-gray-500">INPUT VARIANTS</Text>
                  <Input variant="default" placeholder="Default variant" />
                  <Input variant="filled" placeholder="Filled variant" />
                  <Input variant="ghost" placeholder="Ghost variant" />
                  <Input error placeholder="Error state" />
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-6">Interactive Elements</Heading>
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <Text variant="small" className="text-gray-500 mb-4">BUTTONS</Text>
                  <div className="space-y-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="primary" size="small">Small</Button>
                    <Button variant="primary" size="large">Large</Button>
                  </div>
                </div>
                <div>
                  <Text variant="small" className="text-gray-500 mb-4">BADGES</Text>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Default</Badge>
                    <Badge variant="primary">Primary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="danger">Danger</Badge>
                  </div>
                </div>
                <div>
                  <Text variant="small" className="text-gray-500 mb-4">ICONS & LOADING</Text>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Icon name="fas fa-star" color="primary" />
                      <Icon name="fas fa-heart" color="secondary" />
                      <Icon name="fas fa-check" color="default" />
                    </div>
                    <div className="flex items-center gap-4">
                      <Spinner size="small" />
                      <Spinner size="default" />
                      <Spinner size="large" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-6">Visual Elements</Heading>
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <div className="space-y-8">
                <div>
                  <Text variant="small" className="text-gray-500 mb-4">DIVIDERS</Text>
                  <Divider variant="default" />
                  <Divider variant="thick" />
                  <Divider variant="dashed" />
                </div>
                <div>
                  <Text variant="small" className="text-gray-500 mb-4">ICON CIRCLES</Text>
                  <div className="flex gap-4">
                    <IconCircle icon="fas fa-shield-alt" variant="trust" />
                    <IconCircle icon="fas fa-chart-line" variant="growth" />
                    <IconCircle icon="fas fa-cog" variant="primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPONENTS (MOLECULES) SECTION */}
        <section>
          <Heading level={2} variant="primary" className="mb-8">Components (Molecules)</Heading>
          <Text variant="lead" className="mb-12">
            Combinations of atoms that work together as functional units
          </Text>

          {/* Form Components */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-6">Form Components</Heading>
            <div className="bg-white rounded-xl p-8 shadow-sm border">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Enter your full name"
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Enter your email"
                    required
                  />
                  <FormField
                    label="Message"
                    name="message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Enter your message..."
                  />
                </div>
                <div>
                  <Text variant="small" className="text-gray-500 mb-4">SEARCH BAR</Text>
                  <SearchBar placeholder="Search components..." />
                  
                  <Divider />
                  
                  <Text variant="small" className="text-gray-500 mb-4">CARD COMPONENT</Text>
                  <Card variant="elevated">
                    <IconCircle icon="fas fa-rocket" variant="primary" className="mb-4" />
                    <Heading level={4} className="mb-2">Feature Card</Heading>
                    <Text>This is an example of how atoms combine into molecules.</Text>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Components */}
          <div className="mb-16">
            <Heading level={3} variant="primary" className="mb-6">Interactive Components</Heading>
            <div className="bg-white rounded-xl p-8 shadow-sm border space-y-8">
              
              {/* Alerts */}
              <div>
                <Text variant="small" className="text-gray-500 mb-4">ALERT MESSAGES</Text>
                <div className="space-y-4">
                  <Alert variant="info">This is an informational message.</Alert>
                  <Alert variant="success">Operation completed successfully!</Alert>
                  <Alert variant="warning">Please review your settings.</Alert>
                  <Alert variant="error">An error occurred. Please try again.</Alert>
                </div>
              </div>

              {/* Tabs */}
              <div>
                <Text variant="small" className="text-gray-500 mb-4">TAB NAVIGATION</Text>
                <Tab tabs={tabContent} variant="default" />
              </div>

              {/* Accordion */}
              <div>
                <Text variant="small" className="text-gray-500 mb-4">ACCORDION</Text>
                <Accordion items={accordionItems} />
              </div>

              {/* Modal */}
              <div>
                <Text variant="small" className="text-gray-500 mb-4">MODAL DIALOG</Text>
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                <Modal
                  isOpen={modalOpen}
                  onClose={() => setModalOpen(false)}
                  title="Example Modal"
                  footer={
                    <>
                      <Button variant="secondary" onClick={() => setModalOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={() => setModalOpen(false)}>
                        Confirm
                      </Button>
                    </>
                  }
                >
                  <Text>This is an example modal dialog showcasing our modal component.</Text>
                </Modal>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="mb-20">
          <Heading level={2} variant="primary" className="mb-8">Usage Guidelines</Heading>
          <div className="bg-white rounded-xl p-8 shadow-sm border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Heading level={4} variant="primary" className="mb-4">Component Hierarchy</Heading>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="primary">Items</Badge>
                    <Text>Atoms - Smallest building blocks</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="success">Components</Badge>
                    <Text>Molecules - Functional combinations</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="warning">Blocks</Badge>
                    <Text>Organisms - Complex sections</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="default">Templates</Badge>
                    <Text>Page-level layouts</Text>
                  </div>
                </div>
              </div>
              <div>
                <Heading level={4} variant="primary" className="mb-4">Best Practices</Heading>
                <div className="space-y-2">
                  <Text variant="small">• Use atoms for consistent styling</Text>
                  <Text variant="small">• Combine atoms into reusable molecules</Text>
                  <Text variant="small">• Follow variant patterns for flexibility</Text>
                  <Text variant="small">• Maintain visual hierarchy with typography</Text>
                  <Text variant="small">• Use proper spacing and alignment</Text>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandingComponentLibrary;
export { BrandingComponentLibrary };