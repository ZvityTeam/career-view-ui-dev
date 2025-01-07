import { MessageCircle, Mic, Radio, Users } from 'lucide-react';
import { Card } from '../card/Card.tsx';
import { SectionHeader } from '../sectionheader/SectionHeader.tsx';

export const WhatWeDo = () => {
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
    <div className='relative grid min-h-[70vh] place-items-center'>
      <section className='absolute -top-16 flex w-full flex-col items-center justify-center space-y-24 rounded-[80px] bg-white px-12 py-24'>
        {/* Heading */}
        <div className='text-center'>
          <SectionHeader
            title={'What we do?'}
            subtitle={
              'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam\n' +
              '          nonumy eirmod tempor Lorem ipsum dolor sit amet.'
            }
            className={'gap-4'}
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
      </section>
    </div>
  );
};
