import React from 'react';
import { cn } from '../utils/cn.ts';

export type CurvePosition = 'top' | 'bottom' | 'both';

interface CurvedWrapperProps {
  curve?: CurvePosition;
  className?: string;
  children: React.ReactNode;
  innerClassName?: string;
}

export const CurvedWrapper: React.FC<CurvedWrapperProps> = ({
  curve = 'both',
  className = '',
  children,
  innerClassName = '',
}: CurvedWrapperProps): React.ReactNode => {
  const outerClasses = cn(
    'relative flex w-full items-center justify-center',
    // Add padding to outer div to account for negative offsets
    curve === 'top' && 'pt-8 sm:pt-12 lg:pt-16',
    curve === 'bottom' && 'pb-8 sm:pb-12 lg:pb-16',
    curve === 'both' && 'pt-8 pb-8 sm:pt-12 sm:pb-12 lg:pt-16 lg:pb-16',
    className
  );

  const getSectionClasses = () => {
    switch (curve) {
      case 'top':
        return cn(
          'absolute top-0 -top-8 z-10 flex w-full flex-col items-center justify-center space-y-12 rounded-t-[40px] bg-white px-4 py-20 sm:-top-12 sm:rounded-t-[60px] sm:px-8 sm:py-20 lg:-top-16 lg:rounded-t-[80px] lg:px-12 lg:py-20',
          innerClassName
        );
      case 'bottom':
        return cn(
          '-mt-16 -mb-14 md:-mt-40 md:-mb-32 z-10 flex w-full flex-col items-center justify-center space-y-12 rounded-b-[40px] bg-white py-10 sm:-top-12 sm:-bottom-12 sm:rounded-b-[60px] sm:py-10 lg:-top-16 lg:-bottom-16 lg:rounded-b-[80px]',
          innerClassName
        );
      default:
        return cn(
          '-mt-16 -mb-20 md:-mt-40 md:-mb-40 z-10 flex w-full flex-col items-center justify-center space-y-12 rounded-[40px] bg-white py-10 sm:-top-12 sm:-bottom-12 sm:rounded-[60px] sm:py-10 lg:-top-16 lg:-bottom-16 lg:rounded-[80px]',
          innerClassName
        );
    }
  };

  return (
    <div className={outerClasses}>
      <section className={getSectionClasses()}>{children}</section>
    </div>
  );
};
