import { cn } from '../../utils/cn.ts';
import React from 'react';

interface SectionHeadersProps {
  title: string; // The main title text for the section
  subtitle?: string; // Optional subtitle text
  className?: string; // Additional classes for customization
  align?: 'left' | 'center' | 'right'; // Alignment of the text
}

export const SectionHeader: React.FC<SectionHeadersProps> = ({
  title,
  subtitle,
  className = '',
  align = 'center',
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 text-primary',
        {
          'items-center text-center': align === 'center',
          'items-start text-left': align === 'left',
          'items-end text-right': align === 'right',
        },
        className
      )}
    >
      <h2 className='text-4xl font-bold'>{title}</h2>
      {subtitle && <p className='text-lg'>{subtitle}</p>}
    </div>
  );
};
