import { MessageCircle, Mic, Radio, Users } from 'lucide-react';
import { Card } from '../card/Card.tsx';

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
    <section className='flex flex-col items-center justify-center space-y-24 rounded-[80px] bg-white px-12 py-24'>
      {/* Heading */}
      <div className='text-center'>
        <h2 className='text-4xl font-bold text-gray-900'>What we do?</h2>
        <p className='mt-4 max-w-xl text-lg text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor Lorem ipsum dolor sit amet.
        </p>
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
  );
};
