import React from 'react';
import { cn } from '../../utils/cn';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  variant?: 'default' | 'bold' | 'subtle';
}

const Label: React.FC<LabelProps> = ({ 
  required = false,
  variant = 'default',
  children,
  className = '',
  ...props 
}) => {
  const baseClasses = 'block mb-2';
  
  const variants = {
    default: 'text-gray-700 font-medium',
    bold: 'text-brand-blue font-semibold',
    subtle: 'text-gray-500 text-sm'
  };
  
  return (
    <label 
      className={cn(
        baseClasses,
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
};

export default Label;
export { Label };