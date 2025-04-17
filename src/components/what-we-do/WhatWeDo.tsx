import { BookOpen, School, UserCheck } from 'lucide-react';
import React from 'react';
import { Card } from '../card/Card';
import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { SectionHeader } from '../section-header/SectionHeader';

export const WhatWeDo: React.FC = () => {
  const cards = [
    {
      icon: School,
      title: 'Educational Podcast',
      description:
        'Listen to Young Professionals share their personal experiences and advice to questions asked by students.',
    },
    {
      icon: BookOpen,
      title: 'Career E-Books',
      description:
        'Access best tipe and insights provided by Young Professionals on how to navigate through life after school.',
    },
    {
      icon: UserCheck,
      title: 'Livestream Events',
      description:
        'Meet the CareerView Young Professional community! Where students can have the opportunity to connect in person.',
    },
  ];

  return (
    <CurvedWrapper
      curve='both'
      className='flex flex-col items-center'
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
      <div className='mx-[5dvw] grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-1 lg:gap-x-24'>
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
