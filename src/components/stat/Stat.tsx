import React, { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
  icon: React.ReactNode; // Icon as a prop
}

export const Stat = ({
  num,
  suffix,
  decimals = 0,
  subheading,
  icon,
}: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className='flex items-center gap-4'>
      {/* Icon Container */}
      <div className='flex h-16 w-16 items-center justify-center rounded-lg bg-primary'>
        {icon}
      </div>
      {/* Number and Text */}
      <div className='flex flex-col'>
        <p className='text-4xl font-semibold text-primary'>
          <span ref={ref}></span>
          {suffix}
        </p>
        <p className='text-lg text-neutral-600'>{subheading}</p>
      </div>
    </div>
  );
};
