import { Hero } from '../../components/hero/Hero.tsx';
import { WhatWeDo } from '../../components/whatwedo/WhatWeDo.tsx';
import { WhatWeOffer } from '../../components/whatweoffer/WhatWeOffer.tsx';
import { SchoolConnectCTA } from '../../components/schoolconnectcta/SchoolConnectCTA.tsx';
import { MeetOutMentors } from '../../components/meetoutmentors/MeetOutMentors.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { WhyChooseUs } from '../../components/whychooseus/WhyChooseUs.tsx';

export const Home = () => {
  return (
    <main className='mb-24'>
      <Hero />
      <WhatWeDo />
      <WhatWeOffer />
      <WhyChooseUs />
      <SchoolConnectCTA />
      <MeetOutMentors />
      <Testimonials />
    </main>
  );
};
