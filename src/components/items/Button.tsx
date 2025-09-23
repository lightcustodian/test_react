import React from 'react';
import type { ButtonProps } from '../../types/components';
import { cn } from '../../utils/cn';

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'default', 
  children, 
  className = '',
  icon,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-bold transition-all duration-300 cursor-pointer border-none text-left uppercase tracking-wide';
  
  const variants = {
    primary: 'text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 rounded-full bg-gradient-to-r from-brand-green to-brand-blue',
    secondary: 'bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 hover:bg-white/20 hover:-translate-y-1 hover:scale-105 hover:border-white/50 rounded-full'
  };
  
  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  return (
    <button 
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon && <i className={icon}></i>}
      {children}
    </button>
  );
};

export default Button;
export { Button };