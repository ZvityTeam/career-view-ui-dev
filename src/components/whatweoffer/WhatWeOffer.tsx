import { OfferCard } from '../offercard/OfferCard.tsx';

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
    <section className='space-y-32 bg-gray-50 py-16'>
      {/* Heading */}
      <div className='mb-12 text-center'>
        <h2 className='text-4xl font-bold text-gray-900'>What we Offer</h2>
        <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600'>
          All that CareerView has to offer, including their Student-Mentor
          Connect, Young mentors signing up and School's involvement.
        </p>
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
