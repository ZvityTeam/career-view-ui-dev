import React from 'react';
import { Github, Globe, Linkedin, Trash2, UserPlus, X } from 'lucide-react';
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
}) => {
  return (
    <div className='mx-auto max-w-7xl rounded-lg p-8'>
      {/* Mentor Header */}
      <div className='flex items-start gap-16'>
        {/* Left Panel - Mentor Profile */}
        <div className='w-1/3 rounded-[70px] bg-white p-6 shadow'>
          <img
            src={profileImage || 'https://www.gravatar.com/avatar/?d=mp'}
            alt={`${name}'s profile`}
            className='h-24 w-24 rounded-full border border-gray-300 object-cover'
          />
          <p className='mt-4 text-lg font-semibold'>{name}</p>
          <p className='italic text-gray-500'>
            {role} at {company}
          </p>
          <p className='italic text-gray-500'>Studied at {university}</p>

          <p className='mt-2 text-sm text-gray-600'>{location}</p>

          {/* Social Links */}
          <div className='mt-3 flex gap-3 text-gray-500'>
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

          <Spacer size={20} />

          {/* Industry Expertise */}
          <h3 className='text-lg font-semibold'>Industry</h3>
          <div className='mt-2'>
            {industries?.map((industry, index) => (
              <div
                key={index}
                className='flex items-center gap-2 py-1'
              >
                <Globe className='h-5 w-5 text-gray-500' />
                <p className='cursor-pointer text-blue-500 underline'>
                  {industry}
                </p>
                <p className='text-gray-500'>{industry}</p>
              </div>
            ))}
          </div>

          <Spacer size={20} />

          {/* Ask Questions */}
          <h3 className='text-lg font-semibold'>What you can ask?</h3>
          <ul className='list-inside list-disc text-gray-600'>
            {questions?.map((question, index) => (
              <li
                key={index}
                className='py-1'
              >
                {question}
              </li>
            ))}
          </ul>

          <Spacer size={20} />
        </div>

        {/* Right Panel - Bio and Details */}
        <div className='w-2/3'>
          <div className='mt-4 flex gap-8'>
            {hobbies && (
              <div>
                <p className='flex items-center gap-1 font-semibold'>
                  Hobbies <span className='text-blue-500'>🔗</span>
                </p>
                <p className='italic text-gray-500'>{hobbies}</p>
              </div>
            )}

            {interests && (
              <div>
                <p className='flex items-center gap-1 font-semibold'>
                  Interests <span className='text-red-500'>🔥</span>
                </p>
                <p className='italic text-gray-500'>{interests}</p>
              </div>
            )}

            {sideHustles && (
              <div>
                <p className='flex items-center gap-1 font-semibold'>
                  Side Hustles <span className='text-green-500'>💼</span>
                </p>
                <p className='italic text-gray-500'>{sideHustles}</p>
              </div>
            )}
          </div>
          <div className='mb-6'>
            <h2 className='font-avenir text-3xl font-bold'>Bio</h2>
            <p className='mt-2 font-light leading-7 text-gray-600'>{bio}</p>
            <p className='mt-2 font-semibold text-gray-600'>
              Available: {availableHours}
            </p>
          </div>

          {/* Interests, Hobbies, and Side Hustles */}

          <Spacer size={30} />

          {/* Add Mentor Button */}
          <div className={`flex gap-8`}>
            <Button
              size='lg'
              onClick={onAddToMentorList}
              className={`${
                isAdded
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
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
            <Button
              variant='outline'
              size='lg'
              className={`border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white`}
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
