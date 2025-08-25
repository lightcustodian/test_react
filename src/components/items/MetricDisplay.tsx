import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { Heading } from './Heading';
import { Text } from './Text';
import { cn } from '../../utils/cn';

interface MetricDisplayProps {
  value: string;
  label: string;
  icon?: string;
  description?: string;
  animateOnView?: boolean;
  variant?: 'default' | 'large' | 'compact';
  className?: string;
}

const MetricDisplay: React.FC<MetricDisplayProps> = ({
  value,
  label,
  icon,
  description,
  animateOnView = true,
  variant = 'default',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (animateOnView) {
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [animateOnView]);
  
  const containerClasses = {
    default: 'text-center p-6',
    large: 'text-center p-8',
    compact: 'text-center p-4'
  };
  
  const valueClasses = {
    default: 'text-4xl md:text-5xl font-bold text-brand-blue mb-2',
    large: 'text-5xl md:text-6xl font-bold text-brand-blue mb-3',
    compact: 'text-2xl md:text-3xl font-bold text-brand-blue mb-1'
  };
  
  return (
    <div className={cn(
      containerClasses[variant],
      'transition-all duration-700',
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4',
      className
    )}>
      {icon && (
        <div className="mb-4">
          <Icon 
            name={icon} 
            size={variant === 'large' ? 'xlarge' : 'large'} 
            color="secondary" 
          />
        </div>
      )}
      
      <div className={valueClasses[variant]}>
        {value}
      </div>
      
      <Heading 
        level={variant === 'compact' ? 5 : 4} 
        variant="primary" 
        className="mb-2"
      >
        {label}
      </Heading>
      
      {description && (
        <Text variant="small" className="text-gray-600 max-w-xs mx-auto">
          {description}
        </Text>
      )}
    </div>
  );
};

export default MetricDisplay;
export { MetricDisplay };