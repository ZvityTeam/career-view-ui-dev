import React from 'react';
import { MessageCircle, Mic, Radio, Users } from 'lucide-react';
import { Card } from '../card/Card';
import { SectionHeader } from '../section-header/SectionHeader';
import { CurvedWrapper } from '../CurvedWrapper.tsx';

export const WhatWeDo: React.FC = () => {
  const cards = [
    {
      icon: MessageCircle,
      title: 'CareerTalk',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    },
    {
      icon: Mic,
      title: 'Podcasts & Events',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    },
    {
      icon: Radio,
      title: 'Livestreams & Networking',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    },
    {
      icon: Users,
      title: 'Live Q&A',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    },
  ];

  return (
    <CurvedWrapper curve='both'>
      {/* Heading */}
      <div className='text-center'>
        <SectionHeader
          title='What we do?'
          subtitle={
            'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam\nnonumy eirmod tempor Lorem ipsum dolor sit amet.'
          }
          className='gap-4'
        />
      </div>

      {/* Cards */}
      <div className='grid scale-110 grid-cols-1 gap-20 sm:grid-cols-2 lg:gap-x-24'>
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
