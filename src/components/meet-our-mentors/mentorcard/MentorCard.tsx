import { Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Mentor } from '../../../types/types';
import { Button } from '../../ui/Button.tsx';

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
  console.log('MentorCard', {
    name,
    role,
    bio,
    profileVideo,
    posterImage,
    showActionButton,
  });

  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && !isVideoLoaded) {
          videoRef.current.src = profileVideo; // Set src when in view
          setIsVideoLoaded(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [profileVideo, isVideoLoaded]);

  return (
    <div className='hover:to-pastelYellow-200 flex min-h-[800px] flex-1 flex-col items-center justify-between rounded-xl bg-white p-12 shadow-lg transition-all hover:bg-gradient-to-b hover:from-gray-50'>
      <div className='text-center'>
        <h3 className='text-3xl font-bold text-gray-900'>{name}</h3>
        <p className='text-lg font-light italic text-gray-600'>{role}</p>
      </div>
      <p className='line-clamp-[7] text-center text-gray-700'>{bio}</p>
      <div className='relative mt-4 h-[533px] w-full max-w-[300px] overflow-hidden rounded-lg shadow-md'>
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
          className='hover:bg-pastelBlue-600 absolute bottom-2 right-2 rounded-full bg-white/30 p-2 text-black backdrop-blur-3xl focus:ring-2 focus:ring-black'
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      {showActionButton && <Button className='mt-4'>Ask a Question</Button>}
    </div>
  );
};
