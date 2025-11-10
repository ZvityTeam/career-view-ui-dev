import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YouTube from 'react-youtube';
import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Button } from '../ui/Button.tsx';

export const SchoolConnectCTA = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const videos = [
    { id: 'KdumvY3eGcA', title: 'Livestreams' },
    { id: 'A1GEExL4ye4', title: 'Networking Events' },
  ];

  // Framer Motion variants for slide animation
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <CurvedWrapper
      className={
        'mb-32 mt-32 space-y-10 bg-white pt-5 text-[#272727] shadow-lg'
      }
      innerClassName=' space-y-10 flex flow-row'
    >
      <div>
        <SectionHeader
          title={'School Events'}
          subtitle={
            'We host events for schools bringing professionals from various industries to share honest advice about their career journey to students!'
          }
        />
      </div>

      <div className='mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-6'>
        {/* Left: Video Content */}
        <div className='w-full md:col-span-4'>
          <motion.div className='relative w-full rounded-lg bg-white p-2 md:p-4'>
            <AnimatePresence
              mode='wait'
              initial={false}
            >
              <motion.div
                key={activeTab}
                custom={activeTab}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                transition={{ duration: 0.3 }}
                className='relative w-full overflow-hidden rounded-lg shadow-lg'
                style={{ aspectRatio: '16/9' }}
              >
                <YouTube
                  videoId={videos[activeTab].id}
                  className='absolute left-0 top-0 h-full w-full rounded-lg'
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                      mute: 1,
                      loop: 1,
                      playlist: videos[activeTab].id,
                    },
                  }}
                />
              </motion.div>
            </AnimatePresence>
            <p className='mt-2 text-center text-lg font-medium'>
              {videos[activeTab].title}
            </p>
          </motion.div>
        </div>

        {/* Right: Toggle Buttons */}
        <div className='my-auto flex w-full flex-col gap-3 md:gap-5 md:col-span-2 px-2 md:px-0'>
          <button
            type='button'
            aria-pressed={activeTab === 0}
            onClick={() => setActiveTab(0)}
            className={`h-10 md:h-12 w-full rounded-2xl text-sm md:text-base text-[#272727] transition-all duration-200 ${
              activeTab === 0
                ? 'bg-gray-100 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.08),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]'
                : 'bg-black text-white hover:bg-gray-200'
            }`}
          >
            Livestreams
          </button>

          <button
            type='button'
            aria-pressed={activeTab === 1}
            onClick={() => setActiveTab(1)}
            className={`h-10 md:h-12 w-full rounded-2xl text-sm md:text-base text-[#272727] transition-all duration-200 ${
              activeTab === 1
                ? 'bg-gray-100 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.08),inset_-6px_-6px_12px_rgba(255,255,255,0.8)]'
                : 'bg-black text-white hover:bg-gray-200 hover:text-[#272727]'
            }`}
          >
            Networking Events
          </button>

          <p className='mt-6 md:mt-14 pt-0 md:pt-1 text-center text-xs md:text-sm text-[#272727] px-2 md:px-0'>
            Join our livestreams to learn from industry professionals and
            network with like-minded students.
          </p>

          <div className='mt-4 md:mt-0'>
            <Button
              size={'lg'}
              onClick={() => navigate(`/school?scrollTo=schedule-call`)}
              className='h-10 md:h-12 w-full text-sm md:text-base'
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};
