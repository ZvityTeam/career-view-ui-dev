import { SectionHeader } from '../sectionheader/SectionHeader.tsx';
import { Section } from '../container/Section.tsx';
import { FaqItem } from './faqitems/FaqItem.tsx';

const FAQ_DATA = [
  {
    question: 'Get a look at our mentors. What makes us different?',
    answer:
      'Our platform connects students with highly experienced mentors who provide personalized guidance.',
  },
  {
    question: 'How do I become a mentor?',
    answer:
      'You can become a mentor by signing up on our platform and completing the mentor registration process.',
  },
  {
    question: 'What is the benefit of this platform?',
    answer:
      'Students gain valuable insights and guidance, while mentors can share their expertise and make an impact.',
  },
];

export const FaqSection = () => {
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
