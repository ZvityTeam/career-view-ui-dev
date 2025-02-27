import React from 'react';
import { Mentor } from '../../types/types'; // adjust the import path as needed
import { Button } from '../ui/Button';
import { Spacer } from '../spacer';
import { Trash2, UserPlus } from 'lucide-react';
import bag from '../svgs/bag.svg';
import heart from '../svgs/heart.svg';
import analytics from '../svgs/analytics.svg';

export interface MentorProfileCardProps extends Mentor {
  onClick?: () => void;
  onAddToMentorList?: () => void;
  isAdded?: boolean;
}

export const MentorProfileCard: React.FC<MentorProfileCardProps> = ({
  name = '',
  role = '',
  company = '',
  university = '',
  bio = '',
  availableHours = '',
  profileImage = '',
  hobbies = '',
  interests = '',
  sideHustles = '',
  onClick,
  onAddToMentorList,
  isAdded = false,
}) => {
  return (
    <div
      className='relative mx-auto flex w-full max-w-6xl cursor-pointer items-center gap-12 rounded-xl border bg-white px-12 py-8 shadow-md'
      onClick={onClick}
    >
      {/* Top Right Absolute Button */}
      {!!onAddToMentorList && (
        <Button
          variant='outline'
          className='absolute right-4 top-4 flex items-center justify-between border-[#6B8FF2] text-[#6B8FF2] hover:bg-[#6B8FF2] hover:text-white'
          onClick={(e) => {
            e.stopPropagation();
            onAddToMentorList();
          }}
        >
          {isAdded ? (
            <Trash2 />
          ) : (
            <>
              <UserPlus /> Add to Mentor List
            </>
          )}
        </Button>
      )}

      {/* Profile Image */}
      <div className='flex flex-col items-center'>
        <img
          src={profileImage}
          alt={`${name}'s profile`}
          className='h-40 w-40 rounded-full border border-gray-300 object-cover'
        />
        <Button
          variant='outline'
          size='lg'
          className='mt-4 w-full text-black'
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
          <p className='font-avenir text-3xl font-semibold'>{name}</p>
        </div>

        <p className='italic text-gray-500'>
          {role}, at {company} | Studied at {university}
        </p>

        <Spacer size={16} />

        <p
          className='mt-2 text-gray-600'
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {bio} | <span className='font-semibold'>Available:</span>{' '}
          {availableHours}
        </p>

        <Spacer size={16} />

        {/* Interests, Hobbies, and Side Hustles */}
        <div className='flex gap-8'>
          <div>
            <p className='flex items-center gap-1 font-semibold'>
              Hobbies
              <img
                src={analytics}
                alt=''
                className='h-4 w-4'
              />
            </p>
            <p className='italic text-gray-500'>{hobbies}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-semibold'>
              Interests
              <img
                src={heart}
                alt=''
                className='h-4 w-4'
              />
            </p>
            <p className='italic text-gray-500'>{interests}</p>
          </div>

          <div>
            <p className='flex items-center gap-1 font-semibold'>
              Side Hustles{' '}
              <img
                src={bag}
                alt=''
                className='h-4 w-4'
              />
            </p>
            <p className='italic text-gray-500'>{sideHustles}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
