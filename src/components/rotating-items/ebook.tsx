import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { cardVariants } from './config.ts';

export const Ebook = () => {
  return (
    <motion.div
      className='flex flex-col items-center rounded-lg bg-yellow-100 p-6 text-center shadow-md'
      whileHover='hover'
      variants={cardVariants}
    >
      <BookOpen
        size={22}
        className='mb-2 text-yellow-500'
      />
      <div className='text-lg font-bold'>Ebook</div>
    </motion.div>
  );
};
