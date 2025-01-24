import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
import { cardVariants } from './config.ts';

export const Podcast = () => {
  return (
    <motion.div
      className='flex flex-col items-center rounded-md bg-green-100 p-6 text-center shadow-md'
      whileHover='hover'
      variants={cardVariants}
    >
      <Mic
        size={18}
        className='mb-2 text-green-500'
      />
      <div className='text-lg font-bold'>Podcast</div>
    </motion.div>
  );
};
