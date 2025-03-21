import React from 'react';
import { cn } from '../utils/cn.ts';

/**
 * Type for specifying which edges of the wrapper should have curves.
 */
export type CurvePosition = 'top' | 'bottom' | 'both';

interface CurvedWrapperProps {
  /**
   * Specifies which edges should display the curved effect.
   * - 'top': Only the top edge.
   * - 'bottom': Only the bottom edge.
   * - 'both': Both top and bottom edges (default).
   */
  curve?: CurvePosition;
  /**
   * Additional CSS class names to be applied to the outer container.
   */
  className?: string;
  /**
   * The content to be wrapped by the CurvedWrapper.
   */
  children: React.ReactNode;
  minHeight?: string;
}

/**
 * A generic wrapper component that conditionally renders a curved container.
 * Based on the `curve` prop, it will only curve the top edge, the bottom edge,
 * or both. It adjusts the negative offsets and border radii accordingly while
 * keeping the content centered.
 *
 * @param {CurvedWrapperProps} props - The props for the component.
 * @returns {React.ReactNode} The rendered CurvedWrapper component.
 *
 * @example
 * <CurvedWrapper curve="top" className="my-custom-class">
 *   <div>Your content here</div>
 * </CurvedWrapper>
 */
export const CurvedWrapper: React.FC<CurvedWrapperProps> = ({
  curve = 'both',
  className = '',
  children,
  minHeight = '80vh',
}: CurvedWrapperProps): React.ReactNode => {
  // Outer container that centers content and provides a base min-height.
  const outerClasses = cn(
    'relative grid place-items-center min-h-[60vh]',
    className
  );

  if (curve === 'top') {
    return (
      <div className={outerClasses}>
        <section
          className='absolute -top-16 z-10 flex w-full flex-col items-center justify-center space-y-24 rounded-t-[80px] bg-white px-12 py-36'
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
          className='absolute -bottom-16 z-10 flex w-full flex-col items-center justify-center space-y-24 rounded-b-[80px] bg-white px-12 py-36'
          style={{ minHeight: minHeight }}
        >
          {children}
        </section>
      </div>
    );
  } else {
    // 'both' curves case: apply both top and bottom negative offsets and full rounding.
    return (
      <div className={outerClasses}>
        <section
          className='absolute -bottom-16 -top-16 z-10 flex w-full flex-col items-center justify-center space-y-24 rounded-[80px] bg-white px-12 py-36'
          style={{ minHeight: minHeight }}
        >
          {children}
        </section>
      </div>
    );
  }
};
