import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const Card = ({ icon: Icon, title, description }: CardProps) => {
  return (
    <div className='flex w-full max-w-[750px] items-center gap-6 space-x-2'>
      {/* Icon Container */}
      <div className='flex aspect-square min-h-full items-center justify-center rounded-[20px] bg-[#272727] shadow-[inset_5px_5px_15px_#000000]'>
        <Icon className='h-14 w-14 text-white' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-2'>
        <h3 className='font-avenir text-3xl font-semibold text-gray-900'>
          {title}
        </h3>
        <p className='max-w-[90%] text-lg text-gray-600'>{description}</p>
      </div>
    </div>
  );
};
