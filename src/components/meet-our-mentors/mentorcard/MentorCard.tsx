import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Mentor } from '../../../types/types';
import { Button } from '../../ui/Button.tsx';
import { useNavigate } from 'react-router-dom';

export const MentorCard = ({
  name,
  role,
  bio,
  profileVideo,
  posterImage,
  showActionButton = true,
}: Pick<Mentor, 'name' | 'role' | 'bio'> & {
  profileVideo: string;
  posterImage?: string;
  showActionButton?: boolean;
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && !isVideoLoaded) {
          videoRef.current.src = profileVideo;
          setIsVideoLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [profileVideo, isVideoLoaded]);

  return (
    <div className='hover:to-yellow-100 flex min-h-[558px] flex-col items-center justify-between rounded-xl bg-white p-6 shadow-lg transition-all hover:bg-gradient-to-b hover:from-gray-50 sm:min-h-[600px] sm:p-8 lg:min-h-[930px] lg:p-12'>
      <div className='text-center'>
        <h3 className='text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl'>
          {name}
        </h3>
        <p className='text-sm font-light italic text-gray-600 sm:text-base lg:text-lg'>
          {role}
        </p>
      </div>
      <p className='line-clamp-[5] text-center text-sm text-gray-700 sm:line-clamp-[6] sm:text-base lg:line-clamp-[7]'>
        {bio}
      </p>
      <div className='relative mt-3 h-[300px] w-full max-w-[240px] overflow-hidden rounded-lg shadow-md sm:mt-4 sm:h-[400px] sm:max-w-[280px] lg:h-[533px] lg:max-w-[300px]'>
        <video
          ref={videoRef}
          poster={posterImage}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload='metadata'
          className='h-full w-full object-cover'
          aria-label={`${name}'s profile video`}
        />
        <button
          onClick={toggleMute}
          className='hover:bg-pastelBlue-600 absolute bottom-2 right-2 rounded-full bg-white/30 p-1.5 text-black backdrop-blur-3xl focus:ring-2 focus:ring-black sm:p-2'
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <VolumeX className='h-4 w-4 sm:h-5 sm:w-5' />
          ) : (
            <Volume2 className='h-4 w-4 sm:h-5 sm:w-5' />
          )}
        </button>
      </div>
      {showActionButton && (
        <Button className='mt-3 text-sm sm:mt-4 sm:text-base' onClick={()=> navigate('/student?scrollTo=ask-a-question')}>
          Ask a Question
        </Button>
      )}
    </div>
  );
};
