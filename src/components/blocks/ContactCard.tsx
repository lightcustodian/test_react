"use client"

import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Button } from '../items/Button';
import { Badge } from '../items/Badge';
import { cn } from '../../utils/cn';

interface ContactMethod {
  type: 'phone' | 'email' | 'address' | 'hours' | 'emergency';
  label: string;
  value: string;
  href?: string;
  icon?: string;
  available?: boolean;
}

interface ContactCardProps {
  title?: string;
  subtitle?: string;
  person?: {
    name: string;
    title: string;
    image?: string;
    bio?: string;
  };
  department?: string;
  contactMethods: ContactMethod[];
  variant?: 'default' | 'person' | 'department' | 'emergency';
  badge?: string;
  ctaButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  };
  className?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  subtitle,
  person,
  department,
  contactMethods,
  variant = 'default',
  badge,
  ctaButton,
  className = ''
}) => {
  const defaultIcons = {
    phone: 'fas fa-phone',
    email: 'fas fa-envelope',
    address: 'fas fa-map-marker-alt',
    hours: 'fas fa-clock',
    emergency: 'fas fa-exclamation-triangle'
  };

  const containerClasses = cn(
    'w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg border border-gray-200',
    {
      'border-red-200 bg-red-50': variant === 'emergency',
      'border-brand-blue/20 bg-brand-blue/5': variant === 'department'
    },
    className
  );

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className="mb-6">
        {badge && (
          <Badge 
            variant={variant === 'emergency' ? 'danger' : 'success'} 
            className="mb-3"
          >
            {badge}
          </Badge>
        )}

        {title && (
          <Heading level={4} variant="primary" className="mb-2">
            {title}
          </Heading>
        )}

        {subtitle && (
          <Text className="text-gray-600">
            {subtitle}
          </Text>
        )}
      </div>

      {/* Person Info */}
      {person && variant === 'person' && (
        <div className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-start gap-4">
            {person.image && (
              <img 
                src={person.image}
                alt={person.name}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div className="flex-1">
              <Heading level={5} variant="primary" className="mb-1">
                {person.name}
              </Heading>
              <Text variant="small" className="text-brand-blue font-semibold mb-2">
                {person.title}
              </Text>
              {person.bio && (
                <Text variant="small" className="text-gray-600">
                  {person.bio}
                </Text>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Department */}
      {department && (
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <Icon name="fas fa-building" color="primary" size="small" />
            <Text className="font-semibold text-brand-blue">
              {department}
            </Text>
          </div>
        </div>
      )}

      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center">
              <Icon 
                name={method.icon || defaultIcons[method.type]} 
                color={variant === 'emergency' ? 'danger' : 'primary'} 
                size="small" 
              />
            </div>
            
            <div className="flex-1">
              <Text variant="small" className="font-semibold text-gray-900 mb-1">
                {method.label}
              </Text>
              
              {method.href ? (
                <a 
                  href={method.href}
                  className="text-brand-blue hover:text-brand-green transition-colors duration-300"
                >
                  <Text variant="small">{method.value}</Text>
                </a>
              ) : (
                <Text variant="small" className="text-gray-700">
                  {method.value}
                </Text>
              )}
              
              {method.available !== undefined && (
                <div className="mt-1">
                  <Badge 
                    variant={method.available ? 'success' : 'warning'}
                    size="small"
                  >
                    {method.available ? 'Available' : 'Unavailable'}
                  </Badge>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {ctaButton && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button 
            variant={ctaButton.variant || 'primary'}
            href={ctaButton.href}
            onClick={ctaButton.onClick}
            className="w-full"
          >
            {ctaButton.text}
          </Button>
        </div>
      )}

      {/* Emergency Footer */}
      {variant === 'emergency' && (
        <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-200">
          <div className="flex items-center gap-2">
            <Icon name="fas fa-info-circle" className="text-red-600" size="small" />
            <Text variant="small" className="text-red-700 font-semibold">
              For immediate assistance outside business hours
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactCard;
export { ContactCard };