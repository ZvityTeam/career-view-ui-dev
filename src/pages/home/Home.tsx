import { Hero } from '../../components/hero/Hero.tsx';
import { WhatWeDo } from '../../components/what-we-do/WhatWeDo.tsx';
import { WhatWeOffer } from '../../components/what-we-offer/WhatWeOffer.tsx';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { MeetOutMentors } from '../../components/meet-our-mentors/MeetOutMentors.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { WhyChooseUs } from '../../components/why-choose-us/WhyChooseUs.tsx';
import { StudentMentorConnect } from '../../components/student-mentor-connect/StudentMentorConnect.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import { OurEvents } from '../../components/our-events/OurEvents.tsx';

export const Home = () => {
  return (
    <main className='mb-24'>
      <Hero />
      <WhatWeDo />
      <WhatWeOffer />
      <WhyChooseUs />
      <StudentMentorConnect />
      <OurEvents />
      <SchoolConnectCTA />
      <MeetOutMentors />
      <Testimonials />
      <FaqSection />
    </main>
  );
};
