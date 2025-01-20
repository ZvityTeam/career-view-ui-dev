import { QuestionsWeGet } from '../../components/questions-we-get/QuestionsWeGet.tsx';
import { StudentHero } from '../../components/student-hero/StudentHero.tsx';
import { WhatWeDo } from '../../components/whatwedo/WhatWeDo.tsx';
import { WhyChooseUs } from '../../components/whychooseus/WhyChooseUs.tsx';
import { StudentMentorConnect } from '../../components/studentmentorconnect/StudentMentorConnect.tsx';
import { OurEvents } from '../../components/our-events/OurEvents.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';

export const Student = () => {
  return (
    <main className={''}>
      <StudentHero />
      <WhatWeDo />
      <WhyChooseUs />
      <StudentMentorConnect />
      <QuestionsWeGet />
      <OurEvents />
      <Testimonials />
      <FaqSection />
    </main>
  );
};
