import React from 'react';
import { Icon } from '../items/Icon';
import { cn } from '../../utils/cn';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: string;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  dismissible = false,
  onDismiss,
  icon,
  className = ''
}) => {
  const variants = {
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: icon || 'fas fa-info-circle'
    },
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: icon || 'fas fa-check-circle'
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: icon || 'fas fa-exclamation-triangle'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: icon || 'fas fa-times-circle'
    }
  };
  
  const style = variants[variant];
  
  return (
    <div 
      className={cn(
        'p-4 rounded-lg border flex items-start gap-3',
        style.bg,
        style.border,
        style.text,
        className
      )}
    >
      <Icon name={style.icon} className="mt-0.5" />
      <div className="flex-1">
        {children}
      </div>
      {dismissible && (
        <button
          onClick={onDismiss}
          className="hover:opacity-70 transition-opacity"
        >
          <Icon name="fas fa-times" />
        </button>
      )}
    </div>
  );
};

export default Alert;
export { Alert };