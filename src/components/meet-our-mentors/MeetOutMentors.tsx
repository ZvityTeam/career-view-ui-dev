import { Award, ShoppingBag, Users } from 'lucide-react';
import peterVideo from '../../assets/video/10.mp4';
import anderwVideo from '../../assets/video/6.mp4';
import anesuVideo from '../../assets/video/anesu.mp4';
import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Stat } from '../stat/Stat.tsx';
import { MentorCard } from './mentorcard/MentorCard.tsx';

interface Mentor {
  name: string;
  role: string;
  bio: string;
  profileVideo: string;
}

export const MeetOutMentors = () => {
  const mentorList: Mentor[] = [
    {
      name: 'Andrew Korol',
      role: 'Training Captain (Conquest Fleet)',
      bio: "Andrew flies for Skippers Aviation from Broome, handling charters, inmate transfers, and public routes. He loves night flights and his plane's AC. Previously, he was a Mechanical Engineer.",
      profileVideo: anderwVideo,
    },
    {
      name: 'Anesu Dumba',
      role: 'Competitive Bodybuilder',
      bio: "Anesu, men's physique competitor for 5 yrs, trains 6-7 days/wk, tracks nutrition, and emphasizes discipline, consistency, patience, mental toughness, and passion for bodybuilding.",
      profileVideo: anesuVideo,
    },
    {
      name: 'Peter Wu',
      role: 'Marketing Specialist',
      bio: 'Peter works in the Marketing team at Collaborative Solutions. He has experience in managing and executing a range of marketing programs across on-demand generation and contact acquisition.',
      profileVideo: peterVideo,
    },
  ];

  return (
    <Section className='mx-auto -mt-10 flex max-w-7xl flex-col gap-8 px-4 sm:mt-24 sm:gap-12 sm:px-6 lg:mx-0 lg:mt-32 lg:max-w-none lg:gap-16 lg:px-8'>
      <SectionHeader
        title='Meet our Mentors'
        subtitle='Our mentors are passionate professionals from diverse industries, ready to share their expertise and help students shape their future'
      />
      <div className='flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:gap-28'>
        <Stat
          num={100}
          suffix='+'
          subheading='Young Professionals'
          icon={Award}
        />
        <Stat
          num={32}
          suffix='+'
          subheading='Career Options'
          icon={ShoppingBag}
        />
        <Stat
          num={10}
          suffix='+'
          subheading='Cultural Backgrounds'
          icon={Users}
        />
      </div>
      <div className='scrollbar-hide flex w-full snap-x snap-mandatory flex-row gap-4 overflow-x-auto bg-[#272727] p-6 sm:gap-6 sm:p-8 lg:flex lg:gap-10 lg:overflow-x-visible lg:p-12'>
        {mentorList.map((mentor, index) => (
          <div
            key={index}
            className='w-[85vw] flex-shrink-0 snap-center sm:w-[70vw] lg:w-auto lg:flex-1'
          >
            <MentorCard {...mentor} />
          </div>
        ))}
      </div>
    </Section>
  );
};
