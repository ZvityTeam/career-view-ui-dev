import YouTube from 'react-youtube';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import { CurvedWrapper } from '../CurvedWrapper.tsx';

export const CareerTalksLivestream = () => {
  // Custom hook for responsive layout
  const { isMobile, isTablet } = useResponsiveLayout();

  // Heading and top text
  const heading = {
    title: 'What is CareerTalks?',
    subtitle:
      "This fully online and interactive livestream allows students to engage directly with young professionals from various industries in a safe, structured, and engaging environment. You can select the number of speakers you'd like, and we will take care of all the logistics to ensure an impactful session.",
  };

  // Get title and text styles based on device
  const getTitleStyles = () => {
    if (isMobile) {
      return {
        titleClass: 'text-3xl font-extrabold text-black',
        textClass: 'text-base text-black mt-2 px-4',
      };
    } else if (isTablet) {
      return {
        titleClass: 'text-4xl font-extrabold text-black',
        textClass: 'text-lg text-black mt-3',
      };
    } else {
      return {
        titleClass: 'text-5xl font-extrabold text-black mb-4',
        textClass: 'text-xl text-black',
      };
    }
  };

  const styles = getTitleStyles();

  return (
    <CurvedWrapper
      className='mb-20 md:mb-32 md:mt-10 lg:mb-36'
      innerClassName='md:py-20'
    >
      <div
        className={`flex flex-col items-start justify-between gap-2 md:flex-row ${isMobile ? 'max-w-full px-4' : isTablet ? 'max-w-2xl px-6 gap-8' : 'max-w-7xl gap-8'}`}
      >
        {/* YouTube Video - Left on desktop */}
        <div
          className={`mt-4 md:mt-0 ${isMobile ? 'w-full' : isTablet ? 'w-full' : 'w-full md:w-1/2'}`}
        >
          <div className='relative aspect-video w-full overflow-hidden rounded-lg'>
            <YouTube
              videoId={'KdumvY3eGcA'}
              containerClassName='absolute inset-0'
              className='h-full w-full rounded-lg'
              opts={{
                // Ensure the iframe respects its container size, fixing mobile overflow
                width: '100%',
                height: '100%',
                playerVars: {
                  autoplay: 1,
                  mute: 1,
                  loop: 1,
                  playlist: 'KdumvY3eGcA',
                },
              }}
            />
          </div>
        </div>

        {/* Heading and top text - Right on desktop, left-aligned */}
        <div className={`my-8 w-full md:w-1/2`}>
          <div className='ml-0 md:ml-12 mt-0 md:mt-6 text-center md:mt-0'>
            <h1 className={styles.titleClass}>{heading.title}</h1>
            <p className={styles.textClass}>{heading.subtitle}</p>
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};
