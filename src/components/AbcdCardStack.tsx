import { Check } from 'lucide-react';
import React from 'react';
import comp10 from '../assets/abcd/comp10.webp';
import comp11 from '../assets/abcd/comp11.webp';
import comp3 from '../assets/abcd/comp3.webp';
import comp5 from '../assets/abcd/comp5.webp';
import comp6 from '../assets/abcd/comp6.webp';
import useResponsiveLayout from '../hooks/useResponsiveLayout';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import { SectionHeader } from './section-header/SectionHeader';

const AbcdCardStack: React.FC = () => {
  const { isMobile } = useResponsiveLayout();
  return (
    <div className='min-h-screen overflow-hidden bg-black text-white'>
      {/* Header Section */}
      <div className='px-0 py-20 md:px-8'>
        <SectionHeader
          title='Built on the ABCD Blueprint'
          subtitle={
            "We provide practical, professional insights to help you effectively implement the Blueprint's core competencies."
          }
          className='text-5xl text-white md:text-8xl'
          subTitleClassName='mx-auto max-w-3xl sm:text-xl md:text-2xl leading-relaxed text-gray-400'
          align='center'
        />
      </div>

      {/* ScrollStack Section */}
      <ScrollStack
        className='-mt-56 mb-[25rem] overflow-hidden px-4 md:-my-52 md:-mb-96'
        itemDistance={isMobile ? 480 : 300}
        itemScale={0.08}
        itemStackDistance={50}
        stackPosition='30%'
        scaleEndPosition='20%'
        baseScale={0.85}
        useWindowScroll={true}
      >
        {/* Competency 3 - Identity & Career Fit */}
        <ScrollStackItem
          itemClassName='h-auto min-h-[500px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]'
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '24px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Image with Gradient Overlay */}
          <div
            className='absolute right-0 top-0 hidden h-full w-[30%] md:block'
            style={{
              backgroundImage: `url(${comp3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Gradient overlay for fade effect */}
            <div
              className='absolute h-full w-full'
              style={{
                left: '-15px',
                bottom: '-15px',
                top: '0',
                right: '0',
                width: 'calc(100% + 15px)',
                height: 'calc(100% + 15px)',
                background:
                  'radial-gradient(ellipse 120% 170% at top right, transparent 0%, rgba(26, 26, 26, 0.2) 20%, rgba(26, 26, 26, 0.6) 40%, rgba(26, 26, 26, 0.9) 60%, #1a1a1a 80%)',
              }}
            />
          </div>

          <div className='relative z-10 flex h-full w-full flex-col md:w-[70%]'>
            <div className='mb-8 flex items-center justify-between'>
              <div className='flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:gap-4'>
                <span
                  className='rounded-full px-5 py-3 text-sm font-medium tracking-wide text-white shadow-[0_0_10px_0_#F1CE7E] sm:text-base md:text-lg'
                  style={{
                    background:
                      'linear-gradient(256deg, #272727 0%, #000000 100%) 0% 0% no-repeat padding-box',
                  }}
                >
                  Competency 3
                </span>
                <h2 className='text-xl font-semibold text-white sm:text-2xl md:text-3xl'>
                  Identity & Career Fit
                </h2>
              </div>
            </div>

            <div className='space-y-6 border-l-2 border-[#3B3B3B] pl-6'>
              <div className='space-y-4'>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Promoting Self-Reflection:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Sessions feature diverse personal stories to encourage
                        inward self-assessment.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        This helps students recognize their unique values and
                        strengths.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Linking Personality to Work:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Students see how personal traits and interests impact
                        job satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        They understand that career direction is driven by who
                        they are.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Building Confidence:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Mentors share experiences that normalise career
                        uncertainty and pivots.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        This builds the self-assurance needed to pursue
                        challenging goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
        {/* Competency 5 - The Future of Work */}
        <ScrollStackItem
          itemClassName='h-auto min-h-[500px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]'
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '24px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Image with Gradient Overlay */}
          <div
            className='absolute right-0 top-0 hidden h-full w-[30%] md:block'
            style={{
              backgroundImage: `url(${comp5})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Gradient overlay for fade effect */}
            <div
              className='absolute h-full w-full'
              style={{
                left: '-15px',
                bottom: '-15px',
                top: '0',
                right: '0',
                width: 'calc(100% + 15px)',
                height: 'calc(100% + 15px)',
                background:
                  'radial-gradient(ellipse 120% 170% at top right, transparent 0%, rgba(26, 26, 26, 0.2) 20%, rgba(26, 26, 26, 0.6) 40%, rgba(26, 26, 26, 0.9) 60%, #1a1a1a 80%)',
              }}
            />
          </div>

          <div className='relative z-10 flex h-full w-full flex-col md:w-[70%]'>
            <div className='mb-8 flex items-center justify-between'>
              <div className='flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:gap-4'>
                <span
                  className='rounded-full px-5 py-3 text-sm font-medium tracking-wide text-white shadow-[0_0_10px_0_#F1CE7E] sm:text-base md:text-lg'
                  style={{
                    background:
                      'linear-gradient(256deg, #272727 0%, #000000 100%) 0% 0% no-repeat padding-box',
                  }}
                >
                  Competency 5
                </span>
                <h2 className='text-xl font-semibold text-white sm:text-2xl md:text-3xl'>
                  The Future of Work
                </h2>
              </div>
            </div>

            <div className='space-y-6 border-l-2 border-[#3B3B3B] pl-6'>
              <div className='space-y-4'>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Adapting to Industry Shifts:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Professionals highlight emerging industry trends and
                        disruptive technologies.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        We showcase growing sectors and jobs for tomorrow's
                        workforce.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Fostering a Growth Mindset:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Students learn the skills and mindsets required for
                        continuous upskilling.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        We emphasize the need to embrace change throughout a
                        career life cycle.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Connecting Learning to Work:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Sessions illustrate how lifelong learning is essential
                        for career longevity.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        We link education pathways to evolving job requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Competency 6 - Smart Career Research */}
        <ScrollStackItem
          itemClassName='h-auto min-h-[500px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]'
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '24px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Image with Gradient Overlay */}
          <div
            className='absolute right-0 top-0 hidden h-full w-[30%] md:block'
            style={{
              backgroundImage: `url(${comp6})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Gradient overlay for fade effect */}
            <div
              className='absolute h-full w-full'
              style={{
                left: '-15px',
                bottom: '-15px',
                top: '0',
                right: '0',
                width: 'calc(100% + 15px)',
                height: 'calc(100% + 15px)',
                background:
                  'radial-gradient(ellipse 120% 170% at top right, transparent 0%, rgba(26, 26, 26, 0.2) 20%, rgba(26, 26, 26, 0.6) 40%, rgba(26, 26, 26, 0.9) 60%, #1a1a1a 80%)',
              }}
            />
          </div>

          <div className='relative z-10 flex h-full w-full flex-col md:w-[70%]'>
            <div className='mb-8 flex items-center justify-between'>
              <div className='flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:gap-4'>
                <span
                  className='rounded-full px-5 py-3 text-sm font-medium tracking-wide text-white shadow-[0_0_10px_0_#F1CE7E] sm:text-base md:text-lg'
                  style={{
                    background:
                      'linear-gradient(256deg, #272727 0%, #000000 100%) 0% 0% no-repeat padding-box',
                  }}
                >
                  Competency 6
                </span>
                <h2 className='text-xl font-semibold text-white sm:text-2xl md:text-3xl'>
                  Smart Career Research
                </h2>
              </div>
            </div>

            <div className='space-y-6 border-l-2 border-[#3B3B3B] pl-6'>
              <div className='space-y-4'>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Providing Authentic Data:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Mentors provide real-world insights and practical
                        details beyond job titles.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        This covers the true daily responsibilities and required
                        commitment.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Developing Critical Evaluation:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Students learn to critically vet information from
                        various sources.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        The focus is on applying data for informed exploration
                        and planning.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Utilizing Diverse Sources:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        We encourage finding information from industry experts
                        (the mentors themselves).
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Students are taught to assess the reliability and
                        relevance of career paths.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Competency 10 - Informed Decisions */}
        <ScrollStackItem
          itemClassName='h-auto min-h-[500px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]'
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '24px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Image with Gradient Overlay */}
          <div
            className='absolute right-0 top-0 hidden h-full w-[30%] md:block'
            style={{
              backgroundImage: `url(${comp10})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Gradient overlay for fade effect */}
            <div
              className='absolute h-full w-full'
              style={{
                left: '-15px',
                bottom: '-15px',
                top: '0',
                right: '0',
                width: 'calc(100% + 15px)',
                height: 'calc(100% + 15px)',
                background:
                  'radial-gradient(ellipse 120% 170% at top right, transparent 0%, rgba(26, 26, 26, 0.2) 20%, rgba(26, 26, 26, 0.6) 40%, rgba(26, 26, 26, 0.9) 60%, #1a1a1a 80%)',
              }}
            />
          </div>

          <div className='relative z-10 flex h-full w-full flex-col md:w-[70%]'>
            <div className='mb-8 flex items-center justify-between'>
              <div className='flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:gap-4'>
                <span
                  className='rounded-full px-5 py-3 text-sm font-medium tracking-wide text-white shadow-[0_0_10px_0_#F1CE7E] sm:text-base md:text-lg'
                  style={{
                    background:
                      'linear-gradient(256deg, #272727 0%, #000000 100%) 0% 0% no-repeat padding-box',
                  }}
                >
                  Competency 10
                </span>
                <h2 className='text-xl font-semibold text-white sm:text-2xl md:text-3xl'>
                  Informed Decisions
                </h2>
              </div>
            </div>

            <div className='space-y-6 border-l-2 border-[#3B3B3B] pl-6'>
              <div className='space-y-4'>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Creating a Decision Framework:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        We provide a model for evaluating complex options
                        (subjects, study paths).
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        This helps students assess pros, cons, and long-term
                        potential.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Empowering Strategic Choices:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Students gain the confidence to make strategic next
                        steps.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Focus is on choices that enhance and sustain their
                        long-term path.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Planning for the Future:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Sessions encourage setting short-term and long-term
                        career goals.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Students learn to connect their current actions to their
                        future success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>

        {/* Competency 11 - Life & Work Harmony */}
        <ScrollStackItem
          itemClassName='h-auto min-h-[500px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)]'
          style={{
            background: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '24px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background Image with Gradient Overlay */}
          <div
            className='absolute right-0 top-0 hidden h-full w-[30%] md:block'
            style={{
              backgroundImage: `url(${comp11})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Gradient overlay for fade effect */}
            <div
              className='absolute h-full w-full'
              style={{
                left: '-15px',
                bottom: '-15px',
                top: '0',
                right: '0',
                width: 'calc(100% + 15px)',
                height: 'calc(100% + 15px)',
                background:
                  'radial-gradient(ellipse 120% 170% at top right, transparent 0%, rgba(26, 26, 26, 0.2) 20%, rgba(26, 26, 26, 0.6) 40%, rgba(26, 26, 26, 0.9) 60%, #1a1a1a 80%)',
              }}
            />
          </div>

          <div className='relative z-10 flex h-full w-full flex-col md:w-[70%]'>
            <div className='mb-8 flex items-center justify-between'>
              <div className='flex flex-col-reverse items-start gap-3 md:flex-row md:items-center md:gap-4'>
                <span
                  className='rounded-full px-5 py-3 text-sm font-medium tracking-wide text-white shadow-[0_0_10px_0_#F1CE7E] sm:text-base md:text-lg'
                  style={{
                    background:
                      'linear-gradient(256deg, #272727 0%, #000000 100%) 0% 0% no-repeat padding-box',
                  }}
                >
                  Competency 11
                </span>
                <h2 className='text-xl font-semibold text-white sm:text-2xl md:text-3xl'>
                  Life & Work Harmony
                </h2>
              </div>
            </div>

            <div className='space-y-6 border-l-2 border-[#3B3B3B] pl-6'>
              <div className='space-y-4'>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Addressing Wellbeing First:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Mentors openly discuss work-life balance strategies and
                        stress management.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-lg leading-relaxed text-gray-300'>
                        This promotes prioritizing physical and mental health
                        throughout a career.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Setting Clear Boundaries:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        We highlight the importance of setting clear
                        professional and personal boundaries.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Students learn strategies for sustainable professional
                        success.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className='mb-2 text-lg font-semibold text-[#F1CE7E] sm:text-xl'>
                    Ensuring Sustainable Success:
                  </h4>
                  <div className='mb-2 flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        The focus is on strategies for preventing burnout in
                        demanding roles.
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Check className='mt-2 h-6 w-6 text-[#F1CE7E]' />
                    <div className='flex-1'>
                      <p className='text-base leading-relaxed text-gray-300 sm:text-lg'>
                        Students learn how to integrate career with a fulfilling
                        personal life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollStackItem>
      </ScrollStack>

      {/* Footer Section */}
      <div className='-mt-[28rem] px-8 py-4 text-center'>
        <p className='mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl'>
          Align your career curriculum directly with the national ABCD Blueprint
          and deliver measurable, real-world student success.
        </p>
      </div>
    </div>
  );
};

export default AbcdCardStack;
