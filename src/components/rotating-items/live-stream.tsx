import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import { cardVariants } from './config.ts';

export const LiveStream = () => {
  return (
    <motion.div
      className='flex flex-col items-center rounded-2xl bg-blue-100 p-1 text-center shadow-md'
      whileHover='hover'
      variants={cardVariants}
    >
      <Video
        size={24}
        className='mb-2 text-blue-500'
      />
      <div className='text-lg font-bold'>Livestream</div>
    </motion.div>
  );
};
