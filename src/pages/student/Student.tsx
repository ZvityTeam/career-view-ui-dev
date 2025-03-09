import { QuestionsWeGet } from '../../components/questions-we-get/QuestionsWeGet.tsx';
import { StudentHero } from '../../components/student-hero/StudentHero.tsx';
import { WhatWeDo } from '../../components/what-we-do/WhatWeDo.tsx';
import { StudentMentorConnect } from '../../components/student-mentor-connect/StudentMentorConnect.tsx';
import { OurEvents } from '../../components/our-events/OurEvents.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import WhatWeOffer2 from '../../components/what-we-offer-2/WhatWeOffer2.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';

export const Student = () => {
  return (
    <AnimatedPageWrapper>
      <main className={''}>
        <StudentHero />
        <WhatWeDo />
        <WhatWeOffer2 />
        <StudentMentorConnect />
        <QuestionsWeGet />
        <OurEvents />
        <Testimonials />
        <FaqSection />
      </main>
    </AnimatedPageWrapper>
  );
};
