import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { QuestionsWeGet } from '../../components/questions-we-get/QuestionsWeGet.tsx';
import { StudentHero } from '../../components/student-hero/StudentHero.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { WhatWeDo } from '../../components/what-we-do/WhatWeDo.tsx';
import WhatWeOffer2 from '../../components/what-we-offer-2/WhatWeOffer2.tsx';

export const Student = () => {
  return (
    <AnimatedPageWrapper>
      <main className={''}>
        <StudentHero />
        <WhatWeDo />
        <WhatWeOffer2 />
        {/* <StudentMentorConnect /> */}
        <QuestionsWeGet />
        <Testimonials />
        <FaqSection />
      </main>
    </AnimatedPageWrapper>
  );
};
