import { Award, ShoppingBag, Users } from 'lucide-react';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { Stat } from '../stat/Stat.tsx';
import { Section } from '../container/Section.tsx';
import { MentorCard, MentorCardProps } from './mentorcard/MentorCard.tsx';

const MENTORS: MentorCardProps[] = [
  {
    name: 'Mark Johnson',
    designation: 'Psychologist, 15 yrs EXP',
    bio: 'Helps in career decisions | Highly qualified | Studied at Loren Epsom',
    showActionButton: true,
    imageUrl: 'https://placehold.co/350?text=1',
  },
  {
    name: 'Sarah Williams',
    designation: 'Career Coach, 10 yrs EXP',
    bio: 'Specializes in interview preparation and career planning',
    showActionButton: true,
    imageUrl: 'https://placehold.co/350?text=2',
  },
  {
    name: 'Daniel Thompson',
    designation: 'Software Engineer, 8 yrs EXP',
    bio: 'Full-stack developer with expertise in modern web frameworks',
    showActionButton: true,
    imageUrl: 'https://placehold.co/350?text=3',
  },
];

export const MeetOutMentors = () => {
  return (
    <Section className={'flex flex-col gap-12'}>
      <SectionHeader
        title={'Meet out Mentors'}
        subtitle={
          'Get a look at our mentors. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor'
        }
      />
      <div className='flex items-center justify-between gap-12'>
        <Stat
          num={100}
          suffix={'+'}
          subheading={'Young Professionals'}
          icon={<Award className='scale-125 text-secondary' />}
        />
        <Stat
          num={32}
          suffix={'+'}
          subheading={'Career Options'}
          icon={<ShoppingBag className='scale-125 text-secondary' />}
        />
        <Stat
          num={10}
          suffix={'+'}
          subheading={'Cultural Backgrounds'}
          icon={<Users className='scale-125 text-secondary' />}
        />
      </div>
      <div className='flex h-[80vh] w-full gap-6 bg-slate-800 p-12'>
        {MENTORS.map((value, index) => (
          <MentorCard
            {...value}
            key={index}
          />
        ))}
      </div>
    </Section>
  );
};
