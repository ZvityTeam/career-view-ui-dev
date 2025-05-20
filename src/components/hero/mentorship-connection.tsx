'use client';

import { motion } from 'framer-motion';
import type React from 'react';
import { forwardRef, useRef } from 'react';
import logo from '../../assets/CareerViewLogo.png';
import { useMentorStore } from '../../store/useMentorStore';
import { cn } from '../../utils/cn';
import { AnimatedBeam } from './animated-beam';

// Circle Component with Adjusted Colors
const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    src?: string;
    isPlatform?: boolean;
    delay?: number;
  }
>(({ className, children, src, isPlatform, delay = 0.5 }, ref) => {
  const defaultRef = useRef(null);
  const circleRef = ref || defaultRef;
  return (
    <motion.div
      ref={circleRef}
      className={cn(
        'z-10 flex items-center justify-center overflow-hidden rounded-full border-2 shadow-[0_0_10px_-5px_rgba(0,0,0,0.1)] backdrop-blur-sm',
        isPlatform
          ? 'h-32 w-32 border-[#f5d9a3] bg-white/80 sm:h-36 sm:w-36 md:h-40 md:w-40'
          : 'h-16 w-16 border-gray-300 bg-white/95 sm:h-20 sm:w-20 md:h-24 md:w-24',
        className
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{
        scale: 1.05,
        boxShadow: isPlatform
          ? '0 0 20px rgba(245, 217, 163, 0.3)'
          : '0 0 15px rgba(245, 217, 163, 0.2)',
        transition: { duration: 0.2 },
      }}
    >
      {src ? (
        <img
          src={src || '/placeholder.svg'}
          alt='Person'
          className='h-full w-full rounded-full object-cover'
        />
      ) : (
        children
      )}
    </motion.div>
  );
});

Circle.displayName = 'Circle';

// Updated MentorshipConnection Component
export default function MentorshipConnection() {
  const { getRandomMentors } = useMentorStore();
  const randomThree = getRandomMentors(3);
  const containerRef = useRef<HTMLDivElement>(null);
  const student1Ref = useRef<HTMLDivElement>(null);
  const student2Ref = useRef<HTMLDivElement>(null);
  const student3Ref = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const professional1Ref = useRef<HTMLDivElement>(null);
  const professional2Ref = useRef<HTMLDivElement>(null);
  const professional3Ref = useRef<HTMLDivElement>(null);

  // Stock Images from Unsplash
  const studentImages = [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
  ];

  return (
    <div
      className='relative flex h-[40dvh] w-[70dvw] items-center justify-center overflow-hidden p-6'
      ref={containerRef}
    >
      {/* Main Content */}
      <div className='flex w-full max-w-5xl flex-row items-center justify-between gap-2'>
        {/* Students Section */}
        <div className='flex flex-col items-center gap-4'>
          <Circle
            ref={student1Ref}
            src={studentImages[0]}
            delay={0.5}
          />
          <Circle
            ref={student2Ref}
            src={studentImages[1]}
            delay={0.7}
          />
          <Circle
            ref={student3Ref}
            src={studentImages[2]}
            delay={0.9}
          />
        </div>

        {/* Platform Section (Center) */}
        <div className='flex flex-col items-center'>
          <Circle
            ref={platformRef}
            isPlatform
            delay={1.1}
          >
            <img
              src={logo}
              className='h-12 w-20'
              alt='CareerView Logo'
            />
          </Circle>
        </div>

        {/* Young Professionals Section */}
        <div className='flex flex-col items-center gap-4'>
          <Circle
            ref={professional1Ref}
            src={randomThree[0]?.profileImage}
            delay={0.5}
          />
          <Circle
            ref={professional2Ref}
            src={randomThree[1]?.profileImage}
            delay={0.7}
          />
          <Circle
            ref={professional3Ref}
            src={randomThree[2]?.profileImage}
            delay={0.9}
          />
        </div>
      </div>

      {/* Animated Beams: Students to Center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={student1Ref}
        toRef={platformRef}
        curvature={60}
        gradientStartColor='#f5d9a3'
        gradientStopColor='#ffffff'
        pathWidth={3}
        duration={2.5}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={student2Ref}
        toRef={platformRef}
        curvature={0}
        gradientStartColor='#f5d9a3'
        gradientStopColor='#ffffff'
        pathWidth={3}
        duration={2.5}
        delay={1.2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={student3Ref}
        toRef={platformRef}
        curvature={-60}
        gradientStartColor='#f5d9a3'
        gradientStopColor='#ffffff'
        pathWidth={3}
        duration={2.5}
        delay={1.4}
      />

      {/* Animated Beams: Center to Mentors */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={platformRef}
        toRef={professional1Ref}
        curvature={120}
        gradientStartColor='#f5d9a3'
        gradientStopColor='#ffffff'
        pathWidth={3}
        duration={2.5}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={platformRef}
        toRef={professional2Ref}
        curvature={0}
        gradientStartColor='#f5d9a3'
        gradientStopColor='#ffffff'
        pathWidth={3}
        duration={2.5}
        delay={1.2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={platformRef}
        toRef={professional3Ref}
        curvature={-120}
        gradientStartColor='#f5d9a3'
        gradientStopColor='#ffffff'
        pathWidth={3}
        duration={2.5}
        delay={1.4}
      />
    </div>
  );
}
