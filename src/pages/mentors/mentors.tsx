import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BecomeMentor from '../../components/BecomeMentor.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { MentorHero } from '../../components/mentor-hero.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { VerticalTimelineComponent } from '../../components/vertical-timeline.tsx';
import { useNavbarContext } from '../../context/navbar-context/NavbarContext.tsx';

export const Mentors = () => {
  const { setBgBlur } = useNavbarContext();
  const location = useLocation();
  const becomeMentorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setBgBlur(true);
    return () => setBgBlur(false);
  }, [setBgBlur]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scrollTo') === 'become-mentor' && becomeMentorRef.current) {
      const scrollToMentor = () => {
        becomeMentorRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      // Initial scroll attempt
      scrollToMentor();

      // Set up observer to handle dynamic height changes
      const observer = new ResizeObserver(() => {
        scrollToMentor();
      });

      // Observe the document body for height changes
      observer.observe(document.body);

      // Retry scroll after a short delay to account for loading
      const timeout = setTimeout(scrollToMentor, 1000);

      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }
  }, [location.search]);

  return (
    <AnimatedPageWrapper>
      <main>
        <MentorHero />
        <div ref={becomeMentorRef}>
          <BecomeMentor />
        </div>
        <VerticalTimelineComponent />
        <FaqSection page='mentor' />
      </main>
    </AnimatedPageWrapper>
  );
};
