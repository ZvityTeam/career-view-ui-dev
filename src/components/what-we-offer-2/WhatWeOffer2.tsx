'use client';

import { motion } from 'framer-motion';
import { Headphones, Layers, Link2, Lock, PlaySquare } from 'lucide-react';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Button } from '../ui/Button.tsx';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function WhatWeOffer2() {
  return (
    <section className='mt-36 min-h-screen w-full pt-12'>
      <div className='mx-auto flex max-w-[90rem] flex-col gap-8 px-6 lg:px-12'>
        {/* Title */}
        <SectionHeader title={'What we Offer'} />

        {/* GRID CONTAINER */}
        <div className='grid grid-cols-12 gap-6 lg:gap-8'>
          {/* ---------------- ROW 1 ---------------- */}
          {/* 1) Feedback Statistics */}
          <motion.div
            className='col-span-12 h-auto rounded-[24px] bg-white p-6 shadow-sm md:col-span-3 lg:p-8 xl:col-span-3'
            {...fadeInUp}
          >
            <h3 className='mb-8 text-xl font-medium lg:text-2xl'>
              Feedback Statistics
            </h3>
            <div className='space-y-6'>
              <div>
                <div className='relative mb-2 h-2 rounded-full bg-gray-200'>
                  <div className='absolute inset-0 w-full rounded-full bg-black' />
                </div>
                <p className='text-sm italic text-gray-500'>
                  100% Students learnt something new
                </p>
              </div>
              <div>
                <div className='relative mb-2 h-2 rounded-full bg-gray-200'>
                  <div className='absolute inset-0 w-full rounded-full bg-black' />
                </div>
                <p className='text-sm italic text-gray-500'>
                  100% Students recommend Careerview
                </p>
              </div>
              <div>
                <div className='relative mb-2 h-2 rounded-full bg-gray-200'>
                  <div className='absolute left-0 top-0 h-2 w-[95%] rounded-full bg-black' />
                </div>
                <p className='text-sm italic text-gray-500'>
                  95% Students had follow-up questions
                </p>
              </div>
            </div>
          </motion.div>

          <div className='col-span-12 flex flex-col justify-around gap-6 md:col-span-4 xl:col-span-4'>
            {/* 2) 120+ Career */}
            <motion.div
              className='rounded-[24px] bg-[#1C1C1C] p-6 text-white shadow-sm lg:p-8'
              {...fadeInUp}
            >
              <div className='flex items-center gap-4'>
                <div className='rounded-2xl bg-[#F5F5F0] p-4'>
                  <Layers className='h-6 w-6 text-black lg:h-7 lg:w-7' />
                </div>
                <div>
                  <h3 className='text-2xl font-semibold lg:text-3xl'>
                    120+ Career
                  </h3>
                  <p className='mt-1 text-sm text-gray-300 lg:text-base'>
                    Guidance Options Available
                  </p>
                </div>
              </div>
            </motion.div>
            {/* 4) Live Streaming (centered under 120+ Career) */}
            <motion.div
              className='rounded-[24px] bg-white p-6 shadow-sm lg:p-8'
              {...fadeInUp}
            >
              <div className='flex items-center justify-between text-slate-950'>
                <div>
                  <h3 className='text-2xl font-bold lg:text-3xl'>
                    Live-streaming
                  </h3>
                  <p className='text-sm text-gray-600 lg:text-base'>
                    &amp; Career Talk with Live Q&amp;A
                  </p>
                </div>
                <div className='relative'>
                  <div className='absolute -right-2 -top-2 h-12 w-12 -rotate-6 rounded-2xl bg-blue-100 lg:h-14 lg:w-14' />
                  <div className='absolute -right-1 -top-1 h-12 w-12 rotate-3 rounded-2xl bg-yellow-100 lg:h-14 lg:w-14' />
                  <div className='relative rounded-2xl bg-[#1C1C1C] p-3 lg:p-4'>
                    <PlaySquare className='h-6 w-6 text-white lg:h-7 lg:w-7' />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3) Unlock Potential */}
          <motion.div
            className='relative col-span-12 rounded-[24px] p-6 shadow-sm md:col-span-5 lg:p-8 xl:col-span-5'
            {...fadeInUp}
            style={{
              background:
                'radial-gradient(circle at bottom left, #FFFFFF, #FFFFFF, #6B8FF2)',
            }}
          >
            <div className='flex items-start justify-between'>
              <div>
                <div className='mb-2 flex -space-x-2'>
                  {[...Array(4)].map((_, i) => (
                    <img
                      key={i}
                      src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G9rFTZppVkvPcSDZilcUcpp1350YQ9.png'
                      alt='Student avatar'
                      className='h-8 w-8 rounded-full border-2 border-white lg:h-10 lg:w-10'
                    />
                  ))}
                </div>
                <p className='text-sm text-gray-600 lg:text-base'>
                  12k+ Students satisfied
                </p>
              </div>
              <Lock className='h-6 w-6 text-blue-500 lg:h-7 lg:w-7' />
            </div>
            <div className='mt-8 lg:mt-12'>
              <h3 className='mb-4 text-2xl font-bold leading-snug lg:text-3xl'>
                Unlock Your
                <br />
                Full Potential
              </h3>
              <Button
                variant='outline'
                className='rounded-full px-6 text-sm lg:text-base'
              >
                Sign Up
              </Button>
            </div>
          </motion.div>

          {/* ---------------- ROW 3 ---------------- */}
          {/* 5) Network with Peers */}
          <motion.div
            className='col-span-12 rounded-[24px] bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 shadow-sm md:col-span-4 lg:p-8 xl:col-span-4'
            {...fadeInUp}
          >
            <div className='mb-6 flex items-center justify-between'>
              <h3 className='text-2xl font-bold lg:text-3xl'>
                Network with Peers
              </h3>
              <div className='rounded-full bg-white p-3 shadow-sm lg:p-4'>
                <Link2 className='h-6 w-6 text-black lg:h-7 lg:w-7' />
              </div>
            </div>
            <p className='mb-6 text-sm leading-relaxed text-gray-600 lg:text-base'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </p>
            <div className='flex items-center gap-2'>
              <div className='flex -space-x-2'>
                {[...Array(4)].map((_, i) => (
                  <img
                    key={i}
                    src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G9rFTZppVkvPcSDZilcUcpp1350YQ9.png'
                    alt='Connected student'
                    className='h-8 w-8 rounded-full border-2 border-white lg:h-10 lg:w-10'
                  />
                ))}
              </div>
              <p className='text-sm text-gray-600 lg:text-base'>
                12k+ Students connected
              </p>
            </div>
          </motion.div>

          {/* 6) Podcast */}
          <motion.div
            className='col-span-12 flex justify-center md:col-span-2 xl:col-span-2'
            {...fadeInUp}
          >
            {/* Outer black container */}
            <div className='flex w-full flex-col items-center justify-around rounded-[24px] bg-[#1C1C1C] p-6 shadow-sm lg:p-8'>
              {/* Cream icon box at the top */}
              <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5F5F0] lg:h-20 lg:w-20'>
                <Headphones className='h-6 w-6 text-black lg:h-8 lg:w-8' />
              </div>

              {/* Vertical “PODCAST” text, centered on the black shape’s right edge */}
              <div className='flex flex-col items-center justify-center font-mono text-xs text-white lg:text-sm'>
                {'PODCAST'.split('').map((value, index) => (
                  <span key={index}>{value}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 7) Top Mentors */}
          <motion.div
            className='col-span-12 rounded-[24px] bg-gradient-to-br from-gray-100 to-gray-200 p-6 shadow-sm md:col-span-6 lg:p-8 xl:col-span-6'
            {...fadeInUp}
          >
            <div className='mb-6 flex items-start justify-between'>
              <div>
                <h3 className='mb-2 text-2xl font-bold lg:text-3xl'>
                  Top Mentors
                </h3>
                <p className='mb-4 text-sm leading-relaxed text-gray-600 lg:text-base'>
                  Receive guidance from the pool of best professionals out in
                  the industry
                </p>
                <Button
                  variant='secondary'
                  className='rounded-full bg-black text-sm text-white hover:bg-black/90 lg:text-base'
                >
                  Browse Mentors
                </Button>
              </div>
            </div>
            <div className='mt-6 grid grid-cols-3 gap-2 lg:mt-8 lg:gap-4'>
              {[...Array(6)].map((_, i) => (
                <img
                  key={i}
                  src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-G9rFTZppVkvPcSDZilcUcpp1350YQ9.png'
                  alt='Mentor'
                  className='h-16 w-16 rounded-xl object-cover lg:h-20 lg:w-20'
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
