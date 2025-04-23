import { useEffect } from 'react';
import { BecomeMentor } from '../../components/BecomeMentor.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { MentorHero } from '../../components/mentor-hero.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { VerticalTimelineComponent } from '../../components/vertical-timeline.tsx';
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
        <BecomeMentor />
        {/* <LogoScroll /> */}
        <VerticalTimelineComponent />
        {/* <SchoolConnectCTA /> */}
        <Testimonials />

        <FaqSection page='mentor' />
      </main>
    </AnimatedPageWrapper>
  );
};
