import React from 'react';
import { Icon } from './Icon';
import { Text } from './Text';
import { cn } from '../../utils/cn';

interface ComplianceBadgeProps {
  standard?: string;
  framework?: string; // Alternative to standard for compatibility
  level?: 'certified' | 'compliant' | 'designed-for';
  description?: string;
  verified?: boolean;
  variant?: 'default' | 'large' | 'minimal';
  size?: 'small' | 'default' | 'large';
  className?: string;
}

const ComplianceBadge: React.FC<ComplianceBadgeProps> = ({
  standard,
  framework,
  level,
  description,
  verified = true,
  variant = 'default',
  size = 'default',
  className = ''
}) => {
  const displayText = framework || standard || 'Compliance';
  const actualSize = size === 'small' ? 'minimal' : variant;
  const baseClasses = 'inline-flex items-center gap-2 rounded-lg transition-all duration-300 hover:shadow-md';
  
  const variants = {
    default: 'px-4 py-2 bg-white border-2 border-brand-green',
    large: 'px-6 py-3 bg-white border-2 border-brand-green',
    minimal: 'px-3 py-1 bg-brand-green/10 border border-brand-green/30'
  };
  
  const iconSize = actualSize === 'large' ? 'default' : 'small';
  const textVariant = actualSize === 'large' ? 'default' : 'small';
  
  return (
    <div 
      className={cn(baseClasses, variants[actualSize], className)}
      title={description}
    >
      {verified && (
        <Icon 
          name="fas fa-check-circle" 
          color="secondary" 
          size={iconSize}
        />
      )}
      
      <Text 
        variant={textVariant} 
        className="font-semibold text-brand-blue"
        as="span"
      >
        {displayText}
      </Text>
      
      {variant === 'large' && description && (
        <div className="hidden group-hover:block absolute top-full left-0 mt-2 p-3 bg-white border rounded-lg shadow-lg z-10 max-w-xs">
          <Text variant="small">{description}</Text>
        </div>
      )}
    </div>
  );
};

export default ComplianceBadge;
export { ComplianceBadge };