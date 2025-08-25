import React from 'react';
import { Link } from '../items/Link';
import { Icon } from '../items/Icon';
import { Heading } from '../items/Heading';
import { Text } from '../items/Text';
import { cn } from '../../utils/cn';

interface MegaMenuItemProps {
  href: string;
  title: string;
  description: string;
  icon?: string;
  iconColor?: string;
  className?: string;
}

const MegaMenuItem: React.FC<MegaMenuItemProps> = ({
  href,
  title,
  description,
  icon,
  iconColor = 'text-brand-green',
  className = ''
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'mega-box-link block p-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-md group',
        className
      )}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className={cn('text-2xl mt-1', iconColor)}>
            <Icon name={icon} size="large" />
          </div>
        )}
        <div className="flex-1">
          <Heading 
            level={5} 
            className="text-brand-blue group-hover:text-brand-green transition-colors mb-1"
          >
            {title}
          </Heading>
          <Text variant="small" className="text-gray-600">
            {description}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default MegaMenuItem;
export { MegaMenuItem };