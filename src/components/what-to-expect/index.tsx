import { useEffect, useState } from 'react';
import image1 from '../../assets/schoolPageIllustrations/Screenshot_2025-03-21_064941-removebg-preview.png';
import illstration2 from '../../assets/schoolPageIllustrations/undraw_career-development_f0n6.svg';
import illstration3 from '../../assets/schoolPageIllustrations/undraw_instant-analysis_idb3.svg';
import illstration1 from '../../assets/schoolPageIllustrations/undraw_time-management_fedt.svg';
import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { Button } from '../ui/Button.tsx';

// Define slide content type
type SlideContent = {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
};

export const WhatToExpect = () => {
  // Sample slide data - replace with your actual content
  const slides: SlideContent[] = [
    {
      image: image1,
      title: 'What to expect?',
      subtitle:
        'Expect real, measurable improvements. We address the common pain points in career exploration and deliver a valuable experience.',
      buttonText: 'Watch Now',
    },
    {
      image: illstration1,
      title: 'Reduce Time',
      subtitle:
        'Expect faster results, saving 6-8 weeks. We address time-consuming searches and deliver efficient career exploration. ',
      buttonText: 'Watch Now',
    },
    {
      image: illstration2,
      title: 'Easy Industry Access',
      subtitle:
        'Expect direct access to 12 industries. We address limited exposure and deliver a broader career understanding.',
      buttonText: 'Watch Now',
    },
    {
      image: illstration3,
      title: 'Uncover Insights',
      subtitle:
        'Expect data-driven clarity. We address vague options and deliver actionable insights for informed decisions.',
      buttonText: 'Watch Now',
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
    <CurvedWrapper className='mb-36'>
      <div className='relative flex h-[50dvh] flex-row gap-12'>
        {/* Left side - Image carousel */}
        <div className='relative w-1/2 overflow-hidden rounded-3xl'>
          <div
            className='flex h-full w-full transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className='h-full w-full flex-shrink-0'
              >
                <img
                  src={slide.image}
                  alt={`Slide ${idx + 1}`}
                  className='h-full w-full rounded-2xl object-contain'
                />
              </div>
            ))}
          </div>
        </div>
        {/* Dots navigation - centered at bottom of image area */}
        <div className='absolute -bottom-3 left-0 right-0 flex justify-center space-x-2'>
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

        {/* Right side - Content that changes with slides */}
        <div className='flex w-1/3 flex-col justify-center'>
          <div className='relative h-[250px]'>
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute left-0 top-0 flex h-full w-full flex-col justify-center transition-opacity duration-500 ${
                  idx === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'
                }`}
              >
                <h2 className='mb-4 text-4xl font-bold'>{slide.title}</h2>
                <p className='mb-6 text-gray-600'>{slide.subtitle}</p>
                <Button className='w-fit rounded-full bg-gray-800 px-8 py-3 text-white'>
                  {slide.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CurvedWrapper>
  );
};
