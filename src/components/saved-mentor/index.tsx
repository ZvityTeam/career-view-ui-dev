import { useState } from 'react';
import { ChevronDown, ChevronUp, Trash2 } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';
import { MentorCardProps } from '../meet-our-mentors/mentorcard/MentorCard.tsx';

export const SavedMentors = () => {
  const [savedMentors, setSavedMentors] = useLocalStorage<MentorCardProps[]>(
    'savedMentors',
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  if (savedMentors.length === 0) return null; // ✅ Hide when no mentors

  const removeMentor = (name: string) => {
    setSavedMentors(savedMentors.filter((mentor) => mentor.name !== name));
  };

  return (
    <div className='fixed bottom-6 right-6 w-64 overflow-hidden rounded-lg bg-white shadow-lg'>
      {/* Collapsible Header */}
      <div
        className='flex cursor-pointer items-center justify-between bg-blue-600 p-3 text-white'
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Saved Mentors ({savedMentors.length})</span>
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </div>

      {/* Mentor List (Only visible when open) */}
      {isOpen && (
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
        </div>
      )}
    </div>
  );
};
