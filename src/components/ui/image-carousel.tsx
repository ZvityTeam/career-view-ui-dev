import * as React from 'react';
import { cn } from '../../utils/cn'; // or your own utility

type AspectRatio = '16/9' | '9/16' | '1/1';

export interface ImageCarouselProps {
  /**
   * An array of image URLs to display in the carousel
   */
  images: string[];
  /**
   * Aspect ratio of the carousel container.
   * Defaults to `"16/9"`.
   * If you want a fixed height, replace logic or pass a style directly.
   */
  aspectRatio?: AspectRatio;
  /**
   * Whether to show clickable progress dots below the slides.
   */
  showControls?: boolean;
  /**
   * Whether the carousel should auto-advance to the next slide.
   * Defaults to `false`.
   */
  autoPlay?: boolean;
  /**
   * Duration (in milliseconds) for auto-advancing the slide.
   * Defaults to `3000`.
   */
  duration?: number;
  /**
   * Optional className for custom styling (e.g. `rounded-3xl overflow-hidden`)
   */
  className?: string;
}

export function ImageCarousel({
  images,
  aspectRatio = '16/9',
  showControls = true,
  autoPlay = false,
  duration = 3000,
  className,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalImages = images.length;

  // Move to specific index
  const goToIndex = React.useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Move to next slide (wrap around at end)
  const goNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  // Auto-play effect
  React.useEffect(() => {
    if (!autoPlay || totalImages <= 1) return;
    const intervalId = setInterval(() => {
      goNext();
    }, duration);
    return () => clearInterval(intervalId);
  }, [autoPlay, duration, goNext, totalImages]);

  // Tailwind aspect ratio class
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

  return (
    <div className='w-full'>
      {/*
        Combine your custom className with the aspect ratio & overflow.
        This container controls the visible clipping/rounding.
      */}
      <div
        className={cn(
          'relative w-full overflow-hidden',
          aspectClass,
          className
        )}
      >
        {/* Slides container */}
        <div
          className='flex h-full w-full transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, idx) => (
            <>
              <div
                key={idx}
                className='h-full w-full flex-shrink-0'
              >
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className='h-full w-full object-cover'
                />
              </div>
            </>
          ))}
        </div>
      </div>

      {/* Dots / Progress Controls (below the carousel) */}
      {showControls && totalImages > 1 && (
        <div className='mt-6 flex justify-center space-x-2 overflow-hidden'>
          {images.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                onClick={() => goToIndex(idx)}
                className={cn(
                  'h-3 w-3 cursor-pointer rounded-full border border-gray-300',
                  'transition-colors hover:bg-gray-200',
                  isActive ? 'bg-gray-500' : 'bg-transparent'
                )}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
