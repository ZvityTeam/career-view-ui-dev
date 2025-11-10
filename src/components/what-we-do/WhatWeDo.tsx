import { Activity, GraduationCap, Megaphone, Users } from 'lucide-react';
import React from 'react';
import { Card } from '../card/Card';
import { CurvedWrapper } from '../CurvedWrapper.tsx';
import { SectionHeader } from '../section-header/SectionHeader';

export const WhatWeDo: React.FC = () => {
  const cards = [
    {
      icon: GraduationCap, // Previously PodcastIcon
      title: 'Educational Content',
      description:
        'Deliver structured, evidence-based content that directly addresses the core Australian Blueprint Competencies (C3, C5, C6, C10, C11) for seamless curriculum integration.',
    },
    {
      icon: Users, // Previously BookOpen
      title: 'Authentic Mentorship',
      description:
        'Bridge the gap between theory and practice by connecting students with Young Professionals for real, current, and relatable career insights that boost engagement.',
    },
    {
      icon: Activity, // Previously RadioIcon
      title: 'Future-Ready Skills',
      description:
        'Our focus on emerging industry trends ensures students develop the crucial adaptability and self-management skills required for non-linear, 21st-century careers.',
    },
    {
      icon: Megaphone, // Previously Users
      title: 'Strategic Outcomes',
      description:
        'Provide students with the confidence and framework to make informed, strategic choices about subject selection and post-school pathways, driving better student outcomes.',
    },
  ];

  return (
    <CurvedWrapper
      curve='both'
      className='mt-0 md:mt-10 flex flex-col items-center md:mb-20'
      innerClassName='px-4  sm:px-6 lg:px-8 md:py-20 flex flex-col items-center space-y-12 md:space-y-16 lg:space-y-10'
    >
      {/* Heading */}
      <div className='text-center'>
        <SectionHeader
          title='What we do?'
          subtitle={
            'We help students discover their strengths, gain real-world insights, and confidently navigate their career journey.'
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
