import { Link } from 'lucide-react';

interface OfferCardProps {
  title: string;
  description: string;
  gradientClass: string; // For dynamic background gradients
}

export const OfferCard = ({
  title,
  description,
  gradientClass,
}: OfferCardProps) => {
  return (
    <div className='flex h-[450px] flex-col overflow-hidden rounded-[60px] bg-white shadow-md'>
      {/* Gradient Top Section */}
      <div className={`relative h-[60%] ${gradientClass}`}>
        {/* Circular Link Icon */}
        <div className='absolute right-6 top-6 flex flex-col items-center'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg'>
            <Link />
          </div>
          <p className='text-white'>Connect</p>
        </div>
      </div>

      {/* Content Section */}
      <div className='grid h-[40%] place-items-center px-12'>
        <div className='text-left'>
          <h3 className='text-lg font-semibold text-gray-800'>{title}</h3>
          <p className='text-sm text-gray-600'>{description}</p>
        </div>
      </div>
    </div>
  );
};
