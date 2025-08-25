import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabProps {
  tabs: TabItem[];
  defaultTab?: number;
  variant?: 'default' | 'pills' | 'underline';
  className?: string;
}

const Tab: React.FC<TabProps> = ({
  tabs,
  defaultTab = 0,
  variant = 'default',
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const tabStyles = {
    default: {
      container: 'border-b border-gray-200',
      tab: 'px-4 py-2 font-medium transition-colors',
      active: 'text-brand-blue border-b-2 border-brand-blue',
      inactive: 'text-gray-600 hover:text-gray-900'
    },
    pills: {
      container: 'bg-gray-100 p-1 rounded-lg',
      tab: 'px-4 py-2 rounded-md font-medium transition-all',
      active: 'bg-white text-brand-blue shadow-sm',
      inactive: 'text-gray-600 hover:text-gray-900'
    },
    underline: {
      container: '',
      tab: 'px-4 py-2 font-medium transition-all relative',
      active: 'text-brand-green after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-green',
      inactive: 'text-gray-600 hover:text-gray-900'
    }
  };
  
  const style = tabStyles[variant];
  
  return (
    <div className={cn('', className)}>
      <div className={cn('flex', style.container)}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              style.tab,
              activeTab === index ? style.active : style.inactive
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {tabs[activeTab]?.content}
      </div>
    </div>
  );
};

export default Tab;
export { Tab };