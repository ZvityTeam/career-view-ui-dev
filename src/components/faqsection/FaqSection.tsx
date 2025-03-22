import { memo } from 'react';
import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { FaqItem } from './faqitems/FaqItem.tsx';

const FAQ_DATA = [
  {
    question: 'Who are the mentors on CareerView?',
    answer:
      'Our mentors are young professionals from diverse industries who provide firsthand knowledge and guidance about their careers. They share real experiences, industry insights, and practical advice to help students make informed career decisions.',
  },
  {
    question: 'How do I become a browse-mentors?',
    answer:
      'You can become a browse-mentors by signing up on our platform and completing the browse-mentors registration process.',
  },
  {
    question: 'What is the benefit of this platform?',
    answer:
      'Students gain valuable insights and guidance, while mentors can share their expertise and make an impact.',
  },
];

const FaqSectionComponent = () => {
  // return null;
  return (
    <Section className={'flex flex-col gap-6'}>
      <SectionHeader title={'Frequently Asked Questions'} />
      <div className='w-[80%]'>
        {FAQ_DATA.map((value, index) => (
          <FaqItem
            {...value}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};

export const FaqSection = memo(FaqSectionComponent);
