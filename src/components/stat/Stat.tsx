import { animate, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
  icon: LucideIcon;
}

export const Stat = ({
  num,
  suffix,
  decimals = 0,
  subheading,
  icon: Icon,
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
    <div className='flex items-center gap-4 sm:gap-6'>
      <div className='flex h-16 w-16 items-center justify-center rounded-[12px] bg-primary shadow-[inset_5px_5px_15px_#000000] sm:h-20 sm:w-20 sm:rounded-[16px] lg:h-24 lg:w-24'>
        <Icon className='h-[60%] w-[60%] text-white' />
      </div>
      <div className='flex flex-col'>
        <p className='font-britania text-2xl text-primary sm:text-3xl lg:text-4xl'>
          <span ref={ref}></span> {suffix}
        </p>
        <p className='text-sm text-neutral-600 sm:text-base lg:text-lg'>
          {subheading}
        </p>
      </div>
    </div>
  );
};
