import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const Card = ({ icon: Icon, title, description }: CardProps) => {
  return (
    <div className='flex w-full max-w-[600px] items-center gap-4 sm:max-w-[650px] sm:gap-6 lg:max-w-[750px]'>
      {/* Icon Container */}
      <div className='flex aspect-square items-center justify-center rounded-[16px] bg-[#272727] p-2 shadow-[inset_5px_5px_15px_#000000] sm:rounded-[20px] sm:p-3'>
        <Icon className='h-10 w-10 text-white sm:h-12 sm:w-12 lg:h-14 lg:w-14' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-1 sm:gap-2'>
        <h3 className='font-avenir text-xl font-semibold text-gray-900 sm:text-2xl lg:text-3xl'>
          {title}
        </h3>
        <p className='max-w-[95%] text-sm text-gray-600 sm:max-w-[90%] sm:text-base lg:text-lg'>
          {description}
        </p>
      </div>
    </div>
  );
};
