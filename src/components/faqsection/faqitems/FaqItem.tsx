import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-gray-200 py-4'>
      {/* Question Row */}
      <div
        className='flex cursor-pointer items-center justify-between'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center'>
          <div className='mr-4 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white'>
            {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </div>
          <p className='text-xl font-medium text-gray-800'>{question}</p>
        </div>
      </div>

      {/* Answer Section with Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='overflow-hidden'
      >
        <div className='mt-3 pl-10 text-lg text-gray-600'>
          <p>{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};
