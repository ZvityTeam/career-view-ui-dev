import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import AskAQuestionForm from '../../components/AskAQuestionForm.tsx';
import { MeetOutMentors } from '../../components/meet-our-mentors/MeetOutMentors.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { QuestionsWeGet } from '../../components/questions-we-get/QuestionsWeGet.tsx';
import StudentHero1 from '../../components/student-hero/StudentHero1.tsx';
import { WhatWeDo } from '../../components/what-we-do/WhatWeDo.tsx';
import WhatWeOffer2 from '../../components/what-we-offer-2/WhatWeOffer2.tsx';

export const Student = () => {
  const location = useLocation();
  const askQuestionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('scrollTo') === 'ask-a-question' && askQuestionRef.current) {
      const scrollToForm = () => {
        askQuestionRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      // Initial scroll attempt
      scrollToForm();

      // Set up observer to handle dynamic height changes
      const observer = new ResizeObserver(() => {
        scrollToForm();
      });

      // Observe the document body for height changes
      observer.observe(document.body);

      // Retry scroll after a short delay to account for loading
      const timeout = setTimeout(scrollToForm, 1000);

      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }
  }, [location.search]);


  return (
    <AnimatedPageWrapper>
      <main>
        <StudentHero1 />
        <WhatWeDo />
        <WhatWeOffer2 />
        <MeetOutMentors />
        <QuestionsWeGet />
        <div ref={askQuestionRef}>
          <AskAQuestionForm />
        </div>
      </main>
    </AnimatedPageWrapper>
  );
};
