import { Section } from '../container/Section.tsx';
import { Marquee } from '../marquee/Marquee.tsx';
import ProfileCard from '../profile-card/ProfileCard.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';

export const Testimonials = () => {
  // return null;

  return (
    <Section className={'mx-auto max-w-full gap-6'}>
      <SectionHeader
        title={'Student & Mentor Stories'}
        subtitle={
          'Real voices, real results. Learn how CareerView has made a difference for students, mentors, and schools through their shared experiences.'
        }
      />
      <div className='flex flex-col gap-2'>
        <Marquee
          pauseOnHover
          className={'[--duration:20s]'}
        >
          <ProfileCard
            defaultImage='https://placehold.co/400'
            hoverImage='https://placehold.co/600x400'
            name='Elena Williams'
            subtitle='Psychology Student, High School'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            mentorTitle='LiveStream with Elena Williams'
            mentorSubtitle='3 months ago'
            mentorHighlight='300+ Students Mentored'
          />
        </Marquee>
        {/* <Marquee
          className={'[--duration:10s]'}
          reverse
          pauseOnHover
        >
          <ProfileCard
            defaultImage='https://placehold.co/400'
            hoverImage='https://placehold.co/600x400'
            name='Elena Williams'
            subtitle='Psychology Student, High School'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            mentorTitle='Elena Williams (Mentor)'
            mentorSubtitle='Psychologist, 15 yrs experience'
            mentorHighlight='300+ Students Mentored'
          />
        </Marquee> */}
      </div>
    </Section>
  );
};
