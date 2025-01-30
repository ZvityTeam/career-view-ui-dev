import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn'; // replace with your own cn utility if needed

/**
 * Supported aspect ratios for the gallery container.
 */
type AspectRatio = '16/9' | '9/16' | '1/1';

/**
 * Props for the ReelImageGallery component.
 *
 * @remarks
 * This component displays a reel/carousel of images side by side. The user can click on
 * left/right buttons to slide between images. It also supports automatically rotating
 * through images on a specified interval if `autoSwitch` is true.
 *
 * @example
 * ```tsx
 * import { ReelImageGallery } from "./ReelImageGallery";
 *
 * function App() {
 *   return (
 *     <ReelImageGallery
 *       images={[
 *         "https://example.com/image1.jpg",
 *         "https://example.com/image2.jpg",
 *         "https://example.com/image3.jpg"
 *       ]}
 *       aspectRatio="16/9"
 *       autoSwitch={true}
 *       switchDuration={3000}
 *       className="rounded-lg overflow-hidden"
 *     />
 *   );
 * }
 * ```
 */
export interface ReelImageGalleryProps {
  /**
   * An array of image URLs to display in the reel.
   */
  images: string[];
  /**
   * If provided, overrides aspect ratio with a fixed pixel height.
   * (e.g. `height={300}`). Defaults to `undefined`.
   */
  height?: number;
  /**
   * Aspect ratio for the gallery container (e.g., "16/9", "9/16", or "1/1").
   * Ignored if `height` is provided.
   */
  aspectRatio?: AspectRatio;
  /**
   * Whether the gallery should automatically switch to the next image.
   * Defaults to `false`.
   */
  autoSwitch?: boolean;
  /**
   * Duration in milliseconds for each auto-switch interval. Defaults to `3000`.
   */
  switchDuration?: number;
  /**
   * Additional class names for the container.
   */
  className?: string;
}

export function ReelImageGallery({
  images,
  height,
  aspectRatio = '16/9',
  autoSwitch = false,
  switchDuration = 3000,
  className,
}: ReelImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalImages = images.length;

  // Decide whether to apply a fixed height or an aspect ratio class.
  const containerDimensionClass = React.useMemo(() => {
    // If user specified a height, skip aspect ratio
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

  // Go to previous image (wrap if at start).
  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  // Go to next image (wrap if at end).
  const handleNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  // Auto-switch if enabled and more than 1 image.
  React.useEffect(() => {
    if (!autoSwitch || totalImages <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, switchDuration);

    return () => clearInterval(intervalId);
  }, [autoSwitch, switchDuration, totalImages]);

  return (
    <div
      // Outer container for either height or aspect ratio
      className={cn('relative w-full', containerDimensionClass, className)}
      style={height ? { height: `${height}px` } : {}}
    >
      {/* Inner wrapper absolutely positioned to fill the container */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Slides container (horizontal flex) */}
        <div
          className='flex h-full w-full transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, idx) => (
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
          ))}
        </div>

        {/* Left arrow button */}
        {totalImages > 1 && (
          <button
            onClick={handlePrev}
            className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60'
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Right arrow button */}
        {totalImages > 1 && (
          <button
            onClick={handleNext}
            className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60'
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
