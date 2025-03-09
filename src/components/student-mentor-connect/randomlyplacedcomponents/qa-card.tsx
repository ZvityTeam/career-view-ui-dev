import { motion } from 'framer-motion';
import { Avatar } from './avatar';
import { Star } from 'lucide-react';
import { Mentor } from '../../../types/types';

interface QACardProps {
  mentor: Mentor;
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function QACard({ mentor }: QACardProps) {
  const { name, role, profileImage, questions } = mentor;

  return (
    <motion.div
      {...fadeInUp}
      className='relative w-[320px] rounded-[24px] bg-white p-6 shadow'
    >
      {/* Top Row: Avatar, Name, Rating, Job */}
      <div className='flex items-start'>
        {/* Avatar on the left */}
        <Avatar
          image={profileImage || 'https://placehold.co/400'}
          alt={name || 'Mentor'}
          isActive
          size='sm'
        />

        {/* Name + Star Rating + Job on the right */}
        <div className='ml-3'>
          <div className='flex items-center space-x-1'>
            <h2 className='text-base font-bold text-black'>
              {name || 'Unknown Mentor'}
            </h2>
            <Star className='h-4 w-4 text-yellow-400' />
            <span className='text-sm text-gray-600'>4.9</span>
          </div>
          <p className='mt-1 text-sm text-gray-500'>
            {role || 'No role specified'}
          </p>
        </div>
      </div>

      {/* Q & A Section */}
      {questions && questions.length > 0 ? (
        <div className='mt-4 rounded-xl bg-gray-50 p-4'>
          <p className='mb-2 font-medium text-gray-700'>Q. {questions[0]}</p>
          <p className='text-sm text-gray-600'>
            Ans. This mentor will provide a detailed answer during the session.
          </p>
        </div>
      ) : (
        <div className='mt-4 rounded-xl bg-gray-50 p-4'>
          <p className='mb-2 font-medium text-gray-700'>
            Q. No questions available
          </p>
          <p className='text-sm text-gray-600'>
            Ans. This mentor has not provided answers yet.
          </p>
        </div>
      )}
    </motion.div>
  );
}
