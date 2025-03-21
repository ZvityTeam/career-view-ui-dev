import { Trash2, UserPlus } from 'lucide-react';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
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
  podcastLink,
  onAddToMentorList,
  isAdded = false,
  onSeeProfile,
}) => {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  // Extract video ID from YouTube URL
  const getVideoId = (url: string) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = podcastLink ? getVideoId(podcastLink) : null;

  return (
    <div
      className='relative mx-auto flex w-full max-w-6xl items-center gap-12 rounded-xl border bg-white px-12 py-8 shadow-md'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Add/Remove Button */}
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
            <>
              <Trash2 /> Remove from Mentor List
            </>
          ) : (
            <>
              <UserPlus /> Add to Mentor List
            </>
          )}
        </Button>
      )}

      {/* Profile Image Section */}
      <div className='flex flex-col items-center'>
        <img
          src={profileImage || 'https://www.gravatar.com/avatar/?d=mp'}
          alt={`${name}'s profile`}
          className='h-40 w-40 rounded-full border border-gray-300 object-cover'
        />
        <Button
          variant='outline'
          size='lg'
          className='mt-4 w-full text-black hover:bg-[#6B8FF2] hover:text-white'
          onClick={onSeeProfile}
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

      {/* Mentor Details or Video Player */}
      <div className='flex-1'>
        {videoId && isHovered ? (
          <div className='mt-6 flex flex-col justify-end'>
            <YouTube
              videoId={videoId}
              opts={{
                width: '100%',
                height: '315', // Fixed height
                playerVars: {
                  autoplay: 1, // Autoplay on hover
                  mute: 0, // Muted for autoplay compliance
                },
              }}
            />
            <a
              href={podcastLink}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 text-blue-500'
            >
              Watch on YouTube
            </a>
          </div>
        ) : (
          <>
            <p className='font-avenir text-3xl font-semibold'>{name}</p>
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
            <div className='flex gap-8'>
              {hobbies && (
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
              )}
              {interests && (
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
              )}
              {sideHustles && (
                <div>
                  <p className='flex items-center gap-1 font-semibold'>
                    Side Hustles
                    <img
                      src={bag}
                      alt=''
                      className='h-4 w-4'
                    />
                  </p>
                  <p className='italic text-gray-500'>{sideHustles}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
