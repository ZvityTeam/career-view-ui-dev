import React from 'react';
import { BookOpen, School, UserCheck } from 'lucide-react';
import { Card } from '../card/Card';
import { SectionHeader } from '../section-header/SectionHeader';
import { CurvedWrapper } from '../CurvedWrapper.tsx';

export const WhatWeDo: React.FC = () => {
  const cards = [
    {
      icon: UserCheck,
      title: 'Personalized Mentorship',
      description:
        'Guiding students through career decisions by connecting them with mentors who share practical, real-world insights.',
    },
    {
      icon: School,
      title: 'Tailored School Programs',
      description:
        'Partnering with schools to provide engaging, career-focused programs that help students navigate their future paths.',
    },
    {
      icon: BookOpen,
      title: 'Valuable Career Insights',
      description:
        'Delivering career resources like podcasts, e-books, and live Q&A sessions to support students at every step of their journey.',
    },
  ];

  return (
    <CurvedWrapper curve='both'>
      {/* Heading */}
      <div className='text-center'>
        <SectionHeader
          title='What we do?'
          subtitle={
            'We’re here to help you discover your strengths, gain real-world insights, and confidently navigate your career journey.'
          }
          className='gap-4'
        />
      </div>

      {/* Cards */}
      <div className='grid scale-110 grid-cols-1 gap-20 sm:grid-cols-2 lg:gap-x-24'>
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
