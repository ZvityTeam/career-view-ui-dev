import { BookOpen, PodcastIcon, RadioIcon, Users } from 'lucide-react';
import React from 'react';
import { Card } from '../card/Card';
import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { SectionHeader } from '../section-header/SectionHeader';

export const WhatWeDo: React.FC = () => {
  const cards = [
    {
      icon: PodcastIcon,
      title: 'Educational Podcast',
      description:
        'Listen to Young Professionals share their personal experiences and advice to questions asked by students.',
    },
    {
      icon: BookOpen,
      title: 'Career E-Books',
      description:
        'Access best tips and insights provided by Young Professionals to navigate life after school.',
    },
    {
      icon: RadioIcon,
      title: 'Livestream Events',
      description:
        'Meet the CareerView Young Professional community! Where students can connect with mentors in person.',
    },
    {
      icon: Users,
      title: '1-on-1 Mentoring',
      description:
        'Connect with Young Professionals for personalized guidance to help students navigate their career paths.',
    },
  ];

  return (
    <CurvedWrapper
      curve='both'
      className='flex flex-col mt-10 items-center md:mb-20'
      innerClassName='px-4  sm:px-6 lg:px-8 md:py-20 flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-10'
    >
      {/* Heading */}
      <div className='text-center'>
        <SectionHeader
          title='What we do?'
          subtitle={
            'We’re here to help you discover your strengths, gain real-world insights, and confidently navigate your career journey.'
          }
          className='gap-4'
        />
      </div>

      {/* Cards */}
      <div className='grid w-full max-w-7xl grid-cols-1 gap-6 md:ml-24 sm:grid-cols-2 sm:gap-8 lg:gap-12'>
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </CurvedWrapper>
  );
};
