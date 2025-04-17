'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';
import { cn } from '../../utils/cn';

interface Game {
  id: number;
  title: string;
  subtitle: string;
  rating: number;
  color: string;
  image: string;
  character: string;
}

interface GameCarouselProps {
  games: Game[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export default function GameCarousel({
  games,
  activeIndex,
  setActiveIndex,
}: GameCarouselProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  // Handle navigation
  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + games.length) % games.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % games.length);
  };

  // Handle touch/mouse events for swiping
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
    setCurrentX('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setCurrentX(x);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diff = currentX - startX;
    const threshold = 50; // Minimum swipe distance

    if (diff > threshold) {
      handlePrev();
    } else if (diff < -threshold) {
      handleNext();
    }
  };

  // Calculate positions for each card
  const getCardStyle = (index: number) => {
    // Calculate the relative position from the active card
    let relativePos = index - activeIndex;

    // Handle wrapping for the carousel effect
    if (relativePos > games.length / 2) relativePos -= games.length;
    if (relativePos < -games.length / 2) relativePos += games.length;

    // Base styles
    const baseScale = 0.8;
    const baseZIndex = 10;

    // Calculate position along the arc
    const radius = 300;
    const arcSpan = 0.5; // How much of the arc to use
    const angle = relativePos * arcSpan;

    // Calculate x position along the arc
    const x = Math.sin(angle) * radius;

    // Calculate z position (depth) and y position (height)
    const z = (1 - Math.cos(angle)) * radius;
    const y = (1 - Math.cos(angle)) * 20; // Slight vertical offset

    // Scale based on position
    const scale =
      relativePos === 0 ? 1 : baseScale - Math.abs(relativePos) * 0.1;

    // Opacity based on position
    const opacity = 1 - Math.min(Math.abs(relativePos) * 0.3, 0.6);

    // Z-index to ensure proper stacking
    const zIndex = baseZIndex - Math.abs(relativePos);

    return {
      x,
      y,
      z,
      scale,
      opacity,
      zIndex,
      rotateY: angle * 20, // Slight rotation for perspective
    };
  };

  return (
    <div
      className='h-[220px] select-none'
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      {/* Cards container */}
      <div className='flex h-full w-full items-center justify-center'>
        <div className='transform-3d -translate-x-1/2 -translate-y-1/2'>
          {games.map((game, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={game.id}
                className='pointer-events-auto absolute top-1/2 h-[480px] w-[370px] -translate-x-2/3 -translate-y-1/2 cursor-pointer'
                initial={false}
                animate={{
                  x: style.x,
                  y: style.y,
                  scale: style.scale,
                  opacity: style.opacity,
                  rotateY: style.rotateY,
                  zIndex: style.zIndex,
                  // Add 3D rotation
                  rotateX: isActive ? 0 : 10 * (index - activeIndex),
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                // Add perspective to parent container
                style={{ perspective: '1000px' }}
                onClick={() => setActiveIndex(index)}
              >
                <div
                  className={cn(
                    'relative h-full w-full overflow-hidden rounded-3xl shadow-xl',
                    'bg-[linear-gradient(220deg,#000000_0%,#767676_33%,#F1CE7E_71%,#FFFBF0_100%)]',
                    isActive ? 'shadow-2xl' : '',
                    // Add 3D transform styles
                    'transform-style-3d'
                  )}
                  style={{
                    // Enhance shadow for depth
                    boxShadow: isActive
                      ? '0 20px 40px rgba(0,0,0,0.3)'
                      : '0 15px 30px rgba(0,0,0,0.2)',
                    // Add slight 3D tilt
                    transform: isActive
                      ? 'translateZ(50px)'
                      : 'translateZ(20px)',
                  }}
                >
                  {/* Game content */}
                  <div className='flex h-full flex-col p-6'>
                    <div>
                      <h3
                        className='text-2xl font-bold text-white'
                        style={{
                          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        }}
                      >
                        {game.title}
                      </h3>
                      <p className='text-sm text-white/80'>{game.subtitle}</p>
                    </div>

                    <div className='mt-auto flex items-center justify-center'>
                      <div
                        className='relative h-32 w-32'
                        style={{
                          // Add 3D effect to image
                          transform: 'translateZ(30px)',
                        }}
                      >
                        <img
                          src={game.character || '/placeholder.svg'}
                          alt={game.title}
                          className='h-full w-full object-contain'
                          style={{
                            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))',
                          }}
                        />
                      </div>
                    </div>

                    <div className='mt-auto flex items-center justify-end'>
                      <div
                        className='flex items-center gap-1 rounded-full bg-white/20 px-2 py-1'
                        style={{
                          transform: 'translateZ(20px)',
                        }}
                      >
                        <Star className='h-4 w-4 fill-white text-white' />
                        <span className='text-sm font-medium text-white'>
                          {game.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
