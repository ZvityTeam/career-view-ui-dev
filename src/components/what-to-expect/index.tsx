import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Button } from '../ui/Button.tsx';

export const WhyBecomeAMentor = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 2000); // Stop animation after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <CurvedWrapper
      minHeight='70vh'
      className='bg-gray-50 py-16'
    >
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 items-center gap-12 lg:grid-cols-2'>
          {/* Text Content */}
          <div className='space-y-6 lg:order-2'>
            <SectionHeader
              title='Become a CareerView Mentor'
              subtitle='Share the guidance you wish you’d received. Students seek relatable career advice—join CareerView to shape their futures with your insights.'
              className='max-w-3xl text-left'
              subTitleClassName='text-gray-600 text-sm leading-relaxed'
            />
            <div className='mt-8'>
              <Button
                variant='default'
                size='lg'
              >
                Start Mentoring
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='ml-6'
              >
                Discover More
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className='relative flex justify-center lg:order-1'>
            <div className='relative w-full max-w-3xl'>
              <YouTube
                videoId={'l_ofR0v0pjY'}
                className='rounded-lg'
                opts={{
                  width: '800px',
                  height: '450px', // Fixed height
                  playerVars: {
                    autoplay: 1, // Autoplay on hover
                    mute: 1, // Muted for autoplay compliance
                  },
                }}
              />
              <div
                className={`absolute -left-12 -top-8 w-64 rounded-2xl border border-gray-200 bg-white p-4 shadow-2xl ${animate ? 'animate-bounce' : ''}`}
              >
                <p className='text-sm italic text-gray-600'>
                  "Mentoring on CareerView lets me share the advice I wish I had
                  when I was starting out."
                </p>
                <p className='mt-2 text-sm font-medium text-gray-800'>
                  - Alex, CareerView Mentor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};
