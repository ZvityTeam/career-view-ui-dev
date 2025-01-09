import React, { useState } from 'react';
import {
  CardData,
  WhyChooseUsCard,
} from '../whychooseuscard/WhyChooseUsCard.tsx';
import { StepBack, StepForward } from 'lucide-react';

/** Example data. Replace with your actual content & images. */
const WHY_CHOOSE_US_DATA: CardData[] = [
  {
    id: 1,
    title: 'Gain Valuable Insights',
    description:
      'Our Young Professional network provide valuable insights and perspective on...',
    imageUrl: 'https://placehold.co/400x250?text=1',
  },
  {
    id: 2,
    title: 'Develop Key Skills',
    description:
      'Our Young Professional network provide valuable insights and perspective on...',
    imageUrl: 'https://placehold.co/400x250?text=2',
  },
  {
    id: 3,
    title: 'Expand Network',
    description:
      'Our Young Professional network provide valuable insights and perspective on...',
    imageUrl: 'https://placehold.co/400x250?text=3',
  },
  {
    id: 4,
    title: 'Get Support & Guidance',
    description:
      'Our Young Professional network provide valuable insights and perspective...',
    imageUrl: 'https://placehold.co/400x250?text=4',
  },
  {
    id: 5,
    title: 'Enhance Confidence',
    description:
      'Our Young Professional network provide valuable insights and perspective...',
    imageUrl: 'https://placehold.co/400x250?text=5',
  },
];

/**
 * Main carousel component
 */
export const WhyChooseUs: React.FC = () => {
  const [cards, setCards] = useState(WHY_CHOOSE_US_DATA);

  /**
   * Move the array left (direction < 0) or right (direction > 0).
   * This rotates the items so we can keep the "center" card in front.
   */
  const handleMove = (direction: number) => {
    const newArr = [...cards];
    if (direction > 0) {
      // Move the first item to the end
      const first = newArr.shift();
      if (first) newArr.push(first);
    } else {
      // Move the last item to the front
      const last = newArr.pop();
      if (last) newArr.unshift(last);
    }
    setCards(newArr);
  };

  return (
    <section className='relative w-full bg-white py-10'>
      {/* Section heading */}
      <div className='mb-8 text-center'>
        <h2 className='font-britania text-3xl font-bold'>Why Choose Us</h2>
        <p className='mx-auto mt-2 max-w-xl text-gray-600'>
          A small description of why students should choose your platform
          instead of other competitors. This has a horizontal animation on a
          loop.
        </p>
      </div>

      {/* The carousel container (relative) for stacking motion cards */}
      <div className='relative mx-auto h-[400px] w-full overflow-hidden'>
        {cards.map((card, index) => {
          // We'll place the middle card (position=0) in the center,
          // the next/prev around it, etc.
          const middleIndex = Math.floor(cards.length / 2);
          const position = index - middleIndex;
          // E.g., if we have 5 cards, indexes are 0..4, middleIndex=2,
          // positions => -2, -1, 0, +1, +2
          const zIndex = 10 - Math.abs(position);

          // The "active" card is the center one (position === 0)
          const isActive = position === 0;

          return (
            <WhyChooseUsCard
              key={card.id}
              card={card}
              zIndex={zIndex}
              position={position}
              isActive={isActive}
              onClick={() => handleMove(position)}
            />
          );
        })}
      </div>

      {/* Left/right arrow buttons */}
      <div className='absolute inset-y-0 left-0 flex items-center'>
        <button
          onClick={() => handleMove(-1)}
          className='ml-2 grid h-12 w-12 place-content-center rounded-full border text-2xl transition hover:bg-black hover:text-white'
        >
          <StepBack />
        </button>
      </div>
      <div className='absolute inset-y-0 right-0 flex items-center'>
        <button
          onClick={() => handleMove(1)}
          className='mr-2 grid h-12 w-12 place-content-center rounded-full border text-2xl transition hover:bg-black hover:text-white'
        >
          <StepForward />
        </button>
      </div>
    </section>
  );
};
