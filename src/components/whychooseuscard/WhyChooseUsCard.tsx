import { motion } from 'framer-motion';
import React from 'react';

/**
 * Individual card subcomponent
 */
export interface WhyChooseCardProps {
  card: CardData;
  position: number; // negative => left, 0 => center, positive => right
  isActive: boolean;
  onClick: () => void;
  zIndex: number;
}

export interface CardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
export const WhyChooseUsCard: React.FC<WhyChooseCardProps> = ({
  card,
  position,
  isActive,
  zIndex,
  onClick,
}) => {
  // Basic dimensions for each card
  const CARD_WIDTH = 280;
  const CARD_HEIGHT = 340;

  // We'll use framer-motion to animate the card's x-position, y-position, and rotation
  // so center card (pos=0) is in the middle, others offset.
  return (
    <motion.div
      className={`absolute flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-lg ${isActive ? 'z-10' : 'z-0'}`}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        left: '50%',
        top: '50%',
        transformOrigin: 'center',
        zIndex: zIndex,
      }}
      onClick={onClick}
      animate={{
        // For the x-position, each position step is about 200px offset
        x: `${position * 220 - CARD_WIDTH / 2}px`,

        // Give the center card a slight "lift" upward
        y: isActive ? '-60%' : '-50%',

        // Slight rotation for left vs. right
        rotate: position * 4, // adjust to taste
        scale: isActive ? 1.0 : 0.94,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Image on top */}
      <div className='h-1/2 w-full'>
        <img
          src={card.imageUrl}
          alt={card.title}
          className='h-full w-full object-cover'
        />
      </div>
      {/* Text container */}
      <div className='flex flex-col p-4'>
        <h3 className='mb-1 text-lg font-semibold'>{card.title}</h3>
        <p className='text-sm text-gray-700'>{card.description}</p>
      </div>
    </motion.div>
  );
};
