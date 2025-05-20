import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../utils/cn.ts';
import {
  ReelImageGallery,
  ReelImageGalleryProps,
} from './ui/reel-image-gallary.tsx';

/**
 * Combined props: the same as ReelImageGallery + any extra if needed.
 */
export interface ScrollPathGalleryProps extends ReelImageGalleryProps {
  /**
   * Optionally override the width of the gallery column.
   * Default is "w-96".
   */
  galleryWidthClass?: string;
}

/**
 * ScrollPathGallery component
 *
 * Shows a reel image gallery on the left (with the props you provide) and
 * a scrolling timeline/path on the right using Framer Motion.
 */
export default function ScrollPathGallery({
  images,
  aspectRatio = '9/16',
  autoSwitch = true,
  switchDuration = 3000,
  height,
  className,
  galleryWidthClass = 'w-96',
}: ScrollPathGalleryProps) {
  // Reference for the scrolling container on the right
  const containerRef = useRef<HTMLDivElement>(null);

  // Framer Motion: track scroll progress from 0..1 over the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Smooth out the progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    mass: 0.5,
  });

  // We have 5 segments along the path, each going 0..1 in its own slice
  const goals = [
    useTransform(smoothProgress, [0, 0.2], [0, 1]),
    useTransform(smoothProgress, [0.2, 0.4], [0, 1]),
    useTransform(smoothProgress, [0.4, 0.6], [0, 1]),
    useTransform(smoothProgress, [0.6, 0.8], [0, 1]),
    useTransform(smoothProgress, [0.8, 1], [0, 1]),
  ];

  return (
    <div
      className={cn(
        'flex w-full gap-8 bg-gray-50 px-20 py-8' // Padding on both sides
      )}
    >
      {/* Left side: the reel image gallery - STICKY to keep it visible */}
      <div
        className={cn(
          galleryWidthClass,
          'sticky top-0 flex-shrink-0 self-start'
        )}
      >
        <ReelImageGallery
          images={images}
          aspectRatio={aspectRatio}
          autoSwitch={autoSwitch}
          switchDuration={switchDuration}
          height={height}
          className={className}
        />
      </div>

      {/* Right side: the scrolling timeline/path */}
      <div
        ref={containerRef}
        className='min-h-[200dvh] flex-1'
      >
        {/*
          We use a "sticky" style on the left side so it stays put,
          while the right side is tall (min-h-[200dvh]) to demonstrate
          the scroll-based animation.
        */}
        <div className='sticky top-12 flex h-screen items-center'>
          <div className='relative w-full'>
            {/* Background Path with Light Blue Gradient */}
            <svg
              viewBox='0 0 400 800'
              className='mx-auto h-[800px] w-[400px]'
            >
              <defs>
                <linearGradient
                  id='pathGradient'
                  x1='0'
                  y1='0'
                  x2='0'
                  y2='0.3'
                >
                  <stop
                    offset='0%'
                    stopColor='#7DD3FC'
                  />
                  <stop
                    offset='100%'
                    stopColor='#ffffff'
                  />
                </linearGradient>
              </defs>

              {/* Main path */}
              <path
                d='M200,50 C300,50 300,150 200,150 C100,150 100,250 200,250 C300,250 300,350 200,350 C100,350 100,450 200,450 C300,450 300,550 200,550'
                fill='none'
                stroke='#E5E7EB'
                strokeWidth='30'
                strokeLinecap='round'
              />

              {/* Light blue gradient overlay on the first segment */}
              <path
                d='M200,50 C300,50 300,150 200,150 C100,150 100,250 200,250'
                fill='url(#pathGradient)'
                opacity='0.5'
              />
            </svg>

            {/* Animated Path (lightblue stroke that “grows”) */}
            <motion.svg
              viewBox='0 0 400 800'
              className='absolute inset-0 mx-auto h-[800px] w-[400px]'
            >
              <motion.path
                d='M200,50 C300,50 300,150 200,150 C100,150 100,250 200,250 C300,250 300,350 200,350 C100,350 100,450 200,450 C300,450 300,550 200,550'
                fill='none'
                stroke='lightblue'
                strokeWidth='30'
                strokeLinecap='round'
                style={{
                  // The “length” of the stroke is animated from 0..1
                  pathLength: smoothProgress,
                }}
                className='stroke-dasharray-[1_1]'
              />
            </motion.svg>

            {/* Nodes and Content placed absolutely on that path */}
            <div className='absolute inset-0 mx-auto w-[400px]'>
              {/* First Node (Paintbrush style) */}
              <motion.div
                style={{ opacity: goals[0] }}
                className='absolute left-1/2 top-[50px] -translate-x-1/2'
              >
                <div className='relative'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full bg-black'>
                    <div className='relative h-6 w-5'>
                      <div
                        className='absolute top-0 h-full w-full bg-green-500'
                        style={{
                          clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
                        }}
                      />
                      <div className='absolute bottom-0 left-1/2 h-3 w-1.5 -translate-x-1/2 bg-yellow-400' />
                    </div>
                  </div>
                  <div className='absolute left-[calc(100%+8px)] top-1/2 w-24 border-t border-dashed border-gray-300' />
                  <motion.div
                    style={{ opacity: goals[0] }}
                    className='absolute left-[calc(100%+40px)] top-1/2 w-72 -translate-y-1/2'
                  >
                    <h2 className='text-lg font-medium'>
                      School | Year - Logo
                    </h2>
                    <p className='mt-1 text-sm leading-relaxed text-gray-600'>
                      Helps in Lorem Epsom | Highly qualified | Studied at Loren
                      Epsom | Available 9-5pm on weekdays, Lorem ipsum dolor sit
                      amet
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Subsequent 4 Nodes */}
              {[1, 2, 3, 4].map((_, index) => (
                <motion.div
                  key={index}
                  style={{
                    opacity: goals[index + 1],
                    top: `${150 + index * 100}px`,
                  }}
                  className={`absolute ${
                    index % 2 === 0
                      ? 'left-1/2 -translate-x-1/2'
                      : 'right-[100px]'
                  }`}
                >
                  <div className='relative'>
                    <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-300'>
                      <div className='flex h-4 w-4 items-center justify-center rounded-full border border-gray-400'>
                        <div className='h-1 w-1 rounded-full bg-gray-400' />
                      </div>
                    </div>
                    <div
                      className={`absolute ${
                        index % 2 === 0
                          ? 'right-[calc(100%+8px)]'
                          : 'left-[calc(100%+8px)]'
                      } top-1/2 w-24 border-t border-dashed border-gray-300`}
                    />
                    <motion.div
                      style={{ opacity: goals[index + 1] }}
                      className={`absolute ${
                        index % 2 === 0
                          ? 'right-[calc(100%+40px)] text-right'
                          : 'left-[calc(100%+40px)]'
                      } top-1/2 w-72 -translate-y-1/2`}
                    >
                      <h2 className='text-lg font-medium'>
                        {index % 2 === 0
                          ? 'School | Year - Logo'
                          : 'Graduation | Year - Logo'}
                      </h2>
                      <p className='mt-1 text-sm leading-relaxed text-gray-600'>
                        Helps in Lorem Epsom | Highly qualified | Studied at
                        Loren Epsom | Available 9-5pm on weekdays, Lorem ipsum
                        dolor sit amet
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
