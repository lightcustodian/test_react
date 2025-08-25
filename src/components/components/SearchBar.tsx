import React, { useState } from 'react';
import { Input } from '../items/Input';
import { Button } from '../items/Button';
import { Icon } from '../items/Icon';
import { cn } from '../../utils/cn';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  variant?: 'default' | 'rounded' | 'minimal';
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  onSearch,
  variant = 'default',
  className = ''
}) => {
  const [query, setQuery] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };
  
  const baseClasses = 'flex items-center';
  
  const variants = {
    default: 'bg-white shadow-sm border border-gray-200 rounded-lg',
    rounded: 'bg-brand-blue/10 rounded-full px-4 py-2 transition-all duration-300 focus-within:bg-brand-blue/15 focus-within:shadow-lg focus-within:shadow-brand-green/20',
    minimal: 'border-b border-gray-300'
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className={cn(
        baseClasses,
        variants[variant],
        className
      )}
    >
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        variant="ghost"
        className="flex-1 border-0 focus:border-0"
      />
      <button 
        type="submit"
        className="text-brand-blue hover:text-brand-green transition-colors duration-300 p-2 rounded-full hover:bg-brand-green/10"
      >
        <Icon name="fas fa-search" />
      </button>
    </form>
  );
};

export default SearchBar;
export { SearchBar };