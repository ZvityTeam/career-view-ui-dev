import React from 'react';
import { cn } from '../../utils/cn.ts';

interface ContainerProps {
  children: React.ReactNode; // Content inside the container
  className?: string; // Optional additional classes
}

export const Section: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <section
      className={cn(
        'mx-auto flex max-w-screen-xl flex-col items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8',
        className
      )}
    >
      {children}
    </section>
  );
};
