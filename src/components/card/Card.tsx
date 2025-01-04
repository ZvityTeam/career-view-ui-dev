import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const Card = ({ icon: Icon, title, description }: CardProps) => {
  return (
    <div className='flex w-full max-w-[450px] items-center gap-6 space-x-6'>
      {/* Icon Container */}
      <div className='flex aspect-square min-h-full items-center justify-center rounded-lg bg-gray-900'>
        <Icon className='h-12 w-12 text-white' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-semibold text-gray-900'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
      </div>
    </div>
  );
};
