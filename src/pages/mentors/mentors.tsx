import { useEffect } from 'react';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import LogoScroll from '../../components/logo-scroll.tsx';
import { MentorHero } from '../../components/mentor-hero.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { VerticalTimelineComponent } from '../../components/vertical-timeline.tsx';
import { WhatToExpect } from '../../components/what-to-expect';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';

export const Mentors = () => {
  const { setBgBlur } = useNavbarContext();
  useEffect(() => {
    setBgBlur(true);

    return () => setBgBlur(false);
  }, [setBgBlur]);
  return (
    <AnimatedPageWrapper>
      <main>
        <MentorHero />
        <WhatToExpect />
        {/* <LogoScroll /> */}
        <VerticalTimelineComponent />
        <SchoolConnectCTA />
        <Testimonials />
        <FaqSection />
      </main>
    </AnimatedPageWrapper>
  );
};
