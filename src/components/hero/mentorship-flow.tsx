'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedBeam } from './animated-beam'; // Reusing your AnimatedBeam component

const MentorshipFlow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const studentRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const professionalRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className='relative mt-16 flex w-full max-w-4xl items-center justify-between px-4'
    >
      {/* Students Section */}
      <motion.div
        className='flex flex-col items-center'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className='flex space-x-2'>
          {/* Simple student icons */}
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20'>
            <span className='text-2xl text-[#D4AF37]'>👤</span>
          </div>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20'>
            <span className='text-2xl text-[#D4AF37]'>👤</span>
          </div>
        </div>
        <p className='mt-2 font-semibold text-white'>Students</p>
        <p className='text-sm text-gray-400'>Ages: 15–20</p>
        <div className='mt-2 text-center text-sm text-gray-300'>
          <p>Get support and guidance on life after school</p>
          <p>Discover new career options</p>
          <p>Gain valuable insights to the workplace</p>
        </div>
      </motion.div>

      {/* Platform Section (Laptop) */}
      <motion.div
        ref={platformRef}
        className='flex flex-col items-center'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className='flex h-16 w-24 items-center justify-center rounded-lg bg-white/20'>
          <span className='text-3xl text-[#D4AF37]'>💻</span>
        </div>
        <p className='mt-2 font-semibold text-white'>CareerView</p>
      </motion.div>

      {/* Young Professionals Section */}
      <motion.div
        className='flex flex-col items-center'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className='flex space-x-2'>
          {/* Simple professional icons */}
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20'>
            <span className='text-2xl text-[#D4AF37]'>👤</span>
          </div>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/20'>
            <span className='text-2xl text-[#D4AF37]'>👤</span>
          </div>
        </div>
        <p className='mt-2 font-semibold text-white'>Young Professionals</p>
        <div className='mt-2 text-center text-sm text-gray-300'>
          <p>Share real experiences from school life</p>
          <p>Mentor students</p>
          <p>Provide best advice and tips for workforce</p>
        </div>
      </motion.div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={studentRef}
        toRef={platformRef}
        curvature={0}
        gradientStartColor='#D4AF37'
        gradientStopColor='#FFFFFF'
        pathWidth={2}
        duration={2.5}
        delay={1}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={platformRef}
        toRef={professionalRef}
        curvature={0}
        gradientStartColor='#D4AF37'
        gradientStopColor='#FFFFFF'
        pathWidth={2}
        duration={2.5}
        delay={1}
      />
    </div>
  );
};

export default MentorshipFlow;
