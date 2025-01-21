import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Marquee } from '../marquee/Marquee.tsx';
import ProfileCard from '../profile-card/ProfileCard.tsx';

export const Testimonials = () => {
  return (
    <Section className={'mx-auto max-w-full gap-6'}>
      <SectionHeader
        title={'Testimonials'}
        subtitle={
          'Are you representing a school, looking to connect? Request a Demo or Call Back to…'
        }
      />
      <div className='flex flex-col gap-2'>
        <Marquee className={'[--duration:20s]'}>
          <ProfileCard
            defaultImage='https://placehold.co/400'
            hoverImage='https://placehold.co/600x400'
            name='Elena Williams'
            subtitle='Psychology Student, High School'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
            mentorTitle='Elena Williams (Mentor)'
            mentorSubtitle='Psychologist, 15 yrs experience'
            mentorHighlight='300+ Students Mentored'
            hoverHighlight='20+ Questions Asked'
          />
        </Marquee>
        <Marquee
          className={'[--duration:10s]'}
          reverse
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
            hoverHighlight='20+ Questions Asked'
          />
        </Marquee>
      </div>
    </Section>
  );
};
