import React from 'react';
import { motion } from 'framer-motion';

interface ProfileCardProps {
  defaultImage: string;
  hoverImage: string;
  name: string;
  subtitle: string;
  description: string;
  mentorTitle: string;
  mentorSubtitle: string;
  mentorHighlight: string;
  hoverHighlight: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  defaultImage,
  hoverImage,
  name,
  subtitle,
  description,
  mentorTitle,
  mentorSubtitle,
  mentorHighlight,
  hoverHighlight,
}) => {
  return (
    <motion.div
      className='relative w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md'
      initial='rest'
      whileHover='hover'
      animate='rest'
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.02 },
      }}
    >
      {/* DEFAULT STATE */}
      <motion.div
        className='p-4'
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Top Section */}
        <div className='flex items-center space-x-3'>
          <img
            src={defaultImage}
            alt='Profile'
            className='h-12 w-12 rounded-full object-cover'
          />
          <div>
            <h2 className='text-lg font-semibold'>{name}</h2>
            <p className='text-sm text-gray-500'>{subtitle}</p>
          </div>
        </div>

        {/* Body (Description) */}
        <p className='mt-3 text-sm leading-relaxed text-gray-600'>
          {description}
        </p>

        {/* Bottom Black Bar */}
        <div className='mt-4 rounded-md bg-black p-3 text-white'>
          <p className='font-semibold'>{mentorTitle}</p>
          <p className='text-sm'>{mentorSubtitle}</p>
          <p className='mt-2 font-semibold'>{mentorHighlight}</p>
        </div>
      </motion.div>

      {/* HOVER STATE */}
      <motion.div
        className='absolute left-0 top-0 h-full w-full bg-white p-4'
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.2 }}
      >
        <img
          src={hoverImage}
          alt='Profile Hover'
          className='h-40 w-full rounded object-cover'
        />
        <div className='mt-4'>
          <h2 className='text-lg font-semibold'>{name}</h2>
          <p className='text-sm text-gray-500'>{subtitle}</p>
        </div>
        <p className='mt-4 text-sm text-gray-600'>{hoverHighlight}</p>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
