import { WhatToExpect } from '../../components/what-to-expect';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { MentorHero } from '../../components/mentor-hero.tsx';
import { VerticalTimelineComponent } from '../../components/vertical-timeline.tsx';
import LogoScroll from '../../components/logo-scroll.tsx';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';
import { useEffect } from 'react';

export const Mentors = () => {
  const { setBgBlur } = useNavbarContext();
  useEffect(() => {
    setBgBlur(true);

    return () => setBgBlur(false);
  }, [setBgBlur]);
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
