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

  const handleTabSwitch = (index: number) => {
    setActiveTab(index);
  };

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
      className={'mb-32 h-[80dvh] space-y-10 bg-white pt-5 text-[#272727]'}
      innerClassName=' space-y-10'
    >
      <div>
        <SectionHeader
          title={'School Events'}
          subtitle={
            'We host events for schools bringing professionals from various industries to share honest advice about their career journey to students!'
          }
        />
        <div className='mt-5 flex justify-center gap-6'>
          <Button
            variant={'outline'}
            size={'lg'}
            className={
              'border-[#272727] text-[#272727] hover:border-black hover:bg-[rgba(0,0,0,0.2)]'
            }
          >
            See It in Action
          </Button>
          <Button
            size={'lg'}
            onClick={() => navigate(`/contact-us`)}
            className='bg-black text-white hover:bg-[rgba(0,0,0,0.8)]'
          >
            Contact Us
          </Button>
        </div>
      </div>

      <div className='mx-auto w-full max-w-3xl'>
        {/* Tab Navigation */}
        <div className='mb-4 flex border-b border-[#272727]'>
          {videos.map((video, index) => (
            <div
              key={video.id}
              onClick={() => handleTabSwitch(index)}
              className={`relative flex-1 cursor-pointer rounded-t-full px-4 py-2 text-center text-sm font-medium transition-colors ${
                activeTab === index
                  ? 'text-black'
                  : 'text-[#272727] hover:bg-black/10'
              }`}
            >
              {video.title}
              {activeTab === index && (
                <motion.div
                  className='absolute bottom-0 left-0 h-0.5 w-full bg-black'
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>
        {/* Video Content */}
        <motion.div
          className='relative w-full rounded-lg bg-white p-4'
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset }) => {
            if (offset.x > 50 && activeTab > 0) {
              console.log(e);
              setActiveTab(activeTab - 1); // Swipe right
            } else if (offset.x < -50 && activeTab < videos.length - 1) {
              console.log(e);
              setActiveTab(activeTab + 1); // Swipe left
            }
          }}
        >
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
    </CurvedWrapper>
  );
};
