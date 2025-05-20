import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  logan_dongray,
  naomi_crosby,
  tammy_lee,
} from '../../assets/mentor_images';
import schoolAdminImg1 from '../../assets/schoolPageIllustrations/schoolTestimonial/image1.jpg';
import schoolAdminImg2 from '../../assets/schoolPageIllustrations/schoolTestimonial/image2.jpg';
import schoolAdminImg3 from '../../assets/schoolPageIllustrations/schoolTestimonial/image3.jpg';
import { SectionHeader } from '../section-header/SectionHeader';

interface Testimonial {
  name: string;
  role: string;
  organization: string; // company for mentors, school for schools
  testimonial: string;
  image: string; // Placeholder image URL
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150; // Character limit before truncation
  const isLongTestimonial = testimonial.testimonial.length > maxLength;

  const truncatedTestimonial = isLongTestimonial
    ? `${testimonial.testimonial.slice(0, maxLength)}...`
    : testimonial.testimonial;

  return (
    <motion.div
      className='relative flex flex-col justify-between overflow-hidden rounded-[30px] bg-white shadow-md'
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.3 }}
      role='article'
      aria-labelledby={`testimonial-${testimonial.name.replace(/\s+/g, '-')}`}
    >
      <div className='flex flex-col p-6'>
        <div className='flex items-start space-x-3'>
          <img
            src={testimonial.image}
            alt={`${testimonial.name} profile`}
            className='aspect-square h-[74px] w-[74px] rounded-full object-cover md:h-[94px] md:w-[94px]'
            aria-hidden='true'
          />
          <div className='flex flex-1 flex-col gap-2'>
            <div>
              <h3
                id={`testimonial-${testimonial.name.replace(/\s+/g, '-')}`}
                className='font-avenir text-2xl md:text-[28px] font-semibold text-black'
              >
                {testimonial.name}
              </h3>
              <p className='font-avenir text-lg md:text-[22px] text-gray-600'>
                {testimonial.role}
              </p>
            </div>
            <p className='text-lg mt-3 font-avenir font-light leading-relaxed text-gray-600 md:text-lg'>
              <AnimatePresence mode='wait'>
                {isExpanded ? (
                  <motion.span
                    key='full'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.testimonial}
                  </motion.span>
                ) : (
                  <motion.span
                    key='truncated'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {truncatedTestimonial}
                  </motion.span>
                )}
              </AnimatePresence>
              {isLongTestimonial && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className='mt-2 font-avenir text-sm font-medium text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500'
                  aria-expanded={isExpanded}
                  aria-controls={`testimonial-content-${testimonial.name.replace(/\s+/g, '-')}`}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className='rounded-b-[30px] bg-[#272727] p-[38px] text-white'>
        <p className='text-xl font-semibold'>{testimonial.organization}</p>
      </div>
    </motion.div>
  );
};

interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  title,
  subtitle,
  testimonials,
}) => {
  return (
    <section className='my-20 mb-40 bg-gray-100 px-4 py-12'>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        align='center'
        className='mb-8'
        subTitleClassName='text-gray-600'
      />
      <div className='mx-auto grid h-full max-w-[90%] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
};

interface TestimonialsPageProps {
  type: 'mentor' | 'school';
}

const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ type }) => {
  const mentorTestimonials: Testimonial[] = [
    {
      name: 'Tammy Lee',
      role: 'Embryologist',
      organization: 'Fertility North',
      testimonial:
        'I joined CareerView as a mentor because I know how overwhelming choosing a career path can be, especially in science. Most students don’t even know what an embryologist is — I didn’t until I was halfway through uni! CareerView gives me a chance to change that and help young people explore unique, rewarding careers in healthcare.',
      image: tammy_lee,
    },
    {
      name: 'Logan Dongray',
      role: 'Architect',
      organization: 'GIORGI',
      testimonial:
        'I chose to be a mentor on CareerView because I wanted to give back. When I was a student, architecture felt like a mysterious world — now I get to demystify it. Through CareerView, I can connect with students early, answer their real questions, and show them what the industry is really like.',
      image: logan_dongray,
    },
    {
      name: 'Naomi Crosby',
      role: 'Dietician',
      organization: 'Self Employed',
      testimonial:
        'I became a mentor with CareerView to help students see what a career in health and nutrition can look like outside of the hospital setting. Being self-employed, I’ve taken a slightly different path, and CareerView is the perfect space to show students all the options available to them — not just the textbook routes.',
      image: naomi_crosby,
    },
  ];

  const schoolTestimonials: Testimonial[] = [
    {
      name: 'Sarah Fogarty',
      role: 'Head of Pathways',
      organization: 'St John Bosco College WA',
      testimonial:
        'Career View has been a fantastic addition to our career education program. We began with lunchtime sessions for Years 9–12, but it’s clear the platform offers value right across Years 7–12. Nirajit was fantastic to work with—supportive, flexible and responsive to our scheduling and student needs. The real strength of Career View is in connecting students with real industry professionals—many from fields students don’t usually have access to. Whether actively asking questions or quietly observing, students gained authentic insights that sparked meaningful follow-up conversations. We’re now embedding Career View into our Year 10 careers classes as part of a more in-depth project. It supports key communication and networking skills, aligns with the Australian Blueprint for Career Development and—most importantly—lets students hear directly from people in the roles they’re curious about. It’s a powerful, relevant tool we’ll continue to use.',
      image: schoolAdminImg3,
    },
    {
      name: 'Dr. Michael Openshaw',
      role: 'VET, Careers Coordinator',
      organization: 'Ursula Frayne Catholic College',
      testimonial:
        'One of the biggest challenges in career education is bridging the gap between classroom learning and the real world. CareerView has become valuable in this space—not just by bringing industry into the classroom, but by making those encounters meaningful and accessible to all students, regardless of background or confidence level. What stood out most was how quickly students connected with the stories and experiences shared by mentors. For many, it was the first time they’d heard a career journey that felt relatable. It shifted their thinking—from "What job should I do?" to "What kind of life do I want to create?" That’s a powerful mindset change.',
      image: schoolAdminImg1,
    },
    {
      name: 'Kelly Dwyer',
      role: 'Head of Teaching and Learning',
      organization: 'St Andrews Grammar',
      testimonial:
        'When young people start thinking about what career path they want to follow, the stock standard careers tend to pop up as examples. In today’s changing landscape, there are so many different careers to choose from that would never have been considered. Added to that, career fairs usually have older people who are settled in their career path. We chose CareerView to give our students a glimpse of what is possible, from people closer to their age. CareerView has been great to work with. They were adaptable to what our student needed and provided as much information to ensure that the young professionals would meet the needs of our students and the delivery method that would work best in our context. The on-the-day support was superb, and I was very impressed with the responsiveness. I would recommend CareerView as part of any career program, whether it be specific to career classes or a whole school initiative.',
      image: schoolAdminImg2,
    },
  ];

  const testimonials =
    type === 'mentor' ? mentorTestimonials : schoolTestimonials;
  const title =
    type === 'mentor' ? 'Mentor Testimonials' : 'Teacher Testimonials';
  const subtitle =
    type === 'mentor'
      ? 'Hear from professionals inspiring the next generation'
      : 'Discover how schools are transforming career education';

  return (
    <div className='bg-white'>
      <TestimonialSection
        title={title}
        subtitle={subtitle}
        testimonials={testimonials}
      />
    </div>
  );
};

export default TestimonialsPage;
