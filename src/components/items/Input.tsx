import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'filled' | 'ghost';
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ 
  variant = 'default',
  error = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'w-full px-3 py-2 text-base transition-all duration-300 rounded-md outline-none';
  
  const variants = {
    default: 'border-2 border-gray-300 focus:border-brand-green bg-white',
    filled: 'bg-gray-100 border-2 border-transparent focus:border-brand-green',
    ghost: 'border-b-2 border-gray-300 focus:border-brand-green bg-transparent rounded-none px-0'
  };
  
  const errorClasses = error ? 'border-red-500 focus:border-red-500' : '';
  
  return (
    <input 
      className={cn(
        baseClasses,
        variants[variant],
        errorClasses,
        className
      )}
      {...props}
    />
  );
};

export default Input;
export { Input };