import { motion } from 'framer-motion';
import { Mentor } from '../../../types/types';
import { Avatar } from './avatar';

// Define animation variants
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
      className='relative w-[320px] rounded-[24px] bg-white p-6 shadow'
    >
      {/* Top Row: Avatar, Name, Role */}
      <motion.div
        variants={topRowVariants}
        className='flex items-start'
      >
        {/* Avatar with scale animation */}
        <motion.div variants={avatarVariants}>
          <Avatar
            image={profileImage || 'https://placehold.co/400'}
            alt={name || 'Mentor'}
            isActive
            size='sm'
          />
        </motion.div>

        {/* Name and Role with fade-in animation */}
        <motion.div
          variants={textVariants}
          className='ml-3'
        >
          <div className='flex items-center space-x-1'>
            <h2 className='text-base font-bold text-black'>
              {name || 'Unknown Mentor'}
            </h2>
            {/* <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-gray-600">4.9</span> */}
          </div>
          <p className='mt-1 text-sm text-gray-500'>
            {role || 'No role specified'}
          </p>
        </motion.div>
      </motion.div>

      {/* Q&A Section with slide-up and fade-in animation */}
      <motion.div
        variants={qaVariants}
        className='mt-4 rounded-xl bg-gray-50 p-4'
      >
        {questions && questions.length > 0 ? (
          <>
            <p className='mb-2 font-medium text-gray-700'>Q. {questions[0]}</p>
            <p className='text-sm text-gray-600'>
              Ans. The mentor will provide a detailed answer during the session.
            </p>
          </>
        ) : (
          <>
            <p className='mb-2 font-medium text-gray-700'>
              Q. No questions available
            </p>
            <p className='text-sm text-gray-600'>
              Ans. This mentor has not provided answers yet.
            </p>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
