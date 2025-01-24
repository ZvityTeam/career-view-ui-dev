import React from 'react';
import { Button } from '../button/Button';
import { Spacer } from '../spacer';

export interface MentorProfileProps {
  name: string;
  role: string;
  company: string;
  university: string;
  bio: string;
  availableHours: string;
  profileImage: string;
  hobbies: string;
  interests: string;
  sideHustles: string;
  onAddToMentorList?: () => void;
  onClick?: () => void;
}

export const MentorProfileCard: React.FC<MentorProfileProps> = ({
  name,
  role,
  company,
  university,
  bio,
  availableHours,
  profileImage,
  hobbies,
  interests,
  sideHustles,
  onAddToMentorList,
  onClick,
}) => {
  return (
    <div
      className='mx-auto flex w-full max-w-6xl cursor-pointer items-center gap-6 rounded-xl border bg-white p-12 shadow-md'
      onClick={onClick}
    >
      {/* Profile Image */}
      <div className='flex flex-col items-center'>
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className='h-24 w-24 rounded-full border border-gray-300 object-cover'
        />
        <Button
          variant='secondary'
          size='lg'
          className='mt-4'
        >
          See Profile
        </Button>
        <Button
          size='lg'
          className='mt-2'
        >
          Ask a Question
        </Button>
      </div>

      {/* Mentor Details */}
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-semibold'>{name}</p>
          {!!onAddToMentorList && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToMentorList();
              }}
              className='rounded-full border border-blue-500 px-4 py-2 text-blue-500 hover:bg-blue-100'
            >
              + Add to Mentor List
            </button>
          )}
        </div>

        <p className='italic text-gray-500'>
          {role}, at {company} | Studied at {university}
        </p>

        <Spacer />
        <p className='mt-2 text-gray-600'>
          {bio} | <span className='font-semibold'>Available:</span>{' '}
          {availableHours}
        </p>

        {/* Interests, Hobbies, and Side Hustles */}
        <div className='mt-4 flex gap-8'>
          <div>
            <p className='flex items-center gap-1 font-semibold'>
              Hobbies <span className='text-blue-500'>🔗</span>
            </p>
            <p className='italic text-gray-500'>{hobbies}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-semibold'>
              Interests <span className='text-red-500'>❤️</span>
            </p>
            <p className='italic text-gray-500'>{interests}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-semibold'>
              Side Hustles <span className='text-green-500'>💼</span>
            </p>
            <p className='italic text-gray-500'>{sideHustles}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
