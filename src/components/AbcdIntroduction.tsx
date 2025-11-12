import { ArrowRightIcon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import abcdImage from '../assets/abcd.webp';
import advancing from '../assets/abcd/advancing.webp';
import awareness from '../assets/abcd/awareness.webp';
import exploring from '../assets/abcd/exploring.webp';
import groundwork from '../assets/abcd/groundwork.webp';
import startingOut from '../assets/abcd/startingOut.webp';
import useResponsiveLayout from '../hooks/useResponsiveLayout';
import { SectionHeader } from './section-header/SectionHeader';

const AbcdIntroduction: React.FC = () => {
  const [imageAnimated, setImageAnimated] = useState(false);
  const [cardsAnimated, setCardsAnimated] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsiveLayout();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start image animation when heading is in view
            setTimeout(() => {
              setImageAnimated(true);
            }, 100);

            // Start cards animation after image animation completes
            setTimeout(() => {
              setCardsAnimated(true);
            }, 800);

            // Disconnect observer after animation starts
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the heading is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before the element is fully in view
      }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const stages = [
    {
      title: 'Awareness',
      description: 'Individuals are becoming aware of the world of work and starting to recognize the many career paths available to them.',
      image: awareness,
    },
    {
      title: 'Exploring',
      description:
        'Individuals are being introduced to key career development ideas and beginning to explore opportunities that match their interests.',
      image: exploring,
    },
    {
      title: 'Starting out',
      description:
        'Individuals are consolidating, extending, and beginning to apply their growing career management skills and knowledge in real situations.',
      image: startingOut,
    },
    {
      title: 'Groundwork',
      description:
        'Individuals are beginning to build and strengthen their career management skills, laying the foundation for future development.',
      image: groundwork,
    },
    {
      title: 'Advancing',
      description:
        'Individuals are actively applying their career management skills and knowledge to grow professionally and achieve new goals.',
      image: advancing,
    },
  ];

  return (
    <div
      className='relative mt-10 overflow-hidden px-4 py-12 pb-28 md:-mb-[4.5rem] md:mt-0 md:px-8 md:py-20 md:pb-44'
      style={{
        background:
          'transparent linear-gradient(215deg, #FFFBF0 0%, #FFEABA 33%, #F1CE7E 71%, #FFFBF0 100%) 0% 0% no-repeat padding-box',
      }}
    >
      {/* ABCD Background Image */}
      <div
        className={`pointer-events-none absolute bottom-0 left-0 h-full w-full transition-transform duration-700 ease-out ${
          imageAnimated ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          backgroundImage: `url(${abcdImage})`,
          backgroundSize: isMobile ? 'auto 50%' : 'auto 75%',
          backgroundPosition: 'bottom left',
          backgroundRepeat: 'no-repeat',
          opacity: isMobile ? 0.8 : 0.89,
          transform: imageAnimated
            ? isMobile
              ? 'translateX(-10%) translateY(15%) rotate(15deg)'
              : 'translateX(-5%) translateY(23%) rotate(25deg)'
            : isMobile
              ? 'translateX(-110%) translateY(15%) rotate(15deg)'
              : 'translateX(-105%) translateY(23%) rotate(25deg)',
          transition: 'transform 0.7s ease-out',
        }}
      />
      <div className='relative z-10 mx-auto max-w-7xl'>
        {/* Header Section */}
        <div
          className='mb-10 md:mb-20'
          ref={headingRef}
        >
          <SectionHeader
            title='Australian Blueprint for Career Development'
            subtitle='CareerView brings the Australian Blueprint to life — combining authentic student engagement with measurable data schools can act on.”'
            className='text-gray-800'
            subTitleClassName='text-gray-600 mx-auto max-w-xl md:max-w-3xl'
            align='center'
          />
        </div>

        {/* Cards Grid */}
        <div className='mx-4 mb-8 grid grid-cols-1 gap-6 md:mx-20 md:grid-cols-3 md:gap-8'>
          {/* First Row - 3 cards */}
          {stages.slice(0, 3).map((stage, index) => (
            <div
              key={index}
              className={`rounded-3xl bg-white p-6 shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:shadow-[0_35px_35px_rgba(0,0,0,0.50)] md:p-8 ${
                cardsAnimated
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Card Image */}
              <div className='mb-6 overflow-hidden rounded-2xl'>
                <img
                  src={stage.image}
                  alt='Workspace'
                  className='h-36 w-full object-cover md:h-48'
                />
              </div>

              {/* Card Content */}
              <h3 className='mb-3 text-xl font-bold text-gray-800 md:mb-4 md:text-2xl'>
                {stage.title}
              </h3>
              <p className='text-sm leading-relaxed text-gray-600 md:text-base'>
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 2 cards + Learn More button */}
        <div className='mx-4 grid grid-cols-1 items-start gap-6 md:mx-20 md:grid-cols-3 md:gap-8'>
          {/* Last 2 cards */}
          {stages.slice(3, 5).map((stage, index) => (
            <div
              key={index + 3}
              className={`rounded-3xl bg-white p-6 shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:shadow-[0_35px_35px_rgba(0,0,0,0.50)] md:p-8 ${
                cardsAnimated
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              }`}
              style={{
                transitionDelay: `${(index + 3) * 150}ms`,
              }}
            >
              {/* Card Image */}
              <div className='mb-6 overflow-hidden rounded-2xl'>
                <img
                  src={stage.image}
                  alt='Workspace'
                  className='h-36 w-full object-cover md:h-48'
                />
              </div>

              {/* Card Content */}
              <h3 className='mb-3 text-xl font-bold text-gray-800 md:mb-4 md:text-2xl'>
                {stage.title}
              </h3>
              <p className='text-sm leading-relaxed text-gray-600 md:text-base'>
                {stage.description}
              </p>
            </div>
          ))}

          {/* Learn More Button */}
          <div
            className={`flex h-full min-h-[200px] flex-col items-center justify-center gap-3 transition-all duration-500 ease-out md:min-h-[400px] md:gap-4 ${
              cardsAnimated
                ? 'translate-x-0 opacity-100'
                : 'translate-x-full opacity-0'
            }`}
            style={{
              transitionDelay: '750ms',
            }}
          >
            <button className='group flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl md:h-24 md:w-24'>
              <div className='h-18 w-18 mb-1 flex items-center justify-center md:mb-2'>
                <ArrowRightIcon className='h-10 w-10 text-gray-700 transition-transform duration-300 group-hover:translate-x-1 md:h-12 md:w-12' />
              </div>
            </button>
            <span className='text-xs font-semibold text-gray-700 md:text-sm'>
              Learn More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbcdIntroduction;
