import { useState } from 'react';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import { MentorCardProps } from '../meet-our-mentors/mentorcard/MentorCard.tsx';
import { Button } from '../button/Button.tsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const SavedMentors = () => {
  const [savedMentors, setSavedMentors] = useLocalStorage<MentorCardProps[]>(
    'savedMentors',
    []
  );
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  if (savedMentors.length === 0) return null; // ✅ Hide when no mentors

  const removeMentor = (name: string) => {
    setSavedMentors(savedMentors.filter((mentor) => mentor.name !== name));
  };

  const handleAskQuestion = () => {
    const mentorIds = savedMentors.map((mentor) => mentor?.name).join(',');
    navigate(`/ask-a-question?mentors=${mentorIds}`);
  };

  return (
    <div className='fixed bottom-6 right-6 w-64 overflow-hidden rounded-lg bg-white shadow-lg'>
      {/* Collapsible Header */}
      <div
        className='flex cursor-pointer items-center justify-between bg-blue-600 p-3 text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Mentors list ({savedMentors.length})</span>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </div>

      {/* Smooth Animated Mentor List */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className='overflow-hidden'
      >
        <div className='p-3'>
          {savedMentors.map((mentor) => (
            <div
              key={mentor.name}
              className='flex items-center justify-between border-b py-2'
            >
              <span className='text-sm'>{mentor.name}</span>
              <Trash2
                className='cursor-pointer text-red-500 hover:text-red-700'
                onClick={() => removeMentor(mentor.name)}
              />
            </div>
          ))}

          {/* Ask a Question Button */}
          <Button
            onClick={handleAskQuestion}
            className='mt-4 w-full bg-blue-600 text-white hover:bg-blue-700'
          >
            Ask a Question
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
