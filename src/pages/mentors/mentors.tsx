import { WhatToExpect } from '../../components/what-to-expect';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { MentorHero } from '../../components/mentor-hero.tsx';
import { VerticalTimelineComponent } from '../../components/vertical-timeline.tsx';
import LogoScroll from '../../components/logo-scroll.tsx';

export const Mentors = () => {
  return (
    <main>
      <MentorHero />
      <WhatToExpect />
      <LogoScroll />
      <VerticalTimelineComponent />
      <SchoolConnectCTA />
      <Testimonials />
      <FaqSection />
    </main>
  );
};
