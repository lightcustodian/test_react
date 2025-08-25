import React, { useEffect } from 'react';
import { Icon } from '../items/Icon';
import { Heading } from '../items/Heading';
import { Button } from '../items/Button';
import { cn } from '../../utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'small' | 'default' | 'large' | 'fullscreen';
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'default',
  className = ''
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  const sizes = {
    small: 'max-w-md',
    default: 'max-w-2xl',
    large: 'max-w-4xl',
    fullscreen: 'max-w-full h-full'
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div 
        className={cn(
          'relative bg-white rounded-lg shadow-xl w-full mx-4',
          sizes[size],
          className
        )}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b">
            <Heading level={3} className="mb-0">
              {title}
            </Heading>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icon name="fas fa-times" size="large" />
            </button>
          </div>
        )}
        
        {/* Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {children}
        </div>
        
        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-4 p-6 border-t">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
export { Modal };