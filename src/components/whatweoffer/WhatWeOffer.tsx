import { OfferCard } from '../offercard/OfferCard.tsx';
import { SectionHeader } from '../sectionheader/SectionHeader.tsx';

export const WhatWeOffer = () => {
  const cards = [
    {
      title: 'Student Connect',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      gradientClass:
        'bg-gradient-to-br from-yellow-400 via-gray-300 to-gray-900',
    },
    {
      title: 'Mentorship',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      gradientClass: 'bg-gradient-to-br from-gray-300 via-gray-600 to-gray-900',
    },
    {
      title: 'School Collab',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      gradientClass:
        'bg-gradient-to-br from-yellow-400 via-gray-300 to-gray-900',
    },
  ];

  return (
    <section className='z-20 space-y-20 bg-slate-100 py-16 pt-48'>
      {/* Heading */}
      <div className='mb-12 text-center'>
        <SectionHeader
          title={'What we Offer'}
          subtitle={
            'All that CareerView has to offer, including their Student-Mentor\n' +
            "          Connect, Young mentors signing up and School's involvement."
          }
          className={'gap-4'}
        />
      </div>

      {/* Cards Grid */}
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {cards.map((card, index) => (
          <OfferCard
            key={index}
            title={card.title}
            description={card.description}
            gradientClass={card.gradientClass}
          />
        ))}
      </div>
    </section>
  );
};
