import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Button } from '../items/Button';
import { Badge } from '../items/Badge';
import { cn } from '../../utils/cn';

interface ImageBlockProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right' | 'top' | 'bottom' | 'background';
  width?: 'half' | 'full';
  variant?: 'default' | 'hero' | 'feature' | 'testimonial' | 'product' | 'gallery';
  overlay?: boolean;
  overlayOpacity?: 'light' | 'medium' | 'dark';
  ctaButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  };
  badge?: string;
  aspectRatio?: 'square' | 'landscape' | 'portrait' | 'wide' | 'auto';
  className?: string;
}

const ImageBlock: React.FC<ImageBlockProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  imageAlt,
  imagePosition = 'left',
  width = 'half',
  variant = 'default',
  overlay = false,
  overlayOpacity = 'medium',
  ctaButton,
  badge,
  aspectRatio = 'landscape',
  className = ''
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    landscape: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]',
    auto: ''
  };

  const overlayClasses = {
    light: 'bg-black/20',
    medium: 'bg-black/40',
    dark: 'bg-black/60'
  };

  const containerClasses = cn(
    'group',
    width === 'full' ? 'w-full' : 'w-full max-w-2xl',
    className
  );

  // Background variant with text overlay
  if (imagePosition === 'background' || variant === 'hero') {
    return (
      <div className={containerClasses}>
        <div 
          className={cn(
            'relative overflow-hidden rounded-xl',
            aspectRatioClasses[aspectRatio],
            width === 'full' ? 'min-h-[400px]' : 'min-h-[300px]'
          )}
        >
          {/* Background Image */}
          <img 
            src={imageUrl}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay */}
          {overlay && (
            <div className={cn('absolute inset-0', overlayClasses[overlayOpacity])} />
          )}
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-white">
            <div className="max-w-2xl">
              {badge && (
                <Badge variant="success" className="mb-4">
                  {badge}
                </Badge>
              )}
              
              {title && (
                <Heading level={width === 'full' ? 1 : 2} variant="white" className="mb-4">
                  {title}
                </Heading>
              )}
              
              {subtitle && (
                <Text variant="lead" className="text-white/90 mb-4">
                  {subtitle}
                </Text>
              )}
              
              {description && (
                <Text className="text-white/80 mb-6">
                  {description}
                </Text>
              )}
              
              {ctaButton && (
                <Button 
                  variant={ctaButton.variant || 'primary'}
                  href={ctaButton.href}
                  onClick={ctaButton.onClick}
                >
                  {ctaButton.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Side-by-side layouts
  if (imagePosition === 'left' || imagePosition === 'right') {
    const isImageLeft = imagePosition === 'left';
    
    return (
      <div className={containerClasses}>
        <div className={cn(
          'bg-white rounded-xl shadow-lg overflow-hidden',
          width === 'full' ? 'grid grid-cols-1 lg:grid-cols-2 gap-0' : 'flex flex-col'
        )}>
          {/* Image Section */}
          <div className={cn(
            'relative overflow-hidden',
            width === 'full' ? (isImageLeft ? 'order-1' : 'order-2') : 'order-1',
            aspectRatioClasses[aspectRatio]
          )}>
            <img 
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {badge && (
              <div className="absolute top-4 left-4">
                <Badge variant="success">
                  {badge}
                </Badge>
              </div>
            )}
          </div>
          
          {/* Content Section */}
          <div className={cn(
            'p-6 flex flex-col justify-center',
            width === 'full' ? (isImageLeft ? 'order-2' : 'order-1') : 'order-2'
          )}>
            {title && (
              <Heading level={width === 'full' ? 3 : 4} variant="primary" className="mb-4">
                {title}
              </Heading>
            )}
            
            {subtitle && (
              <Text variant="lead" className="mb-4">
                {subtitle}
              </Text>
            )}
            
            {description && (
              <Text className="mb-6 text-gray-700">
                {description}
              </Text>
            )}
            
            {ctaButton && (
              <div>
                <Button 
                  variant={ctaButton.variant || 'primary'}
                  href={ctaButton.href}
                  onClick={ctaButton.onClick}
                >
                  {ctaButton.text}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Top/bottom layouts
  return (
    <div className={containerClasses}>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Content and Image Order */}
        {imagePosition === 'bottom' && (
          <div className="p-6">
            {badge && (
              <Badge variant="success" className="mb-3">
                {badge}
              </Badge>
            )}
            
            {title && (
              <Heading level={width === 'full' ? 2 : 3} variant="primary" className="mb-4">
                {title}
              </Heading>
            )}
            
            {subtitle && (
              <Text variant="lead" className="mb-4">
                {subtitle}
              </Text>
            )}
            
            {description && (
              <Text className="mb-6 text-gray-700">
                {description}
              </Text>
            )}
            
            {ctaButton && (
              <Button 
                variant={ctaButton.variant || 'primary'}
                href={ctaButton.href}
                onClick={ctaButton.onClick}
              >
                {ctaButton.text}
              </Button>
            )}
          </div>
        )}
        
        {/* Image */}
        <div className={cn('relative overflow-hidden', aspectRatioClasses[aspectRatio])}>
          <img 
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {badge && imagePosition === 'top' && (
            <div className="absolute top-4 left-4">
              <Badge variant="success">
                {badge}
              </Badge>
            </div>
          )}
        </div>
        
        {/* Content (when image is on top) */}
        {imagePosition === 'top' && (
          <div className="p-6">
            {title && (
              <Heading level={width === 'full' ? 2 : 3} variant="primary" className="mb-4">
                {title}
              </Heading>
            )}
            
            {subtitle && (
              <Text variant="lead" className="mb-4">
                {subtitle}
              </Text>
            )}
            
            {description && (
              <Text className="mb-6 text-gray-700">
                {description}
              </Text>
            )}
            
            {ctaButton && (
              <Button 
                variant={ctaButton.variant || 'primary'}
                href={ctaButton.href}
                onClick={ctaButton.onClick}
              >
                {ctaButton.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageBlock;
export { ImageBlock };