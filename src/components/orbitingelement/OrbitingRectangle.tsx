import React from 'react';
import { cn } from '../../utils/cn';

export interface OrbitingRectanglesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
  rectangleWidth?: number;
  rectangleHeight?: number;
}

export function OrbitingRectangle({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  rectangleWidth = 180,
  rectangleHeight = 120,
  ...props
}: OrbitingRectanglesProps) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {path && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          className='pointer-events-none absolute inset-0 size-full'
        >
          <rect
            className='fill-none stroke-black/10 stroke-1 dark:stroke-white/10'
            x={`calc(50% - ${rectangleWidth / 2}px)`}
            y={`calc(50% - ${rectangleHeight / 2}px)`}
            width={rectangleWidth}
            height={rectangleHeight}
            rx={rectangleHeight / 2}
            ry={rectangleHeight / 2}
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={
              {
                '--duration': calculatedDuration,
                '--radius': radius,
                '--angle': angle,
                '--icon-size': `${iconSize}px`,
                '--rect-width': `${rectangleWidth}px`,
                '--rect-height': `${rectangleHeight}px`,
              } as React.CSSProperties
            }
            className={cn(
              `animate-orbit absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center`,
              { '[animation-direction:reverse]': reverse },
              className
            )}
            {...props}
          >
            <div className='flex h-[var(--rect-height)] w-[var(--rect-width)] items-center justify-center rounded-full bg-white/10 backdrop-blur-sm'>
              {child}
            </div>
          </div>
        );
      })}
    </>
  );
}
