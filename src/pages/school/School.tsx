import { SchoolHero } from '../../components/school-hero';
import { WhatToExpect } from '../../components/what-to-expect';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';

export const School = () => {
  return (
    <AnimatedPageWrapper>
      <main>
        <SchoolHero />
        <WhatToExpect />
        <SchoolConnectCTA />
        <Testimonials />
        <FaqSection />
      </main>
    </AnimatedPageWrapper>
  );
};
