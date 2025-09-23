import React from 'react';
import type { StatItemProps } from '../../types/components';
import { cn } from '../../utils/cn';

const StatItem: React.FC<StatItemProps> = ({ 
  number, 
  label, 
  className = '' 
}) => (
  <div className={cn(
    'text-center bg-black/20 backdrop-blur-md p-6 rounded-xl',
    'border border-white/10 transition-all duration-300',
    'hover:-translate-y-1 hover:bg-black/30',
    'w-52 h-32 flex flex-col justify-center',
    className
  )}>
    <div className="text-4xl font-black mb-3 tracking-tight text-brand-green overflow-hidden text-ellipsis">
      {number}
    </div>
    <div className="text-sm text-white/80 uppercase tracking-wide font-medium leading-tight px-2">
      {label}
    </div>
  </div>
);

export default StatItem;
export { StatItem };