/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorageState from '../../hooks/useLocalStorageState.ts';
import { Button } from '../ui/Button.tsx';

// Variants for the entire collapsible section
const containerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      // We'll stagger children (list items) slightly
      staggerChildren: 0.07,
      when: 'beforeChildren',
    },
  },
};

// Variants for each mentor item
const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

const SavedMentors = () => {
  const [savedMentors, setSavedMentors] = useLocalStorageState<any[]>(
    'savedMentors',
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  if (savedMentors.length === 0) return null;

  const removeMentor = (name: string) => {
    setSavedMentors(savedMentors.filter((mentor) => mentor.name !== name));
  };

  const handleAskQuestion = () => {
    const mentorIds = savedMentors.map((mentor) => mentor?.name).join(',');
    navigate(`/ask-a-question?mentors=${mentorIds}`);
  };

  return (
    <motion.div
      // Fancy initial mount animation for the entire fixed box
      initial={{ y: 100, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className='fixed bottom-6 right-6 z-[100] w-64 overflow-hidden rounded-lg bg-white/90 shadow-xl ring-1 ring-slate-300 backdrop-blur-sm'
    >
      {/* Collapsible Header */}
      <div
        className='flex cursor-pointer items-center justify-between bg-slate-900 px-3 py-2 text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className='font-semibold tracking-wide'>
          Mentors list ({savedMentors.length})
        </span>
        <motion.div
          // Rotate the chevron based on isOpen
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronUp className='h-4 w-4' />
          {/* Or you can swap icons conditionally:
            {isOpen ? <ChevronDown /> : <ChevronUp />}
            but rotating one icon looks snappier. */}
        </motion.div>
      </div>

      {/* We use AnimatePresence to mount/unmount the collapsible content smoothly */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='mentor-list'
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden' // so it animates out
            className='overflow-hidden'
          >
            <div className='p-3'>
              {savedMentors.map((mentor) => (
                <motion.div
                  key={mentor.name}
                  variants={itemVariants}
                  className='flex items-center justify-between border-b border-slate-200 py-2'
                >
                  <span className='text-sm font-medium text-slate-700'>
                    {mentor.name}
                  </span>
                  <Trash2
                    className='cursor-pointer text-red-500 hover:text-red-700'
                    onClick={() => removeMentor(mentor.name)}
                  />
                </motion.div>
              ))}

              {/* Ask a Question Button */}
              <Button
                onClick={handleAskQuestion}
                className='mt-4 w-full bg-slate-900 text-white hover:bg-slate-800'
              >
                Ask a Question
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SavedMentors;
