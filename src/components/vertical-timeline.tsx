import { motion, useAnimation } from 'framer-motion';
import type React from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import placeholderImg from '../assets/event2.jpg';
import timeline_img1 from '../assets/mentors_page/timeline_img1.png';
import timeline_img2 from '../assets/mentors_page/timeline_img2.png';
import timeline_img3 from '../assets/mentors_page/timeline_img3.png';
import { SectionHeader } from './section-header/SectionHeader';

interface TimelineItem {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  date: string;
  type: 'work' | 'education';
  imageUrl?: string;
  component?: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Be the Mentor You Needed',
    subtitle: 'Reason 1',
    description:
      'Give students honest advice based on your experience—no fluff, just the truth! Share what you wish you had known back then and pay it forward.',
    date: 'Step 1',
    type: 'work',
    imageUrl: timeline_img1,
  },
  {
    id: 2,
    title: 'Build New Connections',
    subtitle: '',
    description:
      'Get exclusive access to a large community of professionals for your networking and get invited to exclusive events for schools!',
    date: 'Step 2',
    type: 'work',
    imageUrl: timeline_img2,
  },
  {
    id: 3,
    title: 'Promote your brand',
    subtitle: '',
    description:
      'Promote your company, business, or personal brand to showcase what you do across our extensive network of schools nationwide.',
    date: 'Step 3',
    type: 'work',
    imageUrl: timeline_img3,
  },
];

interface AlternatingTimelineProps {
  items?: TimelineItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

// Animation variants
const leftItemVariants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const rightItemVariants = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const circleVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
      ease: 'easeOut',
    },
  },
};

const TimelineItem: React.FC<{
  item: TimelineItem;
  isEven: boolean;
}> = ({ item, isEven }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Format description by splitting on pipe characters
  const descriptionParts = item.description
    .split('|')
    .map((part) => part.trim());

  return (
    <div
      ref={ref}
      className='relative mb-20 flex items-center'
    >
      {/* Timeline marker */}
      <motion.div
        className='absolute left-[31.55rem] z-10 -translate-x-1/2'
        initial='hidden'
        animate={controls}
        variants={circleVariants}
      >
        <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 font-semibold text-white'>
          {item.id}
        </div>
      </motion.div>

      {/* Content - alternating left and right */}
      <div
        className={`flex w-full gap-28 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
      >
        {/* Left/right empty space (45%) */}
        {/* <div className='w-[%]' /> */}

        {/* Content area (55%) */}
        <motion.div
          className='w-[65%]'
          initial='hidden'
          animate={controls}
          variants={!isEven ? leftItemVariants : rightItemVariants}
        >
          <div
            className={`flex flex-col ${!isEven ? 'items-start pl-10' : 'items-end'}`}
          >
            {!item.component ? (
              <div className='mb-4 w-full max-w-md rotate-3 transform overflow-hidden rounded-xl shadow-lg'>
                <img
                  src={item.imageUrl || placeholderImg}
                  alt={item.title}
                  className='h-auto w-full object-cover'
                />
              </div>
            ) : (
              item.component
            )}
            {/* Image */}
          </div>
        </motion.div>
        <motion.div
          className='my-auto w-[55%] px-8'
          initial='hidden'
          animate={controls}
          variants={isEven ? leftItemVariants : rightItemVariants}
        >
          <div
            className={`flex flex-col items-center justify-center ${!isEven ? 'pr-16' : 'pl-16'}`}
          >
            {/* Text content */}
            <div
              className={`w-full max-w-md ${isEven ? 'text-left' : 'text-right'} `}
            >
              <h3 className='mb-2 text-lg font-bold'>{item.title}</h3>
              <div className='space-y-1 text-sm text-gray-600'>
                {descriptionParts.map((part, i) => (
                  <p key={i}>{part}</p>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const VerticalTimelineComponent: React.FC<AlternatingTimelineProps> = ({
  items = timelineData,
  title = 'Why Join as a Mentor?',
  subtitle = 'Shape future journeys with real-world insights. Give students the career advice you wish you had growing up, empower their paths.',
  className,
}) => {
  return (
    <>
      {' '}
      <div className='my-20 text-center'>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          className='gap-4'
        />
      </div>
      <div className={'relative mx-auto w-full max-w-5xl py-12' + className}>
        {/* Center line */}
        <div className='absolute bottom-0 left-[33.3rem] top-0 z-0 w-px -translate-x-1/2 border-l-2 border-dashed border-gray-300' />

        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </>
  );
};
