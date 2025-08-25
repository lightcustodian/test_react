import React from 'react';
import { MetricDisplay } from '../items/MetricDisplay';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { cn } from '../../utils/cn';

interface Stat {
  value: string;
  label: string;
  icon?: string;
  description?: string;
  trend?: {
    direction: 'up' | 'down' | 'neutral';
    percentage: string;
    period: string;
  };
}

interface QuickStatsProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
  layout?: 'grid' | 'vertical' | 'horizontal';
  variant?: 'default' | 'minimal' | 'cards' | 'highlighted';
  backgroundColor?: 'white' | 'gray' | 'blue' | 'green';
  className?: string;
}

const QuickStats: React.FC<QuickStatsProps> = ({
  title,
  subtitle,
  stats,
  layout = 'grid',
  variant = 'default',
  backgroundColor = 'white',
  className = ''
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-brand-blue/5',
    green: 'bg-brand-green/5'
  };

  const layoutClasses = {
    grid: 'grid grid-cols-2 gap-4',
    vertical: 'space-y-4',
    horizontal: 'flex flex-wrap gap-4'
  };

  const containerClasses = cn(
    'w-full max-w-2xl p-6 rounded-xl',
    backgroundClasses[backgroundColor],
    {
      'shadow-lg': variant !== 'minimal',
      'border border-gray-200': variant === 'default' && backgroundColor === 'white'
    },
    className
  );

  const getTrendIcon = (direction: 'up' | 'down' | 'neutral') => {
    switch (direction) {
      case 'up': return 'fas fa-arrow-trend-up';
      case 'down': return 'fas fa-arrow-trend-down';
      default: return 'fas fa-minus';
    }
  };

  const getTrendColor = (direction: 'up' | 'down' | 'neutral') => {
    switch (direction) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
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
            <Text variant="small" className="text-gray-600">
              {subtitle}
            </Text>
          )}
        </div>
      )}

      {/* Stats */}
      <div className={layoutClasses[layout]}>
        {stats.map((stat, index) => (
          <div key={index}>
            {variant === 'cards' ? (
              <div className="bg-white p-4 rounded-lg border border-gray-100">
                <MetricDisplay
                  value={stat.value}
                  label={stat.label}
                  icon={stat.icon}
                  description={stat.description}
                  variant="compact"
                />
                {stat.trend && (
                  <div className={cn('flex items-center gap-1 mt-2', getTrendColor(stat.trend.direction))}>
                    <i className={getTrendIcon(stat.trend.direction)} />
                    <Text variant="small" className={getTrendColor(stat.trend.direction)}>
                      {stat.trend.percentage} {stat.trend.period}
                    </Text>
                  </div>
                )}
              </div>
            ) : variant === 'minimal' ? (
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue mb-1">
                  {stat.value}
                </div>
                <Text variant="small" className="text-gray-600">
                  {stat.label}
                </Text>
              </div>
            ) : (
              <MetricDisplay
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                description={stat.description}
                variant="compact"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickStats;
export { QuickStats };