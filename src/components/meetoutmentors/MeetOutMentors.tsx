import { Award, ShoppingBag, Users } from 'lucide-react';
import { SectionHeader } from '../sectionheader/SectionHeader.tsx';
import { Stat } from '../stat/Stat.tsx';
import { Section } from '../container/Section.tsx';

export const MeetOutMentors = () => {
  return (
    <Section className={'flex flex-col gap-6'}>
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
    </Section>
  );
};
