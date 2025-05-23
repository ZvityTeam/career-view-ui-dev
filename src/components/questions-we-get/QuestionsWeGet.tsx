import { ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../container/Section.tsx';
import ListWrapper from '../list-wrapper.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Button } from '../ui/Button.tsx';
import { QuestionCard, QuestionCardProps } from './QuestionCard.tsx';
import { QuestionCategory } from './QuestionCategory.tsx';

const QUESTIONS_WE_GET: {
  category: string;
  items: Array<QuestionCardProps>;
}[] = [
  {
    category: '#Engineering',
    items: [
      {
        question: 'Did you always want to become an engineer?',
        answer:
          'Many engineers develop an interest in the field from a young age, often influenced by problem-solving and curiosity about how things work.',
      },
      {
        question:
          'What was the decision-making process in selecting an engineering specialization?',
        answer:
          'It involves understanding personal interests, career opportunities, and industry demands before choosing a specific branch.',
      },
      {
        question: 'How did you know engineering was right for you?',
        answer:
          'Through exposure to subjects like mathematics and physics, as well as hands-on projects that sparked enthusiasm.',
      },
      {
        question: 'Did you have a back-up plan?',
        answer:
          'Some engineers consider alternative career paths or additional certifications as a safety net.',
      },
      {
        question:
          'What was the most challenging aspect of moving abroad as an international student?',
        answer:
          'Adapting to a new culture, managing finances, and balancing studies with a different lifestyle can be challenging.',
      },
      {
        question: 'Is studying engineering in university hard?',
        answer:
          'It requires strong analytical skills and perseverance, but with dedication and time management, it is manageable.',
      },
      {
        question: 'How did you find a job once you graduated?',
        answer:
          'Networking, internships, and a strong resume help in securing job opportunities.',
      },
      {
        question:
          'How much of what you learned in university is applied in the real world?',
        answer:
          'Fundamentals are crucial, but practical experience and continuous learning play a major role.',
      },
      {
        question: 'What is the salary range when starting out as an engineer?',
        answer:
          'Salaries vary based on the industry and location, but generally start at a competitive level.',
      },
      {
        question: 'Do you plan to be an engineer for the rest of your career?',
        answer:
          'Many engineers stay in the field, while others transition into management or entrepreneurship.',
      },
      {
        question:
          'What is your advice to any international student looking to study abroad?',
        answer:
          'Plan finances well, research universities, and embrace cultural differences for a smoother transition.',
      },
    ],
  },
  {
    category: '#Copywriting',
    items: [
      {
        question: 'How did you get where you are today with your job?',
        answer:
          'Through continuous writing, portfolio building, and leveraging networking opportunities.',
      },
      {
        question: 'What are the typical tasks you do on the job?',
        answer:
          'Writing content, researching, editing, and collaborating with marketing teams.',
      },
      {
        question: 'Do you require a university degree?',
        answer:
          'Not necessarily, but strong writing skills and experience are essential.',
      },
      {
        question: 'Was it difficult to find a job?',
        answer:
          'Freelancing and internships can help gain experience and open doors.',
      },
      {
        question: 'Did anything surprise you when you first started working?',
        answer:
          'The level of creativity and adaptability required to meet client expectations.',
      },
      {
        question:
          'At what point in your journey did you realize your job is the right fit for you?',
        answer:
          'When writing became a fulfilling creative outlet and not just a task.',
      },
      {
        question: 'Does your job/role provide good work-life balance?',
        answer:
          'Freelance roles offer flexibility, while corporate jobs may have tighter deadlines.',
      },
      {
        question: 'Is the pay rewarding?',
        answer:
          'It depends on experience and clients, but successful copywriters can earn well.',
      },
      {
        question:
          'What is your advice for students who want to pursue this career pathway?',
        answer:
          'Write daily, build a portfolio, and gain experience through internships or freelance work.',
      },
    ],
  },
  {
    category: '#Photography',
    items: [
      {
        question:
          'Did you ever imagine turning your profession into your own business?',
        answer: 'Yes, photography offers great entrepreneurial opportunities.',
      },
      {
        question: 'What led you to pursue this profession?',
        answer:
          'A passion for capturing moments and storytelling through visuals.',
      },
      {
        question: 'What are all the types of projects you can do?',
        answer:
          'Wedding, commercial, portrait, wildlife, and event photography.',
      },
      {
        question: 'What are your typical work hours?',
        answer:
          'They vary based on the type of photography, often including weekends and late nights.',
      },
      {
        question:
          'Were you concerned this pathway was more of a hobby than a career?',
        answer:
          'Initially, but demand and skill development make it a viable career.',
      },
      {
        question: 'Are qualifications needed for this career?',
        answer:
          'Not necessarily, but courses and certifications can enhance credibility.',
      },
      {
        question: 'How did you find work (or a job) when you first started?',
        answer: 'Through networking, social media, and freelancing platforms.',
      },
      {
        question:
          'What camera equipment do you need and how much does it cost?',
        answer:
          'A good camera, lenses, lighting, and editing software, which can be expensive depending on the brand.',
      },
      {
        question: 'Can you make good money in this profession?',
        answer: 'Yes, with expertise, marketing, and business acumen.',
      },
      {
        question: 'How do you differentiate from the competition?',
        answer:
          'By developing a unique style, branding, and providing excellent customer service.',
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
  const [currentCategory, setCurrentCategory] = useState('#All');

  // Filter questions based on selected category
  const filteredQuestions =
    ALL_CATEGORIES.find((cat) => cat.category === currentCategory)?.items || [];

  return (
    <Section className='mt-10 flex flex-col gap-8'>
      <SectionHeader
        title='Questions we get from our Students'
        subtitle='Here are examples of what students ask...'
      />

      {/* Category Selection */}
      <div className='flex max-w-7xl flex-wrap gap-4'>
        {ALL_CATEGORIES.map((value, index) => (
          <QuestionCategory
            key={index}
            category={value.category}
            onClick={setCurrentCategory}
            isSelected={currentCategory === value.category}
          />
        ))}
      </div>

      {/* Paginated List using ListWrapper */}
      <div className='rounded-2xl bg-white p-4'>
        <ListWrapper
          data={filteredQuestions}
          pageSize={9} // Set a reasonable page size
          next={() => {}}
          viewMoreButton={
            <div className='flex justify-center'>
              <Button
                variant='outline'
                className='mx-auto mt-6 border-black text-black hover:bg-black hover:text-white'
              >
                View More <ArrowDown />
              </Button>
            </div>
          }
        >
          {(items) => (
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
              {items.map((value, index) => {
                // On md and above (3-column layout), treat the middle column (index mod 3 === 1) with a bluish gradient.
                const isCenter = index % 3 === 1;
                const bgClass = isCenter
                  ? 'bg-gradient-to-br from-white via-white to-blue-100'
                  : 'bg-gradient-to-br from-white via-white to-yellow-100';
                return (
                  <QuestionCard
                    key={index}
                    {...value}
                    bgClass={bgClass}
                  />
                );
              })}
            </div>
          )}
        </ListWrapper>
      </div>
    </Section>
  );
};
