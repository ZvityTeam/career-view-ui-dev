import * as React from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { cn } from '../../utils/cn';

type AspectRatio = '16/9' | '9/16' | '1/1';

export interface VideoPlayerProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  /** Whether to show the mute/unmute button */
  showMuteButton?: boolean;
  /** Whether to show the play/pause button */
  showPlayButton?: boolean;
  /** Initial mute state */
  muted?: boolean;
  /** Initial autoplay state (note that browsers may block autoplay if not muted) */
  autoPlay?: boolean;
  /** Aspect ratio of the video container */
  aspectRatio?: AspectRatio;
  /** Additional className for the container */
  className?: string;
  /** Explicit height in px for the container (overrides aspect ratio in practice) */
  height?: number;
}

export function VideoPlayer({
  src,
  showMuteButton = false,
  showPlayButton = false,
  /** By default we set muted to false,
                               but if you want guaranteed autoplay in Chrome etc.,
                               you should pass muted={true}. */
  muted = false,
  /** Default autoPlay to false so it’s more explicit when you enable it */
  autoPlay = false,
  aspectRatio = '16/9',
  className,
  height = 110,
  ...props
}: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Local state for isPlaying & isMuted
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const [isMuted, setIsMuted] = React.useState(muted);

  // Play/pause and mute/unmute logic, using effect
  React.useEffect(() => {
    if (!videoRef.current) return;

    // Update the video element's muted state
    videoRef.current.muted = isMuted;

    // If isPlaying is true, attempt to play
    if (isPlaying) {
      videoRef.current.play().catch((err) => {
        console.error('Video play failed (possibly blocked by browser)', err);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isMuted, isPlaying]);

  // Tailwind classes for aspect ratio
  const aspectClass = React.useMemo(() => {
    switch (aspectRatio) {
      case '16/9':
        return 'aspect-[16/9]';
      case '9/16':
        return 'aspect-[9/16]';
      case '1/1':
        return 'aspect-square';
      default:
        return 'aspect-[16/9]';
    }
  }, [aspectRatio]);

  // Handlers for toggling state
  const handleToggleMute = () => setIsMuted((prev) => !prev);
  const handleTogglePlay = () => setIsPlaying((prev) => !prev);

  return (
    <div
      className={cn('relative', aspectClass, className)}
      style={{
        height: `${height}px`, // If you want dynamic px height
      }}
    >
      <video
        ref={videoRef}
        className='absolute inset-0 h-full w-full object-cover'
        src={src}
        // Notice we do NOT include `autoPlay={autoPlay}` anymore
        // We also pass the *current state* isMuted, so toggling button actually changes the video
        muted={isMuted}
        controls={false}
        {...props}
      />
      {(showMuteButton || showPlayButton) && (
        <div className='absolute bottom-2 right-2 flex items-center space-x-2'>
          {showPlayButton && (
            <button
              type='button'
              onClick={handleTogglePlay}
              className='flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70'
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
          )}
          {showMuteButton && (
            <button
              type='button'
              onClick={handleToggleMute}
              className='flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70'
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
