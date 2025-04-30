import { motion } from 'framer-motion';
import { Mentor } from '../../../types/types';
import { Avatar } from './avatar';

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const topRowVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const avatarVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.2, ease: 'easeOut' },
};

const textVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

const qaVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

interface QACardProps {
  mentor: Mentor;
}

export function QACard({ mentor }: QACardProps) {
  const { name, role, profileImage, questions } = mentor;

  return (
    <motion.div
      variants={cardVariants}
      initial='initial'
      animate='animate'
      className='relative w-[240px] rounded-[16px] bg-white p-4 shadow sm:w-[280px] sm:rounded-[20px] sm:p-5 lg:w-[320px] lg:rounded-[24px] lg:p-6'
    >
      <motion.div
        variants={topRowVariants}
        className='flex items-start'
      >
        <motion.div variants={avatarVariants}>
          <Avatar
            image={profileImage || 'https://placehold.co/400'}
            alt={name || 'Mentor'}
            isActive
            size='sm'
          />
        </motion.div>
        <motion.div
          variants={textVariants}
          className='ml-2 sm:ml-3'
        >
          <div className='flex items-center space-x-1'>
            <h2 className='text-sm font-bold text-black sm:text-base lg:text-base'>
              {name || 'Unknown Mentor'}
            </h2>
          </div>
          <p className='mt-1 text-xs text-gray-500 sm:text-sm lg:text-sm'>
            {role || 'No role specified'}
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        variants={qaVariants}
        className='mt-3 rounded-lg bg-gray-50 p-3 sm:mt-4 sm:rounded-xl sm:p-4'
      >
        {questions && questions.length > 0 ? (
          <>
            <p className='mb-1 text-xs font-medium text-gray-700 sm:mb-2 sm:text-sm'>
              Q. {questions[0]}
            </p>
            <p className='text-xs text-gray-600 sm:text-sm'>
              Ans. The mentor will provide a detailed answer during the session.
            </p>
          </>
        ) : (
          <>
            <p className='mb-1 text-xs font-medium text-gray-700 sm:mb-2 sm:text-sm'>
              Q. No questions available
            </p>
            <p className='text-xs text-gray-600 sm:text-sm'>
              Ans. This mentor has not provided answers yet.
            </p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
