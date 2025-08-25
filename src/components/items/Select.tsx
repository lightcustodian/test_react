import React from 'react';
import { cn } from '../../utils/cn';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: 'default' | 'filled' | 'ghost';
  error?: boolean;
  options?: Array<{ value: string; label: string }>;
}

const Select: React.FC<SelectProps> = ({ 
  variant = 'default',
  error = false,
  options = [],
  children,
  className = '',
  ...props 
}) => {
  const baseClasses = 'w-full px-3 py-2 text-base transition-all duration-300 rounded-md outline-none cursor-pointer';
  
  const variants = {
    default: 'border-2 border-gray-300 focus:border-brand-green bg-white',
    filled: 'bg-gray-100 border-2 border-transparent focus:border-brand-green',
    ghost: 'border-b-2 border-gray-300 focus:border-brand-green bg-transparent rounded-none px-0'
  };
  
  const errorClasses = error ? 'border-red-500 focus:border-red-500' : '';
  
  return (
    <select 
      className={cn(
        baseClasses,
        variants[variant],
        errorClasses,
        className
      )}
      {...props}
    >
      {children || options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
export { Select };