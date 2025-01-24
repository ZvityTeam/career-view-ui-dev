import { MentorsList } from '../../components/mentors-list';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { ContactForm } from '../../components/contact-form';
import MentorSearch from '../../components/mentor-search';

export const BrowseMentors = () => {
  return (
    <main>
      <div className={'min-h-screen bg-slate-950'} />
      <MentorSearch />
      <MentorsList />
      <Testimonials />
      <ContactForm />
      <FaqSection />
    </main>
  );
};
