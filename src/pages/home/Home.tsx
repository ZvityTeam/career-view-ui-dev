import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import LogoScroll from '../../components/logo-scroll.tsx';
import { MeetOutMentors } from '../../components/meet-our-mentors/MeetOutMentors.tsx';
import MeetingsHero from '../../components/MeetingsHero/MeetingsHero.tsx';
import { AnimatedPageWrapper } from '../../components/PageWrapper.tsx';
import { SchoolConnectCTA } from '../../components/school-connect-cta/SchoolConnectCTA.tsx';
import { StudentMentorConnect } from '../../components/student-mentor-connect/StudentMentorConnect.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { WhatWeDo } from '../../components/what-we-do/WhatWeDo.tsx';
import { WhyChooseUs } from '../../components/why-choose-us/WhyChooseUs.tsx';

export const Home = () => {
  return (
    <AnimatedPageWrapper>
      <main className='mb-24'>
        {/* <Hero /> */}
        <MeetingsHero />
        <WhatWeDo />
        {/* <WhatWeOffer /> */}
        <WhyChooseUs />
        <StudentMentorConnect />
        {/* <OurEvents /> */}
        <SchoolConnectCTA />
        <LogoScroll />
        <MeetOutMentors />
        <Testimonials />
        <FaqSection page='home' />
      </main>
    </AnimatedPageWrapper>
  );
};
