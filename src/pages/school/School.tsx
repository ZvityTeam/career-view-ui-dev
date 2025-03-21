import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { SchoolHero } from '../../components/school-hero';
import SearchFieldComponent from '../../components/student-mentor-connect/randomlyplacedcomponents/search-field.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { VerticalTimelineComponent } from '../../components/vertical-timeline.tsx';
import { WhatToExpect } from '../../components/what-to-expect';

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

export const School = () => {
  const stepsData: TimelineItem[] = [
    {
      id: 1,
      title: 'Step 1: Request a live stream event',
      subtitle: 'Reason 1',
      description:
        'Send in a request to have a live stream event with us. We will get back to you with a confirmation and a date for the event.',
      date: 'Step 1',
      type: 'work',
    },
    {
      id: 2,
      title: 'Step 2: Select a career field',
      subtitle: '',
      description:
        'Select the career field you are interested in and we will match you with a professional in that field.',
      date: 'Step 2',
      type: 'work',
      component: (
        <div className='mx-10 h-60'>
          <SearchFieldComponent />
        </div>
      ),
    },
    {
      id: 3,
      title: 'Step 3: Schedule a live stream event',
      subtitle: '',
      description:
        'Once you have been matched with a professional, we can schedule a live stream event with them.',
      date: 'Step 3',
      type: 'work',
    },
  ];
  return (
    <AnimatedPageWrapper>
      <main>
        <SchoolHero />
        <WhatToExpect />
        <SchoolConnectCTA />
        <VerticalTimelineComponent
          items={stepsData}
          title='3 step guide'
          subtitle='simple 3 step guide to have a live stream event'
        />

        <Testimonials />
        <FaqSection />
      </main>
    </AnimatedPageWrapper>
  );
};
