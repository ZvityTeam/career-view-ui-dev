import { SchoolHero } from '../../components/school-hero';
import { WhatToExpect } from '../../components/what-to-expect';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';

export const School = () => {
  return (
    <main>
      <SchoolHero />
      <WhatToExpect />
      <SchoolConnectCTA />
      <Testimonials />
      <FaqSection />
    </main>
  );
};
