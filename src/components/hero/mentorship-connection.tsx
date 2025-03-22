'use client';

import { motion } from 'framer-motion';
import type React from 'react';
import { forwardRef, useRef } from 'react';
import logo from '../../assets/CareerViewLogo.png';
import { useMentorStore } from '../../store/useMentorStore';
import { cn } from '../../utils/cn';
import { AnimatedBeam } from './animated-beam';

// Circle component for the images
const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    children?: React.ReactNode;
    src?: string;
    isPlatform?: boolean;
  }
>(({ className, children, src, isPlatform }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        'z-10 flex size-28 items-center justify-center overflow-hidden rounded-full border-4 border-white/60 bg-white/95 p-2 shadow-[0_0_25px_-5px_rgba(0,0,0,0.4)] backdrop-blur-sm',
        isPlatform && 'size-48 border-amber-500 bg-black/60',
        className
      )}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, delay: Math.random() * 0.3 }}
      whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 215, 0, 0.6)' }}
    >
      {src ? (
        <img
          src={src}
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

// Updated MentorshipConnection component with adjusted beams
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

  // Stock images from Unsplash
  const studentImages = [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', // Group of students studying
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', // Student with laptop
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', // Student portrait
  ];

  return (
    <div
      className='relative flex h-[50vh] w-full items-center justify-center overflow-hidden p-8'
      ref={containerRef}
      //   style={{
      //     background:
      //       'linear-gradient(135deg, #1F2937 0%, #FFD700 50%, #FFFFFF 100%)',
      //   }}
    >
      {/* Subtle decorative elements */}
      <div className='absolute right-10 top-10 h-20 w-20 rounded-full bg-white/10 blur-2xl' />
      <div className='bg-gold/20 absolute bottom-10 left-10 h-24 w-24 rounded-full blur-2xl' />

      {/* Main content */}
      <div className='flex w-full max-w-6xl flex-row items-center justify-between gap-8'>
        {/* Students Section */}
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-col items-center gap-4'>
            <Circle
              ref={student1Ref}
              src={studentImages[0]}
            />
            <Circle
              ref={student2Ref}
              src={studentImages[1]}
            />
            <Circle
              ref={student3Ref}
              src={studentImages[2]}
            />
          </div>
        </div>

        {/* Platform Section (Center) */}
        <div className='flex flex-col items-center'>
          <Circle
            ref={platformRef}
            isPlatform
          >
            <img
              src={logo}
              className='w-26 h-16'
              alt=''
            />
          </Circle>
        </div>

        {/* Young Professionals Section */}
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-col items-center gap-4'>
            <Circle
              ref={professional1Ref}
              src={randomThree[0]?.profileImage}
            />
            <Circle
              ref={professional2Ref}
              src={randomThree[1]?.profileImage}
            />
            <Circle
              ref={professional3Ref}
              src={randomThree[2]?.profileImage}
            />
          </div>
        </div>
      </div>

      {/* Animated Beams: Students to Center */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={student1Ref}
        toRef={platformRef}
        curvature={80}
        gradientStartColor='#3b82f6'
        gradientStopColor='#60a5fa'
        pathWidth={5}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={student2Ref}
        toRef={platformRef}
        curvature={0}
        gradientStartColor='#3b82f6'
        gradientStopColor='#60a5fa'
        pathWidth={5}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={student3Ref}
        toRef={platformRef}
        curvature={-80}
        gradientStartColor='#3b82f6'
        gradientStopColor='#60a5fa'
        pathWidth={5}
        duration={3}
      />

      {/* Animated Beams: Center to Mentors */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={platformRef}
        toRef={professional1Ref}
        curvature={180}
        gradientStartColor='#22c55e'
        gradientStopColor='#4ade80'
        pathWidth={5}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={platformRef}
        toRef={professional2Ref}
        curvature={0}
        gradientStartColor='#22c55e'
        gradientStopColor='#4ade80'
        pathWidth={5}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={platformRef}
        toRef={professional3Ref}
        curvature={-180}
        gradientStartColor='#22c55e'
        gradientStopColor='#4ade80'
        pathWidth={5}
        duration={3}
      />
    </div>
  );
}
