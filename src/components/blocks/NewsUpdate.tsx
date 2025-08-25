import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { Button } from '../items/Button';
import { cn } from '../../utils/cn';

interface NewsItem {
  title: string;
  summary: string;
  date: string;
  category?: string;
  href?: string;
  image?: string;
  urgent?: boolean;
}

interface NewsUpdateProps {
  title?: string;
  subtitle?: string;
  items: NewsItem[];
  variant?: 'default' | 'compact' | 'featured' | 'timeline';
  showDates?: boolean;
  maxItems?: number;
  viewAllButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

const NewsUpdate: React.FC<NewsUpdateProps> = ({
  title = "Latest Updates",
  subtitle,
  items,
  variant = 'default',
  showDates = true,
  maxItems = 3,
  viewAllButton,
  className = ''
}) => {
  const displayItems = items.slice(0, maxItems);

  const containerClasses = cn(
    'w-full max-w-2xl p-6 bg-white rounded-xl shadow-lg border border-gray-200',
    className
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return formatDate(dateString);
  };

  return (
    <div className={containerClasses}>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Icon name="fas fa-newspaper" color="primary" />
          <Heading level={4} variant="primary">
            {title}
          </Heading>
        </div>
        {subtitle && (
          <Text variant="small" className="text-gray-600">
            {subtitle}
          </Text>
        )}
      </div>

      {/* News Items */}
      <div className="space-y-4">
        {displayItems.map((item, index) => (
          <div key={index}>
            {variant === 'featured' && index === 0 ? (
              // Featured first item
              <div className="border border-brand-blue/20 rounded-lg p-4 bg-brand-blue/5">
                {item.image && (
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                )}
                
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {item.category && (
                      <Badge variant="primary" size="small">
                        {item.category}
                      </Badge>
                    )}
                    {item.urgent && (
                      <Badge variant="danger" size="small">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  {showDates && (
                    <Text variant="small" className="text-gray-500">
                      {getRelativeTime(item.date)}
                    </Text>
                  )}
                </div>
                
                <Heading level={5} variant="primary" className="mb-2">
                  {item.href ? (
                    <a href={item.href} className="hover:text-brand-green transition-colors">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </Heading>
                
                <Text variant="small" className="text-gray-700">
                  {item.summary}
                </Text>
              </div>
            ) : variant === 'timeline' ? (
              // Timeline style
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
                  {index < displayItems.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                  )}
                </div>
                
                <div className="flex-1 pb-4">
                  <div className="flex items-start justify-between mb-1">
                    <Text className="font-semibold text-gray-900 text-sm">
                      {item.href ? (
                        <a href={item.href} className="hover:text-brand-blue transition-colors">
                          {item.title}
                        </a>
                      ) : (
                        item.title
                      )}
                    </Text>
                    {showDates && (
                      <Text variant="small" className="text-gray-500 ml-2">
                        {formatDate(item.date)}
                      </Text>
                    )}
                  </div>
                  
                  {variant !== 'compact' && (
                    <Text variant="small" className="text-gray-600">
                      {item.summary}
                    </Text>
                  )}
                  
                  {item.category && (
                    <Badge variant="secondary" size="small" className="mt-1">
                      {item.category}
                    </Badge>
                  )}
                </div>
              </div>
            ) : (
              // Default and compact styles
              <div className={cn(
                'border-b border-gray-100 pb-4',
                index === displayItems.length - 1 && 'border-b-0 pb-0'
              )}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {item.category && (
                      <Badge variant="secondary" size="small">
                        {item.category}
                      </Badge>
                    )}
                    {item.urgent && (
                      <Badge variant="danger" size="small">
                        <Icon name="fas fa-exclamation" size="small" className="mr-1" />
                        Urgent
                      </Badge>
                    )}
                  </div>
                  {showDates && (
                    <Text variant="small" className="text-gray-500">
                      {getRelativeTime(item.date)}
                    </Text>
                  )}
                </div>
                
                <Text className="font-semibold text-gray-900 mb-1">
                  {item.href ? (
                    <a href={item.href} className="hover:text-brand-blue transition-colors">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </Text>
                
                {variant !== 'compact' && (
                  <Text variant="small" className="text-gray-600">
                    {item.summary}
                  </Text>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Button */}
      {viewAllButton && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <Button 
            variant="secondary"
            href={viewAllButton.href}
            onClick={viewAllButton.onClick}
            className="w-full"
          >
            {viewAllButton.text}
          </Button>
        </div>
      )}
    </div>
  );
};

export default NewsUpdate;
export { NewsUpdate };