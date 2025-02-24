import { Section } from '../container/Section.tsx';
import { SectionHeader } from '../section-header/SectionHeader.tsx';
import { OurEventCard, OurEventCardProps } from './OurEventCard.tsx';
import img from '../../assets/event1.jpg';
import { Button } from '../ui/Button.tsx';

const OUR_EVENTS: OurEventCardProps[] = [
  {
    imgSrc: img, // Placeholder for "Midwife Session" image
    title: 'Midwife Session',
  },
  {
    imgSrc: 'https://placehold.co/300x450', // Placeholder for "Networking Event" image
    title: 'Networking Event',
  },
  {
    imgSrc: 'https://placehold.co/300x450', // Placeholder for "Youtube Podcast" image
    title: 'Youtube Podcast',
  },
  {
    imgSrc: 'https://placehold.co/300x450', // Placeholder for "Team Get Together" image
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
        <Button>CTA</Button>
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
