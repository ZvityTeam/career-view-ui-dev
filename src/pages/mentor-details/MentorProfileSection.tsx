import React from 'react';
import { MentorProfileProps } from './MentorDetails.types.ts';
import { Github, Globe, Linkedin, X } from 'lucide-react';
import { Spacer } from '../../components/spacer';
import { Button } from '../../components/button/Button.tsx';

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
}) => {
  return (
    <div className='mx-auto max-w-6xl rounded-lg bg-white p-8 shadow-lg'>
      {/* Mentor Header */}
      <div className='flex items-start gap-6'>
        {/* Left Panel - Mentor Profile */}
        <div className='w-1/3 rounded-lg bg-gray-100 p-6 shadow'>
          <img
            src={profileImage}
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
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='h-5 w-5' />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target='_blank'
                rel='noopener noreferrer'
              >
                <X className='h-5 w-5' />
              </a>
            )}
            {socialLinks.github && (
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
            {industries.map((industry, index) => (
              <div
                key={index}
                className='flex items-center gap-2 py-1'
              >
                <Globe className='h-5 w-5 text-gray-500' />
                <p className='cursor-pointer text-blue-500 underline'>
                  {industry.name}
                </p>
                <p className='text-gray-500'>{industry.description}</p>
              </div>
            ))}
          </div>

          <Spacer size={20} />

          {/* Ask Questions */}
          <h3 className='text-lg font-semibold'>What you can ask?</h3>
          <ul className='list-inside list-disc text-gray-600'>
            {questions.map((question, index) => (
              <li
                key={index}
                className='py-1'
              >
                {question}
              </li>
            ))}
          </ul>

          <Spacer size={20} />
          <Button
            variant='secondary'
            size='lg'
            onClick={onAskQuestion}
          >
            Ask a Question
          </Button>
        </div>

        {/* Right Panel - Bio and Details */}
        <div className='w-2/3'>
          <div className='mb-6'>
            <h2 className='text-3xl font-bold'>Bio</h2>
            <p className='mt-2 text-gray-600'>{bio}</p>
            <p className='mt-2 font-semibold text-gray-600'>
              Available: {availableHours}
            </p>
          </div>

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

          <Spacer size={30} />

          {/* Add Mentor Button */}
          <Button
            variant='primary'
            size='lg'
            onClick={onAddToMentorList}
          >
            + Add Mentor to List
          </Button>
        </div>
      </div>
    </div>
  );
};
