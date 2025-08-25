import React from 'react';
import { Link } from '../items/Link';
import { Icon } from '../items/Icon';
import { Badge } from '../items/Badge';
import { cn } from '../../utils/cn';

interface NavItemProps {
  href: string;
  label: string;
  icon?: string;
  badge?: string | number;
  active?: boolean;
  variant?: 'default' | 'dropdown' | 'footer';
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  label,
  icon,
  badge,
  active = false,
  variant = 'default',
  className = '',
  onClick
}) => {
  const baseClasses = 'flex items-center gap-2 transition-all duration-300';
  
  const variants = {
    default: 'px-4 py-2 hover:text-brand-green',
    dropdown: 'px-4 py-3 hover:bg-gray-50 hover:text-brand-green w-full',
    footer: 'py-1 hover:text-brand-green'
  };
  
  const activeClasses = active ? 'text-brand-green font-semibold' : '';
  
  return (
    <Link
      href={href}
      variant="subtle"
      className={cn(
        baseClasses,
        variants[variant],
        activeClasses,
        className
      )}
      onClick={onClick}
    >
      {icon && <Icon name={icon} size="default" />}
      <span>{label}</span>
      {badge && (
        <Badge variant="primary" size="small">
          {badge}
        </Badge>
      )}
    </Link>
  );
};

export default NavItem;
export { NavItem };