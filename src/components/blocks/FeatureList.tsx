"use client"

import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { Button } from '../items/Button';
import { cn } from '../../utils/cn';

interface Feature {
  title: string;
  description: string;
  icon?: string;
  badge?: string;
  available?: boolean;
  highlight?: boolean;
}

interface FeatureListProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  variant?: 'default' | 'checklist' | 'detailed' | 'compact';
  showStatus?: boolean;
  ctaButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
  title,
  subtitle,
  features,
  variant = 'default',
  showStatus = false,
  ctaButton,
  className = ''
}) => {
  const containerClasses = cn(
    'w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg',
    className
  );

  const getStatusIcon = (available: boolean) => {
    return available ? 'fas fa-check-circle' : 'fas fa-times-circle';
  };

  const getStatusColor = (available: boolean) => {
    return available ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className={containerClasses}>
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-6">
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
      )}

      {/* Features */}
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={cn(
              'transition-all duration-300',
              {
                'p-4 bg-brand-blue/5 rounded-lg border-l-4 border-brand-blue': feature.highlight,
                'flex items-start gap-3': variant !== 'compact',
                'flex items-center gap-2': variant === 'compact'
              }
            )}
          >
            {/* Icon or Status */}
            <div className="flex-shrink-0">
              {showStatus ? (
                <Icon 
                  name={getStatusIcon(feature.available !== false)} 
                  className={getStatusColor(feature.available !== false)}
                  size="small"
                />
              ) : feature.icon ? (
                <div className="w-8 h-8 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                  <Icon name={feature.icon} color="primary" size="small" />
                </div>
              ) : variant === 'checklist' ? (
                <Icon name="fas fa-check" color="secondary" size="small" />
              ) : null}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Text className="font-semibold text-gray-900">
                      {feature.title}
                    </Text>
                    {feature.badge && (
                      <Badge variant="success" size="small">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  
                  {variant !== 'compact' && (
                    <Text variant="small" className="text-gray-600">
                      {feature.description}
                    </Text>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {ctaButton && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button 
            variant="primary"
            href={ctaButton.href}
            onClick={ctaButton.onClick}
            className="w-full"
          >
            {ctaButton.text}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FeatureList;
export { FeatureList };