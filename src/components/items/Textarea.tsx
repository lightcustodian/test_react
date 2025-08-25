import React from 'react';
import { cn } from '../../utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'filled' | 'ghost';
  error?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ 
  variant = 'default',
  error = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'w-full px-3 py-2 text-base transition-all duration-300 rounded-md outline-none resize-vertical min-h-[100px]';
  
  const variants = {
    default: 'border-2 border-gray-300 focus:border-brand-green bg-white',
    filled: 'bg-gray-100 border-2 border-transparent focus:border-brand-green',
    ghost: 'border-b-2 border-gray-300 focus:border-brand-green bg-transparent rounded-none px-0'
  };
  
  const errorClasses = error ? 'border-red-500 focus:border-red-500' : '';
  
  return (
    <textarea 
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

export default Textarea;
export { Textarea };