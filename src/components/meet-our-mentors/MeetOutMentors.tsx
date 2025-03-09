import { Award, ShoppingBag, Users } from 'lucide-react';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Stat } from '../stat/Stat.tsx';
import { Section } from '../container/Section.tsx';
import { MentorCard } from './mentorcard/MentorCard.tsx';
import { useMentorStore } from '../../store/useMentorStore.ts';

export const MeetOutMentors = () => {
  const { getRandomMentors } = useMentorStore();
  const randomThree = getRandomMentors(3);

  return (
    <Section className={'flex flex-col gap-16'}>
      <SectionHeader
        title={'Meet our Mentors'}
        subtitle={
          'Our mentors are passionate professionals from diverse industries, ready to share their expertise and help students shape their future'
        }
      />
      <div className='flex items-center justify-between gap-28'>
        <Stat
          num={100}
          suffix={'+'}
          subheading={'Young Professionals'}
          icon={Award}
        />
        <Stat
          num={32}
          suffix={'+'}
          subheading={'Career Options'}
          icon={ShoppingBag}
        />
        <Stat
          num={10}
          suffix={'+'}
          subheading={'Cultural Backgrounds'}
          icon={Users}
        />
      </div>
      <div className='flex w-full gap-10 bg-[#272727] p-12'>
        {randomThree.map((mentor, index) => (
          <MentorCard
            {...mentor}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};
