import { useEffect, useState } from 'react';
import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Button } from '../ui/Button.tsx';

export const WhyBecomeAMentor = () => {
  // Define content type for each slide
  type SlideContent = {
    image: string;
    title: string;
    subtitle: string;
    buttonText: string;
  };

  const slides: SlideContent[] = [
    {
      image:
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg', // Placeholder mentor image
      title: 'Why Become a Mentor?',
      subtitle:
        'Students continue to face challenges when deciding on their careers during and after school. This happens because they lack honest and relatable guidance. CareerView offers you a dedicated platform for sharing your career journey and providing authentic advice to help students in making well-informed career choices.',
      buttonText: 'Learn More',
    },
    {
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', // Placeholder student image
      title: 'Support Student Growth',
      subtitle:
        'Many of today’s Young Professionals have joined CareerView due to the lack of guidance they experienced in their own youth – they view their contribution as a way to give back! To share advice they wish they had in school!!',
      buttonText: 'Get Started',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <Section className='my-24 h-[70dvh] overflow-hidden'>
      <div className='relative h-full'>
        <div
          className='flex h-full w-full transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className='h-full w-full flex-shrink-0 flex-row gap-12'
            >
              <div className='h-full w-1/3'>
                <img
                  src={slide.image}
                  alt={`${slide.title} Image`}
                  className='h-full w-full rounded-3xl object-cover'
                />
              </div>
              <div className='flex w-1/3 flex-col items-start justify-center gap-6 p-6 text-left'>
                <SectionHeader
                  title={slide.title}
                  subtitle={slide.subtitle}
                  className='max-w-xl items-start'
                  subTitleClassName='text-left'
                />
                <Button className='rounded-full bg-gray-800 px-8 py-3 text-white'>
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Dots navigation */}
        <div className='absolute -bottom-6 left-0 right-0 flex justify-center space-x-2'>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 w-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
