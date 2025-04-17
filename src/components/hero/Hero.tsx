import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn.ts';
import { Button } from '../ui/Button.tsx';
import { FlipWords } from '../ui/flip-words.tsx';
import GameCarousel from './game-carousel.tsx';

const flipWords = ['Opportunities', 'Pathways', 'Connections', 'Potential'];

const games = [
  {
    id: 1,
    title: 'Fortnite',
    subtitle: 'Battle Royale',
    rating: 4.5,
    color:
      'bg-[linear-gradient(220deg,#000000_0%,#767676_33%,#F1CE7E_71%,#FFFBF0_100%)]',
    image: '/placeholder.svg?height=200&width=200',
    character: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 2,
    title: 'Mario',
    subtitle: 'Kingdom Battle',
    rating: 4.8,
    color:
      'bg-[linear-gradient(220deg,#000000_0%,#767676_33%,#F1CE7E_71%,#FFFBF0_100%)]',
    image: '/placeholder.svg?height=200&width=200',
    character: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 3,
    title: 'Kirby',
    subtitle: 'Star Allies',
    rating: 4.7,
    color:
      'bg-[linear-gradient(220deg,#000000_0%,#767676_33%,#F1CE7E_71%,#FFFBF0_100%)]',
    image: '/placeholder.svg?height=200&width=200',
    character: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 4,
    title: 'Pokemon',
    subtitle: 'Scarlet & Violet',
    rating: 4.2,
    color:
      'bg-[linear-gradient(220deg,#000000_0%,#767676_33%,#F1CE7E_71%,#FFFBF0_100%)]',
    image: '/placeholder.svg?height=200&width=200',
    character: '/placeholder.svg?height=200&width=200',
  },
  {
    id: 5,
    title: 'Splatoon 3',
    subtitle: 'Multiplayer',
    rating: 4.3,
    color:
      'bg-[linear-gradient(220deg,#000000_0%,#767676_33%,#F1CE7E_71%,#FFFBF0_100%)]',
    image: '/placeholder.svg?height=200&width=200',
    character: '/placeholder.svg?height=200&width=200',
  },
];

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
  squaresClassName?: string;
}

const InteractiveGridPattern = ({
  width = 60,
  height = 60,
  squares = [40, 40],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) => {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  useEffect(() => {
    console.log('Hovered square:', hoveredSquare);
  }, [hoveredSquare]);

  return (
    <svg
      width='100%'
      height='100%'
      className={cn(
        'pointer-events-auto absolute inset-0 h-full w-full',
        className
      )}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width - 1} // Slight adjustment to avoid overlap
            height={height - 1}
            className={cn(
              'stroke-gray-700/50 transition-all duration-200 ease-in-out',
              hoveredSquare === index ? 'fill-black/30' : 'fill-transparent',
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
};

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const maxWordWidth = Math.max(...flipWords.map((word) => word.length)) * 20;
  const buttonControls = useAnimation();
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <section className='relative z-10 flex h-[95dvh] flex-col items-center justify-start overflow-hidden bg-[#272727] py-16 pt-24'>
      {/* Background Grid Pattern */}
      <div className='absolute inset-0 z-30 h-full w-full'>
        <InteractiveGridPattern
          width={60}
          height={60}
          squares={[30, 20]} // Increased grid density to cover more area
          className='opacity-50'
          squaresClassName='hover:fill-yellow-400/60 pointer-events-auto' // Enhanced hover effect
        />
        {/* Gradient overlay for contrast */}
        {/* <div className='absolute inset-0 bg-gradient-to-b from-gray-900/70 to-transparent' /> */}
      </div>

      {/* Main Content */}
      <motion.div
        className='pointer-events-none z-30 mt-8 flex w-full max-w-6xl flex-col items-center justify-between px-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <div className='m-4 flex w-full flex-col items-center gap-6 p-4'>
          <h1 className='text-left text-[48px] font-extrabold leading-tight tracking-tight text-white md:text-[64px]'>
            Unlock{' '}
            <span
              style={{
                display: 'inline-block',
                width: `${maxWordWidth}px`,
                textAlign: 'left',
              }}
            >
              <FlipWords
                duration={2000}
                words={flipWords}
                className='text-white'
              />
            </span>
          </h1>

          <p className='max-w-5xl text-left text-lg font-light leading-relaxed text-gray-200 md:text-xl'>
            CareerView helps students connect with industry mentors to gain
            practical, relatable, and honest career insights to make more
            informed decisions about their future careers.
          </p>

          <motion.div
            ref={buttonRef}
            className='relative'
            animate={buttonControls}
          >
            <Button className='rounded-full border-none bg-gradient-to-r from-[#f5d9a3] to-[#e0a853] px-6 py-3 text-lg font-semibold text-white'>
              Browse Mentors
            </Button>
            <div className='absolute inset-0 rounded-full border-2 border-dashed border-white/50' />
          </motion.div>
        </div>
        <div className='-ml-[20dvw] w-full'>
          <GameCarousel
            games={games}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
      </motion.div>
    </section>
  );
};
