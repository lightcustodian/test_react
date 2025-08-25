import React from 'react';
import NextLink from 'next/link';
import { cn } from '../../utils/cn';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'subtle' | 'nav';
  external?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Link: React.FC<LinkProps> = ({ 
  href,
  children,
  variant = 'default',
  external = false,
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'transition-colors duration-300 cursor-pointer';
  
  const variants = {
    default: 'text-brand-blue hover:text-brand-green',
    primary: 'text-brand-green hover:text-brand-blue font-semibold',
    subtle: 'text-gray-600 hover:text-gray-900',
    nav: 'text-gray-300 hover:text-brand-green'
  };
  
  const combinedClasses = cn(
    baseClasses,
    variants[variant],
    className
  );
  
  if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a 
        href={href}
        className={combinedClasses}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }
  
  return (
    <NextLink 
      href={href}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
export { Link };