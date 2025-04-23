import YouTube from 'react-youtube';
import { CurvedWrapper } from '../CurvedWrapper.tsx';

export const CareerTalksLivestream = () => {
  // Heading and top text
  const heading = {
    title: 'What is Career Talks Livestream?',
    subtitle:
      'This fully online and interactive livestream allows students to engage directly with young professionals from various industries in a safe, structured, and engaging environment. You can select the number of speakers you’d like, and we will take care of all the logistics to ensure an impactful session.',
  };

  return (
    <CurvedWrapper className='mb-36'>
      <div className='flex max-w-5xl flex-col items-center justify-center gap-4'>
        {/* Heading and top text */}
        <div className='text-center'>
          <h1 className='text-5xl font-extrabold text-black'>
            {heading.title}
          </h1>
          <p className='text-xl text-black'>{heading.subtitle}</p>
        </div>

        {/* Three items with icons and text */}
        <div className='mt-6'>
          <div className='w-full overflow-hidden rounded-lg'>
            <YouTube
              videoId={'KdumvY3eGcA'}
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
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};
