import { MeetOutMentors } from '../../components/meet-our-mentors/MeetOutMentors.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { QuestionsWeGet } from '../../components/questions-we-get/QuestionsWeGet.tsx';
import StudentHero1 from '../../components/student-hero/StudentHero1.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { WhatWeDo } from '../../components/what-we-do/WhatWeDo.tsx';
import WhatWeOffer2 from '../../components/what-we-offer-2/WhatWeOffer2.tsx';

export const Student = () => {
  return (
    <AnimatedPageWrapper>
      <main className={''}>
        <StudentHero1 />
        <WhatWeDo />
        <WhatWeOffer2 />
        <MeetOutMentors />
        {/* <StudentMentorConnect /> */}
        <QuestionsWeGet />
        <Testimonials />
        {/* <FaqSection /> */}
      </main>
    </AnimatedPageWrapper>
  );
};
