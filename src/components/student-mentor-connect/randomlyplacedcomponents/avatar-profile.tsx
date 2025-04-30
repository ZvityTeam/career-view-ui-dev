import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Mentor } from '../../../types/types';
import { Avatar } from './avatar.tsx';

interface AvatarProfileCardProps {
  mentor: Mentor;
}

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export function AvatarProfileCard({ mentor }: AvatarProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='relative z-30 w-[240px] rounded-[16px] bg-white p-4 shadow sm:w-[280px] sm:rounded-[20px] sm:p-5 lg:w-[320px] lg:rounded-[24px] lg:p-6'
    >
      <div className='flex items-end justify-between'>
        <div className='absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
          <Avatar
            image={mentor.profileImage || 'https://placehold.co/400'}
            alt={mentor.name || 'Mentor Avatar'}
            isActive
            size='sm'
          />
        </div>
        <div className='ml-2 flex items-center space-x-1'>
          <div className='h-4 w-4 text-yellow-400 sm:h-5 sm:w-5' />
        </div>
      </div>
      <h2 className='mt-3 text-base font-bold sm:text-lg lg:text-xl'>
        {mentor.name || 'Unknown Mentor'}
      </h2>
      <p className='text-xs text-gray-600 sm:text-sm'>
        {mentor.role ? `${mentor.role}, ` : ''}{' '}
        {mentor.company || mentor.university || ''}
      </p>
      <div className='mt-2 truncate text-xs leading-relaxed text-gray-600 sm:mt-3 sm:text-sm'>
        {mentor.bio || 'No bio available'}{' '}
        <span className='mx-1 text-gray-400 sm:mx-2'>|</span>
        {mentor.industries?.join(', ') || 'Industry Unknown'}{' '}
        <span className='mx-1 text-gray-400 sm:mx-2'>|</span>
        {mentor.availableHours
          ? `Available ${mentor.availableHours}`
          : 'Availability not specified'}
      </div>
      <div className='mt-3 flex items-center space-x-3 sm:mt-4 sm:space-x-4'>
        <div className='flex flex-col items-center'>
          <motion.div
            variants={pulseVariants}
            animate='pulse'
            className='mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-[10px] font-bold text-gray-700 sm:h-7 sm:w-7 sm:text-xs lg:h-8 lg:w-8'
          >
            SAT
          </motion.div>
          <span className='text-base font-bold sm:text-lg lg:text-xl'>20</span>
        </div>
        <div className='text-xs text-gray-600 sm:text-sm'>
          <p>Next available on</p>
          <p className='font-medium'>Wed, 2 Feb, 10AM</p>
        </div>
      </div>
      <div className='mt-3 flex items-center justify-center rounded-[8px] bg-gray-100 px-2 py-1 text-xs text-gray-500 sm:mt-4 sm:rounded-[10px] sm:px-3 sm:py-2 sm:text-sm'>
        <Mail className='mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4' />
        Responds in 2-3 hours
      </div>
    </motion.div>
  );
}
