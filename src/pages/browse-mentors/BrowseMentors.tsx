import { MentorsList } from '../../components/mentors-list';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import MentorSearch from '../../components/mentor-search';
import { BrowseMentorsHero } from '../../components/browse-mentors-hero.tsx';
import { useMentorStore } from '../../store/useMentorStore.ts';
import { useEffect } from 'react';
import { data as mentorsData } from '../../content/mentors';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';

export const BrowseMentors = () => {
  const setMentors = useMentorStore((state) => state.setMentors);

  useEffect(() => {
    setMentors(mentorsData);
  }, [setMentors]);

  return (
    <AnimatedPageWrapper>
      <main>
        <BrowseMentorsHero />
        <MentorSearch />
        <MentorsList />
        <Testimonials />
        <FaqSection />
      </main>
    </AnimatedPageWrapper>
  );
};
