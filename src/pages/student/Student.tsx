import { QuestionsWeGet } from '../../components/questions-we-get/QuestionsWeGet.tsx';
import { StudentHero } from '../../components/student-hero/StudentHero.tsx';
import { WhatWeDo } from '../../components/what-we-do/WhatWeDo.tsx';
import { WhyChooseUs } from '../../components/why-choose-us/WhyChooseUs.tsx';
import { StudentMentorConnect } from '../../components/student-mentor-connect/StudentMentorConnect.tsx';
import { OurEvents } from '../../components/our-events/OurEvents.tsx';
import { Testimonials } from '../../components/testimonials/Testimonials.tsx';
import { FaqSection } from '../../components/faqsection/FaqSection.tsx';
import WhatWeOffer2 from '../../components/what-we-offer-2/WhatWeOffer2.tsx';
import { VideoPlayer } from '../../components/ui/video-player.tsx';

export const Student = () => {
  return (
    <main className={''}>
      <StudentHero />
      <WhatWeDo />
      <WhatWeOffer2 />
      <VideoPlayer
        height={300}
        autoPlay={true}
        muted={true}
        aspectRatio={'9/16'}
        src={
          'https://videos.pexels.com/video-files/30401545/13028933_1920_1080_60fps.mp4'
        }
      />
      <WhyChooseUs />
      <StudentMentorConnect />
      <QuestionsWeGet />
      <OurEvents />
      <Testimonials />
      <FaqSection />
    </main>
  );
};
