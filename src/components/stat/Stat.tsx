import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
  icon: LucideIcon; // Icon as a prop
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
    <div className='flex items-center gap-6'>
      {/* Icon Container */}
      <div className='flex h-24 w-24 items-center justify-center rounded-[16px] bg-primary shadow-[insert_5px_5px_15px_#000000]'>
        <Icon className={'h-[60%] w-[60%] text-white'} />
      </div>
      {/* Number and Text */}
      <div className='flex flex-col'>
        <p className='font-britania text-4xl text-primary'>
          <span ref={ref}></span> {suffix}
        </p>
        <p className='text-lg text-neutral-600'>{subheading}</p>
      </div>
    </div>
  );
};
