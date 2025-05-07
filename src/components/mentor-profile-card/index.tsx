import React from 'react';
import { Mentor } from '../../types/types'; // Adjust path as needed
import { Spacer } from '../spacer';
import analytics from '../svgs/analytics.svg';
import bag from '../svgs/bag.svg';
import heart from '../svgs/heart.svg';
import { Button } from '../ui/Button';

export interface MentorProfileCardProps extends Mentor {
  onAddToMentorList?: () => void;
  isAdded?: boolean;
  onSeeProfile: () => void;
  onAskQuestion: () => void;
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
  podcastLink = '',
  onAddToMentorList,
  isAdded = false,
  onSeeProfile,
  onAskQuestion,
}) => {
  console.log(onAddToMentorList, isAdded, onSeeProfile);
  return (
    <div className='relative mx-auto flex w-full max-w-6xl flex-col items-center gap-6 rounded-xl border bg-white px-4 py-6 shadow-md sm:flex-row sm:gap-12 sm:px-8 sm:py-8 md:px-12'>
      {/* Add/Remove Button */}
      {/* {!!onAddToMentorList && (
        <Button
          variant='outline'
          className='absolute right-2 top-2 flex items-center justify-between border-[#6B8FF2] text-sm text-[#272727] hover:bg-[#272727] hover:text-white sm:right-4 sm:top-4 sm:text-base'
          onClick={(e) => {
            e.stopPropagation();
            onAddToMentorList();
          }}
        >
          {isAdded ? (
            <>
              <Trash2
                size={16}
                className='mr-1 sm:mr-2'
              />{' '}
              Remove
            </>
          ) : (
            <>
              <UserPlus
                size={16}
                className='mr-1 sm:mr-2'
              />{' '}
              Add
            </>
          )}
        </Button>
      )} */}

      {/* Profile Image Section */}
      <div className='flex w-full flex-col items-center sm:w-auto'>
        <img
          src={profileImage || 'https://www.gravatar.com/avatar/?d=mp'}
          alt={`${name}'s profile`}
          className='h-32 w-32 rounded-full border border-gray-300 object-cover sm:h-40 sm:w-40'
        />
        <Button
          variant='outline'
          size='lg'
          className='mt-4 w-full text-sm text-black hover:bg-[#272727] hover:text-white sm:w-48 sm:text-base'
          onClick={onSeeProfile}
        >
          See Profile
        </Button>
        <Button
          size='lg'
          className='bg mt-2 w-full text-sm hover:bg-[#4B6FD2] sm:w-48 sm:text-base'
          onClick={onAskQuestion}
        >
          Ask a Question
        </Button>
      </div>

      {/* Mentor Details */}
      <div className='w-full flex-1'>
        <p className='font-avenir text-2xl font-semibold text-[#272727] sm:text-3xl'>
          {name}
        </p>
        <p className='text-sm italic text-gray-500 sm:text-base'>
          {role}, at {company} | Studied at {university}
        </p>
        <Spacer size={12} />
        <p
          className='mt-2 text-sm text-gray-600 sm:text-base'
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
        <Spacer size={12} />
        {podcastLink && (
          <a
            href={podcastLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm text-[#6B8FF2] hover:underline sm:text-base'
          >
            Watch Podcast on YouTube
          </a>
        )}
        <Spacer size={12} />
        <div className='flex flex-col gap-4 sm:flex-row sm:gap-8'>
          {hobbies && (
            <div>
              <p className='flex items-center gap-1 text-sm font-semibold sm:text-base'>
                Hobbies
                <img
                  src={analytics}
                  alt=''
                  className='h-4 w-4'
                />
              </p>
              <p className='text-sm italic text-gray-500'>{hobbies}</p>
            </div>
          )}
          {interests && (
            <div>
              <p className='flex items-center gap-1 text-sm font-semibold sm:text-base'>
                Interests
                <img
                  src={heart}
                  alt=''
                  className='h-4 w-4'
                />
              </p>
              <p className='text-sm italic text-gray-500'>{interests}</p>
            </div>
          )}
          {sideHustles && (
            <div>
              <p className='flex items-center gap-1 text-sm font-semibold sm:text-base'>
                Side Hustles
                <img
                  src={bag}
                  alt=''
                  className='h-4 w-4'
                />
              </p>
              <p className='text-sm italic text-gray-500'>{sideHustles}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
