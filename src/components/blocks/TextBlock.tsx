import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Button } from '../items/Button';
import { Badge } from '../items/Badge';
import { Icon } from '../items/Icon';
import { cn } from '../../utils/cn';

interface TextBlockProps {
  title?: string;
  subtitle?: string;
  content: string | React.ReactNode;
  width?: 'half' | 'full';
  variant?: 'default' | 'highlighted' | 'quote' | 'announcement' | 'feature' | 'minimal';
  backgroundColor?: 'white' | 'gray' | 'blue' | 'green' | 'gradient';
  textAlign?: 'left' | 'center' | 'right';
  icon?: string;
  badge?: string;
  ctaButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  };
  quote?: {
    author?: string;
    title?: string;
    company?: string;
  };
  bulletPoints?: string[];
  numberedList?: string[];
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  title,
  subtitle,
  content,
  width = 'half',
  variant = 'default',
  backgroundColor = 'white',
  textAlign = 'left',
  icon,
  badge,
  ctaButton,
  secondaryButton,
  quote,
  bulletPoints,
  numberedList,
  className = ''
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-brand-blue/5',
    green: 'bg-brand-green/5',
    gradient: 'bg-gradient-to-br from-brand-blue/5 to-brand-green/5'
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center', 
    right: 'text-right'
  };

  const containerClasses = cn(
    'group',
    width === 'full' ? 'w-full' : 'w-full max-w-2xl',
    className
  );

  const contentClasses = cn(
    'transition-all duration-300',
    backgroundClasses[backgroundColor],
    alignClasses[textAlign],
    {
      'p-6 rounded-xl shadow-lg hover:shadow-xl': variant !== 'minimal',
      'p-8': width === 'full' && variant !== 'minimal',
      'border-l-4 border-brand-blue pl-6': variant === 'highlighted',
      'border border-gray-200': variant === 'default' && backgroundColor === 'white',
      'bg-gradient-to-r from-brand-blue to-brand-green text-white p-8 rounded-xl': variant === 'announcement',
      'relative overflow-hidden': variant === 'quote'
    }
  );

  // Quote variant
  if (variant === 'quote') {
    return (
      <div className={containerClasses}>
        <div className={cn(contentClasses, 'bg-white border-l-4 border-brand-green')}>
          {/* Quote icon */}
          <div className="mb-4">
            <Icon name="fas fa-quote-left" color="secondary" size="large" />
          </div>
          
          {/* Quote content */}
          <div className="mb-6">
            {typeof content === 'string' ? (
              <Text className="text-lg italic text-gray-700">
                "{content}"
              </Text>
            ) : (
              content
            )}
          </div>
          
          {/* Quote attribution */}
          {quote && (
            <div className="border-t pt-4">
              {quote.author && (
                <Text className="font-semibold text-brand-blue">
                  — {quote.author}
                </Text>
              )}
              {quote.title && (
                <Text variant="small" className="text-gray-600">
                  {quote.title}
                </Text>
              )}
              {quote.company && (
                <Text variant="small" className="text-gray-500">
                  {quote.company}
                </Text>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Announcement variant
  if (variant === 'announcement') {
    return (
      <div className={containerClasses}>
        <div className={contentClasses}>
          {badge && (
            <Badge variant="success" className="mb-4 bg-white text-brand-blue">
              {badge}
            </Badge>
          )}
          
          {icon && (
            <div className="mb-4">
              <Icon name={icon} size="large" className="text-white" />
            </div>
          )}
          
          {title && (
            <Heading level={width === 'full' ? 2 : 3} variant="white" className="mb-4">
              {title}
            </Heading>
          )}
          
          {subtitle && (
            <Text variant="lead" className="text-white/90 mb-4">
              {subtitle}
            </Text>
          )}
          
          <div className="mb-6">
            {typeof content === 'string' ? (
              <Text className="text-white/90">
                {content}
              </Text>
            ) : (
              content
            )}
          </div>
          
          {(ctaButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaButton && (
                <Button 
                  variant="secondary"
                  href={ctaButton.href}
                  onClick={ctaButton.onClick}
                  className="bg-white text-brand-blue hover:bg-gray-100"
                >
                  {ctaButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button 
                  variant="secondary"
                  href={secondaryButton.href}
                  onClick={secondaryButton.onClick}
                  className="border-white text-white hover:bg-white hover:text-brand-blue"
                >
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Default and other variants
  return (
    <div className={containerClasses}>
      <div className={contentClasses}>
        {/* Header Section */}
        <div className="mb-6">
          {badge && (
            <Badge variant="success" className="mb-3">
              {badge}
            </Badge>
          )}
          
          {icon && (
            <div className="mb-4">
              <Icon 
                name={icon} 
                color="primary" 
                size={width === 'full' ? 'large' : 'default'} 
              />
            </div>
          )}
          
          {title && (
            <Heading 
              level={width === 'full' ? 2 : 3} 
              variant="primary" 
              className="mb-4"
              align={textAlign}
            >
              {title}
            </Heading>
          )}
          
          {subtitle && (
            <Text 
              variant="lead" 
              className="mb-4" 
              align={textAlign}
            >
              {subtitle}
            </Text>
          )}
        </div>
        
        {/* Main Content */}
        <div className="mb-6">
          {typeof content === 'string' ? (
            <Text className="text-gray-700" align={textAlign}>
              {content}
            </Text>
          ) : (
            content
          )}
        </div>
        
        {/* Bullet Points */}
        {bulletPoints && bulletPoints.length > 0 && (
          <div className="mb-6">
            <ul className="space-y-2">
              {bulletPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon name="fas fa-check-circle" color="secondary" size="small" className="mt-0.5" />
                  <Text className="text-gray-700">{point}</Text>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Numbered List */}
        {numberedList && numberedList.length > 0 && (
          <div className="mb-6">
            <ol className="space-y-2">
              {numberedList.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                    {index + 1}
                  </div>
                  <Text className="text-gray-700">{item}</Text>
                </li>
              ))}
            </ol>
          </div>
        )}
        
        {/* Action Buttons */}
        {(ctaButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row gap-4">
            {ctaButton && (
              <Button 
                variant={ctaButton.variant || 'primary'}
                href={ctaButton.href}
                onClick={ctaButton.onClick}
              >
                {ctaButton.text}
              </Button>
            )}
            {secondaryButton && (
              <Button 
                variant={secondaryButton.variant || 'secondary'}
                href={secondaryButton.href}
                onClick={secondaryButton.onClick}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TextBlock;
export { TextBlock };