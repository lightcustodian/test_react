import React from 'react';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { Icon } from '../items/Icon';
import { cn } from '../../utils/cn';

interface ServiceItem {
  title: string;
  description: string;
  icon?: string;
  link?: {
    text: string;
    href: string;
  };
  badge?: string;
}

interface ServiceGridProps {
  title: string;
  subtitle?: string;
  items: ServiceItem[];
  columns?: 2 | 3 | 4;
  variant?: 'cards' | 'minimal' | 'featured';
  className?: string;
}

const ServiceGrid: React.FC<ServiceGridProps> = ({
  title,
  subtitle,
  items,
  columns = 2,
  variant = 'cards',
  className = ''
}) => {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  const renderCard = (item: ServiceItem, index: number) => {
    switch (variant) {
      case 'featured':
        return (
          <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow">
            {item.icon && (
              <div className="w-20 h-20 bg-gradient-to-br from-brand-green to-brand-blue rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon name={item.icon} className="text-3xl text-white" />
              </div>
            )}
            <h3 className="text-brand-blue text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed mb-5">{item.description}</p>
            {item.link && (
              <a href={item.link.href} className="text-brand-green font-medium hover:text-brand-blue transition-colors">
                {item.link.text} →
              </a>
            )}
          </div>
        );

      case 'minimal':
        return (
          <div key={index} className="bg-white p-6 rounded-lg">
            <div className="flex items-start gap-4">
              {item.icon && (
                <div className="flex-shrink-0 w-12 h-12 bg-brand-green/10 rounded-lg flex items-center justify-center">
                  <Icon name={item.icon} className="text-brand-green text-xl" />
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-brand-blue text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                {item.link && (
                  <a href={item.link.href} className="text-brand-green text-sm font-medium hover:text-brand-blue mt-2 inline-block">
                    {item.link.text} →
                  </a>
                )}
              </div>
            </div>
          </div>
        );

      case 'cards':
      default:
        return (
          <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              {item.icon && (
                <div className="w-12 h-12 bg-brand-green rounded-full flex items-center justify-center mr-4">
                  <Icon name={item.icon} className="text-white text-xl" />
                </div>
              )}
              <h3 className="text-brand-blue text-lg font-semibold">{item.title}</h3>
            </div>
            {item.badge && (
              <span className="inline-block bg-brand-green/10 text-brand-green px-3 py-1 rounded-full text-xs font-medium mb-3">
                {item.badge}
              </span>
            )}
            <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
            {item.link && (
              <a href={item.link.href} className="text-brand-green font-medium hover:text-brand-blue transition-colors">
                {item.link.text} →
              </a>
            )}
          </div>
        );
    }
  };

  return (
    <section className={cn('py-16', className)}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <Heading level={2} variant="primary" className="mb-4">
            {title}
          </Heading>
          {subtitle && (
            <Text variant="lead" className="max-w-3xl mx-auto text-gray-600">
              {subtitle}
            </Text>
          )}
        </div>
        
        <div className={cn('grid gap-8', gridClasses[columns])}>
          {items.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
export { ServiceGrid };