import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import timeline_img2 from '../../assets/mentors_page/timeline_img1.png';
import timeline_img1 from '../../assets/schoolPageIllustrations/timeline_img1.png';
import { CareerTalksLivestream } from '../../components/CareerTalksLivestream/CareerTalksLivestream.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { SchoolHero } from '../../components/school-hero';
import SchoolScheduleCallForm from '../../components/SchoolScheduleCallForm.tsx';
import SearchFieldComponent from '../../components/student-mentor-connect/randomlyplacedcomponents/search-field.tsx';
import { VerticalTimelineComponent } from '../../components/vertical-timeline.tsx';

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
  const location = useLocation();
  const scheduleCallRef = useRef<HTMLDivElement>(null);

  const stepsData: TimelineItem[] = [
    {
      id: 1,
      title: 'Step 1: Choose a Date',
      subtitle: '',
      description:
        'Select a date for the livestream that works best for your students. Consider their schedule and availability to ensure maximum participation.',
      date: 'Step 1',
      type: 'work',
      imageUrl: timeline_img1,
    },
    {
      id: 2,
      title: 'Step 2: Select an Industry & Speaker Count',
      subtitle: '',
      description:
        'Choose the industry or career field you want students to learn about. Then, specify how many speakers you’d like—whether a single expert for deep insights or multiple professionals for diverse perspectives.',
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
      title: 'Step 3: Get Matched & Confirm the Session',
      subtitle: '',
      description:
        'We will match you with industry professionals based on your selections. Once confirmed, you’ll receive the session details, and we’ll coordinate the livestream for an engaging discussion with your students.',
      date: 'Step 3',
      type: 'work',
      imageUrl: timeline_img2,
    },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scrollTo') === 'schedule-call' && scheduleCallRef.current) {
      const scrollToForm = () => {
        scheduleCallRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      // Initial scroll attempt
      scrollToForm();

      // Set up observer to handle dynamic height changes
      const observer = new ResizeObserver(() => {
        scrollToForm();
      });

      // Observe the document body for height changes
      observer.observe(document.body);

      // Retry scroll after a short delay to account for loading
      const timeout = setTimeout(scrollToForm, 1000);

      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }
  }, [location.search]);

  return (
    <AnimatedPageWrapper>
      <main>
        <SchoolHero />
        <CareerTalksLivestream />
        <VerticalTimelineComponent
          items={stepsData}
          title='How to get started'
          subtitle='simple 3 step guide to have a live stream event'
        />
        <div ref={scheduleCallRef}>
          <SchoolScheduleCallForm />
        </div>
      </main>
    </AnimatedPageWrapper>
  );
};
