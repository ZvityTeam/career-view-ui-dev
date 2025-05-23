import { Github, Globe, Linkedin, X } from 'lucide-react';
import React from 'react';
import YouTube from 'react-youtube';
import { Spacer } from '../../components/spacer';
import { Button } from '../../components/ui/Button';
import { MentorProfileProps } from '../../types/types';

export const MentorProfileSection: React.FC<MentorProfileProps> = ({
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
  location,
  industries,
  questions,
  socialLinks,
  onAskQuestion,
  onAddToMentorList,
  isAdded,
  podcastLink,
}) => {
  console.log('MentorProfileSection', {
    podcastLink,
    interests,
    hobbies,
    sideHustles,
    industries,
    questions,
    socialLinks,
    onAddToMentorList,
    isAdded,
  });

  const getVideoId = (url: string) => {
    const match = url.match(/v=([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = podcastLink ? getVideoId(podcastLink) : null;

  return (
    <div className='mx-auto max-w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8'>
      {/* Mentor Header */}
      <div className='flex flex-col items-start gap-6 lg:flex-row lg:gap-8'>
        {/* Left Panel - Mentor Profile */}
        <div className='w-full rounded-3xl bg-white p-4 shadow-md sm:p-6 lg:w-1/3'>
          <img
            src={profileImage || 'https://www.gravatar.com/avatar/?d=mp'}
            alt={`${name}'s profile`}
            className='mx-auto h-20 w-20 rounded-full border border-gray-300 object-cover sm:h-24 sm:w-24 lg:mx-0'
          />
          <p className='mt-4 text-center text-base font-semibold sm:text-lg lg:text-left'>
            {name}
          </p>
          <p className='text-center text-sm italic text-gray-500 sm:text-base lg:text-left'>
            {role} at {company}
          </p>
          <p className='text-center text-sm italic text-gray-500 sm:text-base lg:text-left'>
            Studied at {university}
          </p>
          <p className='mt-2 text-center text-xs text-gray-600 sm:text-sm lg:text-left'>
            {location}
          </p>

          {/* Social Links */}
          <div className='mt-3 flex justify-center gap-3 text-gray-500 lg:justify-start'>
            {socialLinks?.linkedin && (
              <a
                href={socialLinks.linkedin}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='h-5 w-5' />
              </a>
            )}
            {socialLinks?.twitter && (
              <a
                href={socialLinks.twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                <X className='h-5 w-5' />
              </a>
            )}
            {socialLinks?.github && (
              <a
                href={socialLinks.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='h-5 w-5' />
              </a>
            )}
          </div>

          <Spacer size={16} />

          {/* Industry Expertise */}
          {industries && industries.length > 0 && (
            <>
              <h3 className='text-center text-base font-semibold sm:text-lg lg:text-left'>
                Industry
              </h3>
              <div className='mt-2'>
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-center gap-2 py-1 lg:justify-start'
                  >
                    <Globe className='h-4 w-4 text-gray-500 sm:h-5 sm:w-5' />
                    <p className='cursor-pointer text-sm text-blue-400 underline sm:text-base'>
                      {industry}
                    </p>
                  </div>
                ))}
              </div>
              <Spacer size={16} />
            </>
          )}

          {/* Ask Questions */}
          {questions && questions.length > 0 && (
            <>
              <h3 className='text-center text-base font-semibold sm:text-lg lg:text-left'>
                What you can ask?
              </h3>
              <ul className='list-inside list-disc text-center text-sm text-gray-600 sm:text-base lg:text-left'>
                {questions.map((question, index) => (
                  <li
                    key={index}
                    className='py-1'
                  >
                    {question}
                  </li>
                ))}
              </ul>
            </>
          )}

          <Spacer size={16} />
        </div>

        {/* Right Panel - Bio and Details */}
        <div className='w-full lg:w-2/3'>
          <div className='mt-4 flex flex-col gap-4 sm:flex-row sm:gap-6'>
            {hobbies && (
              <div className='flex-1'>
                <p className='flex items-center gap-1 text-sm font-semibold sm:text-base'>
                  Hobbies <span className='text-blue-400'>🔗</span>
                </p>
                <p className='text-xs italic text-gray-500 sm:text-sm'>
                  {hobbies}
                </p>
              </div>
            )}
            {interests && (
              <div className='flex-1'>
                <p className='flex items-center gap-1 text-sm font-semibold sm:text-base'>
                  Interests <span className='text-red-400'>🔥</span>
                </p>
                <p className='text-xs italic text-gray-500 sm:text-sm'>
                  {interests}
                </p>
              </div>
            )}
            {sideHustles && (
              <div className='flex-1'>
                <p className='flex items-center gap-1 text-sm font-semibold sm:text-base'>
                  Side Hustles <span className='text-green-400'>💼</span>
                </p>
                <p className='text-xs italic text-gray-500 sm:text-sm'>
                  {sideHustles}
                </p>
              </div>
            )}
          </div>

          <div className='mb-6 mt-6'>
            {videoId && (
              <div className='mb-6 w-full overflow-hidden rounded-lg'>
                <YouTube
                  videoId={videoId}
                  className='w-full'
                  opts={{
                    width: '100%',
                    height: 'auto',
                    playerVars: {
                      autoplay: 1,
                      mute: 1,
                      loop: 1,
                      playlist: videoId,
                    },
                  }}
                  iframeClassName='w-full aspect-video'
                />
              </div>
            )}
            <h2 className='font-avenir text-xl font-bold sm:text-2xl lg:text-3xl'>
              Bio
            </h2>
            <p className='mt-2 text-sm font-light leading-6 text-gray-600 sm:text-base'>
              {bio}
            </p>
            <p className='mt-2 text-sm font-semibold text-gray-600 sm:text-base'>
              Available: {availableHours}
            </p>
          </div>

          <Spacer size={24} />

          {/* Add Mentor Button */}
          <div className='flex flex-col gap-4 sm:flex-row sm:gap-6'>
            {/* <Button
              size='lg'
              onClick={onAddToMentorList}
              className={`${
                isAdded
                  ? 'bg-red-400 text-white hover:bg-red-500'
                  : 'bg-blue-400 text-white hover:bg-blue-500'
              } w-full text-sm sm:w-auto sm:text-base`}
            >
              {isAdded ? (
                <>
                  <Trash2 className='mr-2 h-4 w-4 sm:h-5 sm:w-5' /> Remove from
                  Mentor List
                </>
              ) : (
                <>
                  <UserPlus className='mr-2 h-4 w-4 sm:h-5 sm:w-5' /> Add to
                  Mentor List
                </>
              )}
            </Button> */}
            <Button
              variant='default'
              size='lg'
              className='w-full text-sm sm:w-auto sm:text-base'
              onClick={onAskQuestion}
            >
              Ask a Question
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
