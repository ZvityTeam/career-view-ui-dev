import React from 'react';
import { cn } from '../utils/cn.ts';

export type CurvePosition = 'top' | 'bottom' | 'both';

interface CurvedWrapperProps {
  curve?: CurvePosition;
  className?: string;
  children: React.ReactNode;
  minHeight?: string;
  innerClassName?: string;
}

export const CurvedWrapper: React.FC<CurvedWrapperProps> = ({
  curve = 'both',
  className = '',
  children,
  minHeight = '80vh',
  innerClassName = '',
}: CurvedWrapperProps): React.ReactNode => {
  const outerClasses = cn(
    'relative grid place-items-center min-h-[60vh]',
    className
  );

  if (curve === 'top') {
    return (
      <div className={outerClasses}>
        <section
          className='absolute -top-8 z-10 flex w-full flex-col items-center justify-center space-y-12 rounded-t-[40px] bg-white px-4 py-16 sm:-top-12 sm:space-y-16 sm:rounded-t-[60px] sm:px-8 sm:py-24 lg:-top-16 lg:space-y-24 lg:rounded-t-[80px] lg:px-12 lg:py-36'
          style={{ minHeight: minHeight }}
        >
          {children}
        </section>
      </div>
    );
  } else if (curve === 'bottom') {
    return (
      <div className={outerClasses}>
        <section
          className={cn(
            'absolute -bottom-8 z-10 flex w-full flex-col items-center justify-center space-y-12 rounded-b-[40px] bg-white px-4 py-16 sm:-bottom-12 sm:space-y-16 sm:rounded-b-[60px] sm:px-8 sm:py-24 lg:-bottom-16 lg:space-y-24 lg:rounded-b-[80px] lg:px-12 lg:py-36',
            innerClassName
          )}
          style={{ minHeight: minHeight }}
        >
          {children}
        </section>
      </div>
    );
  } else {
    return (
      <div className={outerClasses}>
        <section
          className={cn(
            'absolute -bottom-8 -top-8 z-10 flex w-full flex-col items-center justify-center space-y-12 rounded-[40px] bg-white px-4 py-16 sm:-bottom-12 sm:-top-12 sm:space-y-16 sm:rounded-[60px] sm:px-8 sm:py-24 lg:-bottom-16 lg:-top-16 lg:space-y-24 lg:rounded-[80px] lg:px-12 lg:py-36',
            innerClassName
          )}
          style={{ minHeight: minHeight }}
        >
          {children}
        </section>
      </div>
    );
  }
};
