import React, { useState } from 'react';
import { Icon } from '../items/Icon';
import { Heading } from '../items/Heading';
import { cn } from '../../utils/cn';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = ''
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  
  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prev => 
        prev.includes(index) 
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes(prev => 
        prev.includes(index) ? [] : [index]
      );
    }
  };
  
  return (
    <div className={cn('space-y-2', className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        
        return (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <Heading level={5} className="text-left mb-0">
                {item.title}
              </Heading>
              <Icon 
                name={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}
                className="transition-transform duration-300"
              />
            </button>
            <div 
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96' : 'max-h-0'
              )}
            >
              <div className="px-4 py-3 bg-gray-50">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
export { Accordion };