import React from 'react';
import { NumberedBadge } from '../items/NumberedBadge';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { cn } from '../../utils/cn';

interface ChallengeCardProps {
  number?: number;
  title: string;
  description: string;
  painPoints?: string[];
  variant?: 'challenge' | 'solution';
  className?: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  number,
  title,
  description,
  painPoints = [],
  variant = 'challenge',
  className = ''
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300 hover:shadow-lg';
  
  const variants = {
    challenge: 'bg-red-50 border-l-4 border-red-500',
    solution: 'bg-green-50 border-l-4 border-brand-green'
  };
  
  const iconColor = variant === 'challenge' ? 'text-red-500' : 'text-brand-green';
  const iconName = variant === 'challenge' ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle';
  
  return (
    <div className={cn(baseClasses, variants[variant], className)}>
      <div className="flex items-start gap-4 mb-4">
        {number && (
          <NumberedBadge 
            number={number} 
            variant={variant === 'challenge' ? 'default' : 'success'}
          />
        )}
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <Icon name={iconName} className={iconColor} size="large" />
            <Heading level={4} className="mb-0">
              {title}
            </Heading>
          </div>
          
          <Text className="mb-4">{description}</Text>
          
          {painPoints.length > 0 && (
            <div>
              <Text variant="small" className="font-semibold mb-2">
                {variant === 'challenge' ? 'Common Pain Points:' : 'Key Benefits:'}
              </Text>
              <ul className="space-y-2">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon 
                      name={variant === 'challenge' ? 'fas fa-times' : 'fas fa-check'} 
                      className={iconColor} 
                      size="small" 
                    />
                    <Text variant="small">{point}</Text>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
export { ChallengeCard };