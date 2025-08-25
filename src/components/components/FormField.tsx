import React from 'react';
import { Label } from '../items/Label';
import { Input } from '../items/Input';
import { Select } from '../items/Select';
import { Textarea } from '../items/Textarea';
import { Text } from '../items/Text';
import { cn } from '../../utils/cn';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password' | 'tel' | 'number' | 'select' | 'textarea';
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  options?: Array<{ value: string; label: string }>;
  className?: string;
  inputClassName?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helpText,
  options = [],
  className = '',
  inputClassName = ''
}) => {
  const renderInput = () => {
    const commonProps = {
      id: name,
      name,
      value,
      onChange,
      placeholder,
      required,
      error: !!error,
      className: inputClassName
    };

    switch (type) {
      case 'select':
        return <Select {...commonProps} options={options} />;
      case 'textarea':
        return <Textarea {...commonProps} />;
      default:
        return <Input {...commonProps} type={type} />;
    }
  };

  return (
    <div className={cn('mb-4', className)}>
      <Label htmlFor={name} required={required} variant="bold">
        {label}
      </Label>
      {renderInput()}
      {error && (
        <Text variant="small" className="text-red-500 mt-1">
          {error}
        </Text>
      )}
      {helpText && !error && (
        <Text variant="small" className="text-gray-500 mt-1">
          {helpText}
        </Text>
      )}
    </div>
  );
};

export default FormField;
export { FormField };