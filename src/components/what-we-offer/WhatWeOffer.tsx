import { OfferCard } from '../offer-card/OfferCard.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';

export const WhatWeOffer = () => {
  const cards = [
    {
      title: 'Student Connect',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      gradientClass:
        'bg-gradient-to-br from-yellow-400 via-gray-300 to-gray-900',
      href: '/student',
    },
    {
      title: 'Mentorship',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      gradientClass: 'bg-gradient-to-br from-gray-300 via-gray-600 to-gray-900',
      href: '/browse-mentors',
    },
    {
      title: 'School Collab',
      description:
        'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.',
      gradientClass:
        'bg-gradient-to-br from-yellow-400 via-gray-300 to-gray-900',
      href: '/school',
    },
  ];

  return (
    <section className='z-20 space-y-20 bg-slate-100 py-16 pt-48'>
      {/* Heading */}
      <div className='mb-12 text-center'>
        <SectionHeader
          title={'What we Offer ( TBD - CONTENT )'}
          subtitle={
            'All that CareerView has to offer, including their Student-Mentor\n' +
            "          Connect, Young mentors signing up and School's involvement."
          }
          className={'gap-4'}
        />
      </div>

      {/* Cards Grid */}
      <div className='mx-auto flex max-w-7xl gap-[60px]'>
        {cards.map((card, index) => (
          <OfferCard
            key={index}
            title={card.title}
            description={card.description}
            gradientClass={card.gradientClass}
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
};
