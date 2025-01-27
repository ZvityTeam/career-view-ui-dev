import { motion } from 'framer-motion';
import { Avatar } from './avatar';
import { Star } from 'lucide-react';

// Optional animation variants:
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function QACard() {
  return (
    <motion.div
      {...fadeInUp}
      className='relative w-[320px] rounded-[24px] bg-white p-6 shadow'
    >
      {/* Top Row: Avatar, Name, Rating, Job */}
      <div className='flex items-start'>
        {/* Avatar on the left */}
        <Avatar
          image='https://placehold.co/400'
          alt='Mark Johnson'
          isActive
          size='sm'
        />

        {/* Name + Star Rating + Job on the right */}
        <div className='ml-3'>
          <div className='flex items-center space-x-1'>
            <h2 className='text-base font-bold text-black'>Mark Johnson</h2>
            <Star className='h-4 w-4 text-yellow-400' />
            <span className='text-sm text-gray-600'>4.9</span>
          </div>
          <p className='mt-1 text-sm text-gray-500'>Psychologist, 15 yrs EXP</p>
        </div>
      </div>

      {/* Q & A Section */}
      <div className='mt-4 rounded-xl bg-gray-50 p-4'>
        <p className='mb-2 font-medium text-gray-700'>
          Q. Which major is best for flexible employability?
        </p>
        <p className='text-sm text-gray-600'>
          Ans. Lorem ipsum dolor sit amet elitr, sed diam nonumy eirmod tempor.
        </p>
      </div>
    </motion.div>
  );
}
