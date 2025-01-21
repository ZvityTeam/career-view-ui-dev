import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { QuestionCard, QuestionCardProps } from './QuestionCard.tsx';
import { QuestionCategory } from './QuestionCategory.tsx';
import { useState } from 'react';
import Masonry from 'react-responsive-masonry';

const QUESTIONS_WE_GET: {
  category: string;
  items: Array<QuestionCardProps>;
}[] = [
  {
    category: '#Psychology',
    items: [
      {
        imgSrc: 'https://placehold.co/100x100',
        name: 'Alice Johnson',
        grade: 'Grade 10',
        question: 'What is the role of the brain in emotions?',
        answer:
          'The brain plays a crucial role in regulating emotions, primarily through the amygdala and prefrontal cortex.',
        helpfulCount: 150,
      },
      {
        imgSrc: 'https://placehold.co/100x100',
        name: 'John Doe',
        grade: 'Grade 11',
        question: 'How does stress affect mental health?',
        answer:
          'Stress can lead to anxiety, depression, and various physical health issues over time.',
        helpfulCount: 120,
      },
    ],
  },
  {
    category: '#Engineering',
    items: [
      {
        imgSrc: 'https://placehold.co/100x100',
        name: 'Bob Smith',
        grade: 'Grade 12',
        question: 'What is the purpose of a cantilever in construction?',
        answer:
          'A cantilever is a beam anchored at only one end, used in bridges and bridges and bridges and bridges and bridges and bridges and bridges and bridges and bridges and bridges and bridges and buildings for extended support.',
        helpfulCount: 95,
      },
      {
        imgSrc: 'https://placehold.co/100x100',
        name: 'Sophia Green',
        grade: 'Grade 10',
        question: 'How do turbines generate electricity?',
        answer:
          'Turbines convert kinetic energy from wind or water into mechanical energy, which is then converted to electricity.',
        helpfulCount: 180,
      },
    ],
  },
  {
    category: '#General',
    items: [
      {
        imgSrc: 'https://placehold.co/100x100',
        name: 'Clara Lee',
        grade: 'Grade 9',
        question: 'What are the basic principles of science?',
        answer:
          'Science is based on observation, experimentation, and analysis to understand natural phenomena.',
        helpfulCount: 200,
      },
    ],
  },
  {
    category: '#Doctor',
    items: [
      {
        imgSrc: 'https://placehold.co/100x100',
        name: 'David Green',
        grade: 'Grade 12',
        question: 'What is the role of a cardiologist?',
        answer:
          'A cardiologist specializes in diagnosing and treating heart-related conditions.',
        helpfulCount: 220,
      },
    ],
  },
  {
    category: '#Actor',
    items: [
      {
        imgSrc: 'https://placehold.co/100x100',
        name: 'Emily Brown',
        grade: 'Grade 10',
        question: 'What techniques do actors use to memorize scripts?',
        answer:
          'Actors use repetition, associations, and visualization techniques to memorize scripts effectively.',
        helpfulCount: 143,
      },
    ],
  },
];

// Add #All programmatically
const ALL_CATEGORIES = [
  { category: '#All', items: QUESTIONS_WE_GET.flatMap((value) => value.items) },
  ...QUESTIONS_WE_GET,
];

export const QuestionsWeGet = () => {
  const [currentCategory, setCurrentCategory] = useState('#All'); // Default to #All

  return (
    <Section className={'flex flex-col gap-8'}>
      <SectionHeader
        title='Questions we get from our Students'
        subtitle='Here are the examples of what students ask...'
      />
      {/* Categories */}
      <div className={'flex max-w-7xl flex-wrap gap-4'}>
        {ALL_CATEGORIES.map((value, index) => (
          <QuestionCategory
            key={index}
            category={value.category}
            onClick={setCurrentCategory}
            isSelected={currentCategory === value.category} // Highlight selected category
          />
        ))}
      </div>
      <Masonry gutter={'20px'}>
        {currentCategory &&
          ALL_CATEGORIES.find(
            (cat) => cat.category === currentCategory
          )?.items.map((value, index) => (
            <QuestionCard
              key={index}
              {...value}
            />
          ))}
      </Masonry>
    </Section>
  );
};
