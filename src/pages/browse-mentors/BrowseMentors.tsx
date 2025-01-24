import { MentorsList } from '../../components/mentors-list';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { ContactForm } from '../../components/contact-form';

export const BrowseMentors = () => {
  return (
    <main>
      <div className={'min-h-screen bg-slate-950'} />
      <MentorsList />
      <Testimonials />
      <ContactForm />
      <FaqSection />
    </main>
  );
};
