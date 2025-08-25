import React from 'react';
import { NumberedBadge } from '../items/NumberedBadge';
import { Icon } from '../items/Icon';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { cn } from '../../utils/cn';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon?: string;
  benefits?: string[];
  timeframe?: string;
  variant?: 'default' | 'horizontal' | 'detailed';
  isActive?: boolean;
  className?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  title,
  description,
  icon,
  benefits = [],
  timeframe,
  variant = 'default',
  isActive = false,
  className = ''
}) => {
  const baseClasses = 'transition-all duration-300 hover:shadow-lg';
  
  const variants = {
    default: 'bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-brand-green',
    horizontal: 'flex items-start gap-6 bg-white rounded-xl p-6',
    detailed: 'bg-white rounded-xl p-8 border-l-4 border-brand-blue'
  };
  
  const activeClasses = isActive ? 'border-brand-green shadow-md scale-105' : '';
  
  if (variant === 'horizontal') {
    return (
      <div className={cn(variants.horizontal, activeClasses, className)}>
        <div className="flex-shrink-0">
          <NumberedBadge number={number} variant="primary" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            {icon && <Icon name={icon} color="secondary" size="large" />}
            <Heading level={4} variant="primary" className="mb-0">
              {title}
            </Heading>
          </div>
          
          <Text className="mb-4">{description}</Text>
          
          {benefits.length > 0 && (
            <ul className="space-y-1">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon name="fas fa-check" color="secondary" size="small" />
                  <Text variant="small">{benefit}</Text>
                </li>
              ))}
            </ul>
          )}
          
          {timeframe && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full">
              <Icon name="fas fa-clock" color="secondary" size="small" />
              <Text variant="small" className="text-brand-green font-medium">
                {timeframe}
              </Text>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className={cn(baseClasses, variants[variant], activeClasses, className)}>
      <div className="text-center mb-4">
        <NumberedBadge 
          number={number} 
          variant={isActive ? 'success' : 'primary'} 
          className="mb-4"
        />
        
        {icon && (
          <div className="mb-4">
            <Icon name={icon} color="secondary" size="xlarge" />
          </div>
        )}
      </div>
      
      <div className="text-center">
        <Heading level={4} variant="primary" className="mb-3">
          {title}
        </Heading>
        
        <Text className="mb-4">{description}</Text>
        
        {benefits.length > 0 && (
          <div className="text-left">
            <Text variant="small" className="font-semibold text-gray-600 mb-2">
              Key Benefits:
            </Text>
            <ul className="space-y-1 mb-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon name="fas fa-check" color="secondary" size="small" />
                  <Text variant="small">{benefit}</Text>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {timeframe && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 rounded-full">
            <Icon name="fas fa-clock" color="secondary" size="small" />
            <Text variant="small" className="text-brand-green font-medium">
              {timeframe}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessStep;
export { ProcessStep };