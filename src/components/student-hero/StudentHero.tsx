'use client';

import { motion } from 'framer-motion';
import {
  Activity,
  ListChecks,
  Lock,
  Mic,
  MousePointer2,
  MousePointerClick,
  Verified,
} from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext';
import { Section } from '../container/Section';
import { Button } from '../ui/Button';

export const StudentHero = () => {
  const { setNavbarTheme } = useNavbarContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Switch navbar to dark theme on mount
    setNavbarTheme(true);
    // Reset to light when unmounted
    return () => setNavbarTheme(false);
  }, [setNavbarTheme]);

  // Framer Motion "bounce fall" variant generator
  // Increase 'y' to have them start higher off-screen
  // Adjust stiffness/damping/mass as needed to tune the bounce
  const bounceVariant = (delay: number) => ({
    hidden: { y: -300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay,
        type: 'spring',
        stiffness: 180,
        damping: 12,
        mass: 0.75,
      },
    },
  });

  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-50 via-yellow-100 to-slate-50 pt-32'>
      <Section className='flex h-[80dvh] flex-col justify-between'>
        <div className='flex flex-col items-center gap-8'>
          <h1 className='text-7xl'>Career Questions? We've Got Answers!</h1>
          <p className='text-xl'>
            CareerView connects you with real-world mentors, offering
            personalized guidance and tools to explore career paths and achieve
            your goals.
          </p>
          <Button onClick={() => navigate('/student?scrollTo=ask-a-question')}>
            Ask a Question
          </Button>
        </div>

        {/* Styled section with "falling" items */}
        <div className='relative p-8'>
          <div className='flex items-center justify-center px-24'>
            {/* 1) Unlock your Potential */}
            <motion.div
              variants={bounceVariant(0.1)}
              initial='hidden'
              animate='visible'
              className='flex items-center space-x-3 rounded-full bg-blue-500 px-6 py-8 text-white shadow-lg'
            >
              <Lock className='h-6 w-6' />
              <span className='text-2xl font-medium'>
                Unlock your Potential
              </span>
            </motion.div>

            {/* 2) Microphone */}
            <motion.div
              variants={bounceVariant(0.2)}
              initial='hidden'
              animate='visible'
              className='flex items-center justify-center rounded-full bg-red-100 p-8 shadow-lg'
            >
              <Mic className='h-9 w-9 text-red-600' />
            </motion.div>

            {/* 3) Live-streaming */}
            <motion.div
              variants={bounceVariant(0.3)}
              initial='hidden'
              animate='visible'
              className='relative h-6 w-28'
            >
              <div className='absolute bottom-14 right-0 flex min-w-[260px] origin-bottom rotate-[60deg] items-center justify-between gap-2 rounded-full bg-black px-8 py-10 text-white shadow-lg'>
                <span className='text-2xl font-medium'>Live-streaming</span>
                <Activity />
              </div>
            </motion.div>

            {/* 4) The "Engineer/Psychiatrist" bubble block */}
            <motion.div
              variants={bounceVariant(0.4)}
              initial='hidden'
              animate='visible'
              className='relative h-36 w-36'
            >
              <div className='absolute -left-6 -top-[110%] flex h-40 w-56 -rotate-6 flex-col items-center gap-1 border border-black p-2'>
                {/* Corner squares */}
                <div className='absolute left-[100%] top-[100%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-black' />
                <div className='absolute bottom-[100%] left-[100%] h-4 w-4 -translate-x-1/2 translate-y-1/2 rotate-45 transform bg-black' />
                <div className='absolute left-0 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-black' />
                <div className='absolute bottom-0 left-0 h-4 w-4 -translate-x-1/2 translate-y-1/2 rotate-45 transform bg-black' />
                {/* Rows inside the bubble */}
                <div className='flex items-center justify-start gap-2'>
                  <p className='rounded-full border border-black p-2 px-4'>
                    Psychiatrist
                  </p>
                  <div className='rounded-full bg-slate-950 p-2'>
                    <ListChecks className='text-white' />
                  </div>
                </div>
                <div className='flex items-center justify-start gap-2'>
                  <p className='relative rounded-full border border-black p-2 px-6'>
                    Engineer
                    <MousePointer2
                      className='absolute -bottom-2 -right-3 h-7 w-7'
                      fill='black'
                    />
                  </p>
                </div>
                <div className='flex items-center justify-start gap-2'>
                  <p className='rounded-full border border-black p-2 px-4'>
                    Psychiatrist
                  </p>
                  <div className='invisible rounded-full bg-slate-950 p-2'>
                    <ListChecks className='text-white' />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 5) Career Options */}
            <motion.div
              variants={bounceVariant(0.5)}
              initial='hidden'
              animate='visible'
              className='mb-20 ml-4 flex flex-col items-center gap-5 rounded-bl-[20px] rounded-br-[100px] rounded-tl-[100px] rounded-tr-[20px] bg-orange-300 px-6 py-8 shadow-lg'
            >
              <div className='flex space-x-1'>
                <Verified className='h-8 w-8 text-white' />
                <Verified className='h-8 w-8 text-white' />
                <Verified className='h-8 w-8 text-blue-500' />
              </div>
              <span className='text-xl font-medium text-gray-800'>
                Get Insights on Career Options
              </span>
            </motion.div>

            {/* 6) Button/Click */}
            <motion.div
              variants={bounceVariant(0.6)}
              initial='hidden'
              animate='visible'
              className='flex items-center justify-center rounded-full bg-black p-6 shadow-lg'
            >
              <MousePointerClick className='h-8 w-8 text-white' />
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};
