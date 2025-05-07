import { BrowseMentorsHero } from '../../components/browse-mentors-hero.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import MentorSearch from '../../components/mentor-search';
import { MentorsList } from '../../components/mentors-list';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';

export const BrowseMentors = () => {
  return (
    <AnimatedPageWrapper>
      <main>
        <BrowseMentorsHero />
        <MentorSearch />
        <MentorsList />
        {/* <Testimonials /> */}
        <FaqSection page='browseMentors' />
      </main>
    </AnimatedPageWrapper>
  );
};
