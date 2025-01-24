import { Link } from 'react-router-dom';
import { Link as LinkIcon } from 'lucide-react';

interface OfferCardProps {
  title: string;
  description: string;
  gradientClass: string;
  href: string;
}

export const OfferCard = ({
  title,
  description,
  gradientClass,
  href,
}: OfferCardProps) => {
  return (
    <div className='flex h-[500px] flex-col overflow-hidden rounded-[60px] bg-white shadow-md'>
      {/* Gradient Top Section */}
      <div className={`relative h-[60%] ${gradientClass}`}>
        {/* Circular Link Icon */}
        <Link to={href}>
          <div className='absolute right-6 top-6 flex flex-col items-center'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-colors hover:bg-slate-800 hover:text-white'>
              <LinkIcon />
            </div>
          </div>
        </Link>
      </div>

      {/* Content Section */}
      <div className='grid h-[40%] scale-110 place-items-center px-12'>
        <div className='text-left'>
          <p className='text-lg font-semibold text-gray-800'>{title}</p>
          <p className='text-sm text-gray-600'>{description}</p>
        </div>
      </div>
    </div>
  );
};
