import {
  ChartNoAxesCombined,
  GraduationCap,
  Rocket,
  Users,
} from 'lucide-react';
import React from 'react';
import { Card } from '../card/Card';
import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { SectionHeader } from '../section-header/SectionHeader';

export const WhatWeDo: React.FC = () => {
  const cards = [
    {
      icon: GraduationCap, // Previously PodcastIcon
      title: 'Learn What Matters',
      description:
        'We design structured, evidence-based content that aligns with the Australian Blueprint Competencies, ensuring every lesson connects to curriculum outcomes.',
    },
    {
      icon: Users, // Previously BookOpen
      title: 'Hear From People Doing It',
      description:
        'We connect students directly with industry  professionals who share real stories from their careers — what worked, what didn’t, and what they wish they’d known sooner.',
    },
    {
      icon: Rocket, // Previously RadioIcon
      title: 'Build Future-Ready Skills',
      description:
        'Our programs focus on adaptability, creativity, and self-management, preparing students for the non-linear careers of the 21st century and beyond!',
    },
    {
      icon: ChartNoAxesCombined, // Previously Users
      title: 'Turn Insights Into Impact',
      description:
        'We turn student voices into measurable insights. Schools can identify what’s working, where to support, and how to align career education strategy with student data.',
    },
  ];

  return (
    <CurvedWrapper
      curve='both'
      className='mt-0 flex flex-col items-center md:mb-20 md:mt-10'
      innerClassName='px-4  sm:px-6 lg:px-8 md:py-20 flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-10'
    >
      {/* Heading */}
      <div className='text-center'>
        <SectionHeader
          title='What we do?'
          subtitle={
            'We help students find their strengths, learn from real professionals, and make confident choices about the future.'
          }
          className='gap-4'
        />
      </div>

      {/* Cards */}
      <div className='grid w-full max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:ml-24 lg:gap-12'>
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </CurvedWrapper>
  );
};
