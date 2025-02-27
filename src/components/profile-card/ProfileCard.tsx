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
  hoverHighlight,
}) => {
  return (
    <motion.div
      className='relative h-[351px] w-[513px] overflow-hidden rounded-[30px] bg-white shadow-md'
      initial='rest'
      whileHover='hover'
      animate='rest'
    >
      {/* DEFAULT STATE */}
      <motion.div className={'flex h-full flex-col justify-between'}>
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.2 }}
          className={'h-full w-full overflow-hidden'}
        >
          <img
            src={hoverImage}
            alt='Profile Hover'
            className='h-full w-full rounded object-cover'
          />
        </motion.div>
        {/* Top Section */}
        <motion.div
          className={'p-6'}
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          <div className='flex items-start space-x-3'>
            <img
              src={defaultImage}
              alt='Profile'
              className='aspect-square h-[94px] w-[94px] rounded-full object-cover'
            />
            <div className={'flex flex-col gap-2'}>
              <div>
                <h2 className='font-avenir text-[28px] font-semibold'>
                  {name}
                </h2>
                <p className='font-avenir text-[22px]'>{subtitle}</p>
              </div>
              <p className='mt-3 font-avenir text-sm font-light leading-relaxed text-gray-600'>
                {description}
              </p>
            </div>
          </div>
          {/* Body (Description) */}
        </motion.div>
        {/* Bottom Black Bar */}
        <div className='flex h-[30%] items-center rounded-[30px] bg-[#272727] p-[38px] text-white'>
          <div>
            <p className='font-semibold'>{mentorTitle}</p>
            <p className='text-sm font-light'>{mentorSubtitle}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileCard;
