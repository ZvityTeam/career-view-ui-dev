import { Award, ShoppingBag, Users } from 'lucide-react';
import { Mentor } from '../../types/types';
import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Stat } from '../stat/Stat.tsx';
import { MentorCard } from './mentorcard/MentorCard.tsx';

export const MeetOutMentors = () => {
  const mentorList: Mentor[] = [
    {
      name: 'Andrew Korol',
      role: 'Training Captain (Conquest Fleet)',
      bio: "Andrew flies for Skippers Aviation from Broome, handling charters, inmate transfers, and public routes. He loves night flights and his plane's AC. Previously, he was a Mechanical Engineer.",
      profileImage: '/src/assets/mentor_images/mishna_nagda.png',
    },
    {
      name: 'Anesu Dumba',
      role: 'Competitive Bodybuilder',
      bio: "Anesu, men's physique competitor for 5 yrs, trains 6-7 days/wk, tracks nutrition, and emphasizes discipline, consistency, patience, mental toughness, and passion for bodybuilding.",
      profileImage: '/src/assets/mentor_images/mishna_nagda.png',
    },
    {
      name: 'Peter Wu',
      role: 'Marketing Specialist',
      bio: 'Peter works in the  Marketing team at Collaborative Solutions. He he has experience in managing and executing a range of  marketing programs across on demand generation and contact acquisition.',
      profileImage: '/src/assets/mentor_images/mishna_nagda.png',
    },
  ];

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
        {mentorList.map((mentor, index) => (
          <MentorCard
            {...mentor}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};
