import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import useResponsiveLayout from '../../hooks/useResponsiveLayout';
import { CurvedWrapper } from '../CurvedWrapper.tsx';

export const CareerTalksLivestream = () => {
  // Custom hook for responsive layout
  const { isMobile, isTablet } = useResponsiveLayout();

  // State for video dimensions
  const [videoDimensions, setVideoDimensions] = useState({
    width: '800px',
    height: '450px',
  });

  // Heading and top text
  const heading = {
    title: 'What is Career Talks Livestream?',
    subtitle:
      "This fully online and interactive livestream allows students to engage directly with young professionals from various industries in a safe, structured, and engaging environment. You can select the number of speakers you'd like, and we will take care of all the logistics to ensure an impactful session.",
  };

  // Update video dimensions based on screen size
  useEffect(() => {
    const updateDimensions = () => {
      const windowWidth = window.innerWidth;

      if (isMobile) {
        // Mobile view (up to 767px)
        setVideoDimensions({
          width: '100%',
          height: '220px',
        });
      } else if (isTablet) {
        // Tablet view (768px to 1023px)
        setVideoDimensions({
          width: '100%',
          height: '350px',
        });
      } else if (windowWidth >= 1024 && windowWidth < 1280) {
        // Small desktop
        setVideoDimensions({
          width: '700px',
          height: '394px',
        });
      } else {
        // Large desktop (original dimensions)
        setVideoDimensions({
          width: '800px',
          height: '450px',
        });
      }
    };

    updateDimensions();

    // Handle window resize
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [isMobile, isTablet]);

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
        titleClass: 'text-5xl font-extrabold text-black',
        textClass: 'text-xl text-black',
      };
    }
  };

  const styles = getTitleStyles();

  return (
    <CurvedWrapper className='ld:mb-36 md:mb-42 mb-48'>
      <div
        className={`flex flex-col items-center justify-center gap-4 ${isMobile ? 'max-w-full px-4' : isTablet ? 'max-w-2xl px-6' : 'max-w-5xl'}`}
      >
        {/* Heading and top text */}
        <div className='text-center'>
          <h1 className={styles.titleClass}>{heading.title}</h1>
          <p className={styles.textClass}>{heading.subtitle}</p>
        </div>

        {/* YouTube Video */}
        <div
          className={`mt-4 ${isMobile ? 'w-full' : isTablet ? 'w-full' : 'mt-6'}`}
        >
          <div className='w-full overflow-hidden rounded-lg'>
            <YouTube
              videoId={'KdumvY3eGcA'}
              className='rounded-lg'
              opts={{
                width: videoDimensions.width,
                height: videoDimensions.height,
                playerVars: {
                  autoplay: 1, // Autoplay on hover
                  mute: 1, // Muted for autoplay compliance
                  loop: 1, // Enable looping
                  playlist: 'KdumvY3eGcA',
                },
              }}
            />
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};
