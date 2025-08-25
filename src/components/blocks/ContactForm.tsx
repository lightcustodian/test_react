"use client"

import React, { useState } from 'react';
import { FormField } from '../components/FormField';
import { Button } from '../items/Button';
import { Alert } from '../components/Alert';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { cn } from '../../utils/cn';

interface ContactFormProps {
  title?: string;
  description?: string;
  className?: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  industry: string;
  currentSolution: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Let's Discuss Your Infrastructure Needs",
  description = "Fill out the form below and one of our infrastructure experts will contact you within 1 business hour to discuss your specific requirements and how we can help.",
  className = '',
  onSubmit
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    industry: '',
    currentSolution: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  
  const industryOptions = [
    { value: '', label: 'Select your industry' },
    { value: 'higher-education', label: 'Higher Education' },
    { value: 'k12', label: 'K-12 Schools' },
    { value: 'healthcare', label: 'Regional Healthcare' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'financial', label: 'Financial Services' },
    { value: 'government', label: 'Government' },
    { value: 'other', label: 'Other' }
  ];
  
  const solutionOptions = [
    { value: '', label: 'Select current solution' },
    { value: 'public-cloud', label: 'Public Cloud (AWS/Azure/GCP)' },
    { value: 'private-cloud', label: 'Private Cloud' },
    { value: 'on-premise', label: 'On-Premise' },
    { value: 'hybrid', label: 'Hybrid' },
    { value: 'none', label: 'No Current Solution' }
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.industry) newErrors.industry = 'Please select an industry';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setSubmitted(true);
      onSubmit?.(formData);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          industry: '',
          currentSolution: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <div className={cn('bg-white rounded-xl shadow-lg p-8', className)}>
      <Heading level={2} variant="primary" className="mb-4">
        {title}
      </Heading>
      <Text variant="lead" className="mb-8">
        {description}
      </Text>
      
      {submitted && (
        <Alert variant="success" className="mb-6">
          Thank you for your submission! We'll be in touch soon.
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
            error={errors.firstName}
          />
          <FormField
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
            error={errors.lastName}
          />
        </div>
        
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          error={errors.email}
        />
        
        <FormField
          label="Company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          required
          error={errors.company}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Industry"
            name="industry"
            type="select"
            value={formData.industry}
            onChange={handleChange}
            required
            options={industryOptions}
            error={errors.industry}
          />
          <FormField
            label="Current Solution"
            name="currentSolution"
            type="select"
            value={formData.currentSolution}
            onChange={handleChange}
            options={solutionOptions}
            error={errors.currentSolution}
          />
        </div>
        
        <FormField
          label="How can we help you?"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Please describe your infrastructure needs, challenges, or goals..."
          error={errors.message}
        />
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            variant="primary" 
            size="large"
            icon="fas fa-paper-plane"
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
export { ContactForm };