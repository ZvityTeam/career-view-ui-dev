import { MentorsList } from '../../components/mentors-list';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { ContactForm } from '../../components/contact-form';
import MentorSearch from '../../components/mentor-search';
import { BrowseMentorsHero } from '../../components/browse-mentors-hero.tsx';

export const BrowseMentors = () => {
  return (
    <main>
      <BrowseMentorsHero />
      <MentorSearch />
      <MentorsList />
      <Testimonials />
      <ContactForm />
      <FaqSection />
    </main>
  );
};
