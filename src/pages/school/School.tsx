import timeline_img2 from '../../assets/mentors_page/timeline_img1.png';
import timeline_img1 from '../../assets/schoolPageIllustrations/timeline_img1.png';
import { CareerTalksLivestream } from '../../components/CareerTalksLivestream/CareerTalksLivestream.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { SchoolHero } from '../../components/school-hero';
import SearchFieldComponent from '../../components/student-mentor-connect/randomlyplacedcomponents/search-field.tsx';
import { SupportedSchools } from '../../components/SupportedSchools.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
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
  const stepsData: TimelineItem[] = [
    {
      id: 1,
      title: 'Step 1:  Choose a Date',
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

  return (
    <AnimatedPageWrapper>
      <main>
        <SchoolHero />
        {/* <WhatToExpect /> */}
        <CareerTalksLivestream />
        <SchoolConnectCTA />
        <VerticalTimelineComponent
          items={stepsData}
          title='3 step guide'
          subtitle='simple 3 step guide to have a live stream event'
        />
        <SupportedSchools />
        <Testimonials />
      </main>
    </AnimatedPageWrapper>
  );
};
