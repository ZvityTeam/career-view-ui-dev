import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { OurEventCard, OurEventCardProps } from './OurEventCard.tsx';
import img from '../../assets/event1.jpg';
import img4 from '../../assets/event4.png';
import img3 from '../../assets/event3.jpg';
import img2 from '../../assets/event2.jpg';
import { Button } from '../ui/Button.tsx';
import { Link } from 'react-router-dom';

const OUR_EVENTS: OurEventCardProps[] = [
  {
    imgSrc: img, // Placeholder for "Midwife Session" image
    title: 'Midwife Session',
  },
  {
    imgSrc: img2, // Placeholder for "Networking Event" image
    title: 'Networking Event',
  },
  {
    imgSrc: img3, // Placeholder for "Youtube Podcast" image
    title: 'Youtube Podcast',
  },
  {
    imgSrc: img4, // Placeholder for "Team Get Together" image
    title: 'Team Get Together',
  },
];

export const OurEvents = () => {
  return (
    <Section className={'flex flex-col gap-20 p-24'}>
      <div className={'flex flex-col items-center justify-center gap-6'}>
        <SectionHeader
          title={'Stay in the Loop'}
          subtitle={
            'Stay informed about exciting events, career tips, and the latest updates to fuel your success.'
          }
        />
        <Link to={'/resources'}>
          <Button>Resources</Button>
        </Link>
      </div>

      <div className={'flex gap-12'}>
        {OUR_EVENTS.map((value, index) => (
          <OurEventCard
            key={index}
            {...value}
          />
        ))}
      </div>
    </Section>
  );
};
