import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='border-b border-[#aaaaaa] py-4 sm:py-6 lg:py-8'>
      {/* Question Row */}
      <div
        className='flex cursor-pointer items-center justify-between'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex items-center'>
          <div className='mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white sm:mr-4 sm:h-6 sm:w-6'>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ChevronDown className='h-3 w-3 sm:h-3.5 sm:w-3.5' />
            </motion.div>
          </div>
          <p className='text-base font-medium text-gray-800 sm:text-lg lg:text-xl'>
            {question}
          </p>
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
        <div className='mt-2 pl-8 text-sm text-gray-600 sm:mt-3 sm:pl-10 sm:text-base lg:text-lg'>
          <p>{answer}</p>
        </div>
      </motion.div>
    </div>
  );
};
