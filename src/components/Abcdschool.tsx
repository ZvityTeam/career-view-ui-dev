import { BookOpen, GraduationCap, HeartHandshake } from 'lucide-react';
import React from 'react';
import higherEducation from '../assets/abcd/higherEducation.webp';
import subjectSelection from '../assets/abcd/subjectSelection.webp';
import workLife from '../assets/abcd/workLife.webp';
import { SectionHeader } from './section-header/SectionHeader';

const Abcdschool: React.FC = () => {
  return (
    <div className='mx-auto max-w-7xl px-4 py-16'>
      {/* Header Section */}
      <div className='mb-16'>
        <SectionHeader
          title='Career Ready: Practical Life Skills'
          subtitle='Discover the vital connections, trends, and financial knowledge you need to navigate the working world.'
          className='mb-16'
          subTitleClassName='text-gray-600 max-w-2xl mx-auto leading-relaxed'
        />
      </div>

      {/* Cards Section */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
        {/* Work-Life & Wellbeing Card */}
        <div className='overflow-hidden rounded-3xl bg-white shadow-lg'>
          <div className='relative h-48'>
            {/* Background image layer */}
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `url(${workLife})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* Gradient overlay using the exact Tailwind class with 50% opacity */}
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#ff00ff_0%,_#1a0033_100%)] opacity-70' />
            {/* Content layer */}
            <div className='relative flex h-full items-center justify-center'>
              <HeartHandshake
                className='h-16 w-16 text-white'
                strokeWidth={2}
              />
            </div>
          </div>
          <div className='p-8'>
            <h3 className='mb-2 text-2xl font-bold text-gray-800'>
              Mental Health Skills
            </h3>
            <p className='mb-4 text-lg font-semibold'>
              Strategies for managing stress and maintaining wellbeing.
            </p>
            <p className='leading-relaxed text-gray-600'>
              Practical strategies for managing workplace stress and achieving
              work-life balance. Professional tips on setting boundaries,
              building resilience, and prioritizing wellbeing.
            </p>
          </div>
        </div>

        {/* Subject Choices Card */}
        <div className='overflow-hidden rounded-3xl bg-white shadow-lg'>
          <div className='relative h-48'>
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `url(${subjectSelection})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,_#f0f8e9_0%,_#8bc34a_80%)] opacity-70' />
            <div className='relative flex h-full items-center justify-center'>
              <BookOpen
                className='h-16 w-16 text-white'
                strokeWidth={2}
              />
              <div className='absolute right-4 top-4 h-8 w-8 rounded-full border-2 border-white/30'></div>
              <div className='absolute bottom-6 right-8 h-6 w-6 rounded-full border-2 border-white/30'></div>
              <div className='absolute left-6 top-8 h-4 w-4 rounded-full border-2 border-white/30'></div>
            </div>
          </div>
          <div className='p-8'>
            <h3 className='mb-2 text-2xl font-bold text-gray-800'>
              Subject Selection Alignment
            </h3>
            <p className='mb-4 text-lg font-semibold'>
              Link your school subjects to future careers and studies.
            </p>
            <p className='leading-relaxed text-gray-600'>
              Discover how choosing the right subjects in school can influence
              your future study and career options. Get strategic advice
              tailored to a variety of career paths.
            </p>
          </div>
        </div>

        {/* Higher Education Pathways Card */}
        <div className='overflow-hidden rounded-3xl bg-white shadow-lg'>
          <div className='relative h-48'>
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `url(${higherEducation})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#ffffff_0%,_#111827_80%)] opacity-70' />
            <div className='relative flex h-full items-center justify-center'>
              <GraduationCap
                className='h-16 w-16 text-white'
                strokeWidth={2}
              />
            </div>
          </div>
          <div className='p-8'>
            <h3 className='mb-2 text-2xl font-bold text-gray-800'>
              Higher Education Pathways
            </h3>
            <p className='mb-4 text-lg font-semibold'>
              Explore University, TAFE, and Apprenticeships.
            </p>
            <p className='leading-relaxed text-gray-600'>
              Get firsthand insights into different education pathways,
              including TAFE, University, and Apprenticeships. Learn how each
              path supports diverse careers and what to expect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abcdschool;
